webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(158);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRedux = __webpack_require__(159);
	
	var _app = __webpack_require__(182);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _store = __webpack_require__(206);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_reactDom2.default.render(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: _store2.default },
	  _react2.default.createElement(_app2.default, null)
	), document.getElementById('container'));

/***/ },

/***/ 182:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(159);
	
	var _index = __webpack_require__(183);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var show = _index.actions.show;
	var content = _index.actions.content;
	
	
	function now() {
	  var now = new Date();
	  return now.toString();
	}
	
	var COUNT_FROM = 10;
	var INITIAL_TEXT = 'Count down from ' + COUNT_FROM;
	
	var App = function (_Component) {
	  _inherits(App, _Component);
	
	  function App(props) {
	    _classCallCheck(this, App);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));
	
	    _this.state = { count: [] };
	
	    _this.handleHover = _this.handleHover.bind(_this);
	    _this.handleLeave = _this.handleLeave.bind(_this);
	    _this.handleCountHover = _this.handleCountHover.bind(_this);
	    return _this;
	  }
	
	  _createClass(App, [{
	    key: 'handleHover',
	    value: function handleHover() {
	      var _this2 = this;
	
	      this.updateContent();
	      this.token = setInterval(function () {
	        _this2.updateContent();
	      }, 1000);
	    }
	  }, {
	    key: 'handleLeave',
	    value: function handleLeave() {
	      clearInterval(this.token);
	    }
	  }, {
	    key: 'updateContent',
	    value: function updateContent() {
	      this.props.dispatch(content(now()));
	    }
	  }, {
	    key: 'handleCountHover',
	    value: function handleCountHover() {
	      var _this3 = this;
	
	      this.setState(_extends({}, this.state, { count: [INITIAL_TEXT] }));
	      this.token = setInterval(function () {
	        var count = _this3.state.count;
	
	        if (COUNT_FROM <= count.length) {
	          count = [INITIAL_TEXT];
	        } else {
	          count = [].concat(_toConsumableArray(count), [COUNT_FROM - count.length]);
	        }
	        _this3.setState(_extends({}, _this3.state, { count: count }));
	      }, 1000);
	    }
	  }, {
	    key: 'handleLeave',
	    value: function handleLeave() {
	      clearInterval(this.token);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var dom = _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'span',
	          { style: { color: 'red', marginRight: '5px' } },
	          'Red'
	        ),
	        _react2.default.createElement(
	          'span',
	          { style: { color: 'green', marginRight: '5px' } },
	          'Green'
	        ),
	        _react2.default.createElement(
	          'span',
	          { style: { color: 'blue', marginRight: '5px' } },
	          'Blue'
	        )
	      );
	
	      var count = this.state.count;
	
	      var countBody = count.join(', ');
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h1',
	          null,
	          'Content Example'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          'If you provide a ',
	          _react2.default.createElement(
	            _index.Origin,
	            { className: 'target custom', content: 'This is a custom content.' },
	            'custom'
	          ),
	          ' content via Origin component\'s prop, it will overwrite a ',
	          _react2.default.createElement(
	            _index.Origin,
	            { className: 'target default' },
	            'default'
	          ),
	          ' content of Tooltip component.',
	          _react2.default.createElement('br', null),
	          _react2.default.createElement(
	            _index.Origin,
	            { className: 'target html', content: 'This is a <b>html</b> content.<br />Sanitized by <a href=\'#\'>DOMPurify</a>.<script>console.log(\'Hello XSS!\');</script>' },
	            'HTML'
	          ),
	          ' as string and ',
	          _react2.default.createElement(
	            _index.Origin,
	            { className: 'target dom', content: dom },
	            'DOM element'
	          ),
	          ' are also supported.'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          'What time is it ',
	          _react2.default.createElement(
	            _index.Origin,
	            { className: 'target time', onHover: this.handleHover, onLeave: this.handleLeave },
	            'now'
	          ),
	          '?'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          'Count down: ',
	          _react2.default.createElement(
	            _index.Origin,
	            { name: 'count', className: 'target count', onHover: this.handleCountHover, onLeave: this.handleLeave },
	            'Here'
	          )
	        ),
	        _react2.default.createElement(
	          _index.Tooltip,
	          null,
	          'This is a default content.',
	          _react2.default.createElement('br', null),
	          'It\'s a second line.'
	        ),
	        _react2.default.createElement(
	          _index.Tooltip,
	          { name: 'count' },
	          countBody
	        )
	      );
	    }
	  }]);
	
	  return App;
	}(_react.Component);
	
	function select(state) {
	  var app = state.app;
	
	  return { app: app };
	}
	
	exports.default = (0, _reactRedux.connect)(select)(App);

/***/ }

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9jb250ZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL2V4YW1wbGVzL2NvbnRlbnQvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsb0JBQVMsTUFBVCxDQUNFOztLQUFVLHdCQUFWO0dBQ0Usa0RBREY7RUFERixFQUlBLFNBQVMsY0FBVCxDQUF3QixXQUF4QixDQUpBLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0tBRVE7S0FBTTs7O0FBRWQsVUFBUyxHQUFULEdBQWU7QUFDYixPQUFNLE1BQU0sSUFBSSxJQUFKLEVBQU4sQ0FETztBQUViLFVBQU8sSUFBSSxRQUFKLEVBQVAsQ0FGYTtFQUFmOztBQUtBLEtBQU0sYUFBYSxFQUFiO0FBQ04sS0FBTSxvQ0FBa0MsVUFBbEM7O0tBRUE7OztBQUNKLFlBREksR0FDSixDQUFZLEtBQVosRUFBbUI7MkJBRGYsS0FDZTs7d0VBRGYsZ0JBRUksUUFEVzs7QUFHakIsV0FBSyxLQUFMLEdBQWEsRUFBRSxPQUFPLEVBQVAsRUFBZixDQUhpQjs7QUFLakIsV0FBSyxXQUFMLEdBQW1CLE1BQUssV0FBTCxDQUFpQixJQUFqQixPQUFuQixDQUxpQjtBQU1qQixXQUFLLFdBQUwsR0FBbUIsTUFBSyxXQUFMLENBQWlCLElBQWpCLE9BQW5CLENBTmlCO0FBT2pCLFdBQUssZ0JBQUwsR0FBd0IsTUFBSyxnQkFBTCxDQUFzQixJQUF0QixPQUF4QixDQVBpQjs7SUFBbkI7O2dCQURJOzttQ0FXVTs7O0FBQ1osWUFBSyxhQUFMLEdBRFk7QUFFWixZQUFLLEtBQUwsR0FBYSxZQUFZLFlBQU07QUFDN0IsZ0JBQUssYUFBTCxHQUQ2QjtRQUFOLEVBRXRCLElBRlUsQ0FBYixDQUZZOzs7O21DQU9BO0FBQ1oscUJBQWMsS0FBSyxLQUFMLENBQWQsQ0FEWTs7OztxQ0FJRTtBQUNkLFlBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsUUFBUSxLQUFSLENBQXBCLEVBRGM7Ozs7d0NBSUc7OztBQUNqQixZQUFLLFFBQUwsY0FBbUIsS0FBSyxLQUFMLElBQVksT0FBTyxDQUFDLFlBQUQsQ0FBUCxHQUEvQixFQURpQjtBQUVqQixZQUFLLEtBQUwsR0FBYSxZQUFZLFlBQU07YUFDdkIsUUFBVSxPQUFLLEtBQUwsQ0FBVixNQUR1Qjs7QUFFN0IsYUFBSSxjQUFjLE1BQU0sTUFBTixFQUFjO0FBQzlCLG1CQUFRLENBQUMsWUFBRCxDQUFSLENBRDhCO1VBQWhDLE1BRU87QUFDTCxnREFBYSxTQUFPLGFBQWEsTUFBTSxNQUFOLEVBQWpDLENBREs7VUFGUDtBQUtBLGdCQUFLLFFBQUwsY0FBbUIsT0FBSyxLQUFMLElBQVksZUFBL0IsRUFQNkI7UUFBTixFQVF0QixJQVJVLENBQWIsQ0FGaUI7Ozs7bUNBYUw7QUFDWixxQkFBYyxLQUFLLEtBQUwsQ0FBZCxDQURZOzs7OzhCQUlMO0FBQ1AsV0FBTSxNQUFNOzs7U0FDVjs7YUFBTSxPQUFPLEVBQUUsT0FBTyxLQUFQLEVBQWMsYUFBYSxLQUFiLEVBQXZCLEVBQU47O1VBRFU7U0FFVjs7YUFBTSxPQUFPLEVBQUUsT0FBTyxPQUFQLEVBQWdCLGFBQWEsS0FBYixFQUF6QixFQUFOOztVQUZVO1NBR1Y7O2FBQU0sT0FBTyxFQUFFLE9BQU8sTUFBUCxFQUFlLGFBQWEsS0FBYixFQUF4QixFQUFOOztVQUhVO1FBQU4sQ0FEQzs7V0FPQyxRQUFVLEtBQUssS0FBTCxDQUFWLE1BUEQ7O0FBUVAsV0FBTSxZQUFZLE1BQU0sSUFBTixDQUFXLElBQVgsQ0FBWixDQVJDOztBQVVQLGNBQ0U7OztTQUNFOzs7O1VBREY7U0FHRTs7OztXQUNtQjs7ZUFBUSxXQUFVLGVBQVYsRUFBMEIsU0FBUSwyQkFBUixFQUFsQzs7WUFEbkI7O1dBRXNCOztlQUFRLFdBQVUsZ0JBQVYsRUFBUjs7WUFGdEI7O1dBRXVHLHlDQUZ2RztXQUdFOztlQUFRLFdBQVUsYUFBVixFQUF3QixTQUFRLDRIQUFSLEVBQWhDOztZQUhGOztXQUcrTDs7ZUFBUSxXQUFVLFlBQVYsRUFBdUIsU0FBUyxHQUFULEVBQS9COztZQUgvTDs7VUFIRjtTQVNFOzs7O1dBQ2tCOztlQUFRLFdBQVUsYUFBVixFQUF3QixTQUFTLEtBQUssV0FBTCxFQUFrQixTQUFTLEtBQUssV0FBTCxFQUFwRTs7WUFEbEI7O1VBVEY7U0FhRTs7OztXQUNjOztlQUFRLE1BQUssT0FBTCxFQUFhLFdBQVUsY0FBVixFQUF5QixTQUFTLEtBQUssZ0JBQUwsRUFBdUIsU0FBUyxLQUFLLFdBQUwsRUFBdkY7O1lBRGQ7VUFiRjtTQWlCRTs7OztXQUM0Qix5Q0FENUI7O1VBakJGO1NBc0JFOzthQUFTLE1BQUssT0FBTCxFQUFUO1dBQXVCLFNBQXZCO1VBdEJGO1FBREYsQ0FWTzs7OztVQTNDTDs7O0FBa0ZOLFVBQVMsTUFBVCxDQUFnQixLQUFoQixFQUF1QjtPQUNiLE1BQVEsTUFBUixJQURhOztBQUVyQixVQUFPLEVBQUUsUUFBRixFQUFQLENBRnFCO0VBQXZCOzttQkFLZSx5QkFBUSxNQUFSLEVBQWdCLEdBQWhCLEUiLCJmaWxlIjoiY29udGVudC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uL2NvbW1vbi9zdG9yZSc7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPEFwcCAvPlxuICA8L1Byb3ZpZGVyPixcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2V4YW1wbGVzL2NvbnRlbnQvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgVG9vbHRpcCwgT3JpZ2luLCBhY3Rpb25zIH0gZnJvbSAnLi4vLi4vc3JjL2luZGV4JztcblxuY29uc3QgeyBzaG93LCBjb250ZW50IH0gPSBhY3Rpb25zO1xuXG5mdW5jdGlvbiBub3coKSB7XG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gIHJldHVybiBub3cudG9TdHJpbmcoKTtcbn1cblxuY29uc3QgQ09VTlRfRlJPTSA9IDEwO1xuY29uc3QgSU5JVElBTF9URVhUID0gYENvdW50IGRvd24gZnJvbSAke0NPVU5UX0ZST019YDtcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0geyBjb3VudDogW10gfTtcblxuICAgIHRoaXMuaGFuZGxlSG92ZXIgPSB0aGlzLmhhbmRsZUhvdmVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVMZWF2ZSA9IHRoaXMuaGFuZGxlTGVhdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNvdW50SG92ZXIgPSB0aGlzLmhhbmRsZUNvdW50SG92ZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUhvdmVyKCkge1xuICAgIHRoaXMudXBkYXRlQ29udGVudCgpO1xuICAgIHRoaXMudG9rZW4gPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZUNvbnRlbnQoKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxuXG4gIGhhbmRsZUxlYXZlKCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50b2tlbik7XG4gIH1cblxuICB1cGRhdGVDb250ZW50KCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goY29udGVudChub3coKSkpO1xuICB9XG5cbiAgaGFuZGxlQ291bnRIb3ZlcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5zdGF0ZSwgY291bnQ6IFtJTklUSUFMX1RFWFRdIH0pO1xuICAgIHRoaXMudG9rZW4gPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBsZXQgeyBjb3VudCB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIGlmIChDT1VOVF9GUk9NIDw9IGNvdW50Lmxlbmd0aCkge1xuICAgICAgICBjb3VudCA9IFtJTklUSUFMX1RFWFRdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY291bnQgPSBbIC4uLmNvdW50LCBDT1VOVF9GUk9NIC0gY291bnQubGVuZ3RoIF07XG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5zdGF0ZSwgY291bnQgfSk7XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICBoYW5kbGVMZWF2ZSgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMudG9rZW4pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGRvbSA9IDxkaXY+XG4gICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ3JlZCcsIG1hcmdpblJpZ2h0OiAnNXB4JyB9fT5SZWQ8L3NwYW4+XG4gICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJywgbWFyZ2luUmlnaHQ6ICc1cHgnIH19PkdyZWVuPC9zcGFuPlxuICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdibHVlJywgbWFyZ2luUmlnaHQ6ICc1cHgnIH19PkJsdWU8L3NwYW4+XG4gICAgPC9kaXY+O1xuXG4gICAgY29uc3QgeyBjb3VudCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBjb3VudEJvZHkgPSBjb3VudC5qb2luKCcsICcpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5Db250ZW50IEV4YW1wbGU8L2gxPlxuXG4gICAgICAgIDxwPlxuICAgICAgICAgIElmIHlvdSBwcm92aWRlIGEgPE9yaWdpbiBjbGFzc05hbWU9XCJ0YXJnZXQgY3VzdG9tXCIgY29udGVudD1cIlRoaXMgaXMgYSBjdXN0b20gY29udGVudC5cIj5jdXN0b208L09yaWdpbj4gY29udGVudCB2aWEgT3JpZ2luIGNvbXBvbmVudCdzIHByb3AsXG4gICAgICAgICAgaXQgd2lsbCBvdmVyd3JpdGUgYSA8T3JpZ2luIGNsYXNzTmFtZT1cInRhcmdldCBkZWZhdWx0XCI+ZGVmYXVsdDwvT3JpZ2luPiBjb250ZW50IG9mIFRvb2x0aXAgY29tcG9uZW50LjxiciAvPlxuICAgICAgICAgIDxPcmlnaW4gY2xhc3NOYW1lPVwidGFyZ2V0IGh0bWxcIiBjb250ZW50PVwiVGhpcyBpcyBhIDxiPmh0bWw8L2I+IGNvbnRlbnQuPGJyIC8+U2FuaXRpemVkIGJ5IDxhIGhyZWY9JyMnPkRPTVB1cmlmeTwvYT4uPHNjcmlwdD5jb25zb2xlLmxvZygnSGVsbG8gWFNTIScpOzwvc2NyaXB0PlwiPkhUTUw8L09yaWdpbj4gYXMgc3RyaW5nIGFuZCA8T3JpZ2luIGNsYXNzTmFtZT1cInRhcmdldCBkb21cIiBjb250ZW50PXtkb219PkRPTSBlbGVtZW50PC9PcmlnaW4+IGFyZSBhbHNvIHN1cHBvcnRlZC5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxwPlxuICAgICAgICAgIFdoYXQgdGltZSBpcyBpdCA8T3JpZ2luIGNsYXNzTmFtZT1cInRhcmdldCB0aW1lXCIgb25Ib3Zlcj17dGhpcy5oYW5kbGVIb3Zlcn0gb25MZWF2ZT17dGhpcy5oYW5kbGVMZWF2ZX0+bm93PC9PcmlnaW4+P1xuICAgICAgICA8L3A+XG5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQ291bnQgZG93bjogPE9yaWdpbiBuYW1lPVwiY291bnRcIiBjbGFzc05hbWU9XCJ0YXJnZXQgY291bnRcIiBvbkhvdmVyPXt0aGlzLmhhbmRsZUNvdW50SG92ZXJ9IG9uTGVhdmU9e3RoaXMuaGFuZGxlTGVhdmV9PkhlcmU8L09yaWdpbj5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxUb29sdGlwPlxuICAgICAgICAgIFRoaXMgaXMgYSBkZWZhdWx0IGNvbnRlbnQuPGJyIC8+XG4gICAgICAgICAgSXQncyBhIHNlY29uZCBsaW5lLlxuICAgICAgICA8L1Rvb2x0aXA+XG5cbiAgICAgICAgPFRvb2x0aXAgbmFtZT1cImNvdW50XCI+e2NvdW50Qm9keX08L1Rvb2x0aXA+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNlbGVjdChzdGF0ZSkge1xuICBjb25zdCB7IGFwcCB9ID0gc3RhdGU7XG4gIHJldHVybiB7IGFwcCB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHNlbGVjdCkoQXBwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZXhhbXBsZXMvY29udGVudC9hcHAuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9