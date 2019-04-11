'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configStore;

var _redux = require('./../npm/redux/lib/index.js');

var _reduxPromise = require('./../npm/redux-promise/lib/index.js');

var _reduxPromise2 = _interopRequireDefault(_reduxPromise);

var _reducers = require('./reducers/index.js');

var _reducers2 = _interopRequireDefault(_reducers);

var _reduxLogger = require('./../npm/redux-logger/dist/redux-logger.js');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configStore() {
  var store = (0, _redux.createStore)(_reducers2.default, (0, _redux.applyMiddleware)(_reduxPromise2.default, _reduxLogger2.default));
  return store;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNvbmZpZ1N0b3JlIiwic3RvcmUiLCJyb290UmVkdWNlciIsInByb21pc2VNaWRkbGV3YXJlIiwibG9nZ2VyIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFNd0JBLFc7O0FBTnhCOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBR2UsU0FBU0EsV0FBVCxHQUF3QjtBQUNyQyxNQUFNQyxRQUFRLHdCQUFZQyxrQkFBWixFQUF5Qiw0QkFBZ0JDLHNCQUFoQixFQUFtQ0MscUJBQW5DLENBQXpCLENBQWQ7QUFDQSxTQUFPSCxLQUFQO0FBQ0QiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgcHJvbWlzZU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtcHJvbWlzZSdcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuL3JlZHVjZXJzJ1xuaW1wb3J0IGxvZ2dlciBmcm9tICdyZWR1eC1sb2dnZXInXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlnU3RvcmUgKCkge1xuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBhcHBseU1pZGRsZXdhcmUocHJvbWlzZU1pZGRsZXdhcmUsIGxvZ2dlcikpXG4gIHJldHVybiBzdG9yZVxufSJdfQ==