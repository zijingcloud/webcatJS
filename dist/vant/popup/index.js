'use strict';

Component({
  externalClasses: ['custom-class', 'overlay-class'],

  properties: {
    show: Boolean,
    overlayStyle: String,
    overlay: {
      type: Boolean,
      value: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      value: true
    },
    position: {
      type: String,
      value: 'center'
    }
  },

  methods: {
    onClickOverlay: function onClickOverlay() {
      this.triggerEvent('click-overlay');

      if (this.data.closeOnClickOverlay) {
        this.triggerEvent('close');
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInByb3BlcnRpZXMiLCJzaG93IiwiQm9vbGVhbiIsIm92ZXJsYXlTdHlsZSIsIlN0cmluZyIsIm92ZXJsYXkiLCJ0eXBlIiwidmFsdWUiLCJjbG9zZU9uQ2xpY2tPdmVybGF5IiwicG9zaXRpb24iLCJtZXRob2RzIiwib25DbGlja092ZXJsYXkiLCJ0cmlnZ2VyRXZlbnQiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxVQUFVO0FBQ1JDLG1CQUFpQixDQUNmLGNBRGUsRUFFZixlQUZlLENBRFQ7O0FBTVJDLGNBQVk7QUFDVkMsVUFBTUMsT0FESTtBQUVWQyxrQkFBY0MsTUFGSjtBQUdWQyxhQUFTO0FBQ1BDLFlBQU1KLE9BREM7QUFFUEssYUFBTztBQUZBLEtBSEM7QUFPVkMseUJBQXFCO0FBQ25CRixZQUFNSixPQURhO0FBRW5CSyxhQUFPO0FBRlksS0FQWDtBQVdWRSxjQUFVO0FBQ1JILFlBQU1GLE1BREU7QUFFUkcsYUFBTztBQUZDO0FBWEEsR0FOSjs7QUF1QlJHLFdBQVM7QUFDUEMsa0JBRE8sNEJBQ1U7QUFDZixXQUFLQyxZQUFMLENBQWtCLGVBQWxCOztBQUVBLFVBQUksS0FBS0MsSUFBTCxDQUFVTCxtQkFBZCxFQUFtQztBQUNqQyxhQUFLSSxZQUFMLENBQWtCLE9BQWxCO0FBQ0Q7QUFDRjtBQVBNO0FBdkJELENBQVYiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJDb21wb25lbnQoe1xuICBleHRlcm5hbENsYXNzZXM6IFtcbiAgICAnY3VzdG9tLWNsYXNzJyxcbiAgICAnb3ZlcmxheS1jbGFzcydcbiAgXSxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgc2hvdzogQm9vbGVhbixcbiAgICBvdmVybGF5U3R5bGU6IFN0cmluZyxcbiAgICBvdmVybGF5OiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IHRydWVcbiAgICB9LFxuICAgIGNsb3NlT25DbGlja092ZXJsYXk6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogdHJ1ZVxuICAgIH0sXG4gICAgcG9zaXRpb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnY2VudGVyJ1xuICAgIH1cbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgb25DbGlja092ZXJsYXkoKSB7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnY2xpY2stb3ZlcmxheScpO1xuXG4gICAgICBpZiAodGhpcy5kYXRhLmNsb3NlT25DbGlja092ZXJsYXkpIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2Nsb3NlJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcbiJdfQ==