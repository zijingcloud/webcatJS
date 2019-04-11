'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vendors = require('./vendor/vendors.js');

var _vendors2 = _interopRequireDefault(_vendors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var vendorName = 'zijing';
if (!_vendors2.default[vendorName]) throw new Error('[Config] Not found vendorName equal to ' + vendorName);
var config = {
  logoPath: _vendors2.default[vendorName].logoPath,
  copyRight: _vendors2.default[vendorName].copyRight,
  apiServer: _vendors2.default[vendorName].apiServer
};
exports.default = config;

/********
打包小程序步骤：
1. 更改 vendorName
2. 运行 wepy build --watch
3. 打开微信开发者工具对应项目
4. 确认无误后上传代码。
注，每个客户的小程序需要单独起一个项目，因为APPID保存于微信开发者工具的项目中。*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6WyJ2ZW5kb3JOYW1lIiwidmVuZG9ycyIsIkVycm9yIiwiY29uZmlnIiwibG9nb1BhdGgiLCJjb3B5UmlnaHQiLCJhcGlTZXJ2ZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7QUFDQSxJQUFNQSxhQUFhLFFBQW5CO0FBQ0EsSUFBRyxDQUFDQyxrQkFBUUQsVUFBUixDQUFKLEVBQXlCLE1BQU0sSUFBSUUsS0FBSiw2Q0FBb0RGLFVBQXBELENBQU47QUFDekIsSUFBTUcsU0FBUztBQUNiQyxZQUFVSCxrQkFBUUQsVUFBUixFQUFvQkksUUFEakI7QUFFYkMsYUFBV0osa0JBQVFELFVBQVIsRUFBb0JLLFNBRmxCO0FBR2JDLGFBQVdMLGtCQUFRRCxVQUFSLEVBQW9CTTtBQUhsQixDQUFmO2tCQUtlSCxNOztBQUVmIiwiZmlsZSI6ImNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB2ZW5kb3JzIGZyb20gJy4vdmVuZG9yL3ZlbmRvcnMnXG5jb25zdCB2ZW5kb3JOYW1lID0gJ3ppamluZyc7XG5pZighdmVuZG9yc1t2ZW5kb3JOYW1lXSkgdGhyb3cgbmV3IEVycm9yKGBbQ29uZmlnXSBOb3QgZm91bmQgdmVuZG9yTmFtZSBlcXVhbCB0byAke3ZlbmRvck5hbWV9YClcbmNvbnN0IGNvbmZpZyA9IHtcbiAgbG9nb1BhdGg6IHZlbmRvcnNbdmVuZG9yTmFtZV0ubG9nb1BhdGgsXG4gIGNvcHlSaWdodDogdmVuZG9yc1t2ZW5kb3JOYW1lXS5jb3B5UmlnaHQsXG4gIGFwaVNlcnZlcjogdmVuZG9yc1t2ZW5kb3JOYW1lXS5hcGlTZXJ2ZXJcbn1cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ1xuXG4vKioqKioqKipcbuaJk+WMheWwj+eoi+W6j+atpemqpO+8mlxuMS4g5pu05pS5IHZlbmRvck5hbWVcbjIuIOi/kOihjCB3ZXB5IGJ1aWxkIC0td2F0Y2hcbjMuIOaJk+W8gOW+ruS/oeW8gOWPkeiAheW3peWFt+WvueW6lOmhueebrlxuNC4g56Gu6K6k5peg6K+v5ZCO5LiK5Lyg5Luj56CB44CCXG7ms6jvvIzmr4/kuKrlrqLmiLfnmoTlsI/nqIvluo/pnIDopoHljZXni6zotbfkuIDkuKrpobnnm67vvIzlm6DkuLpBUFBJROS/neWtmOS6juW+ruS/oeW8gOWPkeiAheW3peWFt+eahOmhueebruS4reOAgiovXG4iXX0=