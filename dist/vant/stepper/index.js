'use strict';

// Note that the bitwise operators and shift operators operate on 32-bit ints
// so in that case, the max safe integer is 2^31-1, or 2147483647
var MAX = 2147483647;

Component({
  externalClasses: ['custom-class', 'input-class', 'plus-class', 'minus-class'],

  properties: {
    value: {
      type: null,
      observer: function observer(val) {
        if (val !== this.currentValue) {
          this.setData({ currentValue: this.range(val) });
        }
      }
    },
    integer: Boolean,
    disabled: Boolean,
    disableInput: Boolean,
    min: {
      type: null,
      value: 1
    },
    max: {
      type: null,
      value: MAX
    },
    step: {
      type: null,
      value: 1
    }
  },

  attached: function attached() {
    this.setData({
      currentValue: this.range(this.data.value)
    });
  },


  methods: {
    // limit value range
    range: function range(value) {
      return Math.max(Math.min(this.data.max, value), this.data.min);
    },
    onInput: function onInput(event) {
      var _ref = event.detail || {},
          _ref$value = _ref.value,
          value = _ref$value === undefined ? '' : _ref$value;

      this.triggerInput(value);
    },
    onChange: function onChange(type) {
      if (this[type + 'Disabled']) {
        this.triggerEvent('overlimit', type);
        return;
      }

      var diff = type === 'minus' ? -this.data.step : +this.data.step;
      var value = Math.round((this.data.currentValue + diff) * 100) / 100;
      this.triggerInput(this.range(value));
      this.triggerEvent(type);
    },
    onBlur: function onBlur(event) {
      var currentValue = this.range(this.data.currentValue);
      this.triggerInput(currentValue);
      this.triggerEvent('blur', event);
    },
    onMinus: function onMinus() {
      this.onChange('minus');
    },
    onPlus: function onPlus() {
      this.onChange('plus');
    },
    triggerInput: function triggerInput(currentValue) {
      this.setData({ currentValue: currentValue });
      this.triggerEvent('input', currentValue);
      this.triggerEvent('change', currentValue);
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk1BWCIsIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInByb3BlcnRpZXMiLCJ2YWx1ZSIsInR5cGUiLCJvYnNlcnZlciIsInZhbCIsImN1cnJlbnRWYWx1ZSIsInNldERhdGEiLCJyYW5nZSIsImludGVnZXIiLCJCb29sZWFuIiwiZGlzYWJsZWQiLCJkaXNhYmxlSW5wdXQiLCJtaW4iLCJtYXgiLCJzdGVwIiwiYXR0YWNoZWQiLCJkYXRhIiwibWV0aG9kcyIsIk1hdGgiLCJvbklucHV0IiwiZXZlbnQiLCJkZXRhaWwiLCJ0cmlnZ2VySW5wdXQiLCJvbkNoYW5nZSIsInRyaWdnZXJFdmVudCIsImRpZmYiLCJyb3VuZCIsIm9uQmx1ciIsIm9uTWludXMiLCJvblBsdXMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBLElBQU1BLE1BQU0sVUFBWjs7QUFFQUMsVUFBVTtBQUNSQyxtQkFBaUIsQ0FDZixjQURlLEVBRWYsYUFGZSxFQUdmLFlBSGUsRUFJZixhQUplLENBRFQ7O0FBUVJDLGNBQVk7QUFDVkMsV0FBTztBQUNMQyxZQUFNLElBREQ7QUFFTEMsY0FGSyxvQkFFSUMsR0FGSixFQUVTO0FBQ1osWUFBSUEsUUFBUSxLQUFLQyxZQUFqQixFQUErQjtBQUM3QixlQUFLQyxPQUFMLENBQWEsRUFBRUQsY0FBYyxLQUFLRSxLQUFMLENBQVdILEdBQVgsQ0FBaEIsRUFBYjtBQUNEO0FBQ0Y7QUFOSSxLQURHO0FBU1ZJLGFBQVNDLE9BVEM7QUFVVkMsY0FBVUQsT0FWQTtBQVdWRSxrQkFBY0YsT0FYSjtBQVlWRyxTQUFLO0FBQ0hWLFlBQU0sSUFESDtBQUVIRCxhQUFPO0FBRkosS0FaSztBQWdCVlksU0FBSztBQUNIWCxZQUFNLElBREg7QUFFSEQsYUFBT0o7QUFGSixLQWhCSztBQW9CVmlCLFVBQU07QUFDSlosWUFBTSxJQURGO0FBRUpELGFBQU87QUFGSDtBQXBCSSxHQVJKOztBQWtDUmMsVUFsQ1Esc0JBa0NHO0FBQ1QsU0FBS1QsT0FBTCxDQUFhO0FBQ1hELG9CQUFjLEtBQUtFLEtBQUwsQ0FBVyxLQUFLUyxJQUFMLENBQVVmLEtBQXJCO0FBREgsS0FBYjtBQUdELEdBdENPOzs7QUF3Q1JnQixXQUFTO0FBQ1A7QUFDQVYsU0FGTyxpQkFFRE4sS0FGQyxFQUVNO0FBQ1gsYUFBT2lCLEtBQUtMLEdBQUwsQ0FBU0ssS0FBS04sR0FBTCxDQUFTLEtBQUtJLElBQUwsQ0FBVUgsR0FBbkIsRUFBd0JaLEtBQXhCLENBQVQsRUFBeUMsS0FBS2UsSUFBTCxDQUFVSixHQUFuRCxDQUFQO0FBQ0QsS0FKTTtBQU1QTyxXQU5PLG1CQU1DQyxLQU5ELEVBTVE7QUFBQSxpQkFDVUEsTUFBTUMsTUFBTixJQUFnQixFQUQxQjtBQUFBLDRCQUNMcEIsS0FESztBQUFBLFVBQ0xBLEtBREssOEJBQ0csRUFESDs7QUFFYixXQUFLcUIsWUFBTCxDQUFrQnJCLEtBQWxCO0FBQ0QsS0FUTTtBQVdQc0IsWUFYTyxvQkFXRXJCLElBWEYsRUFXUTtBQUNiLFVBQUksS0FBUUEsSUFBUixjQUFKLEVBQTZCO0FBQzNCLGFBQUtzQixZQUFMLENBQWtCLFdBQWxCLEVBQStCdEIsSUFBL0I7QUFDQTtBQUNEOztBQUVELFVBQU11QixPQUFPdkIsU0FBUyxPQUFULEdBQW1CLENBQUMsS0FBS2MsSUFBTCxDQUFVRixJQUE5QixHQUFxQyxDQUFDLEtBQUtFLElBQUwsQ0FBVUYsSUFBN0Q7QUFDQSxVQUFNYixRQUFRaUIsS0FBS1EsS0FBTCxDQUFXLENBQUMsS0FBS1YsSUFBTCxDQUFVWCxZQUFWLEdBQXlCb0IsSUFBMUIsSUFBa0MsR0FBN0MsSUFBb0QsR0FBbEU7QUFDQSxXQUFLSCxZQUFMLENBQWtCLEtBQUtmLEtBQUwsQ0FBV04sS0FBWCxDQUFsQjtBQUNBLFdBQUt1QixZQUFMLENBQWtCdEIsSUFBbEI7QUFDRCxLQXJCTTtBQXVCUHlCLFVBdkJPLGtCQXVCQVAsS0F2QkEsRUF1Qk87QUFDWixVQUFNZixlQUFlLEtBQUtFLEtBQUwsQ0FBVyxLQUFLUyxJQUFMLENBQVVYLFlBQXJCLENBQXJCO0FBQ0EsV0FBS2lCLFlBQUwsQ0FBa0JqQixZQUFsQjtBQUNBLFdBQUttQixZQUFMLENBQWtCLE1BQWxCLEVBQTBCSixLQUExQjtBQUNELEtBM0JNO0FBNkJQUSxXQTdCTyxxQkE2Qkc7QUFDUixXQUFLTCxRQUFMLENBQWMsT0FBZDtBQUNELEtBL0JNO0FBaUNQTSxVQWpDTyxvQkFpQ0U7QUFDUCxXQUFLTixRQUFMLENBQWMsTUFBZDtBQUNELEtBbkNNO0FBcUNQRCxnQkFyQ08sd0JBcUNNakIsWUFyQ04sRUFxQ29CO0FBQ3pCLFdBQUtDLE9BQUwsQ0FBYSxFQUFFRCwwQkFBRixFQUFiO0FBQ0EsV0FBS21CLFlBQUwsQ0FBa0IsT0FBbEIsRUFBMkJuQixZQUEzQjtBQUNBLFdBQUttQixZQUFMLENBQWtCLFFBQWxCLEVBQTRCbkIsWUFBNUI7QUFDRDtBQXpDTTtBQXhDRCxDQUFWIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTm90ZSB0aGF0IHRoZSBiaXR3aXNlIG9wZXJhdG9ycyBhbmQgc2hpZnQgb3BlcmF0b3JzIG9wZXJhdGUgb24gMzItYml0IGludHNcbi8vIHNvIGluIHRoYXQgY2FzZSwgdGhlIG1heCBzYWZlIGludGVnZXIgaXMgMl4zMS0xLCBvciAyMTQ3NDgzNjQ3XG5jb25zdCBNQVggPSAyMTQ3NDgzNjQ3O1xuXG5Db21wb25lbnQoe1xuICBleHRlcm5hbENsYXNzZXM6IFtcbiAgICAnY3VzdG9tLWNsYXNzJyxcbiAgICAnaW5wdXQtY2xhc3MnLFxuICAgICdwbHVzLWNsYXNzJyxcbiAgICAnbWludXMtY2xhc3MnXG4gIF0sXG5cbiAgcHJvcGVydGllczoge1xuICAgIHZhbHVlOiB7XG4gICAgICB0eXBlOiBudWxsLFxuICAgICAgb2JzZXJ2ZXIodmFsKSB7XG4gICAgICAgIGlmICh2YWwgIT09IHRoaXMuY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5zZXREYXRhKHsgY3VycmVudFZhbHVlOiB0aGlzLnJhbmdlKHZhbCkgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGludGVnZXI6IEJvb2xlYW4sXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgZGlzYWJsZUlucHV0OiBCb29sZWFuLFxuICAgIG1pbjoge1xuICAgICAgdHlwZTogbnVsbCxcbiAgICAgIHZhbHVlOiAxXG4gICAgfSxcbiAgICBtYXg6IHtcbiAgICAgIHR5cGU6IG51bGwsXG4gICAgICB2YWx1ZTogTUFYXG4gICAgfSxcbiAgICBzdGVwOiB7XG4gICAgICB0eXBlOiBudWxsLFxuICAgICAgdmFsdWU6IDFcbiAgICB9XG4gIH0sXG5cbiAgYXR0YWNoZWQoKSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGN1cnJlbnRWYWx1ZTogdGhpcy5yYW5nZSh0aGlzLmRhdGEudmFsdWUpXG4gICAgfSk7XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIC8vIGxpbWl0IHZhbHVlIHJhbmdlXG4gICAgcmFuZ2UodmFsdWUpIHtcbiAgICAgIHJldHVybiBNYXRoLm1heChNYXRoLm1pbih0aGlzLmRhdGEubWF4LCB2YWx1ZSksIHRoaXMuZGF0YS5taW4pO1xuICAgIH0sXG5cbiAgICBvbklucHV0KGV2ZW50KSB7XG4gICAgICBjb25zdCB7IHZhbHVlID0gJycgfSA9IGV2ZW50LmRldGFpbCB8fCB7fTtcbiAgICAgIHRoaXMudHJpZ2dlcklucHV0KHZhbHVlKTtcbiAgICB9LFxuXG4gICAgb25DaGFuZ2UodHlwZSkge1xuICAgICAgaWYgKHRoaXNbYCR7dHlwZX1EaXNhYmxlZGBdKSB7XG4gICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdvdmVybGltaXQnLCB0eXBlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkaWZmID0gdHlwZSA9PT0gJ21pbnVzJyA/IC10aGlzLmRhdGEuc3RlcCA6ICt0aGlzLmRhdGEuc3RlcDtcbiAgICAgIGNvbnN0IHZhbHVlID0gTWF0aC5yb3VuZCgodGhpcy5kYXRhLmN1cnJlbnRWYWx1ZSArIGRpZmYpICogMTAwKSAvIDEwMDtcbiAgICAgIHRoaXMudHJpZ2dlcklucHV0KHRoaXMucmFuZ2UodmFsdWUpKTtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHR5cGUpO1xuICAgIH0sXG5cbiAgICBvbkJsdXIoZXZlbnQpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMucmFuZ2UodGhpcy5kYXRhLmN1cnJlbnRWYWx1ZSk7XG4gICAgICB0aGlzLnRyaWdnZXJJbnB1dChjdXJyZW50VmFsdWUpO1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2JsdXInLCBldmVudCk7XG4gICAgfSxcblxuICAgIG9uTWludXMoKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKCdtaW51cycpO1xuICAgIH0sXG5cbiAgICBvblBsdXMoKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKCdwbHVzJyk7XG4gICAgfSxcblxuICAgIHRyaWdnZXJJbnB1dChjdXJyZW50VmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7IGN1cnJlbnRWYWx1ZSB9KTtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdpbnB1dCcsIGN1cnJlbnRWYWx1ZSk7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnY2hhbmdlJywgY3VycmVudFZhbHVlKTtcbiAgICB9XG4gIH1cbn0pO1xuIl19