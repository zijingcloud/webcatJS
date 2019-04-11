import * as types from '../types/'
import { createAction } from 'redux-actions'
import wepy from 'wepy'
import {getStore} from 'wepy-redux'
import config from '../../config.js'

const store = getStore();

let refreshTimer = null

const asyncAuthStart = (payload)=>{ store.dispatch({type: types.ASYNC_USER_AUTH_START, payload: payload}) }
const asyncAuthFailed = store.dispatch.bind(store, {type: types.ASYNC_USER_AUTH_FAILED});

const makeCallStart = store.dispatch.bind(store, {type: types.MAKE_CALL_START});
const saveSession = (payload)=>{ store.dispatch({type: types.SAVE_SESSION, payload: payload}) }
const makeCallFailed = store.dispatch.bind(store, {type: types.MAKE_CALL_FAILED});

const presentationStart = (payload) => { store.dispatch( {type: types.PRESENTATION_START, payload: payload}) }
const presentationFrame = (payload) => { store.dispatch( {type: types.PRESENTATION_FRAME, payload: payload}) }
const presentationStop = (payload) => { store.dispatch( {type: types.PRESENTATION_STOP, payload: payload}) }

const connectWebsocket = () => {
  const state = store.getState()
  const mcuHost = state.conference.mcuHost
  const alias = state.conference.alias
  const token = state.conference.token
  wx.connectSocket({
    url: `wss://${mcuHost}/wapi/services/${alias}/wsevents?token=${token}`,
    header:{
      'content-type': 'application/json',
      'token': token
    }
  })
  wx.onSocketOpen((res)=>{console.log(`[ws:onSocketOpen]: ${res}`) })
  wx.onSocketMessage(res => {
    const data = JSON.parse(res.data)
    if(data._command === 'bye') return wx.closeSocket()
    else if(data._command === 'event') {
      console.log('[ws:message]', data)
      const state = store.getState()
      const token = state.conference.token
      switch(data._eventName){
        case 'presentation_start':
          presentationStart({
            presentaterUuid: data.data.presenter_uuid,
            presentaterUri: data.data.presenter_uri,
            presentaterName: data.data.presenter_name,
            presenting: true
          })
          break
        case 'presentation_frame':
          const presentationFrameUrl = `https://${mcuHost}/api/services/${alias}/presentation.jpeg?id=${data._eventId}&token=${token}`
          presentationFrame({ 
            eventId:data._eventId,
            presentationFrameUrl: presentationFrameUrl
          })
          break
        case 'presentation_stop':
          presentationStop({presenting: false})
          break
        default:
          break
      }
    }

  })
  wx.onSocketClose(function(res) {
    console.log(`[WebSocket Close]: ${res}`)
  })
  wx.onSocketError(err => {
    if(err.errMsg) {
      setTimeout(connectWebsocket, 10000)
      console.log(`[WebSocket Error]: ${err.errMsg}`)
    }
  })
}

const refreshTokenStart = store.dispatch.bind(store, {type: types.REFRESH_TOKEN_START});
const refreshTokenFailed = store.dispatch.bind(store, {type: types.REFRESH_TOKEN_FAILED});

export const showMessage = createAction( types.TOAST_FINISH , payload => {
   wx.showToast({
    title: payload, 
    mask: true,
    // duration: 3000,
    icon: 'none'
  })
})

export const navTo = createAction( types.NAV_FINISH , payload => {
  wx.navigateTo({url:payload});
})

export const asyncAuth = createAction( types.ASYNC_USER_AUTH, payload => {
  const formdata = {
    joinAccount: payload.alias,
    participantName: payload.displayName,
    joinPwd: payload.password
  }
  asyncAuthStart({enterAlias: payload.alias});
  return wepy.request({
    url: `https://${config.apiServer}/api/v3/meet/checkJoin.shtml`,
    method:'POST',
    data: formdata,
  }).then(res=>{
    if(res.statusCode === 200 && res.data.code === "200"){
      var data = {
        ...res.data.results,
        allowGuest : res.data.results.allowGuest === 'yes'?true:false,
      }
      return {...data, navTo:"conferencing", displayName: payload.displayName}
    }
    else{
      asyncAuthFailed()
      return {
        errorMessage: res.data.results ? res.data.results : '接口异常' 
      }
    }
  }).catch(err=>{
      asyncAuthFailed()
      return {
        errorMessage: '网络异常'
      }
  })
})


export const makeCall = createAction(types.MAKE_CALL, payload=>{
    const displayName = payload.displayName;
    const mcuHost = payload.mcuHost
    const alias = payload.alias
    const pin = payload.pin

    makeCallStart();
    return wepy.request({
      url:`https://${mcuHost}/api/services/${alias}/new_session`,
      method: "POST",
      header:{
        pin: pin 
      },
      data:{
        display_name: displayName,
        checkdup:'123456789012435678901234567890123456s'
      }
    }).then(res=>{
      if(res.statusCode === 200){
        const result = res.data.result
        const saveData = {
          allow1080p : result.allow_1080p,
          analyticsEnabled : result.analytics_enabled,
          bandwidthIn : result.bandwidth_in,
          bandwidthOut : result.bandwidth_out,
          callType : result.call_type,
          chatEnabled : result.chat_enabled,
          currentServiceType : result.current_service_type,
          displayName : result.display_name,
          expires : result.expires,
          feccEnabled : result.fecc_enabled,
          guestsCanPresent : result.guests_can_present,
          participantUuid : result.participant_uuid,
          role : result.role,
          rtmpEnabled : result.rtmp_enabled,
          rtspEnabled : result.rtsp_enabled,
          serviceType : result.service_type,
          token: result.token
        }
        saveSession(saveData)
        if(refreshTimer) clearInterval()
        refreshTimer = setInterval(()=>{
          const state = store.getState()
          const mcuHost = state.conference.mcuHost
          const alias = state.conference.alias
          const token = state.conference.token
          store.dispatch(refreshToken({mcuHost: mcuHost, alias: alias, token:token}))
        }, 30 * 1000)

        connectWebsocket();

        return wepy.request({
          url:`https://${mcuHost}/api/services/${alias}/participants/${res.data.result.participant_uuid}/calls`,
          method: 'POST',
          header:{
            token: res.data.result.token
          },
          data:{
            call_type: 'RTMP',
            bandwidth: 800
          }
        });
      }
      else {
        throw new Error(res.data.result ? res.data.result : '接口异常')
      }
    }).then(res=>{
      if(res.statusCode === 200){
        const result = res.data.result
        return {
          callType: result.call_type,
          callUuid: result.call_uuid,
          playUrl: result.play_url,
          pushUrl: result.push_url,
          url: result.url,
          refreshTokenTimer: true
        }
      }
      else {
        throw new Error(res.data.result ? res.data.result : '接口异常')
      }
    }).catch(err=>{
      setTimeout(makeCallFailed, 0)
      return {errorMessage: err.message}
    })

})

const refreshToken = createAction( types.REFRESH_TOKEN, payload => {
  const mcuHost = payload.mcuHost
  const alias = payload.alias
  const token = payload.token

  refreshTokenStart()
  return wepy.request({
    url:`https://${mcuHost}/api/services/${alias}/refresh_session`,
    method: "POST",
    header:{
      token: token
    }
  }).then(res=>{
    if(res.statusCode === 200){
      const data = {token: res.data.result.token, 
                    role: res.data.result.role, 
                    expires: res.data.result.expires}
      return data
    }
    else{
      throw new Error(res.data.result ? res.data.result : '接口异常')
    }
  }).catch(err=>{
      setTimeout(refreshTokenFailed, 0)
      return {errorMessage: err.message}
  })
})

export const disconnect = createAction( types.DISCONNECT, payload => {
  const callUuid = payload.callUuid
  const participantUuid = payload.participantUuid
  const alias = payload.alias
  const mcuHost = payload.mcuHost
  const token = payload.token

  clearInterval(refreshTimer)
  return wepy.request({
    url:`https://${mcuHost}/api/services/${alias}/participants/${participantUuid}/calls/${callUuid}/disconnect`,
    method: "POST",
    header:{
      token: token
    }
  }).then(res=>{
    if(res.statusCode === 200){
      return wepy.request({
        url:`https://${mcuHost}/api/services/${alias}/end_session`,
        method: "POST",
        header:{
          token: token
        }
      })
    }
    else {
      throw new Error(res.data.result ? res.data.result : '接口异常')
    }
  }).catch(err=>{
    return {errorMessage: err.message}
  }); 
})


export const hideWxapp = createAction( types.APP_PAGE_ONHIDE)
export const showWxapp = createAction( types.APP_PAGE_ONSHOW)