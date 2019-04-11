'use strict';

Component({
  externalClasses: ['custom-class', 'cancel-class'],

  options: {
    multipleSlots: true
  },

  properties: {
    disabled: Boolean,
    readonly: Boolean,
    showAction: Boolean,
    useActionSlot: Boolean,
    placeholder: String,
    value: {
      type: String,
      observer: function observer(currentValue) {
        this.setData({ currentValue: currentValue });
      }
    },
    background: {
      type: String,
      value: '#f2f2f2'
    },
    maxlength: {
      type: Number,
      value: -1
    }
  },

  attached: function attached() {
    this.setData({ currentValue: this.data.value });
  },


  methods: {
    onChange: function onChange(event) {
      this.triggerEvent('change', event.detail);
    },
    onCancel: function onCancel() {
      this.setData({ currentValue: '' });
      this.triggerEvent('cancel');
      this.triggerEvent('change', '');
    },
    onSearch: function onSearch() {
      this.triggerEvent('search', this.data.currentValue);
    },
    onFocus: function onFocus() {
      this.triggerEvent('focus');
    },
    onBlur: function onBlur() {
      this.triggerEvent('blur');
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsIm9wdGlvbnMiLCJtdWx0aXBsZVNsb3RzIiwicHJvcGVydGllcyIsImRpc2FibGVkIiwiQm9vbGVhbiIsInJlYWRvbmx5Iiwic2hvd0FjdGlvbiIsInVzZUFjdGlvblNsb3QiLCJwbGFjZWhvbGRlciIsIlN0cmluZyIsInZhbHVlIiwidHlwZSIsIm9ic2VydmVyIiwiY3VycmVudFZhbHVlIiwic2V0RGF0YSIsImJhY2tncm91bmQiLCJtYXhsZW5ndGgiLCJOdW1iZXIiLCJhdHRhY2hlZCIsImRhdGEiLCJtZXRob2RzIiwib25DaGFuZ2UiLCJldmVudCIsInRyaWdnZXJFdmVudCIsImRldGFpbCIsIm9uQ2FuY2VsIiwib25TZWFyY2giLCJvbkZvY3VzIiwib25CbHVyIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxVQUFVO0FBQ1JDLG1CQUFpQixDQUFDLGNBQUQsRUFBaUIsY0FBakIsQ0FEVDs7QUFHUkMsV0FBUztBQUNQQyxtQkFBZTtBQURSLEdBSEQ7O0FBT1JDLGNBQVk7QUFDVkMsY0FBVUMsT0FEQTtBQUVWQyxjQUFVRCxPQUZBO0FBR1ZFLGdCQUFZRixPQUhGO0FBSVZHLG1CQUFlSCxPQUpMO0FBS1ZJLGlCQUFhQyxNQUxIO0FBTVZDLFdBQU87QUFDTEMsWUFBTUYsTUFERDtBQUVMRyxjQUZLLG9CQUVJQyxZQUZKLEVBRWtCO0FBQ3JCLGFBQUtDLE9BQUwsQ0FBYSxFQUFFRCwwQkFBRixFQUFiO0FBQ0Q7QUFKSSxLQU5HO0FBWVZFLGdCQUFZO0FBQ1ZKLFlBQU1GLE1BREk7QUFFVkMsYUFBTztBQUZHLEtBWkY7QUFnQlZNLGVBQVc7QUFDVEwsWUFBTU0sTUFERztBQUVUUCxhQUFPLENBQUM7QUFGQztBQWhCRCxHQVBKOztBQTZCUlEsVUE3QlEsc0JBNkJHO0FBQ1QsU0FBS0osT0FBTCxDQUFhLEVBQUVELGNBQWMsS0FBS00sSUFBTCxDQUFVVCxLQUExQixFQUFiO0FBQ0QsR0EvQk87OztBQWlDUlUsV0FBUztBQUNQQyxZQURPLG9CQUNFQyxLQURGLEVBQ1M7QUFDZCxXQUFLQyxZQUFMLENBQWtCLFFBQWxCLEVBQTRCRCxNQUFNRSxNQUFsQztBQUNELEtBSE07QUFLUEMsWUFMTyxzQkFLSTtBQUNULFdBQUtYLE9BQUwsQ0FBYSxFQUFFRCxjQUFjLEVBQWhCLEVBQWI7QUFDQSxXQUFLVSxZQUFMLENBQWtCLFFBQWxCO0FBQ0EsV0FBS0EsWUFBTCxDQUFrQixRQUFsQixFQUE0QixFQUE1QjtBQUNELEtBVE07QUFXUEcsWUFYTyxzQkFXSTtBQUNULFdBQUtILFlBQUwsQ0FBa0IsUUFBbEIsRUFBNEIsS0FBS0osSUFBTCxDQUFVTixZQUF0QztBQUNELEtBYk07QUFlUGMsV0FmTyxxQkFlRztBQUNSLFdBQUtKLFlBQUwsQ0FBa0IsT0FBbEI7QUFDRCxLQWpCTTtBQW1CUEssVUFuQk8sb0JBbUJFO0FBQ1AsV0FBS0wsWUFBTCxDQUFrQixNQUFsQjtBQUNEO0FBckJNO0FBakNELENBQVYiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJDb21wb25lbnQoe1xuICBleHRlcm5hbENsYXNzZXM6IFsnY3VzdG9tLWNsYXNzJywgJ2NhbmNlbC1jbGFzcyddLFxuXG4gIG9wdGlvbnM6IHtcbiAgICBtdWx0aXBsZVNsb3RzOiB0cnVlXG4gIH0sXG5cbiAgcHJvcGVydGllczoge1xuICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgIHJlYWRvbmx5OiBCb29sZWFuLFxuICAgIHNob3dBY3Rpb246IEJvb2xlYW4sXG4gICAgdXNlQWN0aW9uU2xvdDogQm9vbGVhbixcbiAgICBwbGFjZWhvbGRlcjogU3RyaW5nLFxuICAgIHZhbHVlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBvYnNlcnZlcihjdXJyZW50VmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXREYXRhKHsgY3VycmVudFZhbHVlIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgYmFja2dyb3VuZDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICcjZjJmMmYyJ1xuICAgIH0sXG4gICAgbWF4bGVuZ3RoOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICB2YWx1ZTogLTFcbiAgICB9XG4gIH0sXG5cbiAgYXR0YWNoZWQoKSB7XG4gICAgdGhpcy5zZXREYXRhKHsgY3VycmVudFZhbHVlOiB0aGlzLmRhdGEudmFsdWUgfSk7XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnY2hhbmdlJywgZXZlbnQuZGV0YWlsKTtcbiAgICB9LFxuXG4gICAgb25DYW5jZWwoKSB7XG4gICAgICB0aGlzLnNldERhdGEoeyBjdXJyZW50VmFsdWU6ICcnIH0pO1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2NhbmNlbCcpO1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2NoYW5nZScsICcnKTtcbiAgICB9LFxuXG4gICAgb25TZWFyY2goKSB7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnc2VhcmNoJywgdGhpcy5kYXRhLmN1cnJlbnRWYWx1ZSk7XG4gICAgfSxcblxuICAgIG9uRm9jdXMoKSB7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnZm9jdXMnKTtcbiAgICB9LFxuXG4gICAgb25CbHVyKCkge1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2JsdXInKTtcbiAgICB9XG4gIH1cbn0pO1xuIl19