'use strict';

Component({
  properties: {
    show: Boolean,
    title: String,
    cancelText: String,
    actions: {
      type: Array,
      value: []
    },
    overlay: {
      type: Boolean,
      value: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      value: true
    }
  },

  methods: {
    onSelect: function onSelect(event) {
      var index = event.currentTarget.dataset.index;

      var item = this.data.actions[index];
      if (item && !item.disabled && !item.loading) {
        this.triggerEvent('select', item);
      }
    },
    onCancel: function onCancel() {
      this.triggerEvent('cancel');
    },
    onClose: function onClose() {
      this.triggerEvent('close');
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzaG93IiwiQm9vbGVhbiIsInRpdGxlIiwiU3RyaW5nIiwiY2FuY2VsVGV4dCIsImFjdGlvbnMiLCJ0eXBlIiwiQXJyYXkiLCJ2YWx1ZSIsIm92ZXJsYXkiLCJjbG9zZU9uQ2xpY2tPdmVybGF5IiwibWV0aG9kcyIsIm9uU2VsZWN0IiwiZXZlbnQiLCJpbmRleCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaXRlbSIsImRhdGEiLCJkaXNhYmxlZCIsImxvYWRpbmciLCJ0cmlnZ2VyRXZlbnQiLCJvbkNhbmNlbCIsIm9uQ2xvc2UiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFVBQVU7QUFDUkMsY0FBWTtBQUNWQyxVQUFNQyxPQURJO0FBRVZDLFdBQU9DLE1BRkc7QUFHVkMsZ0JBQVlELE1BSEY7QUFJVkUsYUFBUztBQUNQQyxZQUFNQyxLQURDO0FBRVBDLGFBQU87QUFGQSxLQUpDO0FBUVZDLGFBQVM7QUFDUEgsWUFBTUwsT0FEQztBQUVQTyxhQUFPO0FBRkEsS0FSQztBQVlWRSx5QkFBcUI7QUFDbkJKLFlBQU1MLE9BRGE7QUFFbkJPLGFBQU87QUFGWTtBQVpYLEdBREo7O0FBbUJSRyxXQUFTO0FBQ1BDLFlBRE8sb0JBQ0VDLEtBREYsRUFDUztBQUFBLFVBQ05DLEtBRE0sR0FDSUQsTUFBTUUsYUFBTixDQUFvQkMsT0FEeEIsQ0FDTkYsS0FETTs7QUFFZCxVQUFNRyxPQUFPLEtBQUtDLElBQUwsQ0FBVWIsT0FBVixDQUFrQlMsS0FBbEIsQ0FBYjtBQUNBLFVBQUlHLFFBQVEsQ0FBQ0EsS0FBS0UsUUFBZCxJQUEwQixDQUFDRixLQUFLRyxPQUFwQyxFQUE2QztBQUMzQyxhQUFLQyxZQUFMLENBQWtCLFFBQWxCLEVBQTRCSixJQUE1QjtBQUNEO0FBQ0YsS0FQTTtBQVNQSyxZQVRPLHNCQVNJO0FBQ1QsV0FBS0QsWUFBTCxDQUFrQixRQUFsQjtBQUNELEtBWE07QUFhUEUsV0FiTyxxQkFhRztBQUNSLFdBQUtGLFlBQUwsQ0FBa0IsT0FBbEI7QUFDRDtBQWZNO0FBbkJELENBQVYiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJDb21wb25lbnQoe1xuICBwcm9wZXJ0aWVzOiB7XG4gICAgc2hvdzogQm9vbGVhbixcbiAgICB0aXRsZTogU3RyaW5nLFxuICAgIGNhbmNlbFRleHQ6IFN0cmluZyxcbiAgICBhY3Rpb25zOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIHZhbHVlOiBbXVxuICAgIH0sXG4gICAgb3ZlcmxheToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiB0cnVlXG4gICAgfSxcbiAgICBjbG9zZU9uQ2xpY2tPdmVybGF5OiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IHRydWVcbiAgICB9XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIG9uU2VsZWN0KGV2ZW50KSB7XG4gICAgICBjb25zdCB7IGluZGV4IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgICBjb25zdCBpdGVtID0gdGhpcy5kYXRhLmFjdGlvbnNbaW5kZXhdO1xuICAgICAgaWYgKGl0ZW0gJiYgIWl0ZW0uZGlzYWJsZWQgJiYgIWl0ZW0ubG9hZGluZykge1xuICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnc2VsZWN0JywgaXRlbSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIG9uQ2FuY2VsKCkge1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2NhbmNlbCcpO1xuICAgIH0sXG5cbiAgICBvbkNsb3NlKCkge1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2Nsb3NlJyk7XG4gICAgfVxuICB9XG59KTtcbiJdfQ==