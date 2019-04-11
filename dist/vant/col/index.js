'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ROW_PATH = '../row/index';

Component({
  externalClasses: ['custom-class'],

  relations: _defineProperty({}, ROW_PATH, {
    type: 'ancestor'
  }),

  properties: {
    span: Number,
    offset: Number
  },

  methods: {
    setGutter: function setGutter(gutter) {
      var padding = gutter / 2 + 'px';
      var style = gutter ? 'padding-left: ' + padding + '; padding-right: ' + padding + ';' : '';
      this.setData({ style: style });
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlJPV19QQVRIIiwiQ29tcG9uZW50IiwiZXh0ZXJuYWxDbGFzc2VzIiwicmVsYXRpb25zIiwidHlwZSIsInByb3BlcnRpZXMiLCJzcGFuIiwiTnVtYmVyIiwib2Zmc2V0IiwibWV0aG9kcyIsInNldEd1dHRlciIsImd1dHRlciIsInBhZGRpbmciLCJzdHlsZSIsInNldERhdGEiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxJQUFNQSxXQUFXLGNBQWpCOztBQUVBQyxVQUFVO0FBQ1JDLG1CQUFpQixDQUFDLGNBQUQsQ0FEVDs7QUFHUkMsaUNBQ0dILFFBREgsRUFDYztBQUNWSSxVQUFNO0FBREksR0FEZCxDQUhROztBQVNSQyxjQUFZO0FBQ1ZDLFVBQU1DLE1BREk7QUFFVkMsWUFBUUQ7QUFGRSxHQVRKOztBQWNSRSxXQUFTO0FBQ1BDLGFBRE8scUJBQ0dDLE1BREgsRUFDVztBQUNoQixVQUFNQyxVQUFhRCxTQUFTLENBQXRCLE9BQU47QUFDQSxVQUFNRSxRQUFRRiw0QkFBMEJDLE9BQTFCLHlCQUFxREEsT0FBckQsU0FBa0UsRUFBaEY7QUFDQSxXQUFLRSxPQUFMLENBQWEsRUFBRUQsWUFBRixFQUFiO0FBQ0Q7QUFMTTtBQWRELENBQVYiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBST1dfUEFUSCA9ICcuLi9yb3cvaW5kZXgnO1xuXG5Db21wb25lbnQoe1xuICBleHRlcm5hbENsYXNzZXM6IFsnY3VzdG9tLWNsYXNzJ10sXG5cbiAgcmVsYXRpb25zOiB7XG4gICAgW1JPV19QQVRIXToge1xuICAgICAgdHlwZTogJ2FuY2VzdG9yJ1xuICAgIH1cbiAgfSxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgc3BhbjogTnVtYmVyLFxuICAgIG9mZnNldDogTnVtYmVyXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIHNldEd1dHRlcihndXR0ZXIpIHtcbiAgICAgIGNvbnN0IHBhZGRpbmcgPSBgJHtndXR0ZXIgLyAyfXB4YDtcbiAgICAgIGNvbnN0IHN0eWxlID0gZ3V0dGVyID8gYHBhZGRpbmctbGVmdDogJHtwYWRkaW5nfTsgcGFkZGluZy1yaWdodDogJHtwYWRkaW5nfTtgIDogJyc7XG4gICAgICB0aGlzLnNldERhdGEoeyBzdHlsZSB9KTtcbiAgICB9XG4gIH1cbn0pO1xuIl19