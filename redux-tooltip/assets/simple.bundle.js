webpackJsonp([7],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(158);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRedux = __webpack_require__(159);
	
	var _app = __webpack_require__(215);
	
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

/***/ 215:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(159);
	
	var _index = __webpack_require__(183);
	
	var _page = __webpack_require__(216);
	
	var _page2 = _interopRequireDefault(_page);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var App = function (_Component) {
	  _inherits(App, _Component);
	
	  function App() {
	    _classCallCheck(this, App);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
	  }
	
	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h1',
	          null,
	          'Simple Example'
	        ),
	        _react2.default.createElement(_page2.default, null),
	        _react2.default.createElement(
	          _index.Tooltip,
	          null,
	          'This is a tooltip.'
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

/***/ },

/***/ 216:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(183);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PIXEL = 'data:image/gif;base64,R0lGODlhAQABAPAAAAD/AP///yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==';
	
	var Page = function (_Component) {
	  _inherits(Page, _Component);
	
	  function Page() {
	    _classCallCheck(this, Page);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Page).apply(this, arguments));
	  }
	
	  _createClass(Page, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'p',
	          null,
	          'This is an example for redux-tooltip.',
	          _react2.default.createElement('br', null),
	          'You can put a tooltip on ',
	          _react2.default.createElement(
	            _index.Origin,
	            { className: 'target' },
	            'a text'
	          ),
	          '.'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          'Of course, you can also put ',
	          _react2.default.createElement(
	            _index.Origin,
	            { className: 'target first' },
	            'multiple'
	          ),
	          ' ',
	          _react2.default.createElement(
	            _index.Origin,
	            { className: 'target second' },
	            'tooltips'
	          ),
	          '.'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          _react2.default.createElement(
	            _index.Origin,
	            { className: 'image' },
	            _react2.default.createElement('img', { src: PIXEL, width: '240', height: '120', alt: 'placeholder' })
	          ),
	          _react2.default.createElement('br', null),
	          'It can be used as a caption of images.'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          _react2.default.createElement(
	            'span',
	            null,
	            'Email: '
	          ),
	          _react2.default.createElement(
	            _index.Origin,
	            { className: 'user' },
	            _react2.default.createElement('input', { type: 'input', placeholder: 'mail' })
	          ),
	          ' @ ',
	          _react2.default.createElement(
	            _index.Origin,
	            { className: 'domain' },
	            _react2.default.createElement('input', { type: 'input', placeholder: 'example.com' })
	          )
	        )
	      );
	    }
	  }]);
	
	  return Page;
	}(_react.Component);

	exports.default = Page;

/***/ }

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zaW1wbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc2ltcGxlL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zaW1wbGUvcGFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLG9CQUFTLE1BQVQsQ0FDRTs7S0FBVSx3QkFBVjtHQUNFLGtEQURGO0VBREYsRUFJQSxTQUFTLGNBQVQsQ0FBd0IsV0FBeEIsQ0FKQSxFOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7S0FFTTs7Ozs7Ozs7Ozs7OEJBQ0s7QUFDUCxjQUNFOzs7U0FDRTs7OztVQURGO1NBR0UsbURBSEY7U0FLRTs7OztVQUxGO1FBREYsQ0FETzs7OztVQURMOzs7QUFnQk4sVUFBUyxNQUFULENBQWdCLEtBQWhCLEVBQXVCO09BQ2IsTUFBUSxNQUFSLElBRGE7O0FBRXJCLFVBQU8sRUFBRSxRQUFGLEVBQVAsQ0FGcUI7RUFBdkI7O21CQUtlLHlCQUFRLE1BQVIsRUFBZ0IsR0FBaEIsRTs7Ozs7Ozs7Ozs7Ozs7O0FDMUJmOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxLQUFNLFFBQVEsb0ZBQVI7O0tBRWU7Ozs7Ozs7Ozs7OzhCQUNWO0FBQ1AsY0FDRTs7O1NBQ0U7Ozs7V0FDdUMseUNBRHZDOztXQUUyQjs7ZUFBUSxXQUFVLFFBQVYsRUFBUjs7WUFGM0I7O1VBREY7U0FNRTs7OztXQUM4Qjs7ZUFBUSxXQUFVLGNBQVYsRUFBUjs7WUFEOUI7O1dBQ2lGOztlQUFRLFdBQVUsZUFBVixFQUFSOztZQURqRjs7VUFORjtTQVVFOzs7V0FDRTs7ZUFBUSxXQUFVLE9BQVYsRUFBUjthQUNFLHVDQUFLLEtBQUssS0FBTCxFQUFZLE9BQU0sS0FBTixFQUFZLFFBQU8sS0FBUCxFQUFhLEtBQUksYUFBSixFQUExQyxDQURGO1lBREY7V0FJRSx5Q0FKRjs7VUFWRjtTQWtCRTs7O1dBQ0U7Ozs7WUFERjtXQUVFOztlQUFRLFdBQVUsTUFBVixFQUFSO2FBQ0UseUNBQU8sTUFBSyxPQUFMLEVBQWEsYUFBWSxNQUFaLEVBQXBCLENBREY7WUFGRjs7V0FJYzs7ZUFBUSxXQUFVLFFBQVYsRUFBUjthQUNWLHlDQUFPLE1BQUssT0FBTCxFQUFhLGFBQVksYUFBWixFQUFwQixDQURVO1lBSmQ7VUFsQkY7UUFERixDQURPOzs7O1VBRFUiLCJmaWxlIjoic2ltcGxlLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEFwcCBmcm9tICcuL2FwcCc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vY29tbW9uL3N0b3JlJztcblxuUmVhY3RET00ucmVuZGVyKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8QXBwIC8+XG4gIDwvUHJvdmlkZXI+LFxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZXhhbXBsZXMvc2ltcGxlL2luZGV4LmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tICcuLi8uLi9zcmMvaW5kZXgnO1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi9wYWdlJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+U2ltcGxlIEV4YW1wbGU8L2gxPlxuXG4gICAgICAgIDxQYWdlIC8+XG5cbiAgICAgICAgPFRvb2x0aXA+XG4gICAgICAgICAgVGhpcyBpcyBhIHRvb2x0aXAuXG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2VsZWN0KHN0YXRlKSB7XG4gIGNvbnN0IHsgYXBwIH0gPSBzdGF0ZTtcbiAgcmV0dXJuIHsgYXBwIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc2VsZWN0KShBcHApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9leGFtcGxlcy9zaW1wbGUvYXBwLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgT3JpZ2luIH0gZnJvbSAnLi4vLi4vc3JjL2luZGV4JztcblxuY29uc3QgUElYRUwgPSAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFQQUFBQUQvQVAvLy95SDVCQUFBQUFBQUxBQUFBQUFCQUFFQUFBSUNSQUVBT3c9PSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoaXMgaXMgYW4gZXhhbXBsZSBmb3IgcmVkdXgtdG9vbHRpcC48YnIgLz5cbiAgICAgICAgICBZb3UgY2FuIHB1dCBhIHRvb2x0aXAgb24gPE9yaWdpbiBjbGFzc05hbWU9XCJ0YXJnZXRcIj5hIHRleHQ8L09yaWdpbj4uXG4gICAgICAgIDwvcD5cblxuICAgICAgICA8cD5cbiAgICAgICAgICBPZiBjb3Vyc2UsIHlvdSBjYW4gYWxzbyBwdXQgPE9yaWdpbiBjbGFzc05hbWU9XCJ0YXJnZXQgZmlyc3RcIj5tdWx0aXBsZTwvT3JpZ2luPiA8T3JpZ2luIGNsYXNzTmFtZT1cInRhcmdldCBzZWNvbmRcIj50b29sdGlwczwvT3JpZ2luPi5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxwPlxuICAgICAgICAgIDxPcmlnaW4gY2xhc3NOYW1lPVwiaW1hZ2VcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtQSVhFTH0gd2lkdGg9XCIyNDBcIiBoZWlnaHQ9XCIxMjBcIiBhbHQ9XCJwbGFjZWhvbGRlclwiIC8+XG4gICAgICAgICAgPC9PcmlnaW4+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgSXQgY2FuIGJlIHVzZWQgYXMgYSBjYXB0aW9uIG9mIGltYWdlcy5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxwPlxuICAgICAgICAgIDxzcGFuPkVtYWlsOiA8L3NwYW4+XG4gICAgICAgICAgPE9yaWdpbiBjbGFzc05hbWU9XCJ1c2VyXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImlucHV0XCIgcGxhY2Vob2xkZXI9XCJtYWlsXCIgLz5cbiAgICAgICAgICA8L09yaWdpbj4gQCA8T3JpZ2luIGNsYXNzTmFtZT1cImRvbWFpblwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJpbnB1dFwiIHBsYWNlaG9sZGVyPVwiZXhhbXBsZS5jb21cIiAvPlxuICAgICAgICAgIDwvT3JpZ2luPlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2V4YW1wbGVzL3NpbXBsZS9wYWdlLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==