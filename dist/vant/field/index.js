'use strict';

Component({
  behaviors: ['wx://form-field'],

  externalClasses: ['input-class'],

  options: {
    multipleSlots: true
  },

  properties: {
    icon: String,
    label: String,
    error: Boolean,
    focus: Boolean,
    center: Boolean,
    isLink: Boolean,
    leftIcon: String,
    disabled: Boolean,
    autosize: Boolean,
    readonly: Boolean,
    required: Boolean,
    iconClass: String,
    clearable: Boolean,
    labelAlign: String,
    inputAlign: String,
    customClass: String,
    confirmType: String,
    errorMessage: String,
    placeholder: String,
    customStyle: String,
    useIconSlot: Boolean,
    useButtonSlot: Boolean,
    placeholderClass: String,
    cursorSpacing: {
      type: Number,
      value: 50
    },
    maxlength: {
      type: Number,
      value: -1
    },
    value: {
      type: null,
      value: '',
      observer: function observer(currentValue) {
        this.setData({ currentValue: currentValue });
      }
    },
    type: {
      type: String,
      value: 'text'
    },
    border: {
      type: Boolean,
      value: true
    }
  },

  data: {
    focused: false,
    showClear: false,
    currentValue: ''
  },

  attached: function attached() {
    this.setData({
      currentValue: this.data.value
    });
  },


  methods: {
    onInput: function onInput(event) {
      var _ref = event.detail || {},
          _ref$value = _ref.value,
          value = _ref$value === undefined ? '' : _ref$value;

      this.triggerEvent('input', value);
      this.triggerEvent('change', value);
      this.setData({
        currentValue: value,
        showClear: this.getShowClear({ value: value })
      });
    },
    onFocus: function onFocus(event) {
      this.triggerEvent('focus', event);
      this.setData({
        focused: true,
        showClear: this.getShowClear({ focused: true })
      });
    },
    onBlur: function onBlur(event) {
      this.focused = false;
      this.triggerEvent('blur', event);
      this.setData({
        focused: false,
        showClear: this.getShowClear({ focused: false })
      });
    },
    onClickIcon: function onClickIcon() {
      this.triggerEvent('click-icon');
    },
    getShowClear: function getShowClear(options) {
      var _options$focused = options.focused,
          focused = _options$focused === undefined ? this.data.focused : _options$focused,
          _options$value = options.value,
          value = _options$value === undefined ? this.data.currentValue : _options$value;


      return this.data.clearable && focused && value !== '' && !this.data.readonly;
    },
    onClear: function onClear() {
      this.setData({
        currentValue: '',
        showClear: this.getShowClear({ value: '' })
      });
      this.triggerEvent('input', '');
      this.triggerEvent('change', '');
    },
    onConfirm: function onConfirm() {
      this.triggerEvent('confirm', this.data.currentValue);
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImJlaGF2aW9ycyIsImV4dGVybmFsQ2xhc3NlcyIsIm9wdGlvbnMiLCJtdWx0aXBsZVNsb3RzIiwicHJvcGVydGllcyIsImljb24iLCJTdHJpbmciLCJsYWJlbCIsImVycm9yIiwiQm9vbGVhbiIsImZvY3VzIiwiY2VudGVyIiwiaXNMaW5rIiwibGVmdEljb24iLCJkaXNhYmxlZCIsImF1dG9zaXplIiwicmVhZG9ubHkiLCJyZXF1aXJlZCIsImljb25DbGFzcyIsImNsZWFyYWJsZSIsImxhYmVsQWxpZ24iLCJpbnB1dEFsaWduIiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtVHlwZSIsImVycm9yTWVzc2FnZSIsInBsYWNlaG9sZGVyIiwiY3VzdG9tU3R5bGUiLCJ1c2VJY29uU2xvdCIsInVzZUJ1dHRvblNsb3QiLCJwbGFjZWhvbGRlckNsYXNzIiwiY3Vyc29yU3BhY2luZyIsInR5cGUiLCJOdW1iZXIiLCJ2YWx1ZSIsIm1heGxlbmd0aCIsIm9ic2VydmVyIiwiY3VycmVudFZhbHVlIiwic2V0RGF0YSIsImJvcmRlciIsImRhdGEiLCJmb2N1c2VkIiwic2hvd0NsZWFyIiwiYXR0YWNoZWQiLCJtZXRob2RzIiwib25JbnB1dCIsImV2ZW50IiwiZGV0YWlsIiwidHJpZ2dlckV2ZW50IiwiZ2V0U2hvd0NsZWFyIiwib25Gb2N1cyIsIm9uQmx1ciIsIm9uQ2xpY2tJY29uIiwib25DbGVhciIsIm9uQ29uZmlybSJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsVUFBVTtBQUNSQyxhQUFXLENBQUMsaUJBQUQsQ0FESDs7QUFHUkMsbUJBQWlCLENBQ2YsYUFEZSxDQUhUOztBQU9SQyxXQUFTO0FBQ1BDLG1CQUFlO0FBRFIsR0FQRDs7QUFXUkMsY0FBWTtBQUNWQyxVQUFNQyxNQURJO0FBRVZDLFdBQU9ELE1BRkc7QUFHVkUsV0FBT0MsT0FIRztBQUlWQyxXQUFPRCxPQUpHO0FBS1ZFLFlBQVFGLE9BTEU7QUFNVkcsWUFB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OztBQU1wQixhQUFPLEtBQUtHLElBQUwsQ0FBVXBCLFNBQVYsSUFBdUJxQixPQUF2QixJQUFrQ1AsVUFBVSxFQUE1QyxJQUFrRCxDQUFDLEtBQUtNLElBQUwsQ0FBVXZCLFFBQXBFO0FBQ0QsS0F2Q007QUF5Q1BvQyxXQXpDTyxxQkF5Q0c7QUFDUixXQUFLZixPQUFMLENBQWE7QUFDWEQsc0JBQWMsRUFESDtBQUVYSyxtQkFBVyxLQUFLTyxZQUFMLENBQWtCLEVBQUVmLE9BQU8sRUFBVCxFQUFsQjtBQUZBLE9BQWI7QUFJQSxXQUFLYyxZQUFMLENBQWtCLE9BQWxCLEVBQTJCLEVBQTNCO0FBQ0EsV0FBS0EsWUFBTCxDQUFrQixRQUFsQixFQUE0QixFQUE1QjtBQUNELEtBaERNO0FBa0RQTSxhQWxETyx1QkFrREs7QUFDVixXQUFLTixZQUFMLENBQWtCLFNBQWxCLEVBQTZCLEtBQUtSLElBQUwsQ0FBVUgsWUFBdkM7QUFDRDtBQXBETTtBQXhFRCxDQUFWIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcbiAgYmVoYXZpb3JzOiBbJ3d4Oi8vZm9ybS1maWVsZCddLFxuXG4gIGV4dGVybmFsQ2xhc3NlczogW1xuICAgICdpbnB1dC1jbGFzcydcbiAgXSxcblxuICBvcHRpb25zOiB7XG4gICAgbXVsdGlwbGVTbG90czogdHJ1ZVxuICB9LFxuXG4gIHByb3BlcnRpZXM6IHtcbiAgICBpY29uOiBTdHJpbmcsXG4gICAgbGFiZWw6IFN0cmluZyxcbiAgICBlcnJvcjogQm9vbGVhbixcbiAgICBmb2N1czogQm9vbGVhbixcbiAgICBjZW50ZXI6IEJvb2xlYW4sXG4gICAgaXNMaW5rOiBCb29sZWFuLFxuICAgIGxlZnRJY29uOiBTdHJpbmcsXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgYXV0b3NpemU6IEJvb2xlYW4sXG4gICAgcmVhZG9ubHk6IEJvb2xlYW4sXG4gICAgcmVxdWlyZWQ6IEJvb2xlYW4sXG4gICAgaWNvbkNsYXNzOiBTdHJpbmcsXG4gICAgY2xlYXJhYmxlOiBCb29sZWFuLFxuICAgIGxhYmVsQWxpZ246IFN0cmluZyxcbiAgICBpbnB1dEFsaWduOiBTdHJpbmcsXG4gICAgY3VzdG9tQ2xhc3M6IFN0cmluZyxcbiAgICBjb25maXJtVHlwZTogU3RyaW5nLFxuICAgIGVycm9yTWVzc2FnZTogU3RyaW5nLFxuICAgIHBsYWNlaG9sZGVyOiBTdHJpbmcsXG4gICAgY3VzdG9tU3R5bGU6IFN0cmluZyxcbiAgICB1c2VJY29uU2xvdDogQm9vbGVhbixcbiAgICB1c2VCdXR0b25TbG90OiBCb29sZWFuLFxuICAgIHBsYWNlaG9sZGVyQ2xhc3M6IFN0cmluZyxcbiAgICBjdXJzb3JTcGFjaW5nOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICB2YWx1ZTogNTBcbiAgICB9LFxuICAgIG1heGxlbmd0aDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgdmFsdWU6IC0xXG4gICAgfSxcbiAgICB2YWx1ZToge1xuICAgICAgdHlwZTogbnVsbCxcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIG9ic2VydmVyKGN1cnJlbnRWYWx1ZSkge1xuICAgICAgICB0aGlzLnNldERhdGEoeyBjdXJyZW50VmFsdWUgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICB0eXBlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJ3RleHQnXG4gICAgfSxcbiAgICBib3JkZXI6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogdHJ1ZVxuICAgIH1cbiAgfSxcblxuICBkYXRhOiB7XG4gICAgZm9jdXNlZDogZmFsc2UsXG4gICAgc2hvd0NsZWFyOiBmYWxzZSxcbiAgICBjdXJyZW50VmFsdWU6ICcnXG4gIH0sXG5cbiAgYXR0YWNoZWQoKSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGN1cnJlbnRWYWx1ZTogdGhpcy5kYXRhLnZhbHVlXG4gICAgfSk7XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIG9uSW5wdXQoZXZlbnQpIHtcbiAgICAgIGNvbnN0IHsgdmFsdWUgPSAnJyB9ID0gZXZlbnQuZGV0YWlsIHx8IHt9O1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2lucHV0JywgdmFsdWUpO1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2NoYW5nZScsIHZhbHVlKTtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGN1cnJlbnRWYWx1ZTogdmFsdWUsXG4gICAgICAgIHNob3dDbGVhcjogdGhpcy5nZXRTaG93Q2xlYXIoeyB2YWx1ZSB9KVxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIG9uRm9jdXMoZXZlbnQpIHtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdmb2N1cycsIGV2ZW50KTtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGZvY3VzZWQ6IHRydWUsXG4gICAgICAgIHNob3dDbGVhcjogdGhpcy5nZXRTaG93Q2xlYXIoeyBmb2N1c2VkOiB0cnVlIH0pXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgb25CbHVyKGV2ZW50KSB7XG4gICAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdibHVyJywgZXZlbnQpO1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgZm9jdXNlZDogZmFsc2UsXG4gICAgICAgIHNob3dDbGVhcjogdGhpcy5nZXRTaG93Q2xlYXIoeyBmb2N1c2VkOiBmYWxzZSB9KVxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIG9uQ2xpY2tJY29uKCkge1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2NsaWNrLWljb24nKTtcbiAgICB9LFxuXG4gICAgZ2V0U2hvd0NsZWFyKG9wdGlvbnMpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZm9jdXNlZCA9IHRoaXMuZGF0YS5mb2N1c2VkLFxuICAgICAgICB2YWx1ZSA9IHRoaXMuZGF0YS5jdXJyZW50VmFsdWVcbiAgICAgIH0gPSBvcHRpb25zO1xuXG4gICAgICByZXR1cm4gdGhpcy5kYXRhLmNsZWFyYWJsZSAmJiBmb2N1c2VkICYmIHZhbHVlICE9PSAnJyAmJiAhdGhpcy5kYXRhLnJlYWRvbmx5O1xuICAgIH0sXG5cbiAgICBvbkNsZWFyKCkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgY3VycmVudFZhbHVlOiAnJyxcbiAgICAgICAgc2hvd0NsZWFyOiB0aGlzLmdldFNob3dDbGVhcih7IHZhbHVlOiAnJyB9KVxuICAgICAgfSk7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnaW5wdXQnLCAnJyk7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnY2hhbmdlJywgJycpO1xuICAgIH0sXG5cbiAgICBvbkNvbmZpcm0oKSB7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnY29uZmlybScsIHRoaXMuZGF0YS5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgfVxufSk7XG4iXX0=