'use strict';

Component({
  externalClasses: ['custom-class', 'node-class'],

  properties: {
    checked: Boolean,
    loading: Boolean,
    disabled: Boolean,
    size: {
      type: String,
      value: '30px'
    }
  },

  methods: {
    onClick: function onClick() {
      if (!this.data.disabled && !this.data.loading) {
        var checked = !this.data.checked;
        this.triggerEvent('input', checked);
        this.triggerEvent('change', checked);
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInByb3BlcnRpZXMiLCJjaGVja2VkIiwiQm9vbGVhbiIsImxvYWRpbmciLCJkaXNhYmxlZCIsInNpemUiLCJ0eXBlIiwiU3RyaW5nIiwidmFsdWUiLCJtZXRob2RzIiwib25DbGljayIsImRhdGEiLCJ0cmlnZ2VyRXZlbnQiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFVBQVU7QUFDUkMsbUJBQWlCLENBQUMsY0FBRCxFQUFpQixZQUFqQixDQURUOztBQUdSQyxjQUFZO0FBQ1ZDLGFBQVNDLE9BREM7QUFFVkMsYUFBU0QsT0FGQztBQUdWRSxjQUFVRixPQUhBO0FBSVZHLFVBQU07QUFDSkMsWUFBTUMsTUFERjtBQUVKQyxhQUFPO0FBRkg7QUFKSSxHQUhKOztBQWFSQyxXQUFTO0FBQ1BDLFdBRE8scUJBQ0c7QUFDUixVQUFJLENBQUMsS0FBS0MsSUFBTCxDQUFVUCxRQUFYLElBQXVCLENBQUMsS0FBS08sSUFBTCxDQUFVUixPQUF0QyxFQUErQztBQUM3QyxZQUFNRixVQUFVLENBQUMsS0FBS1UsSUFBTCxDQUFVVixPQUEzQjtBQUNBLGFBQUtXLFlBQUwsQ0FBa0IsT0FBbEIsRUFBMkJYLE9BQTNCO0FBQ0EsYUFBS1csWUFBTCxDQUFrQixRQUFsQixFQUE0QlgsT0FBNUI7QUFDRDtBQUNGO0FBUE07QUFiRCxDQUFWIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcbiAgZXh0ZXJuYWxDbGFzc2VzOiBbJ2N1c3RvbS1jbGFzcycsICdub2RlLWNsYXNzJ10sXG5cbiAgcHJvcGVydGllczoge1xuICAgIGNoZWNrZWQ6IEJvb2xlYW4sXG4gICAgbG9hZGluZzogQm9vbGVhbixcbiAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICBzaXplOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJzMwcHgnXG4gICAgfVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBvbkNsaWNrKCkge1xuICAgICAgaWYgKCF0aGlzLmRhdGEuZGlzYWJsZWQgJiYgIXRoaXMuZGF0YS5sb2FkaW5nKSB7XG4gICAgICAgIGNvbnN0IGNoZWNrZWQgPSAhdGhpcy5kYXRhLmNoZWNrZWQ7XG4gICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdpbnB1dCcsIGNoZWNrZWQpO1xuICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnY2hhbmdlJywgY2hlY2tlZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcbiJdfQ==