'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _actions = require('./../store/actions/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PNG_BTN_AUTO_HIDE = 13 * 1000;
var Index = (_dec = (0, _wepyRedux.connect)({
  loading: function loading(state) {
    return state.conference.loading;
  },
  displayName: function displayName(state) {
    return state.conference.displayName;
  },
  playUrl: function playUrl(state) {
    return state.conference.playUrl;
  },
  pushUrl: function pushUrl(state) {
    return state.conference.pushUrl;
  },
  alias: function alias(state) {
    return state.conference.alias;
  },
  enterAlias: function enterAlias(state) {
    return state.conference.enterAlias;
  },
  token: function token(state) {
    return state.conference.token;
  },
  mcuHost: function mcuHost(state) {
    return state.conference.mcuHost;
  },
  presenting: function presenting(state) {
    return state.conference.presenting;
  },
  presentaterName: function presentaterName(state) {
    return state.conference.presentaterName;
  },
  presentationFrames: function presentationFrames(state) {
    return state.conference.presentationFrames;
  },
  presentationFrameUrlLast: function presentationFrameUrlLast(state) {
    return state.conference.presentationFrameUrlLast;
  },
  password: function password(state) {
    return state.conference.password;
  },
  errorMessage: function errorMessage(state) {
    if (state.conference.errorMessage) {
      this.methods.showMessage(state.conference.errorMessage);
    }
    return state.conference.errorMessage;
  },
  pageShow: function pageShow(state) {
    return state.conference.appIsForeground;
  }
}, {
  asyncAuth: _actions.asyncAuth,
  makeCall: _actions.makeCall,
  refreshToken: _actions.refreshToken,
  showMessage: _actions.showMessage,
  disconnect: _actions.disconnect,
  showWxapp: _actions.showWxapp,
  hideWxapp: _actions.hideWxapp
}), _dec(_class = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: _this.enterAlias,
      usingComponents: {
        'van-button': '../vant/button/index',
        'van-field': '../vant/field/index',
        'van-cell': '../vant/cell/index',
        'van-cell-group': '../vant/cell-group/index',
        'van-icon': '../vant/icon/index',
        'van-loading': '../vant/loading/index'
      }
    }, _this.components = {}, _this.data = {
      ctxPusher: null,
      ctxPlayer: null,
      muteMic: false,
      cameraMute: false,
      fullScreen: true,
      pngBtnPanelTimer: null,
      imageRotateScale: 1.78
    }, _this.computed = {}, _this.watch = {
      fullScreen: function fullScreen(newValue, oldValue) {
        if (newValue !== oldValue) {
          if (newValue) _this.ctxPlayer.requestFullScreen();else _this.ctxPlayer.exitFullScreen();
        }
      },
      presenting: function presenting(newValue, oldValue) {
        _this.ctxPusher = _wepy2.default.createLivePusherContext('pusher');
        _this.ctxPlayer = _wepy2.default.createLivePlayerContext('player');
        _this.fullScreen = !newValue;
        _this.$apply();
      }
    }, _this.methods = {
      stopConf: function stopConf() {
        _this.ctxPusher.stop();
        _this.ctxPlayer.stop();
        _this.methods.disconnect({ alias: _this.alias,
          participantUuid: _this.participantUuid,
          callUuid: _this.callUuid,
          mcuHost: _this.mcuHost,
          token: _this.token });
        wx.navigateBack();
      },
      restartConf: function restartConf() {
        _this.methods.makeCall({ displayName: _this.displayName,
          pin: _this.password,
          mcuHost: _this.mcuHost,
          alias: _this.alias });
        _this.ctxPusher = _wepy2.default.createLivePusherContext('pusher');
        _this.ctxPlayer = _wepy2.default.createLivePlayerContext('player');
      },
      muteMic: function muteMic() {
        _this.muteMic = !_this.muteMic;
        // if (this.mute) this.ctxPlayer.mute()
        // else this.ctxPlayer.resume()
        _this.$apply();
      },
      pauseCamera: function pauseCamera() {
        _this.cameraMute = !_this.cameraMute;
        if (_this.cameraMute) _this.ctxPusher.pause();else _this.ctxPusher.resume();
      },
      switchCamera: function switchCamera() {
        _this.ctxPusher.switchCamera();
      },
      switchFullScreen: function switchFullScreen() {
        _this.fullScreen = !_this.fullScreen;
        _this.$apply();
      },
      switchBtnPanel: function switchBtnPanel() {
        if (_this.pngBtnPanelTimer) {
          clearTimeout(_this.pngBtnPanelTimer);
        }
        _this.pngBtnPanelTimer = setTimeout(function () {
          _this.pngBtnPanelTimer = null;
        }, PNG_BTN_AUTO_HIDE);
      },
      pusherStateChange: function pusherStateChange(e) {
        console.log('pusherStateChange', e);
        console.log('pusherStateChangeEnd');
      },
      playerStateChange: function playerStateChange(e) {
        console.log('playerStateChange', e);
        console.log('playerStateChangeEnd');
      },
      playerError: function playerError(e) {
        console.log('[player error]', e);
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var _this2 = this;

      console.log('[Page] onLoad');
      wx.setNavigationBarTitle({
        title: this.enterAlias
      });
      this.methods.makeCall({ displayName: this.displayName,
        pin: this.password,
        mcuHost: this.mcuHost,
        alias: this.alias });
      this.ctxPusher = _wepy2.default.createLivePusherContext('pusher');
      this.ctxPlayer = _wepy2.default.createLivePlayerContext('player');
      this.pngBtnPanelTimer = setTimeout(function () {
        _this2.pngBtnPanelTimer = null;
      }, PNG_BTN_AUTO_HIDE);

      wx.getSystemInfo({ success: function success(res) {
          _this2.imageRotateScale = res.windowHeight / res.windowWidth;
        } });
    }
  }, {
    key: 'onUnload',
    value: function onUnload() {
      console.log('[Page] onUnLoad');
      wx.closeSocket();
      this.methods.disconnect({ alias: this.alias,
        participantUuid: this.participantUuid,
        callUuid: this.callUuid,
        mcuHost: this.mcuHost,
        token: this.token });
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      console.log('[Page] onShow');
      // this.methods.showWxapp()
      // this.ctxPusher.resume()
      // this.ctxPlayer.resume()
      if (this.fullScreen) this.ctxPlayer.requestFullScreen();

      wx.setKeepScreenOn({ keepScreenOn: true,
        success: function success() {
          console.log('setKeepScreenOn success');
        },
        fail: function fail() {
          console.log('setKeepScreenOn fail');
        } });
    }
  }, {
    key: 'onHide',
    value: function onHide() {
      console.log('[Page] onHide');
      // this.methods.hideWxapp()
      // this.ctxPusher.pause()
      // this.ctxPlayer.pause()
    }
  }]);

  return Index;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/conferencing'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZlcmVuY2luZy5qcyJdLCJuYW1lcyI6WyJQTkdfQlROX0FVVE9fSElERSIsIkluZGV4IiwibG9hZGluZyIsInN0YXRlIiwiY29uZmVyZW5jZSIsImRpc3BsYXlOYW1lIiwicGxheVVybCIsInB1c2hVcmwiLCJhbGlhcyIsImVudGVyQWxpYXMiLCJ0b2tlbiIsIm1jdUhvc3QiLCJwcmVzZW50aW5nIiwicHJlc2VudGF0ZXJOYW1lIiwicHJlc2VudGF0aW9uRnJhbWVzIiwicHJlc2VudGF0aW9uRnJhbWVVcmxMYXN0IiwicGFzc3dvcmQiLCJlcnJvck1lc3NhZ2UiLCJtZXRob2RzIiwic2hvd01lc3NhZ2UiLCJwYWdlU2hvdyIsImFwcElzRm9yZWdyb3VuZCIsImFzeW5jQXV0aCIsIm1ha2VDYWxsIiwicmVmcmVzaFRva2VuIiwiZGlzY29ubmVjdCIsInNob3dXeGFwcCIsImhpZGVXeGFwcCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJjb21wb25lbnRzIiwiZGF0YSIsImN0eFB1c2hlciIsImN0eFBsYXllciIsIm11dGVNaWMiLCJjYW1lcmFNdXRlIiwiZnVsbFNjcmVlbiIsInBuZ0J0blBhbmVsVGltZXIiLCJpbWFnZVJvdGF0ZVNjYWxlIiwiY29tcHV0ZWQiLCJ3YXRjaCIsIm5ld1ZhbHVlIiwib2xkVmFsdWUiLCJyZXF1ZXN0RnVsbFNjcmVlbiIsImV4aXRGdWxsU2NyZWVuIiwid2VweSIsImNyZWF0ZUxpdmVQdXNoZXJDb250ZXh0IiwiY3JlYXRlTGl2ZVBsYXllckNvbnRleHQiLCIkYXBwbHkiLCJzdG9wQ29uZiIsInN0b3AiLCJwYXJ0aWNpcGFudFV1aWQiLCJjYWxsVXVpZCIsInd4IiwibmF2aWdhdGVCYWNrIiwicmVzdGFydENvbmYiLCJwaW4iLCJwYXVzZUNhbWVyYSIsInBhdXNlIiwicmVzdW1lIiwic3dpdGNoQ2FtZXJhIiwic3dpdGNoRnVsbFNjcmVlbiIsInN3aXRjaEJ0blBhbmVsIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInB1c2hlclN0YXRlQ2hhbmdlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJwbGF5ZXJTdGF0ZUNoYW5nZSIsInBsYXllckVycm9yIiwiZXZlbnRzIiwic2V0TmF2aWdhdGlvbkJhclRpdGxlIiwidGl0bGUiLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwiY2xvc2VTb2NrZXQiLCJzZXRLZWVwU2NyZWVuT24iLCJrZWVwU2NyZWVuT24iLCJmYWlsIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDRTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBUUEsSUFBTUEsb0JBQW9CLEtBQUssSUFBL0I7SUE0RHFCQyxLLFdBM0RwQix3QkFBUTtBQUNQQyxTQURPLG1CQUNFQyxLQURGLEVBQ1M7QUFDZCxXQUFPQSxNQUFNQyxVQUFOLENBQWlCRixPQUF4QjtBQUNELEdBSE07QUFJUEcsYUFKTyx1QkFJTUYsS0FKTixFQUlhO0FBQ2xCLFdBQU9BLE1BQU1DLFVBQU4sQ0FBaUJDLFdBQXhCO0FBQ0QsR0FOTTtBQU9QQyxTQVBPLG1CQU9FSCxLQVBGLEVBT1M7QUFDZCxXQUFPQSxNQUFNQyxVQUFOLENBQWlCRSxPQUF4QjtBQUNELEdBVE07QUFVUEMsU0FWTyxtQkFVRUosS0FWRixFQVVTO0FBQ2QsV0FBT0EsTUFBTUMsVUFBTixDQUFpQkcsT0FBeEI7QUFDRCxHQVpNO0FBYVBDLE9BYk8saUJBYUFMLEtBYkEsRUFhTztBQUNaLFdBQU9BLE1BQU1DLFVBQU4sQ0FBaUJJLEtBQXhCO0FBQ0QsR0FmTTtBQWdCUEMsWUFoQk8sc0JBZ0JLTixLQWhCTCxFQWdCWTtBQUNqQixXQUFPQSxNQUFNQyxVQUFOLENBQWlCSyxVQUF4QjtBQUNELEdBbEJNO0FBbUJQQyxPQW5CTyxpQkFtQkFQLEtBbkJBLEVBbUJPO0FBQ1osV0FBT0EsTUFBTUMsVUFBTixDQUFpQk0sS0FBeEI7QUFDRCxHQXJCTTtBQXNC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Q0QsU0FGZ0IsRUFBakI7QUFHRDs7OytCQUVVO0FBQ1RYLGNBQVFDLEdBQVIsQ0FBWSxpQkFBWjtBQUNBZixTQUFHMEIsV0FBSDtBQUNBLFdBQUs5RCxPQUFMLENBQWFPLFVBQWIsQ0FBd0IsRUFBQ2pCLE9BQU8sS0FBS0EsS0FBYjtBQUN0QjRDLHlCQUFpQixLQUFLQSxlQURBO0FBRXRCQyxrQkFBVSxLQUFLQSxRQUZPO0FBR3RCMUMsaUJBQVMsS0FBS0EsT0FIUTtBQUl0QkQsZUFBTyxLQUFLQSxLQUpVLEVBQXhCO0FBS0Q7Ozs2QkFDUTtBQUNQMEQsY0FBUUMsR0FBUixDQUFZLGVBQVo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFJLEtBQUtoQyxVQUFULEVBQXFCLEtBQUtILFNBQUwsQ0FBZVUsaUJBQWY7O0FBRXJCVSxTQUFHMkIsZUFBSCxDQUFtQixFQUFDQyxjQUFjLElBQWY7QUFDakJOLGlCQUFTLG1CQUFNO0FBQ2JSLGtCQUFRQyxHQUFSLENBQVkseUJBQVo7QUFDRCxTQUhnQjtBQUlqQmMsY0FBTSxnQkFBTTtBQUNWZixrQkFBUUMsR0FBUixDQUFZLHNCQUFaO0FBQ0QsU0FOZ0IsRUFBbkI7QUFPRDs7OzZCQUNRO0FBQ1BELGNBQVFDLEdBQVIsQ0FBWSxlQUFaO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7Ozs7RUF0SmdDdkIsZUFBS3NDLEk7a0JBQW5CbkYsSyIsImZpbGUiOiJjb25mZXJlbmNpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3dlcHktcmVkdXgnXG4gIGltcG9ydCB7YXN5bmNBdXRoLFxuICAgICAgICAgIG1ha2VDYWxsLFxuICAgICAgICAgIHNob3dNZXNzYWdlLFxuICAgICAgICAgIHJlZnJlc2hUb2tlbixcbiAgICAgICAgICBkaXNjb25uZWN0LFxuICAgICAgICAgIHNob3dXeGFwcCxcbiAgICAgICAgICBoaWRlV3hhcHBcbiAgICAgICAgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zLydcbiAgY29uc3QgUE5HX0JUTl9BVVRPX0hJREUgPSAxMyAqIDEwMDBcbiAgQGNvbm5lY3Qoe1xuICAgIGxvYWRpbmcgKHN0YXRlKSB7XG4gICAgICByZXR1cm4gc3RhdGUuY29uZmVyZW5jZS5sb2FkaW5nXG4gICAgfSxcbiAgICBkaXNwbGF5TmFtZSAoc3RhdGUpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5jb25mZXJlbmNlLmRpc3BsYXlOYW1lXG4gICAgfSxcbiAgICBwbGF5VXJsIChzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLmNvbmZlcmVuY2UucGxheVVybFxuICAgIH0sXG4gICAgcHVzaFVybCAoc3RhdGUpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5jb25mZXJlbmNlLnB1c2hVcmxcbiAgICB9LFxuICAgIGFsaWFzIChzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLmNvbmZlcmVuY2UuYWxpYXNcbiAgICB9LFxuICAgIGVudGVyQWxpYXMgKHN0YXRlKSB7XG4gICAgICByZXR1cm4gc3RhdGUuY29uZmVyZW5jZS5lbnRlckFsaWFzXG4gICAgfSxcbiAgICB0b2tlbiAoc3RhdGUpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5jb25mZXJlbmNlLnRva2VuXG4gICAgfSxcbiAgICBtY3VIb3N0IChzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLmNvbmZlcmVuY2UubWN1SG9zdFxuICAgIH0sXG4gICAgcHJlc2VudGluZyAoc3RhdGUpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5jb25mZXJlbmNlLnByZXNlbnRpbmdcbiAgICB9LFxuICAgIHByZXNlbnRhdGVyTmFtZSAoc3RhdGUpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5jb25mZXJlbmNlLnByZXNlbnRhdGVyTmFtZVxuICAgIH0sXG4gICAgcHJlc2VudGF0aW9uRnJhbWVzIChzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLmNvbmZlcmVuY2UucHJlc2VudGF0aW9uRnJhbWVzXG4gICAgfSxcbiAgICBwcmVzZW50YXRpb25GcmFtZVVybExhc3QgKHN0YXRlKSB7XG4gICAgICByZXR1cm4gc3RhdGUuY29uZmVyZW5jZS5wcmVzZW50YXRpb25GcmFtZVVybExhc3RcbiAgICB9LFxuICAgIHBhc3N3b3JkIChzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLmNvbmZlcmVuY2UucGFzc3dvcmRcbiAgICB9LFxuICAgIGVycm9yTWVzc2FnZSAoc3RhdGUpIHtcbiAgICAgIGlmIChzdGF0ZS5jb25mZXJlbmNlLmVycm9yTWVzc2FnZSkge1xuICAgICAgICB0aGlzLm1ldGhvZHMuc2hvd01lc3NhZ2Uoc3RhdGUuY29uZmVyZW5jZS5lcnJvck1lc3NhZ2UpXG4gICAgICB9XG4gICAgICByZXR1cm4gc3RhdGUuY29uZmVyZW5jZS5lcnJvck1lc3NhZ2VcbiAgICB9LFxuICAgIHBhZ2VTaG93IChzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLmNvbmZlcmVuY2UuYXBwSXNGb3JlZ3JvdW5kXG4gICAgfVxuICB9LCB7XG4gICAgYXN5bmNBdXRoLFxuICAgIG1ha2VDYWxsLFxuICAgIHJlZnJlc2hUb2tlbixcbiAgICBzaG93TWVzc2FnZSxcbiAgICBkaXNjb25uZWN0LFxuICAgIHNob3dXeGFwcCxcbiAgICBoaWRlV3hhcHBcbiAgfSlcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogdGhpcy5lbnRlckFsaWFzLFxuICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICd2YW4tYnV0dG9uJzogJy4uL3ZhbnQvYnV0dG9uL2luZGV4JyxcbiAgICAgICAgJ3Zhbi1maWVsZCc6ICcuLi92YW50L2ZpZWxkL2luZGV4JyxcbiAgICAgICAgJ3Zhbi1jZWxsJzogJy4uL3ZhbnQvY2VsbC9pbmRleCcsXG4gICAgICAgICd2YW4tY2VsbC1ncm91cCc6ICcuLi92YW50L2NlbGwtZ3JvdXAvaW5kZXgnLFxuICAgICAgICAndmFuLWljb24nOiAnLi4vdmFudC9pY29uL2luZGV4JyxcbiAgICAgICAgJ3Zhbi1sb2FkaW5nJzogJy4uL3ZhbnQvbG9hZGluZy9pbmRleCdcbiAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHt9XG5cbiAgICBkYXRhID0ge1xuICAgICAgY3R4UHVzaGVyOiBudWxsLFxuICAgICAgY3R4UGxheWVyOiBudWxsLFxuICAgICAgbXV0ZU1pYzogZmFsc2UsXG4gICAgICBjYW1lcmFNdXRlOiBmYWxzZSxcbiAgICAgIGZ1bGxTY3JlZW46IHRydWUsXG4gICAgICBwbmdCdG5QYW5lbFRpbWVyOiBudWxsLFxuICAgICAgaW1hZ2VSb3RhdGVTY2FsZTogMS43OFxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge31cblxuICAgIHdhdGNoID0ge1xuICAgICAgZnVsbFNjcmVlbjogKG5ld1ZhbHVlLCBvbGRWYWx1ZSkgPT4ge1xuICAgICAgICBpZiAobmV3VmFsdWUgIT09IG9sZFZhbHVlKSB7XG4gICAgICAgICAgaWYgKG5ld1ZhbHVlKSB0aGlzLmN0eFBsYXllci5yZXF1ZXN0RnVsbFNjcmVlbigpXG4gICAgICAgICAgZWxzZSB0aGlzLmN0eFBsYXllci5leGl0RnVsbFNjcmVlbigpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwcmVzZW50aW5nOiAobmV3VmFsdWUsIG9sZFZhbHVlKSA9PiB7XG4gICAgICAgIHRoaXMuY3R4UHVzaGVyID0gd2VweS5jcmVhdGVMaXZlUHVzaGVyQ29udGV4dCgncHVzaGVyJylcbiAgICAgICAgdGhpcy5jdHhQbGF5ZXIgPSB3ZXB5LmNyZWF0ZUxpdmVQbGF5ZXJDb250ZXh0KCdwbGF5ZXInKVxuICAgICAgICB0aGlzLmZ1bGxTY3JlZW4gPSAhbmV3VmFsdWVcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBzdG9wQ29uZjogKCkgPT4ge1xuICAgICAgICB0aGlzLmN0eFB1c2hlci5zdG9wKClcbiAgICAgICAgdGhpcy5jdHhQbGF5ZXIuc3RvcCgpXG4gICAgICAgIHRoaXMubWV0aG9kcy5kaXNjb25uZWN0KHthbGlhczogdGhpcy5hbGlhcyxcbiAgICAgICAgICBwYXJ0aWNpcGFudFV1aWQ6IHRoaXMucGFydGljaXBhbnRVdWlkLFxuICAgICAgICAgIGNhbGxVdWlkOiB0aGlzLmNhbGxVdWlkLFxuICAgICAgICAgIG1jdUhvc3Q6IHRoaXMubWN1SG9zdCxcbiAgICAgICAgICB0b2tlbjogdGhpcy50b2tlbn0pXG4gICAgICAgIHd4Lm5hdmlnYXRlQmFjaygpXG4gICAgICB9LFxuICAgICAgcmVzdGFydENvbmY6ICgpID0+IHtcbiAgICAgICAgdGhpcy5tZXRob2RzLm1ha2VDYWxsKHtkaXNwbGF5TmFtZTogdGhpcy5kaXNwbGF5TmFtZSxcbiAgICAgICAgICBwaW46IHRoaXMucGFzc3dvcmQsXG4gICAgICAgICAgbWN1SG9zdDogdGhpcy5tY3VIb3N0LFxuICAgICAgICAgIGFsaWFzOiB0aGlzLmFsaWFzfSlcbiAgICAgICAgdGhpcy5jdHhQdXNoZXIgPSB3ZXB5LmNyZWF0ZUxpdmVQdXNoZXJDb250ZXh0KCdwdXNoZXInKVxuICAgICAgICB0aGlzLmN0eFBsYXllciA9IHdlcHkuY3JlYXRlTGl2ZVBsYXllckNvbnRleHQoJ3BsYXllcicpXG4gICAgICB9LFxuICAgICAgbXV0ZU1pYzogKCkgPT4ge1xuICAgICAgICB0aGlzLm11dGVNaWMgPSAhdGhpcy5tdXRlTWljXG4gICAgICAgIC8vIGlmICh0aGlzLm11dGUpIHRoaXMuY3R4UGxheWVyLm11dGUoKVxuICAgICAgICAvLyBlbHNlIHRoaXMuY3R4UGxheWVyLnJlc3VtZSgpXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0sXG4gICAgICBwYXVzZUNhbWVyYTogKCkgPT4ge1xuICAgICAgICB0aGlzLmNhbWVyYU11dGUgPSAhdGhpcy5jYW1lcmFNdXRlXG4gICAgICAgIGlmICh0aGlzLmNhbWVyYU11dGUpIHRoaXMuY3R4UHVzaGVyLnBhdXNlKClcbiAgICAgICAgZWxzZSB0aGlzLmN0eFB1c2hlci5yZXN1bWUoKVxuICAgICAgfSxcbiAgICAgIHN3aXRjaENhbWVyYTogKCkgPT4ge1xuICAgICAgICB0aGlzLmN0eFB1c2hlci5zd2l0Y2hDYW1lcmEoKVxuICAgICAgfSxcbiAgICAgIHN3aXRjaEZ1bGxTY3JlZW46ICgpID0+IHtcbiAgICAgICAgdGhpcy5mdWxsU2NyZWVuID0gIXRoaXMuZnVsbFNjcmVlblxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9LFxuICAgICAgc3dpdGNoQnRuUGFuZWw6ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMucG5nQnRuUGFuZWxUaW1lcikge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnBuZ0J0blBhbmVsVGltZXIpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wbmdCdG5QYW5lbFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wbmdCdG5QYW5lbFRpbWVyID0gbnVsbFxuICAgICAgICB9LCBQTkdfQlROX0FVVE9fSElERSlcbiAgICAgIH0sXG4gICAgICBwdXNoZXJTdGF0ZUNoYW5nZTogKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3B1c2hlclN0YXRlQ2hhbmdlJywgZSlcbiAgICAgICAgY29uc29sZS5sb2coJ3B1c2hlclN0YXRlQ2hhbmdlRW5kJylcbiAgICAgIH0sXG4gICAgICBwbGF5ZXJTdGF0ZUNoYW5nZTogKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3BsYXllclN0YXRlQ2hhbmdlJywgZSlcbiAgICAgICAgY29uc29sZS5sb2coJ3BsYXllclN0YXRlQ2hhbmdlRW5kJylcbiAgICAgIH0sXG4gICAgICBwbGF5ZXJFcnJvcjogKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ1twbGF5ZXIgZXJyb3JdJywgZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7fVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgY29uc29sZS5sb2coJ1tQYWdlXSBvbkxvYWQnKVxuICAgICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcbiAgICAgICAgdGl0bGU6IHRoaXMuZW50ZXJBbGlhc1xuICAgICAgfSlcbiAgICAgIHRoaXMubWV0aG9kcy5tYWtlQ2FsbCh7ZGlzcGxheU5hbWU6IHRoaXMuZGlzcGxheU5hbWUsXG4gICAgICAgIHBpbjogdGhpcy5wYXNzd29yZCxcbiAgICAgICAgbWN1SG9zdDogdGhpcy5tY3VIb3N0LFxuICAgICAgICBhbGlhczogdGhpcy5hbGlhc30pXG4gICAgICB0aGlzLmN0eFB1c2hlciA9IHdlcHkuY3JlYXRlTGl2ZVB1c2hlckNvbnRleHQoJ3B1c2hlcicpXG4gICAgICB0aGlzLmN0eFBsYXllciA9IHdlcHkuY3JlYXRlTGl2ZVBsYXllckNvbnRleHQoJ3BsYXllcicpXG4gICAgICB0aGlzLnBuZ0J0blBhbmVsVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5wbmdCdG5QYW5lbFRpbWVyID0gbnVsbFxuICAgICAgfSwgUE5HX0JUTl9BVVRPX0hJREUpXG5cbiAgICAgIHd4LmdldFN5c3RlbUluZm8oe3N1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgIHRoaXMuaW1hZ2VSb3RhdGVTY2FsZSA9IHJlcy53aW5kb3dIZWlnaHQgLyByZXMud2luZG93V2lkdGhcbiAgICAgIH19KVxuICAgIH1cblxuICAgIG9uVW5sb2FkKCkge1xuICAgICAgY29uc29sZS5sb2coJ1tQYWdlXSBvblVuTG9hZCcpXG4gICAgICB3eC5jbG9zZVNvY2tldCgpXG4gICAgICB0aGlzLm1ldGhvZHMuZGlzY29ubmVjdCh7YWxpYXM6IHRoaXMuYWxpYXMsXG4gICAgICAgIHBhcnRpY2lwYW50VXVpZDogdGhpcy5wYXJ0aWNpcGFudFV1aWQsXG4gICAgICAgIGNhbGxVdWlkOiB0aGlzLmNhbGxVdWlkLFxuICAgICAgICBtY3VIb3N0OiB0aGlzLm1jdUhvc3QsXG4gICAgICAgIHRva2VuOiB0aGlzLnRva2VufSlcbiAgICB9XG4gICAgb25TaG93KCkge1xuICAgICAgY29uc29sZS5sb2coJ1tQYWdlXSBvblNob3cnKVxuICAgICAgLy8gdGhpcy5tZXRob2RzLnNob3dXeGFwcCgpXG4gICAgICAvLyB0aGlzLmN0eFB1c2hlci5yZXN1bWUoKVxuICAgICAgLy8gdGhpcy5jdHhQbGF5ZXIucmVzdW1lKClcbiAgICAgIGlmICh0aGlzLmZ1bGxTY3JlZW4pIHRoaXMuY3R4UGxheWVyLnJlcXVlc3RGdWxsU2NyZWVuKClcblxuICAgICAgd3guc2V0S2VlcFNjcmVlbk9uKHtrZWVwU2NyZWVuT246IHRydWUsXG4gICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnc2V0S2VlcFNjcmVlbk9uIHN1Y2Nlc3MnKVxuICAgICAgICB9LFxuICAgICAgICBmYWlsOiAoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3NldEtlZXBTY3JlZW5PbiBmYWlsJylcbiAgICAgICAgfX0pXG4gICAgfVxuICAgIG9uSGlkZSgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdbUGFnZV0gb25IaWRlJylcbiAgICAgIC8vIHRoaXMubWV0aG9kcy5oaWRlV3hhcHAoKVxuICAgICAgLy8gdGhpcy5jdHhQdXNoZXIucGF1c2UoKVxuICAgICAgLy8gdGhpcy5jdHhQbGF5ZXIucGF1c2UoKVxuICAgIH1cbiAgfVxuIl19