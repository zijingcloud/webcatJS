'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var hasOwn = {}.hasOwnProperty;

module.exports = function classNames() {
  var classes = [];

  for (var i = 0; i < arguments.length; i++) {
    var arg = arguments[i];
    if (!arg) continue;

    var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);

    if (argType === 'string' || argType === 'number') {
      classes.push(arg);
    } else if (Array.isArray(arg) && arg.length) {
      var inner = classNames.apply(null, arg);
      if (inner) {
        classes.push(inner);
      }
    } else if (argType === 'object') {
      for (var key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(' ');
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzbmFtZXMuanMiXSwibmFtZXMiOlsiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJtb2R1bGUiLCJleHBvcnRzIiwiY2xhc3NOYW1lcyIsImNsYXNzZXMiLCJpIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJnIiwiYXJnVHlwZSIsInB1c2giLCJBcnJheSIsImlzQXJyYXkiLCJpbm5lciIsImFwcGx5Iiwia2V5IiwiY2FsbCIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxJQUFNQSxTQUFTLEdBQUdDLGNBQWxCOztBQUVBQyxPQUFPQyxPQUFQLEdBQWlCLFNBQVNDLFVBQVQsR0FBc0I7QUFDckMsTUFBTUMsVUFBVSxFQUFoQjs7QUFFQSxPQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUMsVUFBVUMsTUFBOUIsRUFBc0NGLEdBQXRDLEVBQTJDO0FBQ3pDLFFBQU1HLE1BQU1GLFVBQVVELENBQVYsQ0FBWjtBQUNBLFFBQUksQ0FBQ0csR0FBTCxFQUFVOztBQUVWLFFBQU1DLGlCQUFpQkQsR0FBakIseUNBQWlCQSxHQUFqQixDQUFOOztBQUVBLFFBQUlDLFlBQVksUUFBWixJQUF3QkEsWUFBWSxRQUF4QyxFQUFrRDtBQUNoREwsY0FBUU0sSUFBUixDQUFhRixHQUFiO0FBQ0QsS0FGRCxNQUVPLElBQUlHLE1BQU1DLE9BQU4sQ0FBY0osR0FBZCxLQUFzQkEsSUFBSUQsTUFBOUIsRUFBc0M7QUFDM0MsVUFBTU0sUUFBUVYsV0FBV1csS0FBWCxDQUFpQixJQUFqQixFQUF1Qk4sR0FBdkIsQ0FBZDtBQUNBLFVBQUlLLEtBQUosRUFBVztBQUNUVCxnQkFBUU0sSUFBUixDQUFhRyxLQUFiO0FBQ0Q7QUFDRixLQUxNLE1BS0EsSUFBSUosWUFBWSxRQUFoQixFQUEwQjtBQUMvQixXQUFLLElBQU1NLEdBQVgsSUFBa0JQLEdBQWxCLEVBQXVCO0FBQ3JCLFlBQUlULE9BQU9pQixJQUFQLENBQVlSLEdBQVosRUFBaUJPLEdBQWpCLEtBQXlCUCxJQUFJTyxHQUFKLENBQTdCLEVBQXVDO0FBQ3JDWCxrQkFBUU0sSUFBUixDQUFhSyxHQUFiO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7O0FBRUQsU0FBT1gsUUFBUWEsSUFBUixDQUFhLEdBQWIsQ0FBUDtBQUNELENBMUJEIiwiZmlsZSI6ImNsYXNzbmFtZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjbGFzc05hbWVzKCkge1xuICBjb25zdCBjbGFzc2VzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBhcmcgPSBhcmd1bWVudHNbaV07XG4gICAgaWYgKCFhcmcpIGNvbnRpbnVlO1xuXG4gICAgY29uc3QgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cbiAgICBpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGNsYXNzZXMucHVzaChhcmcpO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpICYmIGFyZy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGlubmVyID0gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuICAgICAgaWYgKGlubmVyKSB7XG4gICAgICAgIGNsYXNzZXMucHVzaChpbm5lcik7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gYXJnKSB7XG4gICAgICAgIGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcbiAgICAgICAgICBjbGFzc2VzLnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcbn07XG4iXX0=