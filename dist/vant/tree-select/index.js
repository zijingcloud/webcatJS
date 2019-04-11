'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ITEM_HEIGHT = 44;

Component({
  properties: {
    items: {
      type: Array,
      observer: function observer() {
        this.updateSubItems();
        this.updateMainHeight();
      }
    },
    mainActiveIndex: {
      type: Number,
      value: 0,
      observer: function observer() {
        this.updateSubItems();
      }
    },
    activeId: {
      type: Number,
      value: 0
    },
    maxHeight: {
      type: Number,
      value: 300,
      observer: function observer() {
        this.updateItemHeight();
        this.updateMainHeight();
      }
    }
  },

  data: {
    subItems: [],
    mainHeight: 0,
    itemHeight: 0
  },

  methods: {
    // 当一个子项被选择时
    onSelectItem: function onSelectItem(event) {
      var _ref = event.currentTarget || {},
          _ref$dataset = _ref.dataset,
          dataset = _ref$dataset === undefined ? {} : _ref$dataset;

      this.triggerEvent('click-item', _extends({}, dataset.item || {}));
    },


    // 当一个导航被点击时
    onClickNav: function onClickNav(event) {
      var _ref2 = event.currentTarget || {},
          _ref2$dataset = _ref2.dataset,
          dataset = _ref2$dataset === undefined ? {} : _ref2$dataset;

      this.triggerEvent('click-nav', { index: dataset.index });
    },


    // 更新子项列表
    updateSubItems: function updateSubItems() {
      var selectedItem = this.data.items[this.data.mainActiveIndex] || {};

      this.setData({ subItems: selectedItem.children || [] });

      this.updateItemHeight();
    },


    // 更新组件整体高度，根据最大高度和当前组件需要展示的高度来决定
    updateMainHeight: function updateMainHeight() {
      var maxHeight = Math.max(this.data.items.length * ITEM_HEIGHT, this.data.subItems.length * ITEM_HEIGHT);

      this.setData({ mainHeight: Math.min(maxHeight, this.data.maxHeight) });
    },


    // 更新子项列表高度，根据可展示的最大高度和当前子项列表的高度决定
    updateItemHeight: function updateItemHeight() {
      this.setData({ itemHeight: Math.min(this.data.subItems.length * ITEM_HEIGHT, this.data.maxHeight) });
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIklURU1fSEVJR0hUIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIml0ZW1zIiwidHlwZSIsIkFycmF5Iiwib2JzZXJ2ZXIiLCJ1cGRhdGVTdWJJdGVtcyIsInVwZGF0ZU1haW5IZWlnaHQiLCJtYWluQWN0aXZlSW5kZXgiLCJOdW1iZXIiLCJ2YWx1ZSIsImFjdGl2ZUlkIiwibWF4SGVpZ2h0IiwidXBkYXRlSXRlbUhlaWdodCIsImRhdGEiLCJzdWJJdGVtcyIsIm1haW5IZWlnaHQiLCJpdGVtSGVpZ2h0IiwibWV0aG9kcyIsIm9uU2VsZWN0SXRlbSIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJ0cmlnZ2VyRXZlbnQiLCJpdGVtIiwib25DbGlja05hdiIsImluZGV4Iiwic2VsZWN0ZWRJdGVtIiwic2V0RGF0YSIsImNoaWxkcmVuIiwiTWF0aCIsIm1heCIsImxlbmd0aCIsIm1pbiJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLElBQU1BLGNBQWMsRUFBcEI7O0FBRUFDLFVBQVU7QUFDUkMsY0FBWTtBQUNWQyxXQUFPO0FBQ0xDLFlBQU1DLEtBREQ7QUFFTEMsY0FGSyxzQkFFTTtBQUNULGFBQUtDLGNBQUw7QUFDQSxhQUFLQyxnQkFBTDtBQUNEO0FBTEksS0FERztBQVFWQyxxQkFBaUI7QUFDZkwsWUFBTU0sTUFEUztBQUVmQyxhQUFPLENBRlE7QUFHZkwsY0FIZSxzQkFHSjtBQUNULGFBQUtDLGNBQUw7QUFDRDtBQUxjLEtBUlA7QUFlVkssY0FBVTtBQUNSUixZQUFNTSxNQURFO0FBRVJDLGFBQU87QUFGQyxLQWZBO0FBbUJWRSxlQUFXO0FBQ1RULFlBQU1NLE1BREc7QUFFVEMsYUFBTyxHQUZFO0FBR1RMLGNBSFMsc0JBR0U7QUFDVCxhQUFLUSxnQkFBTDtBQUNBLGFBQUtOLGdCQUFMO0FBQ0Q7QUFOUTtBQW5CRCxHQURKOztBQThCUk8sUUFBTTtBQUNKQyxjQUFVLEVBRE47QUFFSkMsZ0JBQVksQ0FGUjtBQUdKQyxnQkFBWTtBQUhSLEdBOUJFOztBQW9DUkMsV0FBUztBQUNQO0FBQ0FDLGdCQUZPLHdCQUVNQyxLQUZOLEVBRWE7QUFBQSxpQkFHZEEsTUFBTUMsYUFBTixJQUF1QixFQUhUO0FBQUEsOEJBRWhCQyxPQUZnQjtBQUFBLFVBRWhCQSxPQUZnQixnQ0FFTixFQUZNOztBQUlsQixXQUFLQyxZQUFMLENBQWtCLFlBQWxCLGVBQXNDRCxRQUFRRSxJQUFSLElBQWdCLEVBQXREO0FBQ0QsS0FQTTs7O0FBU1A7QUFDQUMsY0FWTyxzQkFVSUwsS0FWSixFQVVXO0FBQUEsa0JBR1pBLE1BQU1DLGFBQU4sSUFBdUIsRUFIWDtBQUFBLGdDQUVkQyxPQUZjO0FBQUEsVUFFZEEsT0FGYyxpQ0FFSixFQUZJOztBQUloQixXQUFLQyxZQUFMLENBQWtCLFdBQWxCLEVBQStCLEVBQUVHLE9BQU9KLFFBQVFJLEtBQWpCLEVBQS9CO0FBQ0QsS0FmTTs7O0FBaUJQO0FBQ0FwQixrQkFsQk8sNEJBa0JVO0FBQ2YsVUFBTXFCLGVBQWUsS0FBS2IsSUFBTCxDQUFVWixLQUFWLENBQWdCLEtBQUtZLElBQUwsQ0FBVU4sZUFBMUIsS0FBOEMsRUFBbkU7O0FBRUEsV0FBS29CLE9BQUwsQ0FBYSxFQUFFYixVQUFVWSxhQUFhRSxRQUFiLElBQXlCLEVBQXJDLEVBQWI7O0FBRUEsV0FBS2hCLGdCQUFMO0FBQ0QsS0F4Qk07OztBQTBCUDtBQUNBTixvQkEzQk8sOEJBMkJZO0FBQ2pCLFVBQU1LLFlBQVlrQixLQUFLQyxHQUFMLENBQVMsS0FBS2pCLElBQUwsQ0FBVVosS0FBVixDQUFnQjhCLE1BQWhCLEdBQXlCakMsV0FBbEMsRUFBK0MsS0FBS2UsSUFBTCxDQUFVQyxRQUFWLENBQW1CaUIsTUFBbkIsR0FBNEJqQyxXQUEzRSxDQUFsQjs7QUFFQSxXQUFLNkIsT0FBTCxDQUFhLEVBQUVaLFlBQVljLEtBQUtHLEdBQUwsQ0FBU3JCLFNBQVQsRUFBb0IsS0FBS0UsSUFBTCxDQUFVRixTQUE5QixDQUFkLEVBQWI7QUFDRCxLQS9CTTs7O0FBaUNQO0FBQ0FDLG9CQWxDTyw4QkFrQ1k7QUFDakIsV0FBS2UsT0FBTCxDQUFhLEVBQUVYLFlBQVlhLEtBQUtHLEdBQUwsQ0FBUyxLQUFLbkIsSUFBTCxDQUFVQyxRQUFWLENBQW1CaUIsTUFBbkIsR0FBNEJqQyxXQUFyQyxFQUFrRCxLQUFLZSxJQUFMLENBQVVGLFNBQTVELENBQWQsRUFBYjtBQUNEO0FBcENNO0FBcENELENBQVYiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBJVEVNX0hFSUdIVCA9IDQ0O1xuXG5Db21wb25lbnQoe1xuICBwcm9wZXJ0aWVzOiB7XG4gICAgaXRlbXM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgb2JzZXJ2ZXIoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlU3ViSXRlbXMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVNYWluSGVpZ2h0KCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBtYWluQWN0aXZlSW5kZXg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHZhbHVlOiAwLFxuICAgICAgb2JzZXJ2ZXIoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlU3ViSXRlbXMoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFjdGl2ZUlkOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICB2YWx1ZTogMFxuICAgIH0sXG4gICAgbWF4SGVpZ2h0OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICB2YWx1ZTogMzAwLFxuICAgICAgb2JzZXJ2ZXIoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlSXRlbUhlaWdodCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZU1haW5IZWlnaHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgZGF0YToge1xuICAgIHN1Ykl0ZW1zOiBbXSxcbiAgICBtYWluSGVpZ2h0OiAwLFxuICAgIGl0ZW1IZWlnaHQ6IDBcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgLy8g5b2T5LiA5Liq5a2Q6aG56KKr6YCJ5oup5pe2XG4gICAgb25TZWxlY3RJdGVtKGV2ZW50KSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGRhdGFzZXQgPSB7fVxuICAgICAgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgfHwge307XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnY2xpY2staXRlbScsIHsgLi4uKGRhdGFzZXQuaXRlbSB8fCB7fSkgfSk7XG4gICAgfSxcblxuICAgIC8vIOW9k+S4gOS4quWvvOiIquiiq+eCueWHu+aXtlxuICAgIG9uQ2xpY2tOYXYoZXZlbnQpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZGF0YXNldCA9IHt9XG4gICAgICB9ID0gZXZlbnQuY3VycmVudFRhcmdldCB8fCB7fTtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdjbGljay1uYXYnLCB7IGluZGV4OiBkYXRhc2V0LmluZGV4IH0pO1xuICAgIH0sXG5cbiAgICAvLyDmm7TmlrDlrZDpobnliJfooahcbiAgICB1cGRhdGVTdWJJdGVtcygpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbSA9IHRoaXMuZGF0YS5pdGVtc1t0aGlzLmRhdGEubWFpbkFjdGl2ZUluZGV4XSB8fCB7fTtcblxuICAgICAgdGhpcy5zZXREYXRhKHsgc3ViSXRlbXM6IHNlbGVjdGVkSXRlbS5jaGlsZHJlbiB8fCBbXSB9KTtcblxuICAgICAgdGhpcy51cGRhdGVJdGVtSGVpZ2h0KCk7XG4gICAgfSxcblxuICAgIC8vIOabtOaWsOe7hOS7tuaVtOS9k+mrmOW6pu+8jOagueaNruacgOWkp+mrmOW6puWSjOW9k+WJjee7hOS7tumcgOimgeWxleekuueahOmrmOW6puadpeWGs+WumlxuICAgIHVwZGF0ZU1haW5IZWlnaHQoKSB7XG4gICAgICBjb25zdCBtYXhIZWlnaHQgPSBNYXRoLm1heCh0aGlzLmRhdGEuaXRlbXMubGVuZ3RoICogSVRFTV9IRUlHSFQsIHRoaXMuZGF0YS5zdWJJdGVtcy5sZW5ndGggKiBJVEVNX0hFSUdIVCk7XG5cbiAgICAgIHRoaXMuc2V0RGF0YSh7IG1haW5IZWlnaHQ6IE1hdGgubWluKG1heEhlaWdodCwgdGhpcy5kYXRhLm1heEhlaWdodCkgfSk7XG4gICAgfSxcblxuICAgIC8vIOabtOaWsOWtkOmhueWIl+ihqOmrmOW6pu+8jOagueaNruWPr+WxleekuueahOacgOWkp+mrmOW6puWSjOW9k+WJjeWtkOmhueWIl+ihqOeahOmrmOW6puWGs+WumlxuICAgIHVwZGF0ZUl0ZW1IZWlnaHQoKSB7XG4gICAgICB0aGlzLnNldERhdGEoeyBpdGVtSGVpZ2h0OiBNYXRoLm1pbih0aGlzLmRhdGEuc3ViSXRlbXMubGVuZ3RoICogSVRFTV9IRUlHSFQsIHRoaXMuZGF0YS5tYXhIZWlnaHQpIH0pO1xuICAgIH1cbiAgfVxufSk7XG4iXX0=