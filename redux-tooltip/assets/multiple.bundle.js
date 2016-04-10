webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(158);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRedux = __webpack_require__(159);
	
	var _app = __webpack_require__(211);
	
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

/***/ 211:
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
	          'Multiple Example'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          'You can put multiple tooltips using \'name\' props: ',
	          _react2.default.createElement(
	            _index.Origin,
	            { className: 'target', name: 'green' },
	            'Green'
	          ),
	          ' tooltip and ',
	          _react2.default.createElement(
	            _index.Origin,
	            { className: 'target', name: 'red' },
	            'Red'
	          ),
	          ' tooltip.'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          'If you pass a list of tooltip names as \'name\' props, the specified tooltips will be shown ',
	          _react2.default.createElement(
	            _index.Origin,
	            { className: 'target', name: ['green', 'red'] },
	            'at once'
	          ),
	          '.'
	        ),
	        _react2.default.createElement(
	          _index.Tooltip,
	          { name: 'green', place: 'right' },
	          'This is a ',
	          _react2.default.createElement(
	            'b',
	            { style: { color: 'green' } },
	            'Green'
	          ),
	          ' tooltip.'
	        ),
	        _react2.default.createElement(
	          _index.Tooltip,
	          { name: 'red', place: 'left' },
	          'This is a ',
	          _react2.default.createElement(
	            'b',
	            { style: { color: 'red' } },
	            'Red'
	          ),
	          ' tooltip.'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9tdWx0aXBsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9tdWx0aXBsZS9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxvQkFBUyxNQUFULENBQ0U7O0tBQVUsd0JBQVY7R0FDRSxrREFERjtFQURGLEVBSUEsU0FBUyxjQUFULENBQXdCLFdBQXhCLENBSkEsRTs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztLQUVNOzs7Ozs7Ozs7Ozs4QkFDSztBQUNQLGNBQ0U7OztTQUNFOzs7O1VBREY7U0FHRTs7OztXQUNvRDs7ZUFBUSxXQUFVLFFBQVYsRUFBbUIsTUFBSyxPQUFMLEVBQTNCOztZQURwRDs7V0FDdUg7O2VBQVEsV0FBVSxRQUFWLEVBQW1CLE1BQUssS0FBTCxFQUEzQjs7WUFEdkg7O1VBSEY7U0FPRTs7OztXQUM0Rjs7ZUFBUSxXQUFVLFFBQVYsRUFBbUIsTUFBTSxDQUFDLE9BQUQsRUFBVSxLQUFWLENBQU4sRUFBM0I7O1lBRDVGOztVQVBGO1NBV0U7O2FBQVMsTUFBSyxPQUFMLEVBQWEsT0FBTSxPQUFOLEVBQXRCOztXQUNZOztlQUFHLE9BQU8sRUFBRSxPQUFPLE9BQVAsRUFBVCxFQUFIOztZQURaOztVQVhGO1NBZUU7O2FBQVMsTUFBSyxLQUFMLEVBQVcsT0FBTSxNQUFOLEVBQXBCOztXQUNZOztlQUFHLE9BQU8sRUFBRSxPQUFPLEtBQVAsRUFBVCxFQUFIOztZQURaOztVQWZGO1FBREYsQ0FETzs7OztVQURMOzs7QUEwQk4sVUFBUyxNQUFULENBQWdCLEtBQWhCLEVBQXVCO09BQ2IsTUFBUSxNQUFSLElBRGE7O0FBRXJCLFVBQU8sRUFBRSxRQUFGLEVBQVAsQ0FGcUI7RUFBdkI7O21CQUtlLHlCQUFRLE1BQVIsRUFBZ0IsR0FBaEIsRSIsImZpbGUiOiJtdWx0aXBsZS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uL2NvbW1vbi9zdG9yZSc7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPEFwcCAvPlxuICA8L1Byb3ZpZGVyPixcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2V4YW1wbGVzL211bHRpcGxlL2luZGV4LmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFRvb2x0aXAsIE9yaWdpbiB9IGZyb20gJy4uLy4uL3NyYy9pbmRleCc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPk11bHRpcGxlIEV4YW1wbGU8L2gxPlxuXG4gICAgICAgIDxwPlxuICAgICAgICAgIFlvdSBjYW4gcHV0IG11bHRpcGxlIHRvb2x0aXBzIHVzaW5nICduYW1lJyBwcm9wczogPE9yaWdpbiBjbGFzc05hbWU9XCJ0YXJnZXRcIiBuYW1lPVwiZ3JlZW5cIj5HcmVlbjwvT3JpZ2luPiB0b29sdGlwIGFuZCA8T3JpZ2luIGNsYXNzTmFtZT1cInRhcmdldFwiIG5hbWU9XCJyZWRcIj5SZWQ8L09yaWdpbj4gdG9vbHRpcC5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxwPlxuICAgICAgICAgIElmIHlvdSBwYXNzIGEgbGlzdCBvZiB0b29sdGlwIG5hbWVzIGFzICduYW1lJyBwcm9wcywgdGhlIHNwZWNpZmllZCB0b29sdGlwcyB3aWxsIGJlIHNob3duIDxPcmlnaW4gY2xhc3NOYW1lPVwidGFyZ2V0XCIgbmFtZT17WydncmVlbicsICdyZWQnXX0+YXQgb25jZTwvT3JpZ2luPi5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxUb29sdGlwIG5hbWU9XCJncmVlblwiIHBsYWNlPVwicmlnaHRcIj5cbiAgICAgICAgICBUaGlzIGlzIGEgPGIgc3R5bGU9e3sgY29sb3I6ICdncmVlbicgfX0+R3JlZW48L2I+IHRvb2x0aXAuXG4gICAgICAgIDwvVG9vbHRpcD5cblxuICAgICAgICA8VG9vbHRpcCBuYW1lPVwicmVkXCIgcGxhY2U9XCJsZWZ0XCI+XG4gICAgICAgICAgVGhpcyBpcyBhIDxiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5SZWQ8L2I+IHRvb2x0aXAuXG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2VsZWN0KHN0YXRlKSB7XG4gIGNvbnN0IHsgYXBwIH0gPSBzdGF0ZTtcbiAgcmV0dXJuIHsgYXBwIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc2VsZWN0KShBcHApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9leGFtcGxlcy9tdWx0aXBsZS9hcHAuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9