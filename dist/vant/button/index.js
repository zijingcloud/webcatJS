'use strict';

var nativeBehaviors = require('./behaviors.js');
var classnames = require('./../common/classnames.js');

var observer = function observer() {
  this.setClasses();
};

Component({
  externalClasses: ['custom-class', 'loading-class'],

  behaviors: [nativeBehaviors],

  properties: {
    type: {
      type: String,
      value: 'default',
      observer: observer
    },
    size: {
      type: String,
      value: 'normal',
      observer: observer
    },
    plain: {
      type: Boolean,
      observer: observer
    },
    disabled: {
      type: Boolean,
      observer: observer
    },
    loading: {
      type: Boolean,
      observer: observer
    },
    block: {
      type: Boolean,
      observer: observer
    }
  },

  attached: function attached() {
    this.setClasses();
  },


  methods: {
    onClick: function onClick() {
      if (!this.data.disabled && !this.data.loading) {
        this.triggerEvent('click');
      }
    },
    setClasses: function setClasses() {
      var _data = this.data,
          type = _data.type,
          size = _data.size,
          plain = _data.plain,
          disabled = _data.disabled,
          loading = _data.loading,
          block = _data.block;

      this.setData({
        classes: classnames('van-button--' + type, 'van-button--' + size, {
          'van-button--block': block,
          'van-button--plain': plain,
          'van-button--loading': loading,
          'van-button--disabled': disabled,
          'van-button--unclickable': disabled || loading
        })
      });
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm5hdGl2ZUJlaGF2aW9ycyIsInJlcXVpcmUiLCJjbGFzc25hbWVzIiwib2JzZXJ2ZXIiLCJzZXRDbGFzc2VzIiwiQ29tcG9uZW50IiwiZXh0ZXJuYWxDbGFzc2VzIiwiYmVoYXZpb3JzIiwicHJvcGVydGllcyIsInR5cGUiLCJTdHJpbmciLCJ2YWx1ZSIsInNpemUiLCJwbGFpbiIsIkJvb2xlYW4iLCJkaXNhYmxlZCIsImxvYWRpbmciLCJibG9jayIsImF0dGFjaGVkIiwibWV0aG9kcyIsIm9uQ2xpY2siLCJkYXRhIiwidHJpZ2dlckV2ZW50Iiwic2V0RGF0YSIsImNsYXNzZXMiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsa0JBQWtCQyxRQUFRLGFBQVIsQ0FBeEI7QUFDQSxJQUFNQyxhQUFhRCxRQUFRLHNCQUFSLENBQW5COztBQUVBLElBQU1FLFdBQVcsU0FBWEEsUUFBVyxHQUFXO0FBQzFCLE9BQUtDLFVBQUw7QUFDRCxDQUZEOztBQUlBQyxVQUFVO0FBQ1JDLG1CQUFpQixDQUFDLGNBQUQsRUFBaUIsZUFBakIsQ0FEVDs7QUFHUkMsYUFBVyxDQUFDUCxlQUFELENBSEg7O0FBS1JRLGNBQVk7QUFDVkMsVUFBTTtBQUNKQSxZQUFNQyxNQURGO0FBRUpDLGFBQU8sU0FGSDtBQUdKUjtBQUhJLEtBREk7QUFNVlMsVUFBTTtBQUNKSCxZQUFNQyxNQURGO0FBRUpDLGFBQU8sUUFGSDtBQUdKUjtBQUhJLEtBTkk7QUFXVlUsV0FBTztBQUNMSixZQUFNSyxPQUREO0FBRUxYO0FBRkssS0FYRztBQWVWWSxjQUFVO0FBQ1JOLFlBQU1LLE9BREU7QUFFUlg7QUFGUSxLQWZBO0FBbUJWYSxhQUFTO0FBQ1BQLFlBQU1LLE9BREM7QUFFUFg7QUFGTyxLQW5CQztBQXVCVmMsV0FBTztBQUNMUixZQUFNSyxPQUREO0FBRUxYO0FBRks7QUF2QkcsR0FMSjs7QUFrQ1JlLFVBbENRLHNCQWtDRztBQUNULFNBQUtkLFVBQUw7QUFDRCxHQXBDTzs7O0FBc0NSZSxXQUFTO0FBQ1BDLFdBRE8scUJBQ0c7QUFDUixVQUFJLENBQUMsS0FBS0MsSUFBTCxDQUFVTixRQUFYLElBQXVCLENBQUMsS0FBS00sSUFBTCxDQUFVTCxPQUF0QyxFQUErQztBQUM3QyxhQUFLTSxZQUFMLENBQWtCLE9BQWxCO0FBQ0Q7QUFDRixLQUxNO0FBT1BsQixjQVBPLHdCQU9NO0FBQUEsa0JBQzZDLEtBQUtpQixJQURsRDtBQUFBLFVBQ0haLElBREcsU0FDSEEsSUFERztBQUFBLFVBQ0dHLElBREgsU0FDR0EsSUFESDtBQUFBLFVBQ1NDLEtBRFQsU0FDU0EsS0FEVDtBQUFBLFVBQ2dCRSxRQURoQixTQUNnQkEsUUFEaEI7QUFBQSxVQUMwQkMsT0FEMUIsU0FDMEJBLE9BRDFCO0FBQUEsVUFDbUNDLEtBRG5DLFNBQ21DQSxLQURuQzs7QUFFWCxXQUFLTSxPQUFMLENBQWE7QUFDWEMsaUJBQVN0Qiw0QkFBMEJPLElBQTFCLG1CQUFpREcsSUFBakQsRUFBeUQ7QUFDaEUsK0JBQXFCSyxLQUQyQztBQUVoRSwrQkFBcUJKLEtBRjJDO0FBR2hFLGlDQUF1QkcsT0FIeUM7QUFJaEUsa0NBQXdCRCxRQUp3QztBQUtoRSxxQ0FBMkJBLFlBQVlDO0FBTHlCLFNBQXpEO0FBREUsT0FBYjtBQVNEO0FBbEJNO0FBdENELENBQVYiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBuYXRpdmVCZWhhdmlvcnMgPSByZXF1aXJlKCcuL2JlaGF2aW9ycycpO1xuY29uc3QgY2xhc3NuYW1lcyA9IHJlcXVpcmUoJy4uL2NvbW1vbi9jbGFzc25hbWVzJyk7XG5cbmNvbnN0IG9ic2VydmVyID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2V0Q2xhc3NlcygpO1xufTtcblxuQ29tcG9uZW50KHtcbiAgZXh0ZXJuYWxDbGFzc2VzOiBbJ2N1c3RvbS1jbGFzcycsICdsb2FkaW5nLWNsYXNzJ10sXG5cbiAgYmVoYXZpb3JzOiBbbmF0aXZlQmVoYXZpb3JzXSxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgdHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICdkZWZhdWx0JyxcbiAgICAgIG9ic2VydmVyXG4gICAgfSxcbiAgICBzaXplOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJ25vcm1hbCcsXG4gICAgICBvYnNlcnZlclxuICAgIH0sXG4gICAgcGxhaW46IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBvYnNlcnZlclxuICAgIH0sXG4gICAgZGlzYWJsZWQ6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBvYnNlcnZlclxuICAgIH0sXG4gICAgbG9hZGluZzoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIG9ic2VydmVyXG4gICAgfSxcbiAgICBibG9jazoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIG9ic2VydmVyXG4gICAgfVxuICB9LFxuXG4gIGF0dGFjaGVkKCkge1xuICAgIHRoaXMuc2V0Q2xhc3NlcygpO1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBvbkNsaWNrKCkge1xuICAgICAgaWYgKCF0aGlzLmRhdGEuZGlzYWJsZWQgJiYgIXRoaXMuZGF0YS5sb2FkaW5nKSB7XG4gICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdjbGljaycpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBzZXRDbGFzc2VzKCkge1xuICAgICAgY29uc3QgeyB0eXBlLCBzaXplLCBwbGFpbiwgZGlzYWJsZWQsIGxvYWRpbmcsIGJsb2NrIH0gPSB0aGlzLmRhdGE7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBjbGFzc2VzOiBjbGFzc25hbWVzKGB2YW4tYnV0dG9uLS0ke3R5cGV9YCwgYHZhbi1idXR0b24tLSR7c2l6ZX1gLCB7XG4gICAgICAgICAgJ3Zhbi1idXR0b24tLWJsb2NrJzogYmxvY2ssXG4gICAgICAgICAgJ3Zhbi1idXR0b24tLXBsYWluJzogcGxhaW4sXG4gICAgICAgICAgJ3Zhbi1idXR0b24tLWxvYWRpbmcnOiBsb2FkaW5nLFxuICAgICAgICAgICd2YW4tYnV0dG9uLS1kaXNhYmxlZCc6IGRpc2FibGVkLFxuICAgICAgICAgICd2YW4tYnV0dG9uLS11bmNsaWNrYWJsZSc6IGRpc2FibGVkIHx8IGxvYWRpbmdcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufSk7XG4iXX0=