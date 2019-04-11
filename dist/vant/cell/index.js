'use strict';

Component({
  externalClasses: ['custom-class', 'title-class', 'label-class', 'value-class', 'left-icon-class', 'right-icon-class'],

  options: {
    multipleSlots: true
  },

  properties: {
    title: null,
    value: null,
    url: String,
    icon: String,
    label: String,
    center: Boolean,
    isLink: Boolean,
    required: Boolean,
    clickable: Boolean,
    titleWidth: String,
    customStyle: String,
    arrowDirection: String,
    linkType: {
      type: String,
      value: 'navigateTo'
    },
    border: {
      type: Boolean,
      value: true
    }
  },

  methods: {
    onClick: function onClick() {
      var url = this.data.url;

      if (url) {
        wx[this.data.linkType]({ url: url });
      }
      this.triggerEvent('click');
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsIm9wdGlvbnMiLCJtdWx0aXBsZVNsb3RzIiwicHJvcGVydGllcyIsInRpdGxlIiwidmFsdWUiLCJ1cmwiLCJTdHJpbmciLCJpY29uIiwibGFiZWwiLCJjZW50ZXIiLCJCb29sZWFuIiwiaXNMaW5rIiwicmVxdWlyZWQiLCJjbGlja2FibGUiLCJ0aXRsZVdpZHRoIiwiY3VzdG9tU3R5bGUiLCJhcnJvd0RpcmVjdGlvbiIsImxpbmtUeXBlIiwidHlwZSIsImJvcmRlciIsIm1ldGhvZHMiLCJvbkNsaWNrIiwiZGF0YSIsInd4IiwidHJpZ2dlckV2ZW50Il0sIm1hcHBpbmdzIjoiOztBQUFBQSxVQUFVO0FBQ1JDLG1CQUFpQixDQUNmLGNBRGUsRUFFZixhQUZlLEVBR2YsYUFIZSxFQUlmLGFBSmUsRUFLZixpQkFMZSxFQU1mLGtCQU5lLENBRFQ7O0FBVVJDLFdBQVM7QUFDUEMsbUJBQWU7QUFEUixHQVZEOztBQWNSQyxjQUFZO0FBQ1ZDLFdBQU8sSUFERztBQUVWQyxXQUFPLElBRkc7QUFHVkMsU0FBS0MsTUFISztBQUlWQyxVQUFNRCxNQUpJO0FBS1ZFLFdBQU9GLE1BTEc7QUFNVkcsWUFBUUMsT0FORTtBQU9WQyxZQUFRRCxPQVBFO0FBUVZFLGNBQVVGLE9BUkE7QUFTVkcsZUFBV0gsT0FURDtBQVVWSSxnQkFBWVIsTUFWRjtBQVdWUyxpQkFBYVQsTUFYSDtBQVlWVSxvQkFBZ0JWLE1BWk47QUFhVlcsY0FBVTtBQUNSQyxZQUFNWixNQURFO0FBRVJGLGFBQU87QUFGQyxLQWJBO0FBaUJWZSxZQUFRO0FBQ05ELFlBQU1SLE9BREE7QUFFTk4sYUFBTztBQUZEO0FBakJFLEdBZEo7O0FBcUNSZ0IsV0FBUztBQUNQQyxXQURPLHFCQUNHO0FBQUEsVUFDQWhCLEdBREEsR0FDUSxLQUFLaUIsSUFEYixDQUNBakIsR0FEQTs7QUFFUixVQUFJQSxHQUFKLEVBQVM7QUFDUGtCLFdBQUcsS0FBS0QsSUFBTCxDQUFVTCxRQUFiLEVBQXVCLEVBQUVaLFFBQUYsRUFBdkI7QUFDRDtBQUNELFdBQUttQixZQUFMLENBQWtCLE9BQWxCO0FBQ0Q7QUFQTTtBQXJDRCxDQUFWIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcbiAgZXh0ZXJuYWxDbGFzc2VzOiBbXG4gICAgJ2N1c3RvbS1jbGFzcycsXG4gICAgJ3RpdGxlLWNsYXNzJyxcbiAgICAnbGFiZWwtY2xhc3MnLFxuICAgICd2YWx1ZS1jbGFzcycsXG4gICAgJ2xlZnQtaWNvbi1jbGFzcycsXG4gICAgJ3JpZ2h0LWljb24tY2xhc3MnXG4gIF0sXG5cbiAgb3B0aW9uczoge1xuICAgIG11bHRpcGxlU2xvdHM6IHRydWVcbiAgfSxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgdGl0bGU6IG51bGwsXG4gICAgdmFsdWU6IG51bGwsXG4gICAgdXJsOiBTdHJpbmcsXG4gICAgaWNvbjogU3RyaW5nLFxuICAgIGxhYmVsOiBTdHJpbmcsXG4gICAgY2VudGVyOiBCb29sZWFuLFxuICAgIGlzTGluazogQm9vbGVhbixcbiAgICByZXF1aXJlZDogQm9vbGVhbixcbiAgICBjbGlja2FibGU6IEJvb2xlYW4sXG4gICAgdGl0bGVXaWR0aDogU3RyaW5nLFxuICAgIGN1c3RvbVN0eWxlOiBTdHJpbmcsXG4gICAgYXJyb3dEaXJlY3Rpb246IFN0cmluZyxcbiAgICBsaW5rVHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICduYXZpZ2F0ZVRvJ1xuICAgIH0sXG4gICAgYm9yZGVyOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IHRydWVcbiAgICB9XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIG9uQ2xpY2soKSB7XG4gICAgICBjb25zdCB7IHVybCB9ID0gdGhpcy5kYXRhO1xuICAgICAgaWYgKHVybCkge1xuICAgICAgICB3eFt0aGlzLmRhdGEubGlua1R5cGVdKHsgdXJsIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2NsaWNrJyk7XG4gICAgfVxuICB9XG59KTtcbiJdfQ==