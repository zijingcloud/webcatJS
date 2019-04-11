'use strict';

Component({
  externalClasses: ['custom-class', 'title-class'],

  options: {
    multipleSlots: true
  },

  properties: {
    title: String,
    leftText: String,
    rightText: String,
    leftArrow: Boolean,
    fixed: Boolean,
    zIndex: {
      type: Number,
      value: 1
    }
  },

  methods: {
    onClickLeft: function onClickLeft() {
      this.triggerEvent('click-left');
    },
    onClickRight: function onClickRight() {
      this.triggerEvent('click-right');
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsIm9wdGlvbnMiLCJtdWx0aXBsZVNsb3RzIiwicHJvcGVydGllcyIsInRpdGxlIiwiU3RyaW5nIiwibGVmdFRleHQiLCJyaWdodFRleHQiLCJsZWZ0QXJyb3ciLCJCb29sZWFuIiwiZml4ZWQiLCJ6SW5kZXgiLCJ0eXBlIiwiTnVtYmVyIiwidmFsdWUiLCJtZXRob2RzIiwib25DbGlja0xlZnQiLCJ0cmlnZ2VyRXZlbnQiLCJvbkNsaWNrUmlnaHQiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFVBQVU7QUFDUkMsbUJBQWlCLENBQ2YsY0FEZSxFQUVmLGFBRmUsQ0FEVDs7QUFNUkMsV0FBUztBQUNQQyxtQkFBZTtBQURSLEdBTkQ7O0FBVVJDLGNBQVk7QUFDVkMsV0FBT0MsTUFERztBQUVWQyxjQUFVRCxNQUZBO0FBR1ZFLGVBQVdGLE1BSEQ7QUFJVkcsZUFBV0MsT0FKRDtBQUtWQyxXQUFPRCxPQUxHO0FBTVZFLFlBQVE7QUFDTkMsWUFBTUMsTUFEQTtBQUVOQyxhQUFPO0FBRkQ7QUFORSxHQVZKOztBQXNCUkMsV0FBUztBQUNQQyxlQURPLHlCQUNPO0FBQ1osV0FBS0MsWUFBTCxDQUFrQixZQUFsQjtBQUNELEtBSE07QUFLUEMsZ0JBTE8sMEJBS1E7QUFDYixXQUFLRCxZQUFMLENBQWtCLGFBQWxCO0FBQ0Q7QUFQTTtBQXRCRCxDQUFWIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcbiAgZXh0ZXJuYWxDbGFzc2VzOiBbXG4gICAgJ2N1c3RvbS1jbGFzcycsXG4gICAgJ3RpdGxlLWNsYXNzJ1xuICBdLFxuXG4gIG9wdGlvbnM6IHtcbiAgICBtdWx0aXBsZVNsb3RzOiB0cnVlXG4gIH0sXG5cbiAgcHJvcGVydGllczoge1xuICAgIHRpdGxlOiBTdHJpbmcsXG4gICAgbGVmdFRleHQ6IFN0cmluZyxcbiAgICByaWdodFRleHQ6IFN0cmluZyxcbiAgICBsZWZ0QXJyb3c6IEJvb2xlYW4sXG4gICAgZml4ZWQ6IEJvb2xlYW4sXG4gICAgekluZGV4OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICB2YWx1ZTogMVxuICAgIH1cbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgb25DbGlja0xlZnQoKSB7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnY2xpY2stbGVmdCcpO1xuICAgIH0sXG5cbiAgICBvbkNsaWNrUmlnaHQoKSB7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnY2xpY2stcmlnaHQnKTtcbiAgICB9XG4gIH1cbn0pO1xuIl19