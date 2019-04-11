'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('./../../npm/redux/lib/index.js');

var _counter = require('./counter.js');

var _counter2 = _interopRequireDefault(_counter);

var _conference = require('./conference.js');

var _conference2 = _interopRequireDefault(_conference);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  counter: _counter2.default,
  conference: _conference2.default
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNvdW50ZXIiLCJjb25mZXJlbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBRWUsNEJBQWdCO0FBQzdCQSw0QkFENkI7QUFFN0JDO0FBRjZCLENBQWhCLEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCBjb3VudGVyIGZyb20gJy4vY291bnRlcidcbmltcG9ydCBjb25mZXJlbmNlIGZyb20gJy4vY29uZmVyZW5jZSdcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgY291bnRlcixcbiAgY29uZmVyZW5jZVxufSkiXX0=