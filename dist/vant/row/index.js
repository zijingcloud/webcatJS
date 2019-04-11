'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var COL_PATH = '../col/index';

Component({
  externalClasses: ['custom-class'],

  relations: _defineProperty({}, COL_PATH, {
    type: 'descendant'
  }),

  properties: {
    gutter: {
      type: Number,
      observer: function observer() {
        this.setGutter();
      }
    }
  },

  ready: function ready() {
    this.setGutter();
  },


  methods: {
    setGutter: function setGutter() {
      var _this = this;

      var gutter = this.data.gutter;

      var margin = '-' + Number(gutter) / 2 + 'px';
      var style = gutter ? 'margin-right: ' + margin + '; margin-left: ' + margin + ';' : '';

      this.setData({ style: style });
      this.getRelationNodes(COL_PATH).forEach(function (col) {
        col.setGutter(_this.data.gutter);
      });
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNPTF9QQVRIIiwiQ29tcG9uZW50IiwiZXh0ZXJuYWxDbGFzc2VzIiwicmVsYXRpb25zIiwidHlwZSIsInByb3BlcnRpZXMiLCJndXR0ZXIiLCJOdW1iZXIiLCJvYnNlcnZlciIsInNldEd1dHRlciIsInJlYWR5IiwibWV0aG9kcyIsImRhdGEiLCJtYXJnaW4iLCJzdHlsZSIsInNldERhdGEiLCJnZXRSZWxhdGlvbk5vZGVzIiwiZm9yRWFjaCIsImNvbCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLElBQU1BLFdBQVcsY0FBakI7O0FBRUFDLFVBQVU7QUFDUkMsbUJBQWlCLENBQUMsY0FBRCxDQURUOztBQUdSQyxpQ0FDR0gsUUFESCxFQUNjO0FBQ1ZJLFVBQU07QUFESSxHQURkLENBSFE7O0FBU1JDLGNBQVk7QUFDVkMsWUFBUTtBQUNORixZQUFNRyxNQURBO0FBRU5DLGNBRk0sc0JBRUs7QUFDVCxhQUFLQyxTQUFMO0FBQ0Q7QUFKSztBQURFLEdBVEo7O0FBa0JSQyxPQWxCUSxtQkFrQkE7QUFDTixTQUFLRCxTQUFMO0FBQ0QsR0FwQk87OztBQXNCUkUsV0FBUztBQUNQRixhQURPLHVCQUNLO0FBQUE7O0FBQUEsVUFDRkgsTUFERSxHQUNTLEtBQUtNLElBRGQsQ0FDRk4sTUFERTs7QUFFVixVQUFNTyxlQUFhTixPQUFPRCxNQUFQLElBQWlCLENBQTlCLE9BQU47QUFDQSxVQUFNUSxRQUFRUiw0QkFBMEJPLE1BQTFCLHVCQUFrREEsTUFBbEQsU0FBOEQsRUFBNUU7O0FBRUEsV0FBS0UsT0FBTCxDQUFhLEVBQUVELFlBQUYsRUFBYjtBQUNBLFdBQUtFLGdCQUFMLENBQXNCaEIsUUFBdEIsRUFBZ0NpQixPQUFoQyxDQUF3QyxVQUFDQyxHQUFELEVBQVM7QUFDL0NBLFlBQUlULFNBQUosQ0FBYyxNQUFLRyxJQUFMLENBQVVOLE1BQXhCO0FBQ0QsT0FGRDtBQUdEO0FBVk07QUF0QkQsQ0FBViIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENPTF9QQVRIID0gJy4uL2NvbC9pbmRleCc7XG5cbkNvbXBvbmVudCh7XG4gIGV4dGVybmFsQ2xhc3NlczogWydjdXN0b20tY2xhc3MnXSxcblxuICByZWxhdGlvbnM6IHtcbiAgICBbQ09MX1BBVEhdOiB7XG4gICAgICB0eXBlOiAnZGVzY2VuZGFudCdcbiAgICB9XG4gIH0sXG5cbiAgcHJvcGVydGllczoge1xuICAgIGd1dHRlcjoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgb2JzZXJ2ZXIoKSB7XG4gICAgICAgIHRoaXMuc2V0R3V0dGVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHJlYWR5KCkge1xuICAgIHRoaXMuc2V0R3V0dGVyKCk7XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIHNldEd1dHRlcigpIHtcbiAgICAgIGNvbnN0IHsgZ3V0dGVyIH0gPSB0aGlzLmRhdGE7XG4gICAgICBjb25zdCBtYXJnaW4gPSBgLSR7TnVtYmVyKGd1dHRlcikgLyAyfXB4YDtcbiAgICAgIGNvbnN0IHN0eWxlID0gZ3V0dGVyID8gYG1hcmdpbi1yaWdodDogJHttYXJnaW59OyBtYXJnaW4tbGVmdDogJHttYXJnaW59O2AgOiAnJztcblxuICAgICAgdGhpcy5zZXREYXRhKHsgc3R5bGUgfSk7XG4gICAgICB0aGlzLmdldFJlbGF0aW9uTm9kZXMoQ09MX1BBVEgpLmZvckVhY2goKGNvbCkgPT4ge1xuICAgICAgICBjb2wuc2V0R3V0dGVyKHRoaXMuZGF0YS5ndXR0ZXIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59KTtcbiJdfQ==