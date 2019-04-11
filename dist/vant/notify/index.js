'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Component({
  properties: {
    text: String,
    color: {
      type: String,
      value: '#fff'
    },
    backgroundColor: {
      type: String,
      value: '#e64340'
    },
    duration: {
      type: Number,
      value: 3000
    }
  },

  methods: {
    show: function show() {
      var _this = this;

      var duration = this.data.duration;


      clearTimeout(this.timer);
      this.setData({
        show: true
      });

      if (duration > 0 && duration !== Infinity) {
        this.timer = setTimeout(function () {
          _this.hide();
        }, duration);
      }
    },
    hide: function hide() {
      clearTimeout(this.timer);
      this.setData({
        show: false
      });
    }
  }
});

var defaultOptions = {
  selector: '#van-notify',
  duration: 3000
};

function Notify() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var pages = getCurrentPages();
  var ctx = pages[pages.length - 1];

  options = Object.assign({}, defaultOptions, parseParam(options));

  var el = ctx.selectComponent(options.selector);
  delete options.selector;

  if (el) {
    el.setData(_extends({}, options));
    el.show();
  }
}

function parseParam() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  return (typeof params === 'undefined' ? 'undefined' : _typeof(params)) === 'object' ? params : { text: params };
}

module.exports = Notify;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJ0ZXh0IiwiU3RyaW5nIiwiY29sb3IiLCJ0eXBlIiwidmFsdWUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkdXJhdGlvbiIsIk51bWJlciIsIm1ldGhvZHMiLCJzaG93IiwiZGF0YSIsImNsZWFyVGltZW91dCIsInRpbWVyIiwic2V0RGF0YSIsIkluZmluaXR5Iiwic2V0VGltZW91dCIsImhpZGUiLCJkZWZhdWx0T3B0aW9ucyIsInNlbGVjdG9yIiwiTm90aWZ5Iiwib3B0aW9ucyIsInBhZ2VzIiwiZ2V0Q3VycmVudFBhZ2VzIiwiY3R4IiwibGVuZ3RoIiwiT2JqZWN0IiwiYXNzaWduIiwicGFyc2VQYXJhbSIsImVsIiwic2VsZWN0Q29tcG9uZW50IiwicGFyYW1zIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUFBLFVBQVU7QUFDUkMsY0FBWTtBQUNWQyxVQUFNQyxNQURJO0FBRVZDLFdBQU87QUFDTEMsWUFBTUYsTUFERDtBQUVMRyxhQUFPO0FBRkYsS0FGRztBQU1WQyxxQkFBaUI7QUFDZkYsWUFBTUYsTUFEUztBQUVmRyxhQUFPO0FBRlEsS0FOUDtBQVVWRSxjQUFVO0FBQ1JILFlBQU1JLE1BREU7QUFFUkgsYUFBTztBQUZDO0FBVkEsR0FESjs7QUFpQlJJLFdBQVM7QUFDUEMsUUFETyxrQkFDQTtBQUFBOztBQUFBLFVBQ0dILFFBREgsR0FDZ0IsS0FBS0ksSUFEckIsQ0FDR0osUUFESDs7O0FBR0xLLG1CQUFhLEtBQUtDLEtBQWxCO0FBQ0EsV0FBS0MsT0FBTCxDQUFhO0FBQ1hKLGNBQU07QUFESyxPQUFiOztBQUlBLFVBQUlILFdBQVcsQ0FBWCxJQUFnQkEsYUFBYVEsUUFBakMsRUFBMkM7QUFDekMsYUFBS0YsS0FBTCxHQUFhRyxXQUFXLFlBQU07QUFDNUIsZ0JBQUtDLElBQUw7QUFDRCxTQUZZLEVBRVZWLFFBRlUsQ0FBYjtBQUdEO0FBQ0YsS0FkTTtBQWdCUFUsUUFoQk8sa0JBZ0JBO0FBQ0xMLG1CQUFhLEtBQUtDLEtBQWxCO0FBQ0EsV0FBS0MsT0FBTCxDQUFhO0FBQ1hKLGNBQU07QUFESyxPQUFiO0FBR0Q7QUFyQk07QUFqQkQsQ0FBVjs7QUEwQ0EsSUFBTVEsaUJBQWlCO0FBQ3JCQyxZQUFVLGFBRFc7QUFFckJaLFlBQVU7QUFGVyxDQUF2Qjs7QUFLQSxTQUFTYSxNQUFULEdBQThCO0FBQUEsTUFBZEMsT0FBYyx1RUFBSixFQUFJOztBQUM1QixNQUFNQyxRQUFRQyxpQkFBZDtBQUNBLE1BQU1DLE1BQU1GLE1BQU1BLE1BQU1HLE1BQU4sR0FBZSxDQUFyQixDQUFaOztBQUVBSixZQUFVSyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQlQsY0FBbEIsRUFBa0NVLFdBQVdQLE9BQVgsQ0FBbEMsQ0FBVjs7QUFFQSxNQUFNUSxLQUFLTCxJQUFJTSxlQUFKLENBQW9CVCxRQUFRRixRQUE1QixDQUFYO0FBQ0EsU0FBT0UsUUFBUUYsUUFBZjs7QUFFQSxNQUFJVSxFQUFKLEVBQVE7QUFDTkEsT0FBR2YsT0FBSCxjQUNLTyxPQURMO0FBR0FRLE9BQUduQixJQUFIO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTa0IsVUFBVCxHQUFpQztBQUFBLE1BQWJHLE1BQWEsdUVBQUosRUFBSTs7QUFDL0IsU0FBTyxRQUFPQSxNQUFQLHlDQUFPQSxNQUFQLE9BQWtCLFFBQWxCLEdBQTZCQSxNQUE3QixHQUFzQyxFQUFFOUIsTUFBTThCLE1BQVIsRUFBN0M7QUFDRDs7QUFFREMsT0FBT0MsT0FBUCxHQUFpQmIsTUFBakIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJDb21wb25lbnQoe1xuICBwcm9wZXJ0aWVzOiB7XG4gICAgdGV4dDogU3RyaW5nLFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJyNmZmYnXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnI2U2NDM0MCdcbiAgICB9LFxuICAgIGR1cmF0aW9uOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICB2YWx1ZTogMzAwMFxuICAgIH1cbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgc2hvdygpIHtcbiAgICAgIGNvbnN0IHsgZHVyYXRpb24gfSA9IHRoaXMuZGF0YTtcblxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgc2hvdzogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChkdXJhdGlvbiA+IDAgJiYgZHVyYXRpb24gIT09IEluZmluaXR5KSB7XG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgfSwgZHVyYXRpb24pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBoaWRlKCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufSk7XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICBzZWxlY3RvcjogJyN2YW4tbm90aWZ5JyxcbiAgZHVyYXRpb246IDMwMDBcbn07XG5cbmZ1bmN0aW9uIE5vdGlmeShvcHRpb25zID0ge30pIHtcbiAgY29uc3QgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcbiAgY29uc3QgY3R4ID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV07XG5cbiAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBwYXJzZVBhcmFtKG9wdGlvbnMpKTtcblxuICBjb25zdCBlbCA9IGN0eC5zZWxlY3RDb21wb25lbnQob3B0aW9ucy5zZWxlY3Rvcik7XG4gIGRlbGV0ZSBvcHRpb25zLnNlbGVjdG9yO1xuXG4gIGlmIChlbCkge1xuICAgIGVsLnNldERhdGEoe1xuICAgICAgLi4ub3B0aW9uc1xuICAgIH0pO1xuICAgIGVsLnNob3coKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtKHBhcmFtcyA9ICcnKSB7XG4gIHJldHVybiB0eXBlb2YgcGFyYW1zID09PSAnb2JqZWN0JyA/IHBhcmFtcyA6IHsgdGV4dDogcGFyYW1zIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm90aWZ5O1xuIl19