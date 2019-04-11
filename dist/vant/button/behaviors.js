'use strict';

module.exports = Behavior({
  properties: {
    loading: Boolean,
    // 在自定义组件中，无法与外界的 form 组件联动，暂时不开放
    // formType: String,
    openType: String,
    appParameter: String,
    // 暂时不开放，直接传入无法设置样式
    // hoverClass: {
    //   type: String,
    //   value: 'button-hover'
    // },
    hoverStopPropagation: Boolean,
    hoverStartTime: {
      type: Number,
      value: 20
    },
    hoverStayTime: {
      type: Number,
      value: 70
    },
    lang: {
      type: String,
      value: 'en'
    },
    sessionFrom: {
      type: String,
      value: ''
    },
    sendMessageTitle: String,
    sendMessagePath: String,
    sendMessageImg: String,
    showMessageCard: String
  },

  methods: {
    bindgetuserinfo: function bindgetuserinfo() {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.triggerEvent('getuserinfo', event.detail || {});
    },
    bindcontact: function bindcontact() {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.triggerEvent('contact', event.detail || {});
    },
    bindgetphonenumber: function bindgetphonenumber() {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.triggerEvent('getphonenumber', event.detail || {});
    },
    bindopensetting: function bindopensetting() {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.triggerEvent('opensetting', event.detail || {});
    },
    binderror: function binderror() {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.triggerEvent('error', event.detail || {});
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlaGF2aW9ycy5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiQmVoYXZpb3IiLCJwcm9wZXJ0aWVzIiwibG9hZGluZyIsIkJvb2xlYW4iLCJvcGVuVHlwZSIsIlN0cmluZyIsImFwcFBhcmFtZXRlciIsImhvdmVyU3RvcFByb3BhZ2F0aW9uIiwiaG92ZXJTdGFydFRpbWUiLCJ0eXBlIiwiTnVtYmVyIiwidmFsdWUiLCJob3ZlclN0YXlUaW1lIiwibGFuZyIsInNlc3Npb25Gcm9tIiwic2VuZE1lc3NhZ2VUaXRsZSIsInNlbmRNZXNzYWdlUGF0aCIsInNlbmRNZXNzYWdlSW1nIiwic2hvd01lc3NhZ2VDYXJkIiwibWV0aG9kcyIsImJpbmRnZXR1c2VyaW5mbyIsImV2ZW50IiwidHJpZ2dlckV2ZW50IiwiZGV0YWlsIiwiYmluZGNvbnRhY3QiLCJiaW5kZ2V0cGhvbmVudW1iZXIiLCJiaW5kb3BlbnNldHRpbmciLCJiaW5kZXJyb3IiXSwibWFwcGluZ3MiOiI7O0FBQUFBLE9BQU9DLE9BQVAsR0FBaUJDLFNBQVM7QUFDeEJDLGNBQVk7QUFDVkMsYUFBU0MsT0FEQztBQUVWO0FBQ0E7QUFDQUMsY0FBVUMsTUFKQTtBQUtWQyxrQkFBY0QsTUFMSjtBQU1WO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUUsMEJBQXNCSixPQVhaO0FBWVZLLG9CQUFnQjtBQUNkQyxZQUFNQyxNQURRO0FBRWRDLGFBQU87QUFGTyxLQVpOO0FBZ0JWQyxtQkFBZTtBQUNiSCxZQUFNQyxNQURPO0FBRWJDLGFBQU87QUFGTSxLQWhCTDtBQW9CVkUsVUFBTTtBQUNKSixZQUFNSixNQURGO0FBRUpNLGFBQU87QUFGSCxLQXBCSTtBQXdCVkcsaUJBQWE7QUFDWEwsWUFBTUosTUFESztBQUVYTSxhQUFPO0FBRkksS0F4Qkg7QUE0QlZJLHNCQUFrQlYsTUE1QlI7QUE2QlZXLHFCQUFpQlgsTUE3QlA7QUE4QlZZLG9CQUFnQlosTUE5Qk47QUErQlZhLHFCQUFpQmI7QUEvQlAsR0FEWTs7QUFtQ3hCYyxXQUFTO0FBQ1BDLG1CQURPLDZCQUNxQjtBQUFBLFVBQVpDLEtBQVksdUVBQUosRUFBSTs7QUFDMUIsV0FBS0MsWUFBTCxDQUFrQixhQUFsQixFQUFpQ0QsTUFBTUUsTUFBTixJQUFnQixFQUFqRDtBQUNELEtBSE07QUFLUEMsZUFMTyx5QkFLaUI7QUFBQSxVQUFaSCxLQUFZLHVFQUFKLEVBQUk7O0FBQ3RCLFdBQUtDLFlBQUwsQ0FBa0IsU0FBbEIsRUFBNkJELE1BQU1FLE1BQU4sSUFBZ0IsRUFBN0M7QUFDRCxLQVBNO0FBU1BFLHNCQVRPLGdDQVN3QjtBQUFBLFVBQVpKLEtBQVksdUVBQUosRUFBSTs7QUFDN0IsV0FBS0MsWUFBTCxDQUFrQixnQkFBbEIsRUFBb0NELE1BQU1FLE1BQU4sSUFBZ0IsRUFBcEQ7QUFDRCxLQVhNO0FBYVBHLG1CQWJPLDZCQWFxQjtBQUFBLFVBQVpMLEtBQVksdUVBQUosRUFBSTs7QUFDMUIsV0FBS0MsWUFBTCxDQUFrQixhQUFsQixFQUFpQ0QsTUFBTUUsTUFBTixJQUFnQixFQUFqRDtBQUNELEtBZk07QUFpQlBJLGFBakJPLHVCQWlCZTtBQUFBLFVBQVpOLEtBQVksdUVBQUosRUFBSTs7QUFDcEIsV0FBS0MsWUFBTCxDQUFrQixPQUFsQixFQUEyQkQsTUFBTUUsTUFBTixJQUFnQixFQUEzQztBQUNEO0FBbkJNO0FBbkNlLENBQVQsQ0FBakIiLCJmaWxlIjoiYmVoYXZpb3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBCZWhhdmlvcih7XG4gIHByb3BlcnRpZXM6IHtcbiAgICBsb2FkaW5nOiBCb29sZWFuLFxuICAgIC8vIOWcqOiHquWumuS5iee7hOS7tuS4re+8jOaXoOazleS4juWklueVjOeahCBmb3JtIOe7hOS7tuiBlOWKqO+8jOaaguaXtuS4jeW8gOaUvlxuICAgIC8vIGZvcm1UeXBlOiBTdHJpbmcsXG4gICAgb3BlblR5cGU6IFN0cmluZyxcbiAgICBhcHBQYXJhbWV0ZXI6IFN0cmluZyxcbiAgICAvLyDmmoLml7bkuI3lvIDmlL7vvIznm7TmjqXkvKDlhaXml6Dms5Xorr7nva7moLflvI9cbiAgICAvLyBob3ZlckNsYXNzOiB7XG4gICAgLy8gICB0eXBlOiBTdHJpbmcsXG4gICAgLy8gICB2YWx1ZTogJ2J1dHRvbi1ob3ZlcidcbiAgICAvLyB9LFxuICAgIGhvdmVyU3RvcFByb3BhZ2F0aW9uOiBCb29sZWFuLFxuICAgIGhvdmVyU3RhcnRUaW1lOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICB2YWx1ZTogMjBcbiAgICB9LFxuICAgIGhvdmVyU3RheVRpbWU6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHZhbHVlOiA3MFxuICAgIH0sXG4gICAgbGFuZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICdlbidcbiAgICB9LFxuICAgIHNlc3Npb25Gcm9tOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJydcbiAgICB9LFxuICAgIHNlbmRNZXNzYWdlVGl0bGU6IFN0cmluZyxcbiAgICBzZW5kTWVzc2FnZVBhdGg6IFN0cmluZyxcbiAgICBzZW5kTWVzc2FnZUltZzogU3RyaW5nLFxuICAgIHNob3dNZXNzYWdlQ2FyZDogU3RyaW5nXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGJpbmRnZXR1c2VyaW5mbyhldmVudCA9IHt9KSB7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnZ2V0dXNlcmluZm8nLCBldmVudC5kZXRhaWwgfHwge30pO1xuICAgIH0sXG5cbiAgICBiaW5kY29udGFjdChldmVudCA9IHt9KSB7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnY29udGFjdCcsIGV2ZW50LmRldGFpbCB8fCB7fSk7XG4gICAgfSxcblxuICAgIGJpbmRnZXRwaG9uZW51bWJlcihldmVudCA9IHt9KSB7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnZ2V0cGhvbmVudW1iZXInLCBldmVudC5kZXRhaWwgfHwge30pO1xuICAgIH0sXG5cbiAgICBiaW5kb3BlbnNldHRpbmcoZXZlbnQgPSB7fSkge1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ29wZW5zZXR0aW5nJywgZXZlbnQuZGV0YWlsIHx8IHt9KTtcbiAgICB9LFxuXG4gICAgYmluZGVycm9yKGV2ZW50ID0ge30pIHtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdlcnJvcicsIGV2ZW50LmRldGFpbCB8fCB7fSk7XG4gICAgfVxuICB9XG59KTtcbiJdfQ==