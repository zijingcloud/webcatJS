'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Component({
  externalClasses: ['custom-class'],

  properties: {
    icon: String,
    steps: {
      type: Array,
      observer: function observer() {
        this.formatSteps();
      }
    },
    active: {
      type: Number,
      observer: function observer() {
        this.formatSteps();
      }
    },
    direction: {
      type: String,
      value: 'horizontal'
    },
    activeColor: {
      type: String,
      value: '#06bf04'
    }
  },

  attached: function attached() {
    this.formatSteps();
  },


  methods: {
    formatSteps: function formatSteps() {
      var _this = this;

      var steps = this.data.steps;

      var formattedSteps = steps.map(function (step, index) {
        return _extends({}, step, {
          status: _this.getStatus(index)
        });
      });

      this.setData({
        formattedSteps: formattedSteps
      });
    },
    getStatus: function getStatus(index) {
      var active = this.data.active;


      if (index < active) {
        return 'finish';
      } else if (index === active) {
        return 'process';
      }

      return '';
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInByb3BlcnRpZXMiLCJpY29uIiwiU3RyaW5nIiwic3RlcHMiLCJ0eXBlIiwiQXJyYXkiLCJvYnNlcnZlciIsImZvcm1hdFN0ZXBzIiwiYWN0aXZlIiwiTnVtYmVyIiwiZGlyZWN0aW9uIiwidmFsdWUiLCJhY3RpdmVDb2xvciIsImF0dGFjaGVkIiwibWV0aG9kcyIsImRhdGEiLCJmb3JtYXR0ZWRTdGVwcyIsIm1hcCIsInN0ZXAiLCJpbmRleCIsInN0YXR1cyIsImdldFN0YXR1cyIsInNldERhdGEiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQUEsVUFBVTtBQUNSQyxtQkFBaUIsQ0FDZixjQURlLENBRFQ7O0FBS1JDLGNBQVk7QUFDVkMsVUFBTUMsTUFESTtBQUVWQyxXQUFPO0FBQ0xDLFlBQU1DLEtBREQ7QUFFTEMsY0FGSyxzQkFFTTtBQUNULGFBQUtDLFdBQUw7QUFDRDtBQUpJLEtBRkc7QUFRVkMsWUFBUTtBQUNOSixZQUFNSyxNQURBO0FBRU5ILGNBRk0sc0JBRUs7QUFDVCxhQUFLQyxXQUFMO0FBQ0Q7QUFKSyxLQVJFO0FBY1ZHLGVBQVc7QUFDVE4sWUFBTUYsTUFERztBQUVUUyxhQUFPO0FBRkUsS0FkRDtBQWtCVkMsaUJBQWE7QUFDWFIsWUFBTUYsTUFESztBQUVYUyxhQUFPO0FBRkk7QUFsQkgsR0FMSjs7QUE2QlJFLFVBN0JRLHNCQTZCRztBQUNULFNBQUtOLFdBQUw7QUFDRCxHQS9CTzs7O0FBaUNSTyxXQUFTO0FBQ1BQLGVBRE8seUJBQ087QUFBQTs7QUFBQSxVQUNKSixLQURJLEdBQ00sS0FBS1ksSUFEWCxDQUNKWixLQURJOztBQUVaLFVBQU1hLGlCQUFpQmIsTUFBTWMsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUNoRCw0QkFDS0QsSUFETDtBQUVFRSxrQkFBUSxNQUFLQyxTQUFMLENBQWVGLEtBQWY7QUFGVjtBQUlELE9BTHNCLENBQXZCOztBQU9BLFdBQUtHLE9BQUwsQ0FBYTtBQUNYTjtBQURXLE9BQWI7QUFHRCxLQWJNO0FBZVBLLGFBZk8scUJBZUdGLEtBZkgsRUFlVTtBQUFBLFVBQ1BYLE1BRE8sR0FDSSxLQUFLTyxJQURULENBQ1BQLE1BRE87OztBQUdmLFVBQUlXLFFBQVFYLE1BQVosRUFBb0I7QUFDbEIsZUFBTyxRQUFQO0FBQ0QsT0FGRCxNQUVPLElBQUlXLFVBQVVYLE1BQWQsRUFBc0I7QUFDM0IsZUFBTyxTQUFQO0FBQ0Q7O0FBRUQsYUFBTyxFQUFQO0FBQ0Q7QUF6Qk07QUFqQ0QsQ0FBViIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XG4gIGV4dGVybmFsQ2xhc3NlczogW1xuICAgICdjdXN0b20tY2xhc3MnXG4gIF0sXG5cbiAgcHJvcGVydGllczoge1xuICAgIGljb246IFN0cmluZyxcbiAgICBzdGVwczoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBvYnNlcnZlcigpIHtcbiAgICAgICAgdGhpcy5mb3JtYXRTdGVwcygpO1xuICAgICAgfVxuICAgIH0sXG4gICAgYWN0aXZlOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBvYnNlcnZlcigpIHtcbiAgICAgICAgdGhpcy5mb3JtYXRTdGVwcygpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZGlyZWN0aW9uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJ2hvcml6b250YWwnXG4gICAgfSxcbiAgICBhY3RpdmVDb2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICcjMDZiZjA0J1xuICAgIH1cbiAgfSxcblxuICBhdHRhY2hlZCgpIHtcbiAgICB0aGlzLmZvcm1hdFN0ZXBzKCk7XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGZvcm1hdFN0ZXBzKCkge1xuICAgICAgY29uc3QgeyBzdGVwcyB9ID0gdGhpcy5kYXRhO1xuICAgICAgY29uc3QgZm9ybWF0dGVkU3RlcHMgPSBzdGVwcy5tYXAoKHN0ZXAsIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RlcCxcbiAgICAgICAgICBzdGF0dXM6IHRoaXMuZ2V0U3RhdHVzKGluZGV4KVxuICAgICAgICB9O1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGZvcm1hdHRlZFN0ZXBzXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgZ2V0U3RhdHVzKGluZGV4KSB7XG4gICAgICBjb25zdCB7IGFjdGl2ZSB9ID0gdGhpcy5kYXRhO1xuXG4gICAgICBpZiAoaW5kZXggPCBhY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuICdmaW5pc2gnO1xuICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gYWN0aXZlKSB7XG4gICAgICAgIHJldHVybiAncHJvY2Vzcyc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cbn0pO1xuIl19