import {handleActions} from 'redux-actions'
import * as types from '../types/'

const initialState = {
  loading: false,
  alias : "",
  enterAlias : "",
  allowGuest : false ,
  companyId : 0 ,
  conferenceName : "",
  isDot : false,
  isLive : false ,
  isRecord : false ,
  mcuHost : "",
  participantName : "",
  password : "",
  roleType : "",
  sipkey : "",
  navTo: "",
  allow1080p : false,
  analyticsEnabled : false,
  bandwidthIn : 1280,
  bandwidthOut : 1280,
  callType : "",
  chatEnabled : false,
  currentServiceType : "",
  displayName : "",
  expires : "",
  feccEnabled : false,
  guestsCanPresent : false,
  participantUuid : "",
  role : "",
  rtmpEnabled : false,
  rtspEnabled : false,
  refreshTokenTimer: false,
  serviceType : "",
  token: "",
  callType: "",
  callUuid: "",
  playUrl: "",
  pushUrl: "",
  url: "",
  errorMessage: "",
  appIsForeground: true,
  eventId: "",
  presenting: false,
  presentaterUuid: "",
  presentaterName: "",
  presentaterUri: "",
  presentationFrames: []
}

export default handleActions({
  [types.ASYNC_USER_AUTH_START] (state, action){
    return {...state, loading: true, ...action.payload}
  },
  [types.ASYNC_USER_AUTH] (state, action){
    return {...state, ...action.payload, loading:false }
  },
  [types.ASYNC_USER_FAILED] (state, action){
    return {...state, ...action.payload, loading:false }
  },
  [types.NAV_FINISH] (state, action){
    return {...state, navTo:""}
  },
  [types.TOAST_FINISH] (state, action){
    return {...state, errorMessage:""}
  },
  [types.MAKE_CALL_START] (state, action){
    return {...state, loading: true}
  },
  [types.MAKE_CALL] (state, action){
    return {...state, ...action.payload, loading: false}
  },
  [types.MAKE_CALL_FAILED] (state, action){
    return {...state, loading: false}
  },
  [types.SAVE_SESSION] (state, action){
    return {...state, ...action.payload}
  },
  [types.REFRESH_TOKEN_START] (state, action){
    return {...state, refreshTokenTimer: false}
  },
  [types.REFRESH_TOKEN] (state, action){
    return {...state, ...action.payload, refreshTokenTimer: true}
  },
  [types.REFRESH_TOKEN_FAILED] (state, action){
    return {...state, ...action.payload, refreshTokenTimer: true}
  },
  [types.DISCONNECT] (state, action){
    return {...state, token: "", pushUrl: "", playUrl: ""}
  },
  [types.APP_PAGE_ONSHOW] (state, action){
    return {...state, appIsForeground: true}
  },
  [types.APP_PAGE_ONHIDE] (state, action){
    return {...state, appIsForeground: false}
  },
  [types.PRESENTATION_START] (state, action){
    return {...state, ...action.payload}
  },
  [types.PRESENTATION_FRAME] (state, action){
    var presentationFrames = [{ 
      id: action.payload.eventId, 
      url: action.payload.presentationFrameUrl
    }, ...state.presentationFrames].slice(0,3)
    return {...state, presentationFrames:presentationFrames}
  },
  [types.PRESENTATION_STOP] (state, action){
    return {...state, ...action.payload}
  }

}, initialState)