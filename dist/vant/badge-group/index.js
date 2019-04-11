'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BADGE_PATH = '../badge/index';

Component({
  externalClasses: ['custom-class'],

  relations: _defineProperty({}, BADGE_PATH, {
    type: 'descendant',

    linked: function linked(target) {
      this.data.badges.push(target);
      this.setActive();
    },
    unlinked: function unlinked(target) {
      this.data.badges = this.data.badges.filter(function (item) {
        return item !== target;
      });
      this.setActive();
    }
  }),

  properties: {
    active: {
      type: Number,
      value: 0,
      observer: function observer() {
        this.setActive();
      }
    }
  },

  data: {
    badges: []
  },

  attached: function attached() {
    this.currentActive = -1;
  },


  methods: {
    setActive: function setActive(badge) {
      var active = this.data.active;

      if (badge) {
        active = this.data.badges.indexOf(badge);
      }

      if (active === this.currentActive) {
        return;
      }

      if (this.currentActive !== -1) {
        this.triggerEvent('change', active);
      }

      this.currentActive = active;
      this.data.badges.forEach(function (badge, index) {
        badge.setActive(index === active);
      });
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkJBREdFX1BBVEgiLCJDb21wb25lbnQiLCJleHRlcm5hbENsYXNzZXMiLCJyZWxhdGlvbnMiLCJ0eXBlIiwibGlua2VkIiwidGFyZ2V0IiwiZGF0YSIsImJhZGdlcyIsInB1c2giLCJzZXRBY3RpdmUiLCJ1bmxpbmtlZCIsImZpbHRlciIsIml0ZW0iLCJwcm9wZXJ0aWVzIiwiYWN0aXZlIiwiTnVtYmVyIiwidmFsdWUiLCJvYnNlcnZlciIsImF0dGFjaGVkIiwiY3VycmVudEFjdGl2ZSIsIm1ldGhvZHMiLCJiYWRnZSIsImluZGV4T2YiLCJ0cmlnZ2VyRXZlbnQiLCJmb3JFYWNoIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxJQUFNQSxhQUFhLGdCQUFuQjs7QUFFQUMsVUFBVTtBQUNSQyxtQkFBaUIsQ0FBQyxjQUFELENBRFQ7O0FBR1JDLGlDQUNHSCxVQURILEVBQ2dCO0FBQ1pJLFVBQU0sWUFETTs7QUFHWkMsVUFIWSxrQkFHTEMsTUFISyxFQUdHO0FBQ2IsV0FBS0MsSUFBTCxDQUFVQyxNQUFWLENBQWlCQyxJQUFqQixDQUFzQkgsTUFBdEI7QUFDQSxXQUFLSSxTQUFMO0FBQ0QsS0FOVztBQVFaQyxZQVJZLG9CQVFITCxNQVJHLEVBUUs7QUFDZixXQUFLQyxJQUFMLENBQVVDLE1BQVYsR0FBbUIsS0FBS0QsSUFBTCxDQUFVQyxNQUFWLENBQWlCSSxNQUFqQixDQUF3QjtBQUFBLGVBQVFDLFNBQVNQLE1BQWpCO0FBQUEsT0FBeEIsQ0FBbkI7QUFDQSxXQUFLSSxTQUFMO0FBQ0Q7QUFYVyxHQURoQixDQUhROztBQW1CUkksY0FBWTtBQUNWQyxZQUFRO0FBQ05YLFlBQU1ZLE1BREE7QUFFTkMsYUFBTyxDQUZEO0FBR05DLGNBSE0sc0JBR0s7QUFDVCxhQUFLUixTQUFMO0FBQ0Q7QUFMSztBQURFLEdBbkJKOztBQTZCUkgsUUFBTTtBQUNKQyxZQUFRO0FBREosR0E3QkU7O0FBaUNSVyxVQWpDUSxzQkFpQ0c7QUFDVCxTQUFLQyxhQUFMLEdBQXFCLENBQUMsQ0FBdEI7QUFDRCxHQW5DTzs7O0FBcUNSQyxXQUFTO0FBQ1BYLGFBRE8scUJBQ0dZLEtBREgsRUFDVTtBQUFBLFVBQ1RQLE1BRFMsR0FDRSxLQUFLUixJQURQLENBQ1RRLE1BRFM7O0FBRWYsVUFBSU8sS0FBSixFQUFXO0FBQ1RQLGlCQUFTLEtBQUtSLElBQUwsQ0FBVUMsTUFBVixDQUFpQmUsT0FBakIsQ0FBeUJELEtBQXpCLENBQVQ7QUFDRDs7QUFFRCxVQUFJUCxXQUFXLEtBQUtLLGFBQXBCLEVBQW1DO0FBQ2pDO0FBQ0Q7O0FBRUQsVUFBSSxLQUFLQSxhQUFMLEtBQXVCLENBQUMsQ0FBNUIsRUFBK0I7QUFDN0IsYUFBS0ksWUFBTCxDQUFrQixRQUFsQixFQUE0QlQsTUFBNUI7QUFDRDs7QUFFRCxXQUFLSyxhQUFMLEdBQXFCTCxNQUFyQjtBQUNBLFdBQUtSLElBQUwsQ0FBVUMsTUFBVixDQUFpQmlCLE9BQWpCLENBQXlCLFVBQUNILEtBQUQsRUFBUUksS0FBUixFQUFrQjtBQUN6Q0osY0FBTVosU0FBTixDQUFnQmdCLFVBQVVYLE1BQTFCO0FBQ0QsT0FGRDtBQUdEO0FBbkJNO0FBckNELENBQVYiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBCQURHRV9QQVRIID0gJy4uL2JhZGdlL2luZGV4JztcblxuQ29tcG9uZW50KHtcbiAgZXh0ZXJuYWxDbGFzc2VzOiBbJ2N1c3RvbS1jbGFzcyddLFxuXG4gIHJlbGF0aW9uczoge1xuICAgIFtCQURHRV9QQVRIXToge1xuICAgICAgdHlwZTogJ2Rlc2NlbmRhbnQnLFxuXG4gICAgICBsaW5rZWQodGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuZGF0YS5iYWRnZXMucHVzaCh0YXJnZXQpO1xuICAgICAgICB0aGlzLnNldEFjdGl2ZSgpO1xuICAgICAgfSxcblxuICAgICAgdW5saW5rZWQodGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuZGF0YS5iYWRnZXMgPSB0aGlzLmRhdGEuYmFkZ2VzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHRhcmdldCk7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlKCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHByb3BlcnRpZXM6IHtcbiAgICBhY3RpdmU6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHZhbHVlOiAwLFxuICAgICAgb2JzZXJ2ZXIoKSB7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlKCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGRhdGE6IHtcbiAgICBiYWRnZXM6IFtdXG4gIH0sXG5cbiAgYXR0YWNoZWQoKSB7XG4gICAgdGhpcy5jdXJyZW50QWN0aXZlID0gLTE7XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIHNldEFjdGl2ZShiYWRnZSkge1xuICAgICAgbGV0IHsgYWN0aXZlIH0gPSB0aGlzLmRhdGE7XG4gICAgICBpZiAoYmFkZ2UpIHtcbiAgICAgICAgYWN0aXZlID0gdGhpcy5kYXRhLmJhZGdlcy5pbmRleE9mKGJhZGdlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFjdGl2ZSA9PT0gdGhpcy5jdXJyZW50QWN0aXZlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY3VycmVudEFjdGl2ZSAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2NoYW5nZScsIGFjdGl2ZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY3VycmVudEFjdGl2ZSA9IGFjdGl2ZTtcbiAgICAgIHRoaXMuZGF0YS5iYWRnZXMuZm9yRWFjaCgoYmFkZ2UsIGluZGV4KSA9PiB7XG4gICAgICAgIGJhZGdlLnNldEFjdGl2ZShpbmRleCA9PT0gYWN0aXZlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufSk7XG4iXX0=