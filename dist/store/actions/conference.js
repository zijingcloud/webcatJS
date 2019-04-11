'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showWxapp = exports.hideWxapp = exports.disconnect = exports.makeCall = exports.asyncAuth = exports.navTo = exports.showMessage = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _types = require('./../types/index.js');

var types = _interopRequireWildcard(_types);

var _reduxActions = require('./../../npm/redux-actions/lib/index.js');

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyRedux = require('./../../npm/wepy-redux/lib/index.js');

var _config = require('./../../config.js');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var store = (0, _wepyRedux.getStore)();

var refreshTimer = null;

var asyncAuthStart = function asyncAuthStart(payload) {
  store.dispatch({ type: types.ASYNC_USER_AUTH_START, payload: payload });
};
var asyncAuthFailed = store.dispatch.bind(store, { type: types.ASYNC_USER_AUTH_FAILED });

var makeCallStart = store.dispatch.bind(store, { type: types.MAKE_CALL_START });
var saveSession = function saveSession(payload) {
  store.dispatch({ type: types.SAVE_SESSION, payload: payload });
};
var makeCallFailed = store.dispatch.bind(store, { type: types.MAKE_CALL_FAILED });

var presentationStart = function presentationStart(payload) {
  store.dispatch({ type: types.PRESENTATION_START, payload: payload });
};
var presentationFrame = function presentationFrame(payload) {
  store.dispatch({ type: types.PRESENTATION_FRAME, payload: payload });
};
var presentationStop = function presentationStop(payload) {
  store.dispatch({ type: types.PRESENTATION_STOP, payload: payload });
};

var connectWebsocket = function connectWebsocket() {
  var state = store.getState();
  var mcuHost = state.conference.mcuHost;
  var alias = state.conference.alias;
  var token = state.conference.token;
  wx.connectSocket({
    url: 'wss://' + mcuHost + '/wapi/services/' + alias + '/wsevents?token=' + token,
    header: {
      'content-type': 'application/json',
      'token': token
    }
  });
  wx.onSocketOpen(function (res) {
    console.log('[ws:onSocketOpen]: ' + res);
  });
  wx.onSocketMessage(function (res) {
    var data = JSON.parse(res.data);
    if (data._command === 'bye') return wx.closeSocket();else if (data._command === 'event') {
      console.log('[ws:message]', data);
      var _state = store.getState();
      var _token = _state.conference.token;
      switch (data._eventName) {
        case 'presentation_start':
          presentationStart({
            presentaterUuid: data.data.presenter_uuid,
            presentaterUri: data.data.presenter_uri,
            presentaterName: data.data.presenter_name,
            presenting: true
          });
          break;
        case 'presentation_frame':
          var presentationFrameUrl = 'https://' + mcuHost + '/api/services/' + alias + '/presentation.jpeg?id=' + data._eventId + '&token=' + _token;
          presentationFrame({
            eventId: data._eventId,
            presentationFrameUrl: presentationFrameUrl
          });
          break;
        case 'presentation_stop':
          presentationStop({ presenting: false });
          break;
        default:
          break;
      }
    }
  });
  wx.onSocketClose(function (res) {
    console.log('[WebSocket Close]: ' + res);
  });
  wx.onSocketError(function (err) {
    if (err.errMsg) {
      setTimeout(connectWebsocket, 10000);
      console.log('[WebSocket Error]: ' + err.errMsg);
    }
  });
};

var refreshTokenStart = store.dispatch.bind(store, { type: types.REFRESH_TOKEN_START });
var refreshTokenFailed = store.dispatch.bind(store, { type: types.REFRESH_TOKEN_FAILED });

var showMessage = exports.showMessage = (0, _reduxActions.createAction)(types.TOAST_FINISH, function (payload) {
  wx.showToast({
    title: payload,
    mask: true,
    // duration: 3000,
    icon: 'none'
  });
});

var navTo = exports.navTo = (0, _reduxActions.createAction)(types.NAV_FINISH, function (payload) {
  wx.navigateTo({ url: payload });
});

var asyncAuth = exports.asyncAuth = (0, _reduxActions.createAction)(types.ASYNC_USER_AUTH, function (payload) {
  var formdata = {
    joinAccount: payload.alias,
    participantName: payload.displayName,
    joinPwd: payload.password
  };
  asyncAuthStart({ enterAlias: payload.alias });
  return _wepy2.default.request({
    url: 'https://' + _config2.default.apiServer + '/api/v3/meet/checkJoin.shtml',
    method: 'POST',
    data: formdata
  }).then(function (res) {
    if (res.statusCode === 200 && res.data.code === "200") {
      var data = _extends({}, res.data.results, {
        allowGuest: res.data.results.allowGuest === 'yes' ? true : false
      });
      return _extends({}, data, { navTo: "conferencing", displayName: payload.displayName });
    } else {
      asyncAuthFailed();
      return {
        errorMessage: res.data.results ? res.data.results : '接口异常'
      };
    }
  }).catch(function (err) {
    asyncAuthFailed();
    return {
      errorMessage: '网络异常'
    };
  });
});

var makeCall = exports.makeCall = (0, _reduxActions.createAction)(types.MAKE_CALL, function (payload) {
  var displayName = payload.displayName;
  var mcuHost = payload.mcuHost;
  var alias = payload.alias;
  var pin = payload.pin;

  makeCallStart();
  return _wepy2.default.request({
    url: 'https://' + mcuHost + '/api/services/' + alias + '/new_session',
    method: "POST",
    header: {
      pin: pin
    },
    data: {
      display_name: displayName,
      checkdup: '123456789012435678901234567890123456s'
    }
  }).then(function (res) {
    if (res.statusCode === 200) {
      var result = res.data.result;
      var saveData = {
        allow1080p: result.allow_1080p,
        analyticsEnabled: result.analytics_enabled,
        bandwidthIn: result.bandwidth_in,
        bandwidthOut: result.bandwidth_out,
        callType: result.call_type,
        chatEnabled: result.chat_enabled,
        currentServiceType: result.current_service_type,
        displayName: result.display_name,
        expires: result.expires,
        feccEnabled: result.fecc_enabled,
        guestsCanPresent: result.guests_can_present,
        participantUuid: result.participant_uuid,
        role: result.role,
        rtmpEnabled: result.rtmp_enabled,
        rtspEnabled: result.rtsp_enabled,
        serviceType: result.service_type,
        token: result.token
      };
      saveSession(saveData);
      if (refreshTimer) clearInterval();
      refreshTimer = setInterval(function () {
        var state = store.getState();
        var mcuHost = state.conference.mcuHost;
        var alias = state.conference.alias;
        var token = state.conference.token;
        store.dispatch(refreshToken({ mcuHost: mcuHost, alias: alias, token: token }));
      }, 30 * 1000);

      connectWebsocket();

      return _wepy2.default.request({
        url: 'https://' + mcuHost + '/api/services/' + alias + '/participants/' + res.data.result.participant_uuid + '/calls',
        method: 'POST',
        header: {
          token: res.data.result.token
        },
        data: {
          call_type: 'RTMP',
          bandwidth: 800
        }
      });
    } else {
      throw new Error(res.data.result ? res.data.result : '接口异常');
    }
  }).then(function (res) {
    if (res.statusCode === 200) {
      var result = res.data.result;
      return {
        callType: result.call_type,
        callUuid: result.call_uuid,
        playUrl: result.play_url,
        pushUrl: result.push_url,
        url: result.url,
        refreshTokenTimer: true
      };
    } else {
      throw new Error(res.data.result ? res.data.result : '接口异常');
    }
  }).catch(function (err) {
    setTimeout(makeCallFailed, 0);
    return { errorMessage: err.message };
  });
});

var refreshToken = (0, _reduxActions.createAction)(types.REFRESH_TOKEN, function (payload) {
  var mcuHost = payload.mcuHost;
  var alias = payload.alias;
  var token = payload.token;

  refreshTokenStart();
  return _wepy2.default.request({
    url: 'https://' + mcuHost + '/api/services/' + alias + '/refresh_session',
    method: "POST",
    header: {
      token: token
    }
  }).then(function (res) {
    if (res.statusCode === 200) {
      var data = { token: res.data.result.token,
        role: res.data.result.role,
        expires: res.data.result.expires };
      return data;
    } else {
      throw new Error(res.data.result ? res.data.result : '接口异常');
    }
  }).catch(function (err) {
    setTimeout(refreshTokenFailed, 0);
    return { errorMessage: err.message };
  });
});

var disconnect = exports.disconnect = (0, _reduxActions.createAction)(types.DISCONNECT, function (payload) {
  var callUuid = payload.callUuid;
  var participantUuid = payload.participantUuid;
  var alias = payload.alias;
  var mcuHost = payload.mcuHost;
  var token = payload.token;

  clearInterval(refreshTimer);
  return _wepy2.default.request({
    url: 'https://' + mcuHost + '/api/services/' + alias + '/participants/' + participantUuid + '/calls/' + callUuid + '/disconnect',
    method: "POST",
    header: {
      token: token
    }
  }).then(function (res) {
    if (res.statusCode === 200) {
      return _wepy2.default.request({
        url: 'https://' + mcuHost + '/api/services/' + alias + '/end_session',
        method: "POST",
        header: {
          token: token
        }
      });
    } else {
      throw new Error(res.data.result ? res.data.result : '接口异常');
    }
  }).catch(function (err) {
    return { errorMessage: err.message };
  });
});

var hideWxapp = exports.hideWxapp = (0, _reduxActions.createAction)(types.APP_PAGE_ONHIDE);
var showWxapp = exports.showWxapp = (0, _reduxActions.createAction)(types.APP_PAGE_ONSHOW);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZlcmVuY2UuanMiXSwibmFtZXMiOlsidHlwZXMiLCJzdG9yZSIsInJlZnJlc2hUaW1lciIsImFzeW5jQXV0aFN0YXJ0IiwicGF5bG9hZCIsImRpc3BhdGNoIiwidHlwZSIsIkFTWU5DX1VTRVJfQVVUSF9TVEFSVCIsImFzeW5jQXV0aEZhaWxlZCIsImJpbmQiLCJBU1lOQ19VU0VSX0FVVEhfRkFJTEVEIiwibWFrZUNhbGxTdGFydCIsIk1BS0VfQ0FMTF9TVEFSVCIsInNhdmVTZXNzaW9uIiwiU0FWRV9TRVNTSU9OIiwibWFrZUNhbGxGYWlsZWQiLCJNQUtFX0NBTExfRkFJTEVEIiwicHJlc2VudGF0aW9uU3RhcnQiLCJQUkVTRU5UQVRJT05fU1RBUlQiLCJwcmVzZW50YXRpb25GcmFtZSIsIlBSRVNFTlRBVElPTl9GUkFNRSIsInByZXNlbnRhdGlvblN0b3AiLCJQUkVTRU5UQVRJT05fU1RPUCIsImNvbm5lY3RXZWJzb2NrZXQiLCJzdGF0ZSIsImdldFN0YXRlIiwibWN1SG9zdCIsImNvbmZlcmVuY2UiLCJhbGlhcyIsInRva2VuIiwid3giLCJjb25uZWN0U29ja2V0IiwidXJsIiwiaGVhZGVyIiwib25Tb2NrZXRPcGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsIm9uU29ja2V0TWVzc2FnZSIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJfY29tbWFuZCIsImNsb3NlU29ja2V0IiwiX2V2ZW50TmFtZSIsInByZXNlbnRhdGVyVXVpZCIsInByZXNlbnRlcl91dWlkIiwicHJlc2VudGF0ZXJVcmkiLCJwcmVzZW50ZXJfdXJpIiwicHJlc2VudGF0ZXJOYW1lIiwicHJlc2VudGVyX25hbWUiLCJwcmVzZW50aW5nIiwicHJlc2VudGF0aW9uRnJhbWVVcmwiLCJfZXZlbnRJZCIsImV2ZW50SWQiLCJvblNvY2tldENsb3NlIiwib25Tb2NrZXRFcnJvciIsImVyciIsImVyck1zZyIsInNldFRpbWVvdXQiLCJyZWZyZXNoVG9rZW5TdGFydCIsIlJFRlJFU0hfVE9LRU5fU1RBUlQiLCJyZWZyZXNoVG9rZW5GYWlsZWQiLCJSRUZSRVNIX1RPS0VOX0ZBSUxFRCIsInNob3dNZXNzYWdlIiwiVE9BU1RfRklOSVNIIiwic2hvd1RvYXN0IiwidGl0bGUiLCJtYXNrIiwiaWNvbiIsIm5hdlRvIiwiTkFWX0ZJTklTSCIsIm5hdmlnYXRlVG8iLCJhc3luY0F1dGgiLCJBU1lOQ19VU0VSX0FVVEgiLCJmb3JtZGF0YSIsImpvaW5BY2NvdW50IiwicGFydGljaXBhbnROYW1lIiwiZGlzcGxheU5hbWUiLCJqb2luUHdkIiwicGFzc3dvcmQiLCJlbnRlckFsaWFzIiwid2VweSIsInJlcXVlc3QiLCJjb25maWciLCJhcGlTZXJ2ZXIiLCJtZXRob2QiLCJ0aGVuIiwic3RhdHVzQ29kZSIsImNvZGUiLCJyZXN1bHRzIiwiYWxsb3dHdWVzdCIsImVycm9yTWVzc2FnZSIsImNhdGNoIiwibWFrZUNhbGwiLCJNQUtFX0NBTEwiLCJwaW4iLCJkaXNwbGF5X25hbWUiLCJjaGVja2R1cCIsInJlc3VsdCIsInNhdmVEYXRhIiwiYWxsb3cxMDgwcCIsImFsbG93XzEwODBwIiwiYW5hbHl0aWNzRW5hYmxlZCIsImFuYWx5dGljc19lbmFibGVkIiwiYmFuZHdpZHRoSW4iLCJiYW5kd2lkdGhfaW4iLCJiYW5kd2lkdGhPdXQiLCJiYW5kd2lkdGhfb3V0IiwiY2FsbFR5cGUiLCJjYWxsX3R5cGUiLCJjaGF0RW5hYmxlZCIsImNoYXRfZW5hYmxlZCIsImN1cnJlbnRTZXJ2aWNlVHlwZSIsImN1cnJlbnRfc2VydmljZV90eXBlIiwiZXhwaXJlcyIsImZlY2NFbmFibGVkIiwiZmVjY19lbmFibGVkIiwiZ3Vlc3RzQ2FuUHJlc2VudCIsImd1ZXN0c19jYW5fcHJlc2VudCIsInBhcnRpY2lwYW50VXVpZCIsInBhcnRpY2lwYW50X3V1aWQiLCJyb2xlIiwicnRtcEVuYWJsZWQiLCJydG1wX2VuYWJsZWQiLCJydHNwRW5hYmxlZCIsInJ0c3BfZW5hYmxlZCIsInNlcnZpY2VUeXBlIiwic2VydmljZV90eXBlIiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwicmVmcmVzaFRva2VuIiwiYmFuZHdpZHRoIiwiRXJyb3IiLCJjYWxsVXVpZCIsImNhbGxfdXVpZCIsInBsYXlVcmwiLCJwbGF5X3VybCIsInB1c2hVcmwiLCJwdXNoX3VybCIsInJlZnJlc2hUb2tlblRpbWVyIiwibWVzc2FnZSIsIlJFRlJFU0hfVE9LRU4iLCJkaXNjb25uZWN0IiwiRElTQ09OTkVDVCIsImhpZGVXeGFwcCIsIkFQUF9QQUdFX09OSElERSIsInNob3dXeGFwcCIsIkFQUF9QQUdFX09OU0hPVyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0lBQVlBLEs7O0FBQ1o7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQyxRQUFRLDBCQUFkOztBQUVBLElBQUlDLGVBQWUsSUFBbkI7O0FBRUEsSUFBTUMsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFDQyxPQUFELEVBQVc7QUFBRUgsUUFBTUksUUFBTixDQUFlLEVBQUNDLE1BQU1OLE1BQU1PLHFCQUFiLEVBQW9DSCxTQUFTQSxPQUE3QyxFQUFmO0FBQXVFLENBQTNHO0FBQ0EsSUFBTUksa0JBQWtCUCxNQUFNSSxRQUFOLENBQWVJLElBQWYsQ0FBb0JSLEtBQXBCLEVBQTJCLEVBQUNLLE1BQU1OLE1BQU1VLHNCQUFiLEVBQTNCLENBQXhCOztBQUVBLElBQU1DLGdCQUFnQlYsTUFBTUksUUFBTixDQUFlSSxJQUFmLENBQW9CUixLQUFwQixFQUEyQixFQUFDSyxNQUFNTixNQUFNWSxlQUFiLEVBQTNCLENBQXRCO0FBQ0EsSUFBTUMsY0FBYyxTQUFkQSxXQUFjLENBQUNULE9BQUQsRUFBVztBQUFFSCxRQUFNSSxRQUFOLENBQWUsRUFBQ0MsTUFBTU4sTUFBTWMsWUFBYixFQUEyQlYsU0FBU0EsT0FBcEMsRUFBZjtBQUE4RCxDQUEvRjtBQUNBLElBQU1XLGlCQUFpQmQsTUFBTUksUUFBTixDQUFlSSxJQUFmLENBQW9CUixLQUFwQixFQUEyQixFQUFDSyxNQUFNTixNQUFNZ0Is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UUFBUXdCLEtBQXRCO0FBQ0EsTUFBTUYsVUFBVXRCLFFBQVFzQixPQUF4QjtBQUNBLE1BQU1HLFFBQVF6QixRQUFReUIsS0FBdEI7O0FBRUFvRyxnQkFBYy9ILFlBQWQ7QUFDQSxTQUFPZ0YsZUFBS0MsT0FBTCxDQUFhO0FBQ2xCbkQsc0JBQWVOLE9BQWYsc0JBQXVDRSxLQUF2QyxzQkFBNkQ0RixlQUE3RCxlQUFzRmMsUUFBdEYsZ0JBRGtCO0FBRWxCaEQsWUFBUSxNQUZVO0FBR2xCckQsWUFBTztBQUNMSixhQUFPQTtBQURGO0FBSFcsR0FBYixFQU1KMEQsSUFOSSxDQU1DLGVBQUs7QUFDWCxRQUFHcEQsSUFBSXFELFVBQUosS0FBbUIsR0FBdEIsRUFBMEI7QUFDeEIsYUFBT04sZUFBS0MsT0FBTCxDQUFhO0FBQ2xCbkQsMEJBQWVOLE9BQWYsc0JBQXVDRSxLQUF2QyxpQkFEa0I7QUFFbEIwRCxnQkFBUSxNQUZVO0FBR2xCckQsZ0JBQU87QUFDTEosaUJBQU9BO0FBREY7QUFIVyxPQUFiLENBQVA7QUFPRCxLQVJELE1BU0s7QUFDSCxZQUFNLElBQUl3RyxLQUFKLENBQVVsRyxJQUFJSSxJQUFKLENBQVM0RCxNQUFULEdBQWtCaEUsSUFBSUksSUFBSixDQUFTNEQsTUFBM0IsR0FBb0MsTUFBOUMsQ0FBTjtBQUNEO0FBQ0YsR0FuQk0sRUFtQkpOLEtBbkJJLENBbUJFLGVBQUs7QUFDWixXQUFPLEVBQUNELGNBQWNuQyxJQUFJb0YsT0FBbkIsRUFBUDtBQUNELEdBckJNLENBQVA7QUFzQkQsQ0E5QnlCLENBQW5COztBQWlDQSxJQUFNSSxnQ0FBWSxnQ0FBY2pKLE1BQU1rSixlQUFwQixDQUFsQjtBQUNBLElBQU1DLGdDQUFZLGdDQUFjbkosTUFBTW9KLGVBQXBCLENBQWxCIiwiZmlsZSI6ImNvbmZlcmVuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi90eXBlcy8nXG5pbXBvcnQgeyBjcmVhdGVBY3Rpb24gfSBmcm9tICdyZWR1eC1hY3Rpb25zJ1xuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCB7Z2V0U3RvcmV9IGZyb20gJ3dlcHktcmVkdXgnXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uL2NvbmZpZy5qcydcblxuY29uc3Qgc3RvcmUgPSBnZXRTdG9yZSgpO1xuXG5sZXQgcmVmcmVzaFRpbWVyID0gbnVsbFxuXG5jb25zdCBhc3luY0F1dGhTdGFydCA9IChwYXlsb2FkKT0+eyBzdG9yZS5kaXNwYXRjaCh7dHlwZTogdHlwZXMuQVNZTkNfVVNFUl9BVVRIX1NUQVJULCBwYXlsb2FkOiBwYXlsb2FkfSkgfVxuY29uc3QgYXN5bmNBdXRoRmFpbGVkID0gc3RvcmUuZGlzcGF0Y2guYmluZChzdG9yZSwge3R5cGU6IHR5cGVzLkFTWU5DX1VTRVJfQVVUSF9GQUlMRUR9KTtcblxuY29uc3QgbWFrZUNhbGxTdGFydCA9IHN0b3JlLmRpc3BhdGNoLmJpbmQoc3RvcmUsIHt0eXBlOiB0eXBlcy5NQUtFX0NBTExfU1RBUlR9KTtcbmNvbnN0IHNhdmVTZXNzaW9uID0gKHBheWxvYWQpPT57IHN0b3JlLmRpc3BhdGNoKHt0eXBlOiB0eXBlcy5TQVZFX1NFU1NJT04sIHBheWxvYWQ6IHBheWxvYWR9KSB9XG5jb25zdCBtYWtlQ2FsbEZhaWxlZCA9IHN0b3JlLmRpc3BhdGNoLmJpbmQoc3RvcmUsIHt0eXBlOiB0eXBlcy5NQUtFX0NBTExfRkFJTEVEfSk7XG5cbmNvbnN0IHByZXNlbnRhdGlvblN0YXJ0ID0gKHBheWxvYWQpID0+IHsgc3RvcmUuZGlzcGF0Y2goIHt0eXBlOiB0eXBlcy5QUkVTRU5UQVRJT05fU1RBUlQsIHBheWxvYWQ6IHBheWxvYWR9KSB9XG5jb25zdCBwcmVzZW50YXRpb25GcmFtZSA9IChwYXlsb2FkKSA9PiB7IHN0b3JlLmRpc3BhdGNoKCB7dHlwZTogdHlwZXMuUFJFU0VOVEFUSU9OX0ZSQU1FLCBwYXlsb2FkOiBwYXlsb2FkfSkgfVxuY29uc3QgcHJlc2VudGF0aW9uU3RvcCA9IChwYXlsb2FkKSA9PiB7IHN0b3JlLmRpc3BhdGNoKCB7dHlwZTogdHlwZXMuUFJFU0VOVEFUSU9OX1NUT1AsIHBheWxvYWQ6IHBheWxvYWR9KSB9XG5cbmNvbnN0IGNvbm5lY3RXZWJzb2NrZXQgPSAoKSA9PiB7XG4gIGNvbnN0IHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKVxuICBjb25zdCBtY3VIb3N0ID0gc3RhdGUuY29uZmVyZW5jZS5tY3VIb3N0XG4gIGNvbnN0IGFsaWFzID0gc3RhdGUuY29uZmVyZW5jZS5hbGlhc1xuICBjb25zdCB0b2tlbiA9IHN0YXRlLmNvbmZlcmVuY2UudG9rZW5cbiAgd3guY29ubmVjdFNvY2tldCh7XG4gICAgdXJsOiBgd3NzOi8vJHttY3VIb3N0fS93YXBpL3NlcnZpY2VzLyR7YWxpYXN9L3dzZXZlbnRzP3Rva2VuPSR7dG9rZW59YCxcbiAgICBoZWFkZXI6e1xuICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICd0b2tlbic6IHRva2VuXG4gICAgfVxuICB9KVxuICB3eC5vblNvY2tldE9wZW4oKHJlcyk9Pntjb25zb2xlLmxvZyhgW3dzOm9uU29ja2V0T3Blbl06ICR7cmVzfWApIH0pXG4gIHd4Lm9uU29ja2V0TWVzc2FnZShyZXMgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHJlcy5kYXRhKVxuICAgIGlmKGRhdGEuX2NvbW1hbmQgPT09ICdieWUnKSByZXR1cm4gd3guY2xvc2VTb2NrZXQoKVxuICAgIGVsc2UgaWYoZGF0YS5fY29tbWFuZCA9PT0gJ2V2ZW50Jykge1xuICAgICAgY29uc29sZS5sb2coJ1t3czptZXNzYWdlXScsIGRhdGEpXG4gICAgICBjb25zdCBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKClcbiAgICAgIGNvbnN0IHRva2VuID0gc3RhdGUuY29uZmVyZW5jZS50b2tlblxuICAgICAgc3dpdGNoKGRhdGEuX2V2ZW50TmFtZSl7XG4gICAgICAgIGNhc2UgJ3ByZXNlbnRhdGlvbl9zdGFydCc6XG4gICAgICAgICAgcHJlc2VudGF0aW9uU3RhcnQoe1xuICAgICAgICAgICAgcHJlc2VudGF0ZXJVdWlkOiBkYXRhLmRhdGEucHJlc2VudGVyX3V1aWQsXG4gICAgICAgICAgICBwcmVzZW50YXRlclVyaTogZGF0YS5kYXRhLnByZXNlbnRlcl91cmksXG4gICAgICAgICAgICBwcmVzZW50YXRlck5hbWU6IGRhdGEuZGF0YS5wcmVzZW50ZXJfbmFtZSxcbiAgICAgICAgICAgIHByZXNlbnRpbmc6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ3ByZXNlbnRhdGlvbl9mcmFtZSc6XG4gICAgICAgICAgY29uc3QgcHJlc2VudGF0aW9uRnJhbWVVcmwgPSBgaHR0cHM6Ly8ke21jdUhvc3R9L2FwaS9zZXJ2aWNlcy8ke2FsaWFzfS9wcmVzZW50YXRpb24uanBlZz9pZD0ke2RhdGEuX2V2ZW50SWR9JnRva2VuPSR7dG9rZW59YFxuICAgICAgICAgIHByZXNlbnRhdGlvbkZyYW1lKHsgXG4gICAgICAgICAgICBldmVudElkOmRhdGEuX2V2ZW50SWQsXG4gICAgICAgICAgICBwcmVzZW50YXRpb25GcmFtZVVybDogcHJlc2VudGF0aW9uRnJhbWVVcmxcbiAgICAgICAgICB9KVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ3ByZXNlbnRhdGlvbl9zdG9wJzpcbiAgICAgICAgICBwcmVzZW50YXRpb25TdG9wKHtwcmVzZW50aW5nOiBmYWxzZX0pXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cblxuICB9KVxuICB3eC5vblNvY2tldENsb3NlKGZ1bmN0aW9uKHJlcykge1xuICAgIGNvbnNvbGUubG9nKGBbV2ViU29ja2V0IENsb3NlXTogJHtyZXN9YClcbiAgfSlcbiAgd3gub25Tb2NrZXRFcnJvcihlcnIgPT4ge1xuICAgIGlmKGVyci5lcnJNc2cpIHtcbiAgICAgIHNldFRpbWVvdXQoY29ubmVjdFdlYnNvY2tldCwgMTAwMDApXG4gICAgICBjb25zb2xlLmxvZyhgW1dlYlNvY2tldCBFcnJvcl06ICR7ZXJyLmVyck1zZ31gKVxuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgcmVmcmVzaFRva2VuU3RhcnQgPSBzdG9yZS5kaXNwYXRjaC5iaW5kKHN0b3JlLCB7dHlwZTogdHlwZXMuUkVGUkVTSF9UT0tFTl9TVEFSVH0pO1xuY29uc3QgcmVmcmVzaFRva2VuRmFpbGVkID0gc3RvcmUuZGlzcGF0Y2guYmluZChzdG9yZSwge3R5cGU6IHR5cGVzLlJFRlJFU0hfVE9LRU5fRkFJTEVEfSk7XG5cbmV4cG9ydCBjb25zdCBzaG93TWVzc2FnZSA9IGNyZWF0ZUFjdGlvbiggdHlwZXMuVE9BU1RfRklOSVNIICwgcGF5bG9hZCA9PiB7XG4gICB3eC5zaG93VG9hc3Qoe1xuICAgIHRpdGxlOiBwYXlsb2FkLCBcbiAgICBtYXNrOiB0cnVlLFxuICAgIC8vIGR1cmF0aW9uOiAzMDAwLFxuICAgIGljb246ICdub25lJ1xuICB9KVxufSlcblxuZXhwb3J0IGNvbnN0IG5hdlRvID0gY3JlYXRlQWN0aW9uKCB0eXBlcy5OQVZfRklOSVNIICwgcGF5bG9hZCA9PiB7XG4gIHd4Lm5hdmlnYXRlVG8oe3VybDpwYXlsb2FkfSk7XG59KVxuXG5leHBvcnQgY29uc3QgYXN5bmNBdXRoID0gY3JlYXRlQWN0aW9uKCB0eXBlcy5BU1lOQ19VU0VSX0FVVEgsIHBheWxvYWQgPT4ge1xuICBjb25zdCBmb3JtZGF0YSA9IHtcbiAgICBqb2luQWNjb3VudDogcGF5bG9hZC5hbGlhcyxcbiAgICBwYXJ0aWNpcGFudE5hbWU6IHBheWxvYWQuZGlzcGxheU5hbWUsXG4gICAgam9pblB3ZDogcGF5bG9hZC5wYXNzd29yZFxuICB9XG4gIGFzeW5jQXV0aFN0YXJ0KHtlbnRlckFsaWFzOiBwYXlsb2FkLmFsaWFzfSk7XG4gIHJldHVybiB3ZXB5LnJlcXVlc3Qoe1xuICAgIHVybDogYGh0dHBzOi8vJHtjb25maWcuYXBpU2VydmVyfS9hcGkvdjMvbWVldC9jaGVja0pvaW4uc2h0bWxgLFxuICAgIG1ldGhvZDonUE9TVCcsXG4gICAgZGF0YTogZm9ybWRhdGEsXG4gIH0pLnRoZW4ocmVzPT57XG4gICAgaWYocmVzLnN0YXR1c0NvZGUgPT09IDIwMCAmJiByZXMuZGF0YS5jb2RlID09PSBcIjIwMFwiKXtcbiAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAuLi5yZXMuZGF0YS5yZXN1bHRzLFxuICAgICAgICBhbGxvd0d1ZXN0IDogcmVzLmRhdGEucmVzdWx0cy5hbGxvd0d1ZXN0ID09PSAneWVzJz90cnVlOmZhbHNlLFxuICAgICAgfVxuICAgICAgcmV0dXJuIHsuLi5kYXRhLCBuYXZUbzpcImNvbmZlcmVuY2luZ1wiLCBkaXNwbGF5TmFtZTogcGF5bG9hZC5kaXNwbGF5TmFtZX1cbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIGFzeW5jQXV0aEZhaWxlZCgpXG4gICAgICByZXR1cm4ge1xuICAgICAgICBlcnJvck1lc3NhZ2U6IHJlcy5kYXRhLnJlc3VsdHMgPyByZXMuZGF0YS5yZXN1bHRzIDogJ+aOpeWPo+W8guW4uCcgXG4gICAgICB9XG4gICAgfVxuICB9KS5jYXRjaChlcnI9PntcbiAgICAgIGFzeW5jQXV0aEZhaWxlZCgpXG4gICAgICByZXR1cm4ge1xuICAgICAgICBlcnJvck1lc3NhZ2U6ICfnvZHnu5zlvILluLgnXG4gICAgICB9XG4gIH0pXG59KVxuXG5cbmV4cG9ydCBjb25zdCBtYWtlQ2FsbCA9IGNyZWF0ZUFjdGlvbih0eXBlcy5NQUtFX0NBTEwsIHBheWxvYWQ9PntcbiAgICBjb25zdCBkaXNwbGF5TmFtZSA9IHBheWxvYWQuZGlzcGxheU5hbWU7XG4gICAgY29uc3QgbWN1SG9zdCA9IHBheWxvYWQubWN1SG9zdFxuICAgIGNvbnN0IGFsaWFzID0gcGF5bG9hZC5hbGlhc1xuICAgIGNvbnN0IHBpbiA9IHBheWxvYWQucGluXG5cbiAgICBtYWtlQ2FsbFN0YXJ0KCk7XG4gICAgcmV0dXJuIHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6YGh0dHBzOi8vJHttY3VIb3N0fS9hcGkvc2VydmljZXMvJHthbGlhc30vbmV3X3Nlc3Npb25gLFxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcjp7XG4gICAgICAgIHBpbjogcGluIFxuICAgICAgfSxcbiAgICAgIGRhdGE6e1xuICAgICAgICBkaXNwbGF5X25hbWU6IGRpc3BsYXlOYW1lLFxuICAgICAgICBjaGVja2R1cDonMTIzNDU2Nzg5MDEyNDM1Njc4OTAxMjM0NTY3ODkwMTIzNDU2cydcbiAgICAgIH1cbiAgICB9KS50aGVuKHJlcz0+e1xuICAgICAgaWYocmVzLnN0YXR1c0NvZGUgPT09IDIwMCl7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHJlcy5kYXRhLnJlc3VsdFxuICAgICAgICBjb25zdCBzYXZlRGF0YSA9IHtcbiAgICAgICAgICBhbGxvdzEwODBwIDogcmVzdWx0LmFsbG93XzEwODBwLFxuICAgICAgICAgIGFuYWx5dGljc0VuYWJsZWQgOiByZXN1bHQuYW5hbHl0aWNzX2VuYWJsZWQsXG4gICAgICAgICAgYmFuZHdpZHRoSW4gOiByZXN1bHQuYmFuZHdpZHRoX2luLFxuICAgICAgICAgIGJhbmR3aWR0aE91dCA6IHJlc3VsdC5iYW5kd2lkdGhfb3V0LFxuICAgICAgICAgIGNhbGxUeXBlIDogcmVzdWx0LmNhbGxfdHlwZSxcbiAgICAgICAgICBjaGF0RW5hYmxlZCA6IHJlc3VsdC5jaGF0X2VuYWJsZWQsXG4gICAgICAgICAgY3VycmVudFNlcnZpY2VUeXBlIDogcmVzdWx0LmN1cnJlbnRfc2VydmljZV90eXBlLFxuICAgICAgICAgIGRpc3BsYXlOYW1lIDogcmVzdWx0LmRpc3BsYXlfbmFtZSxcbiAgICAgICAgICBleHBpcmVzIDogcmVzdWx0LmV4cGlyZXMsXG4gICAgICAgICAgZmVjY0VuYWJsZWQgOiByZXN1bHQuZmVjY19lbmFibGVkLFxuICAgICAgICAgIGd1ZXN0c0NhblByZXNlbnQgOiByZXN1bHQuZ3Vlc3RzX2Nhbl9wcmVzZW50LFxuICAgICAgICAgIHBhcnRpY2lwYW50VXVpZCA6IHJlc3VsdC5wYXJ0aWNpcGFudF91dWlkLFxuICAgICAgICAgIHJvbGUgOiByZXN1bHQucm9sZSxcbiAgICAgICAgICBydG1wRW5hYmxlZCA6IHJlc3VsdC5ydG1wX2VuYWJsZWQsXG4gICAgICAgICAgcnRzcEVuYWJsZWQgOiByZXN1bHQucnRzcF9lbmFibGVkLFxuICAgICAgICAgIHNlcnZpY2VUeXBlIDogcmVzdWx0LnNlcnZpY2VfdHlwZSxcbiAgICAgICAgICB0b2tlbjogcmVzdWx0LnRva2VuXG4gICAgICAgIH1cbiAgICAgICAgc2F2ZVNlc3Npb24oc2F2ZURhdGEpXG4gICAgICAgIGlmKHJlZnJlc2hUaW1lcikgY2xlYXJJbnRlcnZhbCgpXG4gICAgICAgIHJlZnJlc2hUaW1lciA9IHNldEludGVydmFsKCgpPT57XG4gICAgICAgICAgY29uc3Qgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpXG4gICAgICAgICAgY29uc3QgbWN1SG9zdCA9IHN0YXRlLmNvbmZlcmVuY2UubWN1SG9zdFxuICAgICAgICAgIGNvbnN0IGFsaWFzID0gc3RhdGUuY29uZmVyZW5jZS5hbGlhc1xuICAgICAgICAgIGNvbnN0IHRva2VuID0gc3RhdGUuY29uZmVyZW5jZS50b2tlblxuICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHJlZnJlc2hUb2tlbih7bWN1SG9zdDogbWN1SG9zdCwgYWxpYXM6IGFsaWFzLCB0b2tlbjp0b2tlbn0pKVxuICAgICAgICB9LCAzMCAqIDEwMDApXG5cbiAgICAgICAgY29ubmVjdFdlYnNvY2tldCgpO1xuXG4gICAgICAgIHJldHVybiB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDpgaHR0cHM6Ly8ke21jdUhvc3R9L2FwaS9zZXJ2aWNlcy8ke2FsaWFzfS9wYXJ0aWNpcGFudHMvJHtyZXMuZGF0YS5yZXN1bHQucGFydGljaXBhbnRfdXVpZH0vY2FsbHNgLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGhlYWRlcjp7XG4gICAgICAgICAgICB0b2tlbjogcmVzLmRhdGEucmVzdWx0LnRva2VuXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkYXRhOntcbiAgICAgICAgICAgIGNhbGxfdHlwZTogJ1JUTVAnLFxuICAgICAgICAgICAgYmFuZHdpZHRoOiA4MDBcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihyZXMuZGF0YS5yZXN1bHQgPyByZXMuZGF0YS5yZXN1bHQgOiAn5o6l5Y+j5byC5bi4JylcbiAgICAgIH1cbiAgICB9KS50aGVuKHJlcz0+e1xuICAgICAgaWYocmVzLnN0YXR1c0NvZGUgPT09IDIwMCl7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHJlcy5kYXRhLnJlc3VsdFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNhbGxUeXBlOiByZXN1bHQuY2FsbF90eXBlLFxuICAgICAgICAgIGNhbGxVdWlkOiByZXN1bHQuY2FsbF91dWlkLFxuICAgICAgICAgIHBsYXlVcmw6IHJlc3VsdC5wbGF5X3VybCxcbiAgICAgICAgICBwdXNoVXJsOiByZXN1bHQucHVzaF91cmwsXG4gICAgICAgICAgdXJsOiByZXN1bHQudXJsLFxuICAgICAgICAgIHJlZnJlc2hUb2tlblRpbWVyOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzLmRhdGEucmVzdWx0ID8gcmVzLmRhdGEucmVzdWx0IDogJ+aOpeWPo+W8guW4uCcpXG4gICAgICB9XG4gICAgfSkuY2F0Y2goZXJyPT57XG4gICAgICBzZXRUaW1lb3V0KG1ha2VDYWxsRmFpbGVkLCAwKVxuICAgICAgcmV0dXJuIHtlcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlfVxuICAgIH0pXG5cbn0pXG5cbmNvbnN0IHJlZnJlc2hUb2tlbiA9IGNyZWF0ZUFjdGlvbiggdHlwZXMuUkVGUkVTSF9UT0tFTiwgcGF5bG9hZCA9PiB7XG4gIGNvbnN0IG1jdUhvc3QgPSBwYXlsb2FkLm1jdUhvc3RcbiAgY29uc3QgYWxpYXMgPSBwYXlsb2FkLmFsaWFzXG4gIGNvbnN0IHRva2VuID0gcGF5bG9hZC50b2tlblxuXG4gIHJlZnJlc2hUb2tlblN0YXJ0KClcbiAgcmV0dXJuIHdlcHkucmVxdWVzdCh7XG4gICAgdXJsOmBodHRwczovLyR7bWN1SG9zdH0vYXBpL3NlcnZpY2VzLyR7YWxpYXN9L3JlZnJlc2hfc2Vzc2lvbmAsXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXI6e1xuICAgICAgdG9rZW46IHRva2VuXG4gICAgfVxuICB9KS50aGVuKHJlcz0+e1xuICAgIGlmKHJlcy5zdGF0dXNDb2RlID09PSAyMDApe1xuICAgICAgY29uc3QgZGF0YSA9IHt0b2tlbjogcmVzLmRhdGEucmVzdWx0LnRva2VuLCBcbiAgICAgICAgICAgICAgICAgICAgcm9sZTogcmVzLmRhdGEucmVzdWx0LnJvbGUsIFxuICAgICAgICAgICAgICAgICAgICBleHBpcmVzOiByZXMuZGF0YS5yZXN1bHQuZXhwaXJlc31cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfVxuICAgIGVsc2V7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocmVzLmRhdGEucmVzdWx0ID8gcmVzLmRhdGEucmVzdWx0IDogJ+aOpeWPo+W8guW4uCcpXG4gICAgfVxuICB9KS5jYXRjaChlcnI9PntcbiAgICAgIHNldFRpbWVvdXQocmVmcmVzaFRva2VuRmFpbGVkLCAwKVxuICAgICAgcmV0dXJuIHtlcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlfVxuICB9KVxufSlcblxuZXhwb3J0IGNvbnN0IGRpc2Nvbm5lY3QgPSBjcmVhdGVBY3Rpb24oIHR5cGVzLkRJU0NPTk5FQ1QsIHBheWxvYWQgPT4ge1xuICBjb25zdCBjYWxsVXVpZCA9IHBheWxvYWQuY2FsbFV1aWRcbiAgY29uc3QgcGFydGljaXBhbnRVdWlkID0gcGF5bG9hZC5wYXJ0aWNpcGFudFV1aWRcbiAgY29uc3QgYWxpYXMgPSBwYXlsb2FkLmFsaWFzXG4gIGNvbnN0IG1jdUhvc3QgPSBwYXlsb2FkLm1jdUhvc3RcbiAgY29uc3QgdG9rZW4gPSBwYXlsb2FkLnRva2VuXG5cbiAgY2xlYXJJbnRlcnZhbChyZWZyZXNoVGltZXIpXG4gIHJldHVybiB3ZXB5LnJlcXVlc3Qoe1xuICAgIHVybDpgaHR0cHM6Ly8ke21jdUhvc3R9L2FwaS9zZXJ2aWNlcy8ke2FsaWFzfS9wYXJ0aWNpcGFudHMvJHtwYXJ0aWNpcGFudFV1aWR9L2NhbGxzLyR7Y2FsbFV1aWR9L2Rpc2Nvbm5lY3RgLFxuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyOntcbiAgICAgIHRva2VuOiB0b2tlblxuICAgIH1cbiAgfSkudGhlbihyZXM9PntcbiAgICBpZihyZXMuc3RhdHVzQ29kZSA9PT0gMjAwKXtcbiAgICAgIHJldHVybiB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6YGh0dHBzOi8vJHttY3VIb3N0fS9hcGkvc2VydmljZXMvJHthbGlhc30vZW5kX3Nlc3Npb25gLFxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXI6e1xuICAgICAgICAgIHRva2VuOiB0b2tlblxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihyZXMuZGF0YS5yZXN1bHQgPyByZXMuZGF0YS5yZXN1bHQgOiAn5o6l5Y+j5byC5bi4JylcbiAgICB9XG4gIH0pLmNhdGNoKGVycj0+e1xuICAgIHJldHVybiB7ZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZX1cbiAgfSk7IFxufSlcblxuXG5leHBvcnQgY29uc3QgaGlkZVd4YXBwID0gY3JlYXRlQWN0aW9uKCB0eXBlcy5BUFBfUEFHRV9PTkhJREUpXG5leHBvcnQgY29uc3Qgc2hvd1d4YXBwID0gY3JlYXRlQWN0aW9uKCB0eXBlcy5BUFBfUEFHRV9PTlNIT1cpIl19