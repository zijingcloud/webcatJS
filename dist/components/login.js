'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_wepy$component) {
  _inherits(Login, _wepy$component);

  function Login() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Login);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      conference: { type: Object, twoWay: true, default: { alias: '', displayName: '', password: '' } }
    }, _this.methods = {
      enterRoom: function enterRoom(e) {
        this.$emit('conference-request', this.conference);
      },
      changeAlias: function changeAlias(e) {
        this.conference = _extends({}, this.conference, { alias: e.detail });
      },
      changePwd: function changePwd(e) {
        this.conference = _extends({}, this.conference, { password: e.detail });
      },
      changeDisplayName: function changeDisplayName(e) {
        this.conference = _extends({}, this.conference, { displayName: e.detail });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Login;
}(_wepy2.default.component);

exports.default = Login;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbIkxvZ2luIiwicHJvcHMiLCJjb25mZXJlbmNlIiwidHlwZSIsIk9iamVjdCIsInR3b1dheSIsImRlZmF1bHQiLCJhbGlhcyIsImRpc3BsYXlOYW1lIiwicGFzc3dvcmQiLCJtZXRob2RzIiwiZW50ZXJSb29tIiwiZSIsIiRlbWl0IiwiY2hhbmdlQWxpYXMiLCJkZXRhaWwiLCJjaGFuZ2VQd2QiLCJjaGFuZ2VEaXNwbGF5TmFtZSIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsSyxHQUFRO0FBQ05DLGtCQUFZLEVBQUVDLE1BQU1DLE1BQVIsRUFBZ0JDLFFBQVEsSUFBeEIsRUFBOEJDLFNBQVMsRUFBRUMsT0FBTyxFQUFULEVBQWFDLGFBQWEsRUFBMUIsRUFBOEJDLFVBQVUsRUFBeEMsRUFBdkM7QUFETixLLFFBR1JDLE8sR0FBVTtBQUNSQyxlQURRLHFCQUNFQyxDQURGLEVBQ0s7QUFDWCxhQUFLQyxLQUFMLENBQVcsb0JBQVgsRUFBaUMsS0FBS1gsVUFBdEM7QUFDRCxPQUhPO0FBSVJZLGlCQUpRLHVCQUlJRixDQUpKLEVBSU87QUFDYixhQUFLVixVQUFMLGdCQUFzQixLQUFLQSxVQUEzQixJQUF1Q0ssT0FBT0ssRUFBRUcsTUFBaEQ7QUFDRCxPQU5PO0FBT1JDLGVBUFEscUJBT0VKLENBUEYsRUFPSztBQUNYLGFBQUtWLFVBQUwsZ0JBQXNCLEtBQUtBLFVBQTNCLElBQXVDTyxVQUFVRyxFQUFFRyxNQUFuRDtBQUNELE9BVE87QUFVUkUsdUJBVlEsNkJBVVVMLENBVlYsRUFVYTtBQUNuQixhQUFLVixVQUFMLGdCQUFzQixLQUFLQSxVQUEzQixJQUF1Q00sYUFBYUksRUFBRUcsTUFBdEQ7QUFDRDtBQVpPLEs7Ozs7RUFKdUJHLGVBQUtDLFM7O2tCQUFuQm5CLEsiLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW4gZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgcHJvcHMgPSB7XG4gICAgICBjb25mZXJlbmNlOiB7IHR5cGU6IE9iamVjdCwgdHdvV2F5OiB0cnVlLCBkZWZhdWx0OiB7IGFsaWFzOiAnJywgZGlzcGxheU5hbWU6ICcnLCBwYXNzd29yZDogJycgfSB9XG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBlbnRlclJvb20oZSkge1xuICAgICAgICB0aGlzLiRlbWl0KCdjb25mZXJlbmNlLXJlcXVlc3QnLCB0aGlzLmNvbmZlcmVuY2UpXG4gICAgICB9LFxuICAgICAgY2hhbmdlQWxpYXMoZSkge1xuICAgICAgICB0aGlzLmNvbmZlcmVuY2UgPSB7Li4udGhpcy5jb25mZXJlbmNlLCBhbGlhczogZS5kZXRhaWx9XG4gICAgICB9LFxuICAgICAgY2hhbmdlUHdkKGUpIHtcbiAgICAgICAgdGhpcy5jb25mZXJlbmNlID0gey4uLnRoaXMuY29uZmVyZW5jZSwgcGFzc3dvcmQ6IGUuZGV0YWlsfVxuICAgICAgfSxcbiAgICAgIGNoYW5nZURpc3BsYXlOYW1lKGUpIHtcbiAgICAgICAgdGhpcy5jb25mZXJlbmNlID0gey4uLnRoaXMuY29uZmVyZW5jZSwgZGlzcGxheU5hbWU6IGUuZGV0YWlsfVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19