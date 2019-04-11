'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _login = require('./../components/login.js');

var _login2 = _interopRequireDefault(_login);

var _actions = require('./../store/actions/index.js');

var _config = require('./../config.js');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_dec = (0, _wepyRedux.connect)({
  loading: function loading(state) {
    return state.conference.loading;
  },
  navTo: function navTo(state) {
    if (state.conference.navTo === 'conferencing') {
      this.methods.navTo('conferencing');
    }
    return state.conference.navTo;
  },
  errorMessage: function errorMessage(state) {
    if (state.conference.errorMessage) {
      this.methods.showMessage(state.conference.errorMessage);
    }
    return state.conference.errorMessage;
  }
}, {
  asyncAuth: _actions.asyncAuth,
  navTo: _actions.navTo,
  showMessage: _actions.showMessage
}), _dec(_class = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      // this.methods.navTo('conferencing')
      wx.setKeepScreenOn({ keepScreenOn: true,
        success: function success() {
          console.log('setKeepScreenOn success');
        },
        fail: function fail() {
          console.log('setKeepScreenOn fail');
        } });
    }
  }]);

  return Index;
}(_wepy2.default.page)) || _class);

var _initialiseProps = function _initialiseProps() {
  this.config = {
    navigationBarTitleText: '视频会议',
    usingComponents: {
      'van-button': '../vant/button/index',
      'van-field': '../vant/field/index',
      'van-cell': '../vant/cell/index',
      'van-cell-group': '../vant/cell-group/index',
      'van-icon': '../vant/icon/index',
      'van-loading': '../vant/loading/index'
    }
  };
  this.$repeat = {};
  this.$props = { "login": { "xmlns:v-bind": "", "v-bind:conference.sync": "conference", "xmlns:v-on": "" } };
  this.$events = { "login": { "v-on:conference-request": "conferenceRequest" } };
  this.components = {
    login: _login2.default
  };
  this.data = {
    conference: {
      alias: '',
      password: '',
      displayName: ''
    },
    userInfo: {
      nickName: '加载中...'
    },
    configuration: _config2.default
  };
  this.computed = {
    now: function now() {
      return +new Date();
    }
  };
  this.methods = {
    block: function block() {
      console.log('block click');
    },
    conferenceRequest: function conferenceRequest() {
      this.methods.asyncAuth(arguments.length <= 0 ? undefined : arguments[0]);
    }
  };
  this.events = {};
};


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwibG9hZGluZyIsInN0YXRlIiwiY29uZmVyZW5jZSIsIm5hdlRvIiwibWV0aG9kcyIsImVycm9yTWVzc2FnZSIsInNob3dNZXNzYWdlIiwiYXN5bmNBdXRoIiwid3giLCJzZXRLZWVwU2NyZWVuT24iLCJrZWVwU2NyZWVuT24iLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsImZhaWwiLCJ3ZXB5IiwicGFnZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJsb2dpbiIsIkxvZ2luIiwiZGF0YSIsImFsaWFzIiwicGFzc3dvcmQiLCJkaXNwbGF5TmFtZSIsInVzZXJJbmZvIiwibmlja05hbWUiLCJjb25maWd1cmF0aW9uIiwiY29tcHV0ZWQiLCJub3ciLCJEYXRlIiwiYmxvY2siLCJjb25mZXJlbmNlUmVxdWVzdCIsImV2ZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDRTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQXdCcUJBLEssV0F0QnBCLHdCQUFRO0FBQ1BDLFNBRE8sbUJBQ0VDLEtBREYsRUFDUztBQUNkLFdBQU9BLE1BQU1DLFVBQU4sQ0FBaUJGLE9BQXhCO0FBQ0QsR0FITTtBQUlQRyxPQUpPLGlCQUlBRixLQUpBLEVBSU87QUFDWixRQUFJQSxNQUFNQyxVQUFOLENBQWlCQyxLQUFqQixLQUEyQixjQUEvQixFQUErQztBQUM3QyxXQUFLQyxPQUFMLENBQWFELEtBQWIsQ0FBbUIsY0FBbkI7QUFDRDtBQUNELFdBQU9GLE1BQU1DLFVBQU4sQ0FBaUJDLEtBQXhCO0FBQ0QsR0FUTTtBQVVQRSxjQVZPLHdCQVVPSixLQVZQLEVBVWM7QUFDbkIsUUFBSUEsTUFBTUMsVUFBTixDQUFpQkcsWUFBckIsRUFBbUM7QUFDakMsV0FBS0QsT0FBTCxDQUFhRSxXQUFiLENBQXlCTCxNQUFNQyxVQUFOLENBQWlCRyxZQUExQztBQUNEO0FBQ0QsV0FBT0osTUFBTUMsVUFBTixDQUFpQkcsWUFBeEI7QUFDRDtBQWZNLENBQVIsRUFnQkU7QUFDREUsK0JBREM7QUFFREosdUJBRkM7QUFHREc7QUFIQyxDQWhCRixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQXNFVTtBQUNMO0FBQ0ZFLFNBQUdDLGVBQUgsQ0FBbUIsRUFBQ0MsY0FBYyxJQUFmO0FBQ2pCQyxpQkFBUyxtQkFBTTtBQUNiQyxrQkFBUUMsR0FBUixDQUFZLHlCQUFaO0FBQ0QsU0FIZ0I7QUFJakJDLGNBQU0sZ0JBQU07QUFDVkYsa0JBQVFDLEdBQVIsQ0FBWSxzQkFBWjtBQUNELFNBTmdCLEVBQW5CO0FBT0Q7Ozs7RUF6RGdDRSxlQUFLQyxJOzs7T0FDdENDLE0sR0FBUztBQUNQQyw0QkFBd0IsTUFEakI7QUFFUEMscUJBQWlCO0FBQ2Ysb0JBQWMsc0JBREM7QUFFZixtQkFBYSxxQkFGRTtBQUdmLGtCQUFZLG9CQUhHO0FBSWYsd0JBQWtCLDBCQUpIO0FBS2Ysa0JBQVksb0JBTEc7QUFNZixxQkFBZTtBQU5BO0FBRlYsRztPQVdWQyxPLEdBQVUsRTtPQUNiQyxNLEdBQVMsRUFBQyxTQUFRLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsMEJBQXlCLFlBQTVDLEVBQXlELGNBQWEsRUFBdEUsRUFBVCxFO09BQ1RDLE8sR0FBVSxFQUFDLFNBQVEsRUFBQywyQkFBMEIsbUJBQTNCLEVBQVQsRTtPQUNUQyxVLEdBQWE7QUFDUkMsV0FBT0M7QUFEQyxHO09BSVZDLEksR0FBTztBQUNMeEIsZ0JBQVk7QUFDVnlCLGFBQU8sRUFERztBQUVWQyxnQkFBVSxFQUZBO0FBR1ZDLG1CQUFhO0FBSEgsS0FEUDtBQU1MQyxjQUFVO0FBQ1JDLGdCQUFVO0FBREYsS0FOTDtBQVNMQyxtQkFBZWY7QUFUVixHO09BWVBnQixRLEdBQVc7QUFDVEMsT0FEUyxpQkFDRjtBQUNMLGFBQU8sQ0FBQyxJQUFJQyxJQUFKLEVBQVI7QUFDRDtBQUhRLEc7T0FNWC9CLE8sR0FBVTtBQUNSZ0MsU0FEUSxtQkFDQTtBQUNOeEIsY0FBUUMsR0FBUixDQUFZLGFBQVo7QUFDRCxLQUhPO0FBSVJ3QixxQkFKUSwrQkFJb0I7QUFDMUIsV0FBS2pDLE9BQUwsQ0FBYUcsU0FBYjtBQUNEO0FBTk8sRztPQVNWK0IsTSxHQUFTLEU7OztrQkE5Q1V2QyxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICd3ZXB5LXJlZHV4J1xuICBpbXBvcnQgTG9naW4gZnJvbSAnLi4vY29tcG9uZW50cy9sb2dpbidcbiAgaW1wb3J0IHthc3luY0F1dGgsIG5hdlRvLCBzaG93TWVzc2FnZX0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy8nXG4gIGltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnLmpzJ1xuXG4gIEBjb25uZWN0KHtcbiAgICBsb2FkaW5nIChzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLmNvbmZlcmVuY2UubG9hZGluZ1xuICAgIH0sXG4gICAgbmF2VG8gKHN0YXRlKSB7XG4gICAgICBpZiAoc3RhdGUuY29uZmVyZW5jZS5uYXZUbyA9PT0gJ2NvbmZlcmVuY2luZycpIHtcbiAgICAgICAgdGhpcy5tZXRob2RzLm5hdlRvKCdjb25mZXJlbmNpbmcnKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHN0YXRlLmNvbmZlcmVuY2UubmF2VG9cbiAgICB9LFxuICAgIGVycm9yTWVzc2FnZSAoc3RhdGUpIHtcbiAgICAgIGlmIChzdGF0ZS5jb25mZXJlbmNlLmVycm9yTWVzc2FnZSkge1xuICAgICAgICB0aGlzLm1ldGhvZHMuc2hvd01lc3NhZ2Uoc3RhdGUuY29uZmVyZW5jZS5lcnJvck1lc3NhZ2UpXG4gICAgICB9XG4gICAgICByZXR1cm4gc3RhdGUuY29uZmVyZW5jZS5lcnJvck1lc3NhZ2VcbiAgICB9XG4gIH0sIHtcbiAgICBhc3luY0F1dGgsXG4gICAgbmF2VG8sXG4gICAgc2hvd01lc3NhZ2VcbiAgfSlcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+inhumikeS8muiuricsXG4gICAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICAgJ3Zhbi1idXR0b24nOiAnLi4vdmFudC9idXR0b24vaW5kZXgnLFxuICAgICAgICAndmFuLWZpZWxkJzogJy4uL3ZhbnQvZmllbGQvaW5kZXgnLFxuICAgICAgICAndmFuLWNlbGwnOiAnLi4vdmFudC9jZWxsL2luZGV4JyxcbiAgICAgICAgJ3Zhbi1jZWxsLWdyb3VwJzogJy4uL3ZhbnQvY2VsbC1ncm91cC9pbmRleCcsXG4gICAgICAgICd2YW4taWNvbic6ICcuLi92YW50L2ljb24vaW5kZXgnLFxuICAgICAgICAndmFuLWxvYWRpbmcnOiAnLi4vdmFudC9sb2FkaW5nL2luZGV4J1xuICAgICAgfVxuICAgIH1cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wibG9naW5cIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmNvbmZlcmVuY2Uuc3luY1wiOlwiY29uZmVyZW5jZVwiLFwieG1sbnM6di1vblwiOlwiXCJ9fTtcclxuJGV2ZW50cyA9IHtcImxvZ2luXCI6e1widi1vbjpjb25mZXJlbmNlLXJlcXVlc3RcIjpcImNvbmZlcmVuY2VSZXF1ZXN0XCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBsb2dpbjogTG9naW5cbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgY29uZmVyZW5jZToge1xuICAgICAgICBhbGlhczogJycsXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgZGlzcGxheU5hbWU6ICcnXG4gICAgICB9LFxuICAgICAgdXNlckluZm86IHtcbiAgICAgICAgbmlja05hbWU6ICfliqDovb3kuK0uLi4nXG4gICAgICB9LFxuICAgICAgY29uZmlndXJhdGlvbjogY29uZmlnXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBub3cgKCkge1xuICAgICAgICByZXR1cm4gK25ldyBEYXRlKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgYmxvY2soKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdibG9jayBjbGljaycpXG4gICAgICB9LFxuICAgICAgY29uZmVyZW5jZVJlcXVlc3QgKC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5tZXRob2RzLmFzeW5jQXV0aChhcmdzWzBdKVxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHt9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIC8vIHRoaXMubWV0aG9kcy5uYXZUbygnY29uZmVyZW5jaW5nJylcbiAgICAgIHd4LnNldEtlZXBTY3JlZW5Pbih7a2VlcFNjcmVlbk9uOiB0cnVlLFxuICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3NldEtlZXBTY3JlZW5PbiBzdWNjZXNzJylcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogKCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXRLZWVwU2NyZWVuT24gZmFpbCcpXG4gICAgICAgIH19KVxuICAgIH1cbiAgfVxuIl19