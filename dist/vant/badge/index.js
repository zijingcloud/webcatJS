'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BADGE_GROUP_PATH = '../badge-group/index';

Component({
  externalClasses: ['custom-class'],

  relations: _defineProperty({}, BADGE_GROUP_PATH, {
    type: 'ancestor'
  }),

  properties: {
    info: Number,
    title: String
  },

  methods: {
    onClick: function onClick() {
      var group = this.getRelationNodes(BADGE_GROUP_PATH)[0];
      if (group) {
        group.setActive(this);
      }
    },
    setActive: function setActive(active) {
      this.setData({ active: active });
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkJBREdFX0dST1VQX1BBVEgiLCJDb21wb25lbnQiLCJleHRlcm5hbENsYXNzZXMiLCJyZWxhdGlvbnMiLCJ0eXBlIiwicHJvcGVydGllcyIsImluZm8iLCJOdW1iZXIiLCJ0aXRsZSIsIlN0cmluZyIsIm1ldGhvZHMiLCJvbkNsaWNrIiwiZ3JvdXAiLCJnZXRSZWxhdGlvbk5vZGVzIiwic2V0QWN0aXZlIiwiYWN0aXZlIiwic2V0RGF0YSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLElBQU1BLG1CQUFtQixzQkFBekI7O0FBRUFDLFVBQVU7QUFDUkMsbUJBQWlCLENBQUMsY0FBRCxDQURUOztBQUdSQyxpQ0FDR0gsZ0JBREgsRUFDc0I7QUFDbEJJLFVBQU07QUFEWSxHQUR0QixDQUhROztBQVNSQyxjQUFZO0FBQ1ZDLFVBQU1DLE1BREk7QUFFVkMsV0FBT0M7QUFGRyxHQVRKOztBQWNSQyxXQUFTO0FBQ1BDLFdBRE8scUJBQ0c7QUFDUixVQUFNQyxRQUFRLEtBQUtDLGdCQUFMLENBQXNCYixnQkFBdEIsRUFBd0MsQ0FBeEMsQ0FBZDtBQUNBLFVBQUlZLEtBQUosRUFBVztBQUNUQSxjQUFNRSxTQUFOLENBQWdCLElBQWhCO0FBQ0Q7QUFDRixLQU5NO0FBUVBBLGFBUk8scUJBUUdDLE1BUkgsRUFRVztBQUNoQixXQUFLQyxPQUFMLENBQWEsRUFBRUQsY0FBRixFQUFiO0FBQ0Q7QUFWTTtBQWRELENBQVYiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBCQURHRV9HUk9VUF9QQVRIID0gJy4uL2JhZGdlLWdyb3VwL2luZGV4JztcblxuQ29tcG9uZW50KHtcbiAgZXh0ZXJuYWxDbGFzc2VzOiBbJ2N1c3RvbS1jbGFzcyddLFxuXG4gIHJlbGF0aW9uczoge1xuICAgIFtCQURHRV9HUk9VUF9QQVRIXToge1xuICAgICAgdHlwZTogJ2FuY2VzdG9yJ1xuICAgIH1cbiAgfSxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgaW5mbzogTnVtYmVyLFxuICAgIHRpdGxlOiBTdHJpbmdcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgb25DbGljaygpIHtcbiAgICAgIGNvbnN0IGdyb3VwID0gdGhpcy5nZXRSZWxhdGlvbk5vZGVzKEJBREdFX0dST1VQX1BBVEgpWzBdO1xuICAgICAgaWYgKGdyb3VwKSB7XG4gICAgICAgIGdyb3VwLnNldEFjdGl2ZSh0aGlzKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc2V0QWN0aXZlKGFjdGl2ZSkge1xuICAgICAgdGhpcy5zZXREYXRhKHsgYWN0aXZlIH0pO1xuICAgIH1cbiAgfVxufSk7XG4iXX0=