'use strict';

Component({
  options: {
    multipleSlots: true
  },

  externalClasses: ['custom-class', 'thumb-class', 'title-class', 'price-class', 'desc-class', 'num-class'],

  properties: {
    num: String,
    desc: String,
    thumb: String,
    title: String,
    price: String,
    centered: Boolean,
    currency: {
      type: String,
      default: '¥'
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIm9wdGlvbnMiLCJtdWx0aXBsZVNsb3RzIiwiZXh0ZXJuYWxDbGFzc2VzIiwicHJvcGVydGllcyIsIm51bSIsIlN0cmluZyIsImRlc2MiLCJ0aHVtYiIsInRpdGxlIiwicHJpY2UiLCJjZW50ZXJlZCIsIkJvb2xlYW4iLCJjdXJyZW5jeSIsInR5cGUiLCJkZWZhdWx0Il0sIm1hcHBpbmdzIjoiOztBQUFBQSxVQUFVO0FBQ1JDLFdBQVM7QUFDUEMsbUJBQWU7QUFEUixHQUREOztBQUtSQyxtQkFBaUIsQ0FDZixjQURlLEVBRWYsYUFGZSxFQUdmLGFBSGUsRUFJZixhQUplLEVBS2YsWUFMZSxFQU1mLFdBTmUsQ0FMVDs7QUFjUkMsY0FBWTtBQUNWQyxTQUFLQyxNQURLO0FBRVZDLFVBQU1ELE1BRkk7QUFHVkUsV0FBT0YsTUFIRztBQUlWRyxXQUFPSCxNQUpHO0FBS1ZJLFdBQU9KLE1BTEc7QUFNVkssY0FBVUMsT0FOQTtBQU9WQyxjQUFVO0FBQ1JDLFlBQU1SLE1BREU7QUFFUlMsZUFBUztBQUZEO0FBUEE7QUFkSixDQUFWIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcbiAgb3B0aW9uczoge1xuICAgIG11bHRpcGxlU2xvdHM6IHRydWVcbiAgfSxcblxuICBleHRlcm5hbENsYXNzZXM6IFtcbiAgICAnY3VzdG9tLWNsYXNzJyxcbiAgICAndGh1bWItY2xhc3MnLFxuICAgICd0aXRsZS1jbGFzcycsXG4gICAgJ3ByaWNlLWNsYXNzJyxcbiAgICAnZGVzYy1jbGFzcycsXG4gICAgJ251bS1jbGFzcydcbiAgXSxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgbnVtOiBTdHJpbmcsXG4gICAgZGVzYzogU3RyaW5nLFxuICAgIHRodW1iOiBTdHJpbmcsXG4gICAgdGl0bGU6IFN0cmluZyxcbiAgICBwcmljZTogU3RyaW5nLFxuICAgIGNlbnRlcmVkOiBCb29sZWFuLFxuICAgIGN1cnJlbmN5OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnwqUnXG4gICAgfVxuICB9XG59KTtcbiJdfQ==