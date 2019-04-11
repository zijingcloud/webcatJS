'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _initialState, _handleActions;

var _reduxActions = require('./../../npm/redux-actions/lib/index.js');

var _types = require('./../types/index.js');

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = (_initialState = {
  loading: false,
  alias: "",
  enterAlias: "",
  allowGuest: false,
  companyId: 0,
  conferenceName: "",
  isDot: false,
  isLive: false,
  isRecord: false,
  mcuHost: "",
  participantName: "",
  password: "",
  roleType: "",
  sipkey: "",
  navTo: "",
  allow1080p: false,
  analyticsEnabled: false,
  bandwidthIn: 1280,
  bandwidthOut: 1280,
  callType: "",
  chatEnabled: false,
  currentServiceType: "",
  displayName: "",
  expires: "",
  feccEnabled: false,
  guestsCanPresent: false,
  participantUuid: "",
  role: "",
  rtmpEnabled: false,
  rtspEnabled: false,
  refreshTokenTimer: false,
  serviceType: "",
  token: ""
}, _defineProperty(_initialState, 'callType', ""), _defineProperty(_initialState, 'callUuid', ""), _defineProperty(_initialState, 'playUrl', ""), _defineProperty(_initialState, 'pushUrl', ""), _defineProperty(_initialState, 'url', ""), _defineProperty(_initialState, 'errorMessage', ""), _defineProperty(_initialState, 'appIsForeground', true), _defineProperty(_initialState, 'eventId', ""), _defineProperty(_initialState, 'presenting', false), _defineProperty(_initialState, 'presentaterUuid', ""), _defineProperty(_initialState, 'presentaterName', ""), _defineProperty(_initialState, 'presentaterUri', ""), _defineProperty(_initialState, 'presentationFrames', []), _initialState);

exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, types.ASYNC_USER_AUTH_START, function (state, action) {
  return _extends({}, state, { loading: true }, action.payload);
}), _defineProperty(_handleActions, types.ASYNC_USER_AUTH, function (state, action) {
  return _extends({}, state, action.payload, { loading: false });
}), _defineProperty(_handleActions, types.ASYNC_USER_FAILED, function (state, action) {
  return _extends({}, state, action.payload, { loading: false });
}), _defineProperty(_handleActions, types.NAV_FINISH, function (state, action) {
  return _extends({}, state, { navTo: "" });
}), _defineProperty(_handleActions, types.TOAST_FINISH, function (state, action) {
  return _extends({}, state, { errorMessage: "" });
}), _defineProperty(_handleActions, types.MAKE_CALL_START, function (state, action) {
  return _extends({}, state, { loading: true });
}), _defineProperty(_handleActions, types.MAKE_CALL, function (state, action) {
  return _extends({}, state, action.payload, { loading: false });
}), _defineProperty(_handleActions, types.MAKE_CALL_FAILED, function (state, action) {
  return _extends({}, state, { loading: false });
}), _defineProperty(_handleActions, types.SAVE_SESSION, function (state, action) {
  return _extends({}, state, action.payload);
}), _defineProperty(_handleActions, types.REFRESH_TOKEN_START, function (state, action) {
  return _extends({}, state, { refreshTokenTimer: false });
}), _defineProperty(_handleActions, types.REFRESH_TOKEN, function (state, action) {
  return _extends({}, state, action.payload, { refreshTokenTimer: true });
}), _defineProperty(_handleActions, types.REFRESH_TOKEN_FAILED, function (state, action) {
  return _extends({}, state, action.payload, { refreshTokenTimer: true });
}), _defineProperty(_handleActions, types.DISCONNECT, function (state, action) {
  return _extends({}, state, { token: "", pushUrl: "", playUrl: "" });
}), _defineProperty(_handleActions, types.APP_PAGE_ONSHOW, function (state, action) {
  return _extends({}, state, { appIsForeground: true });
}), _defineProperty(_handleActions, types.APP_PAGE_ONHIDE, function (state, action) {
  return _extends({}, state, { appIsForeground: false });
}), _defineProperty(_handleActions, types.PRESENTATION_START, function (state, action) {
  return _extends({}, state, action.payload);
}), _defineProperty(_handleActions, types.PRESENTATION_FRAME, function (state, action) {
  var presentationFrames = [{
    id: action.payload.eventId,
    url: action.payload.presentationFrameUrl
  }].concat(_toConsumableArray(state.presentationFrames)).slice(0, 3);
  return _extends({}, state, { presentationFrames: presentationFrames });
}), _defineProperty(_handleActions, types.PRESENTATION_STOP, function (state, action) {
  return _extends({}, state, action.payload);
}), _handleActions), initialState);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZlcmVuY2UuanMiXSwibmFtZXMiOlsidHlwZXMiLCJpbml0aWFsU3RhdGUiLCJsb2FkaW5nIiwiYWxpYXMiLCJlbnRlckFsaWFzIiwiYWxsb3dHdWVzdCIsImNvbXBhbnlJZCIsImNvbmZlcmVuY2VOYW1lIiwiaXNEb3QiLCJpc0xpdmUiLCJpc1JlY29yZCIsIm1jdUhvc3QiLCJwYXJ0aWNpcGFudE5hbWUiLCJwYXNzd29yZCIsInJvbGVUeXBlIiwic2lwa2V5IiwibmF2VG8iLCJhbGxvdzEwODBwIiwiYW5hbHl0aWNzRW5hYmxlZCIsImJhbmR3aWR0aEluIiwiYmFuZHdpZHRoT3V0IiwiY2FsbFR5cGUiLCJjaGF0RW5hYmxlZCIsImN1cnJlbnRTZXJ2aWNlVHlwZSIsImRpc3BsYXlOYW1lIiwiZXhwaXJlcyIsImZlY2NFbmFibGVkIiwiZ3Vlc3RzQ2FuUHJlc2VudCIsInBhcnRpY2lwYW50VXVpZCIsInJvbGUiLCJydG1wRW5hYmxlZCIsInJ0c3BFbmFibGVkIiwicmVmcmVzaFRva2VuVGltZXIiLCJzZXJ2aWNlVHlwZSIsInRva2VuIiwiQVNZTkNfVVNFUl9BVVRIX1NUQVJUIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiQVNZTkNfVVNFUl9BVVRIIiwiQVNZTkNfVVNFUl9GQUlMRUQiLCJOQVZfRklOSVNIIiwiVE9BU1RfRklOSVNIIiwiZXJyb3JNZXNzYWdlIiwiTUFLRV9DQUxMX1NUQVJUIiwiTUFLRV9DQUxMIiwiTUFLRV9DQUxMX0ZBSUxFRCIsIlNBVkVfU0VTU0lPTiIsIlJFRlJFU0hfVE9LRU5fU1RBUlQiLCJSRUZSRVNIX1RPS0VOIiwiUkVGUkVTSF9UT0tFTl9GQUlMRUQiLCJESVNDT05ORUNUIiwicHVzaFVybCIsInBsYXlVcmwiLCJBUFBfUEFHRV9PTlNIT1ciLCJhcHBJc0ZvcmVncm91bmQiLCJBUFBfUEFHRV9PTkhJREUiLCJQUkVTRU5UQVRJT05fU1RBUlQiLCJQUkVTRU5UQVRJT05fRlJBTUUiLCJwcmVzZW50YXRpb25GcmFtZXMiLCJpZCIsImV2ZW50SWQiLCJ1cmwiLCJwcmVzZW50YXRpb25GcmFtZVVybCIsInNsaWNlIiwiUFJFU0VOVEFUSU9OX1NUT1AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7SUFBWUEsSzs7Ozs7Ozs7QUFFWixJQUFNQztBQUNKQyxXQUFTLEtBREw7QUFFSkMsU0FBUSxFQUZKO0FBR0pDLGNBQWEsRUFIVDtBQUlKQyxjQUFhLEtBSlQ7QUFLSkMsYUFBWSxDQUxSO0FBTUpDLGtCQUFpQixFQU5iO0FBT0pDLFNBQVEsS0FQSjtBQVFKQyxVQUFTLEtBUkw7QUFTSkMsWUFBVyxLQVRQO0FBVUpDLFdBQVUsRUFWTjtBQVdKQyxtQkFBa0IsRUFYZDtBQVlKQyxZQUFXLEVBWlA7QUFhSkMsWUFBVyxFQWJQO0FBY0pDLFVBQVMsRUFkTDtBQWVKQyxTQUFPLEVBZkg7QUFnQkpDLGNBQWEsS0FoQlQ7QUFpQkpDLG9CQUFtQixLQWpCZjtBQWtCSkMsZUFBYyxJQWxCVjtBQW1CSkMsZ0JBQWUsSUFuQlg7QUFvQkpDLFlBQVcsRUFwQlA7QUFxQkpDLGVBQWMsS0FyQlY7QUFzQkpDLHNCQUFxQixFQXRCakI7QUF1QkpDLGVBQWMsRUF2QlY7QUF3QkpDLFdBQVUsRUF4Qk47QUF5QkpDLGVBQWMsS0F6QlY7QUEwQkpDLG9CQUFtQixLQTFCZjtBQTJCSkMsbUJBQWtCLEVBM0JkO0FBNEJKQyxRQUFPLEVBNUJIO0FBNkJKQyxlQUFjLEtBN0JWO0FBOEJKQyxlQUFjLEtBOUJWO0FBK0JKQyxxQkFBbUIsS0EvQmY7QUFnQ0pDLGVBQWMsRUFoQ1Y7QUFpQ0pDLFNBQU87QUFqQ0gsOENBa0NNLEVBbENOLDhDQW1DTSxFQW5DTiw2Q0FvQ0ssRUFwQ0wsNkNBcUNLLEVBckNMLHlDQXNDQyxFQXRDRCxrREF1Q1UsRUF2Q1YscURBd0NhLElBeENiLDZDQXlDSyxFQXpDTCxnREEwQ1EsS0ExQ1IscURBMkNhLEVBM0NiLHFEQTRDYSxFQTVDYixvREE2Q1ksRUE3Q1osd0RBOENnQixFQTlDaEIsaUJBQU47O2tCQWlEZSx1RkFDWmxDLE1BQU1tQyxxQkFETSxZQUNrQkMsS0FEbEIsRUFDeUJDLE1BRHpCLEVBQ2dDO0FBQzNDLHNCQUFXRCxLQUFYLElBQWtCbEMsU0FBUyxJQUEzQixJQUFvQ21DLE9BQU9DLE9BQTNDO0FBQ0QsQ0FIWSxtQ0FJWnRDLE1BQU11QyxlQUpNLFlBSVlILEtBSlosRUFJbUJDLE1BSm5CLEVBSTBCO0FBQ3JDLHNCQUFXRCxLQUFYLEVBQXFCQyxPQUFPQyxPQUE1QixJQUFxQ3BDLFNBQVEsS0FBN0M7QUFDRCxDQU5ZLG1DQU9aRixNQUFNd0MsaUJBUE0sWUFPY0osS0FQZCxFQU9xQkMsTUFQckIsRUFPNEI7QUFDdkMsc0JBQVdELEtBQVgsRUFBcUJDLE9BQU9DLE9BQTVCLElBQXFDcEMsU0FBUSxLQUE3QztBQUNELENBVFksbUNBVVpGLE1BQU15QyxVQVZNLFlBVU9MLEtBVlAsRUFVY0MsTUFWZCxFQVVxQjtBQUNoQyxzQkFBV0QsS0FBWCxJQUFrQnBCLE9BQU0sRUFBeEI7QUFDRCxDQVpZLG1DQWFaaEIsTUFBTTBDLFlBYk0sWUFhU04sS0FiVCxFQWFnQkMsTUFiaEIsRUFhdUI7QUFDbEMsc0JBQVdELEtBQVgsSUFBa0JPLGNBQWEsRUFBL0I7QUFDRCxDQWZZLG1DQWdCWjNDLE1BQU00QyxlQWhCTSxZQWdCWVIsS0FoQlosRUFnQm1CQyxNQWhCbkIsRUFnQjBCO0FBQ3JDLHNCQUFXRCxLQUFYLElBQWtCbEMsU0FBUyxJQUEzQjtBQUNELENBbEJZLG1DQW1CWkYsTUFBTTZDLFNBbkJNLFlBbUJNVCxLQW5CTixFQW1CYUMsTUFuQmIsRUFtQm9CO0FBQy9CLHNCQUFXRCxLQUFYLEVBQXFCQyxPQUFPQyxPQUE1QixJQUFxQ3BDLFNBQVMsS0FBOUM7QUFDRCxDQXJCWSxtQ0FzQlpGLE1BQU04QyxnQkF0Qk0sWUFzQmFWLEtBdEJiLEVBc0JvQkMsTUF0QnBCLEVBc0IyQjtBQUN0QyxzQkFBV0QsS0FBWCxJQUFrQmxDLFNBQVMsS0FBM0I7QUFDRCxDQXhCWSxtQ0F5QlpGLE1BQU0rQyxZQXpCTSxZQXlCU1gsS0F6QlQsRUF5QmdCQyxNQXpCaEIsRUF5QnVCO0FBQ2xDLHNCQUFXRCxLQUFYLEVBQXFCQyxPQUFPQyxPQUE1QjtBQUNELENBM0JZLG1DQTRCWnRDLE1BQU1nRCxtQkE1Qk0sWUE0QmdCWixLQTVCaEIsRUE0QnVCQyxNQTVCdkIsRUE0QjhCO0FBQ3pDLHNCQUFXRCxLQUFYLElBQWtCSixtQkFBbUIsS0FBckM7QUFDRCxDQTlCWSxtQ0ErQlpoQyxNQUFNaUQsYUEvQk0sWUErQlViLEtBL0JWLEVBK0JpQkMsTUEvQmpCLEVBK0J3QjtBQUNuQyxzQkFBV0QsS0FBWCxFQUFxQkMsT0FBT0MsT0FBNUIsSUFBcUNOLG1CQUFtQixJQUF4RDtBQUNELENBakNZLG1DQWtDWmhDLE1BQU1rRCxvQkFsQ00sWUFrQ2lCZCxLQWxDakIsRUFrQ3dCQyxNQWxDeEIsRUFrQytCO0FBQzFDLHNCQUFXRCxLQUFYLEVBQXFCQyxPQUFPQyxPQUE1QixJQUFxQ04sbUJBQW1CLElBQXhEO0FBQ0QsQ0FwQ1ksbUNBcUNaaEMsTUFBTW1ELFVBckNNLFlBcUNPZixLQXJDUCxFQXFDY0MsTUFyQ2QsRUFxQ3FCO0FBQ2hDLHNCQUFXRCxLQUFYLElBQWtCRixPQUFPLEVBQXpCLEVBQTZCa0IsU0FBUyxFQUF0QyxFQUEwQ0MsU0FBUyxFQUFuRDtBQUNELENBdkNZLG1DQXdDWnJELE1BQU1zRCxlQXhDTSxZQXdDWWxCLEtBeENaLEVBd0NtQkMsTUF4Q25CLEVBd0MwQjtBQUNyQyxzQkFBV0QsS0FBWCxJQUFrQm1CLGlCQUFpQixJQUFuQztBQUNELENBMUNZLG1DQTJDWnZELE1BQU13RCxlQTNDTSxZQTJDWXBCLEtBM0NaLEVBMkNtQkMsTUEzQ25CLEVBMkMwQjtBQUNyQyxzQkFBV0QsS0FBWCxJQUFrQm1CLGlCQUFpQixLQUFuQztBQUNELENBN0NZLG1DQThDWnZELE1BQU15RCxrQkE5Q00sWUE4Q2VyQixLQTlDZixFQThDc0JDLE1BOUN0QixFQThDNkI7QUFDeEMsc0JBQVdELEtBQVgsRUFBcUJDLE9BQU9DLE9BQTVCO0FBQ0QsQ0FoRFksbUNBaURadEMsTUFBTTBELGtCQWpETSxZQWlEZXRCLEtBakRmLEVBaURzQkMsTUFqRHRCLEVBaUQ2QjtBQUN4QyxNQUFJc0IscUJBQXFCLENBQUM7QUFDeEJDLFFBQUl2QixPQUFPQyxPQUFQLENBQWV1QixPQURLO0FBRXhCQyxTQUFLekIsT0FBT0MsT0FBUCxDQUFleUI7QUFGSSxHQUFELDRCQUduQjNCLE1BQU11QixrQkFIYSxHQUdPSyxLQUhQLENBR2EsQ0FIYixFQUdlLENBSGYsQ0FBekI7QUFJQSxzQkFBVzVCLEtBQVgsSUFBa0J1QixvQkFBbUJBLGtCQUFyQztBQUNELENBdkRZLG1DQXdEWjNELE1BQU1pRSxpQkF4RE0sWUF3RGM3QixLQXhEZCxFQXdEcUJDLE1BeERyQixFQXdENEI7QUFDdkMsc0JBQVdELEtBQVgsRUFBcUJDLE9BQU9DLE9BQTVCO0FBQ0QsQ0ExRFksb0JBNERackMsWUE1RFksQyIsImZpbGUiOiJjb25mZXJlbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtoYW5kbGVBY3Rpb25zfSBmcm9tICdyZWR1eC1hY3Rpb25zJ1xuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vdHlwZXMvJ1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGxvYWRpbmc6IGZhbHNlLFxuICBhbGlhcyA6IFwiXCIsXG4gIGVudGVyQWxpYXMgOiBcIlwiLFxuICBhbGxvd0d1ZXN0IDogZmFsc2UgLFxuICBjb21wYW55SWQgOiAwICxcbiAgY29uZmVyZW5jZU5hbWUgOiBcIlwiLFxuICBpc0RvdCA6IGZhbHNlLFxuICBpc0xpdmUgOiBmYWxzZSAsXG4gIGlzUmVjb3JkIDogZmFsc2UgLFxuICBtY3VIb3N0IDogXCJcIixcbiAgcGFydGljaXBhbnROYW1lIDogXCJcIixcbiAgcGFzc3dvcmQgOiBcIlwiLFxuICByb2xlVHlwZSA6IFwiXCIsXG4gIHNpcGtleSA6IFwiXCIsXG4gIG5hdlRvOiBcIlwiLFxuICBhbGxvdzEwODBwIDogZmFsc2UsXG4gIGFuYWx5dGljc0VuYWJsZWQgOiBmYWxzZSxcbiAgYmFuZHdpZHRoSW4gOiAxMjgwLFxuICBiYW5kd2lkdGhPdXQgOiAxMjgwLFxuICBjYWxsVHlwZSA6IFwiXCIsXG4gIGNoYXRFbmFibGVkIDogZmFsc2UsXG4gIGN1cnJlbnRTZXJ2aWNlVHlwZSA6IFwiXCIsXG4gIGRpc3BsYXlOYW1lIDogXCJcIixcbiAgZXhwaXJlcyA6IFwiXCIsXG4gIGZlY2NFbmFibGVkIDogZmFsc2UsXG4gIGd1ZXN0c0NhblByZXNlbnQgOiBmYWxzZSxcbiAgcGFydGljaXBhbnRVdWlkIDogXCJcIixcbiAgcm9sZSA6IFwiXCIsXG4gIHJ0bXBFbmFibGVkIDogZmFsc2UsXG4gIHJ0c3BFbmFibGVkIDogZmFsc2UsXG4gIHJlZnJlc2hUb2tlblRpbWVyOiBmYWxzZSxcbiAgc2VydmljZVR5cGUgOiBcIlwiLFxuICB0b2tlbjogXCJcIixcbiAgY2FsbFR5cGU6IFwiXCIsXG4gIGNhbGxVdWlkOiBcIlwiLFxuICBwbGF5VXJsOiBcIlwiLFxuICBwdXNoVXJsOiBcIlwiLFxuICB1cmw6IFwiXCIsXG4gIGVycm9yTWVzc2FnZTogXCJcIixcbiAgYXBwSXNGb3JlZ3JvdW5kOiB0cnVlLFxuICBldmVudElkOiBcIlwiLFxuICBwcmVzZW50aW5nOiBmYWxzZSxcbiAgcHJlc2VudGF0ZXJVdWlkOiBcIlwiLFxuICBwcmVzZW50YXRlck5hbWU6IFwiXCIsXG4gIHByZXNlbnRhdGVyVXJpOiBcIlwiLFxuICBwcmVzZW50YXRpb25GcmFtZXM6IFtdXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUFjdGlvbnMoe1xuICBbdHlwZXMuQVNZTkNfVVNFUl9BVVRIX1NUQVJUXSAoc3RhdGUsIGFjdGlvbil7XG4gICAgcmV0dXJuIHsuLi5zdGF0ZSwgbG9hZGluZzogdHJ1ZSwgLi4uYWN0aW9uLnBheWxvYWR9XG4gIH0sXG4gIFt0eXBlcy5BU1lOQ19VU0VSX0FVVEhdIChzdGF0ZSwgYWN0aW9uKXtcbiAgICByZXR1cm4gey4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZCwgbG9hZGluZzpmYWxzZSB9XG4gIH0sXG4gIFt0eXBlcy5BU1lOQ19VU0VSX0ZBSUxFRF0gKHN0YXRlLCBhY3Rpb24pe1xuICAgIHJldHVybiB7Li4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkLCBsb2FkaW5nOmZhbHNlIH1cbiAgfSxcbiAgW3R5cGVzLk5BVl9GSU5JU0hdIChzdGF0ZSwgYWN0aW9uKXtcbiAgICByZXR1cm4gey4uLnN0YXRlLCBuYXZUbzpcIlwifVxuICB9LFxuICBbdHlwZXMuVE9BU1RfRklOSVNIXSAoc3RhdGUsIGFjdGlvbil7XG4gICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXJyb3JNZXNzYWdlOlwiXCJ9XG4gIH0sXG4gIFt0eXBlcy5NQUtFX0NBTExfU1RBUlRdIChzdGF0ZSwgYWN0aW9uKXtcbiAgICByZXR1cm4gey4uLnN0YXRlLCBsb2FkaW5nOiB0cnVlfVxuICB9LFxuICBbdHlwZXMuTUFLRV9DQUxMXSAoc3RhdGUsIGFjdGlvbil7XG4gICAgcmV0dXJuIHsuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQsIGxvYWRpbmc6IGZhbHNlfVxuICB9LFxuICBbdHlwZXMuTUFLRV9DQUxMX0ZBSUxFRF0gKHN0YXRlLCBhY3Rpb24pe1xuICAgIHJldHVybiB7Li4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlfVxuICB9LFxuICBbdHlwZXMuU0FWRV9TRVNTSU9OXSAoc3RhdGUsIGFjdGlvbil7XG4gICAgcmV0dXJuIHsuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWR9XG4gIH0sXG4gIFt0eXBlcy5SRUZSRVNIX1RPS0VOX1NUQVJUXSAoc3RhdGUsIGFjdGlvbil7XG4gICAgcmV0dXJuIHsuLi5zdGF0ZSwgcmVmcmVzaFRva2VuVGltZXI6IGZhbHNlfVxuICB9LFxuICBbdHlwZXMuUkVGUkVTSF9UT0tFTl0gKHN0YXRlLCBhY3Rpb24pe1xuICAgIHJldHVybiB7Li4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkLCByZWZyZXNoVG9rZW5UaW1lcjogdHJ1ZX1cbiAgfSxcbiAgW3R5cGVzLlJFRlJFU0hfVE9LRU5fRkFJTEVEXSAoc3RhdGUsIGFjdGlvbil7XG4gICAgcmV0dXJuIHsuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQsIHJlZnJlc2hUb2tlblRpbWVyOiB0cnVlfVxuICB9LFxuICBbdHlwZXMuRElTQ09OTkVDVF0gKHN0YXRlLCBhY3Rpb24pe1xuICAgIHJldHVybiB7Li4uc3RhdGUsIHRva2VuOiBcIlwiLCBwdXNoVXJsOiBcIlwiLCBwbGF5VXJsOiBcIlwifVxuICB9LFxuICBbdHlwZXMuQVBQX1BBR0VfT05TSE9XXSAoc3RhdGUsIGFjdGlvbil7XG4gICAgcmV0dXJuIHsuLi5zdGF0ZSwgYXBwSXNGb3JlZ3JvdW5kOiB0cnVlfVxuICB9LFxuICBbdHlwZXMuQVBQX1BBR0VfT05ISURFXSAoc3RhdGUsIGFjdGlvbil7XG4gICAgcmV0dXJuIHsuLi5zdGF0ZSwgYXBwSXNGb3JlZ3JvdW5kOiBmYWxzZX1cbiAgfSxcbiAgW3R5cGVzLlBSRVNFTlRBVElPTl9TVEFSVF0gKHN0YXRlLCBhY3Rpb24pe1xuICAgIHJldHVybiB7Li4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkfVxuICB9LFxuICBbdHlwZXMuUFJFU0VOVEFUSU9OX0ZSQU1FXSAoc3RhdGUsIGFjdGlvbil7XG4gICAgdmFyIHByZXNlbnRhdGlvbkZyYW1lcyA9IFt7IFxuICAgICAgaWQ6IGFjdGlvbi5wYXlsb2FkLmV2ZW50SWQsIFxuICAgICAgdXJsOiBhY3Rpb24ucGF5bG9hZC5wcmVzZW50YXRpb25GcmFtZVVybFxuICAgIH0sIC4uLnN0YXRlLnByZXNlbnRhdGlvbkZyYW1lc10uc2xpY2UoMCwzKVxuICAgIHJldHVybiB7Li4uc3RhdGUsIHByZXNlbnRhdGlvbkZyYW1lczpwcmVzZW50YXRpb25GcmFtZXN9XG4gIH0sXG4gIFt0eXBlcy5QUkVTRU5UQVRJT05fU1RPUF0gKHN0YXRlLCBhY3Rpb24pe1xuICAgIHJldHVybiB7Li4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkfVxuICB9XG5cbn0sIGluaXRpYWxTdGF0ZSkiXX0=