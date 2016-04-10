webpackJsonp([5],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(158);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRedux = __webpack_require__(159);
	
	var _app = __webpack_require__(213);
	
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

/***/ 213:
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
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h1',
	          null,
	          'Place Example'
	        ),
	        _react2.default.createElement(
	          'h2',
	          null,
	          'Using origin\'s prop'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          'Available 4 directions: ',
	          _react2.default.createElement(
	            _index.Origin,
	            { className: 'target', place: 'top' },
	            'Top'
	          ),
	          ', ',
	          _react2.default.createElement(
	            _index.Origin,
	            { className: 'target', place: 'right' },
	            'Right'
	          ),
	          ', ',
	          _react2.default.createElement(
	            _index.Origin,
	            { className: 'target', place: 'bottom' },
	            'Bottom'
	          ),
	          ', and ',
	          _react2.default.createElement(
	            _index.Origin,
	            { className: 'target', place: 'left' },
	            'Left'
	          ),
	          '.'
	        ),
	        _react2.default.createElement(
	          _index.Tooltip,
	          null,
	          'This is a ',
	          _react2.default.createElement(
	            'b',
	            null,
	            'shared'
	          ),
	          ' tooltip.'
	        ),
	        _react2.default.createElement(
	          'h2',
	          null,
	          'Using tooltip\'s prop'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          'Available 4 directions: ',
	          _react2.default.createElement(
	            _index.Origin,
	            { className: 'target', name: 'top' },
	            'Top'
	          ),
	          ', ',
	          _react2.default.createElement(
	            _index.Origin,
	            { className: 'target', name: 'right' },
	            'Right'
	          ),
	          ', ',
	          _react2.default.createElement(
	            _index.Origin,
	            { className: 'target', name: 'bottom' },
	            'Bottom'
	          ),
	          ', and ',
	          _react2.default.createElement(
	            _index.Origin,
	            { className: 'target', name: 'left' },
	            'Left'
	          ),
	          '.'
	        ),
	        _react2.default.createElement(
	          _index.Tooltip,
	          { name: 'top', place: 'top' },
	          'This is a ',
	          _react2.default.createElement(
	            'b',
	            null,
	            'top'
	          ),
	          ' tooltip.'
	        ),
	        _react2.default.createElement(
	          _index.Tooltip,
	          { name: 'right', place: 'right' },
	          'This is a ',
	          _react2.default.createElement(
	            'b',
	            null,
	            'right'
	          ),
	          ' tooltip.'
	        ),
	        _react2.default.createElement(
	          _index.Tooltip,
	          { name: 'bottom', place: 'bottom' },
	          'This is a ',
	          _react2.default.createElement(
	            'b',
	            null,
	            'bottom'
	          ),
	          ' tooltip.'
	        ),
	        _react2.default.createElement(
	          _index.Tooltip,
	          { name: 'left', place: 'left' },
	          'This is a ',
	          _react2.default.createElement(
	            'b',
	            null,
	            'left'
	          ),
	          ' tooltip.'
	        ),
	        _react2.default.createElement(
	          'h2',
	          null,
	          'Auto placement'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          _react2.default.createElement(
	            _index.Origin,
	            { className: 'target auto-basic', place: 'left' },
	            'This tooltip'
	          ),
	          ' is configured to be placed ',
	          _react2.default.createElement(
	            'b',
	            null,
	            'left'
	          ),
	          ' of the origin element, but no space to show.',
	          _react2.default.createElement('br', null),
	          'Therefore, it will be located ',
	          _react2.default.createElement(
	            'b',
	            null,
	            'right'
	          ),
	          ' instead of ',
	          _react2.default.createElement(
	            'b',
	            null,
	            'left'
	          ),
	          '.'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          'You can customize ',
	          _react2.default.createElement(
	            _index.Origin,
	            { className: 'target auto-array', place: ['left', 'top'] },
	            'the order'
	          ),
	          ' of fallback.',
	          _react2.default.createElement('br', null),
	          'The \'place\' prop ',
	          _react2.default.createElement(
	            _index.Origin,
	            { className: 'target auto-string', place: 'left,bottom' },
	            'can'
	          ),
	          ' be also passed as a comma separated string.'
	        ),
	        _react2.default.createElement(
	          'div',
	          { ref: 'restricted', style: { width: '420px', height: '160px', backgroundColor: 'lightgray', padding: '16px', position: 'relative' } },
	          'In default, ',
	          _react2.default.createElement(
	            _index.Origin,
	            { name: 'restricted', className: 'target auto-top', place: 'top' },
	            'redux-tooltip'
	          ),
	          ' supposes you want to do auto-placement within the browser window.',
	          _react2.default.createElement('br', null),
	          _react2.default.createElement('br', null),
	          _react2.default.createElement(
	            'div',
	            { style: { position: 'absolute', right: '16px' } },
	            _react2.default.createElement(
	              _index.Origin,
	              { name: 'restricted', className: 'target auto-right', place: 'right' },
	              'right edge -->'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: { position: 'absolute', bottom: '16px' } },
	            _react2.default.createElement(
	              _index.Origin,
	              { name: 'restricted', className: 'target auto-bottom', place: 'bottom' },
	              'This'
	            ),
	            ' is a bottom origin.'
	          )
	        ),
	        _react2.default.createElement(
	          _index.Tooltip,
	          { name: 'restricted', within: function within() {
	              return _this2.refs.restricted;
	            } },
	          'This is a ',
	          _react2.default.createElement(
	            'b',
	            null,
	            'restricted'
	          ),
	          ' tooltip.'
	        ),
	        _react2.default.createElement(
	          'div',
	          { ref: 'more', style: { width: '420px', backgroundColor: 'lightgray', marginTop: '14px', padding: '16px' } },
	          'Two or ',
	          _react2.default.createElement(
	            _index.Origin,
	            { name: 'more', className: 'target auto-more', place: ['left', 'top', 'bottom', 'right'] },
	            'more fallbacks'
	          ),
	          ' also works well.'
	        ),
	        _react2.default.createElement(
	          _index.Tooltip,
	          { name: 'more', within: function within() {
	              return _this2.refs.more;
	            } },
	          'This is a ',
	          _react2.default.createElement(
	            'b',
	            null,
	            'more'
	          ),
	          ' tooltip.'
	        ),
	        _react2.default.createElement(
	          'div',
	          { ref: 'disabled', style: { width: '420px', backgroundColor: 'lightgray', marginTop: '14px', padding: '16px' } },
	          'The ',
	          _react2.default.createElement(
	            _index.Origin,
	            { name: 'disabled', className: 'target auto-disabled', place: 'left' },
	            'auto placement'
	          ),
	          ' feature can be disabled by passing ',
	          _react2.default.createElement(
	            'b',
	            null,
	            'false'
	          ),
	          ' to ',
	          _react2.default.createElement(
	            'code',
	            null,
	            'auto'
	          ),
	          ' prop.'
	        ),
	        _react2.default.createElement(
	          _index.Tooltip,
	          { name: 'disabled', auto: false, within: function within() {
	              return _this2.refs.disabled;
	            } },
	          'This is a ',
	          _react2.default.createElement(
	            'b',
	            null,
	            'disabled'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9wbGFjZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9wbGFjZS9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxvQkFBUyxNQUFULENBQ0U7O0tBQVUsd0JBQVY7R0FDRSxrREFERjtFQURGLEVBSUEsU0FBUyxjQUFULENBQXdCLFdBQXhCLENBSkEsRTs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztLQUVNOzs7Ozs7Ozs7Ozs4QkFDSzs7O0FBQ1AsY0FDRTs7O1NBQ0U7Ozs7VUFERjtTQUdFOzs7O1VBSEY7U0FJRTs7OztXQUMwQjs7ZUFBUSxXQUFVLFFBQVYsRUFBbUIsT0FBTSxLQUFOLEVBQTNCOztZQUQxQjs7V0FDK0U7O2VBQVEsV0FBVSxRQUFWLEVBQW1CLE9BQU0sT0FBTixFQUEzQjs7WUFEL0U7O1dBQ3dJOztlQUFRLFdBQVUsUUFBVixFQUFtQixPQUFNLFFBQU4sRUFBM0I7O1lBRHhJOztXQUN1TTs7ZUFBUSxXQUFVLFFBQVYsRUFBbUIsT0FBTSxNQUFOLEVBQTNCOztZQUR2TTs7VUFKRjtTQVFFOzs7O1dBQ1k7Ozs7WUFEWjs7VUFSRjtTQVlFOzs7O1VBWkY7U0FhRTs7OztXQUMwQjs7ZUFBUSxXQUFVLFFBQVYsRUFBbUIsTUFBSyxLQUFMLEVBQTNCOztZQUQxQjs7V0FDOEU7O2VBQVEsV0FBVSxRQUFWLEVBQW1CLE1BQUssT0FBTCxFQUEzQjs7WUFEOUU7O1dBQ3NJOztlQUFRLFdBQVUsUUFBVixFQUFtQixNQUFLLFFBQUwsRUFBM0I7O1lBRHRJOztXQUNvTTs7ZUFBUSxXQUFVLFFBQVYsRUFBbUIsTUFBSyxNQUFMLEVBQTNCOztZQURwTTs7VUFiRjtTQWlCRTs7YUFBUyxNQUFLLEtBQUwsRUFBVyxPQUFNLEtBQU4sRUFBcEI7O1dBQ1k7Ozs7WUFEWjs7VUFq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LFFBQUYsRUFBUCxDQUZxQjtFQUF2Qjs7bUJBS2UseUJBQVEsTUFBUixFQUFnQixHQUFoQixFIiwiZmlsZSI6InBsYWNlLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEFwcCBmcm9tICcuL2FwcCc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vY29tbW9uL3N0b3JlJztcblxuUmVhY3RET00ucmVuZGVyKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8QXBwIC8+XG4gIDwvUHJvdmlkZXI+LFxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZXhhbXBsZXMvcGxhY2UvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgVG9vbHRpcCwgT3JpZ2luIH0gZnJvbSAnLi4vLi4vc3JjL2luZGV4JztcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+UGxhY2UgRXhhbXBsZTwvaDE+XG5cbiAgICAgICAgPGgyPlVzaW5nIG9yaWdpbidzIHByb3A8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBBdmFpbGFibGUgNCBkaXJlY3Rpb25zOiA8T3JpZ2luIGNsYXNzTmFtZT1cInRhcmdldFwiIHBsYWNlPVwidG9wXCI+VG9wPC9PcmlnaW4+LCA8T3JpZ2luIGNsYXNzTmFtZT1cInRhcmdldFwiIHBsYWNlPVwicmlnaHRcIj5SaWdodDwvT3JpZ2luPiwgPE9yaWdpbiBjbGFzc05hbWU9XCJ0YXJnZXRcIiBwbGFjZT1cImJvdHRvbVwiPkJvdHRvbTwvT3JpZ2luPiwgYW5kIDxPcmlnaW4gY2xhc3NOYW1lPVwidGFyZ2V0XCIgcGxhY2U9XCJsZWZ0XCI+TGVmdDwvT3JpZ2luPi5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxUb29sdGlwPlxuICAgICAgICAgIFRoaXMgaXMgYSA8Yj5zaGFyZWQ8L2I+IHRvb2x0aXAuXG4gICAgICAgIDwvVG9vbHRpcD5cblxuICAgICAgICA8aDI+VXNpbmcgdG9vbHRpcCdzIHByb3A8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBBdmFpbGFibGUgNCBkaXJlY3Rpb25zOiA8T3JpZ2luIGNsYXNzTmFtZT1cInRhcmdldFwiIG5hbWU9XCJ0b3BcIj5Ub3A8L09yaWdpbj4sIDxPcmlnaW4gY2xhc3NOYW1lPVwidGFyZ2V0XCIgbmFtZT1cInJpZ2h0XCI+UmlnaHQ8L09yaWdpbj4sIDxPcmlnaW4gY2xhc3NOYW1lPVwidGFyZ2V0XCIgbmFtZT1cImJvdHRvbVwiPkJvdHRvbTwvT3JpZ2luPiwgYW5kIDxPcmlnaW4gY2xhc3NOYW1lPVwidGFyZ2V0XCIgbmFtZT1cImxlZnRcIj5MZWZ0PC9PcmlnaW4+LlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPFRvb2x0aXAgbmFtZT1cInRvcFwiIHBsYWNlPVwidG9wXCI+XG4gICAgICAgICAgVGhpcyBpcyBhIDxiPnRvcDwvYj4gdG9vbHRpcC5cbiAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICA8VG9vbHRpcCBuYW1lPVwicmlnaHRcIiBwbGFjZT1cInJpZ2h0XCI+XG4gICAgICAgICAgVGhpcyBpcyBhIDxiPnJpZ2h0PC9iPiB0b29sdGlwLlxuICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgIDxUb29sdGlwIG5hbWU9XCJib3R0b21cIiBwbGFjZT1cImJvdHRvbVwiPlxuICAgICAgICAgIFRoaXMgaXMgYSA8Yj5ib3R0b208L2I+IHRvb2x0aXAuXG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgPFRvb2x0aXAgbmFtZT1cImxlZnRcIiBwbGFjZT1cImxlZnRcIj5cbiAgICAgICAgICBUaGlzIGlzIGEgPGI+bGVmdDwvYj4gdG9vbHRpcC5cbiAgICAgICAgPC9Ub29sdGlwPlxuXG4gICAgICAgIDxoMj5BdXRvIHBsYWNlbWVudDwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxPcmlnaW4gY2xhc3NOYW1lPVwidGFyZ2V0IGF1dG8tYmFzaWNcIiBwbGFjZT1cImxlZnRcIj5UaGlzIHRvb2x0aXA8L09yaWdpbj4gaXMgY29uZmlndXJlZCB0byBiZSBwbGFjZWQgPGI+bGVmdDwvYj4gb2YgdGhlIG9yaWdpbiBlbGVtZW50LCBidXQgbm8gc3BhY2UgdG8gc2hvdy48YnIgLz5cbiAgICAgICAgICBUaGVyZWZvcmUsIGl0IHdpbGwgYmUgbG9jYXRlZCA8Yj5yaWdodDwvYj4gaW5zdGVhZCBvZiA8Yj5sZWZ0PC9iPi5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxwPlxuICAgICAgICAgIFlvdSBjYW4gY3VzdG9taXplIDxPcmlnaW4gY2xhc3NOYW1lPVwidGFyZ2V0IGF1dG8tYXJyYXlcIiBwbGFjZT17WydsZWZ0JywgJ3RvcCddfT50aGUgb3JkZXI8L09yaWdpbj4gb2YgZmFsbGJhY2suPGJyIC8+XG4gICAgICAgICAgVGhlICdwbGFjZScgcHJvcCA8T3JpZ2luIGNsYXNzTmFtZT1cInRhcmdldCBhdXRvLXN0cmluZ1wiIHBsYWNlPVwibGVmdCxib3R0b21cIj5jYW48L09yaWdpbj4gYmUgYWxzbyBwYXNzZWQgYXMgYSBjb21tYSBzZXBhcmF0ZWQgc3RyaW5nLlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPGRpdiByZWY9XCJyZXN0cmljdGVkXCIgc3R5bGU9e3sgd2lkdGg6ICc0MjBweCcsIGhlaWdodDogJzE2MHB4JywgYmFja2dyb3VuZENvbG9yOiAnbGlnaHRncmF5JywgcGFkZGluZzogJzE2cHgnLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICBJbiBkZWZhdWx0LCA8T3JpZ2luIG5hbWU9XCJyZXN0cmljdGVkXCIgY2xhc3NOYW1lPVwidGFyZ2V0IGF1dG8tdG9wXCIgcGxhY2U9XCJ0b3BcIj5yZWR1eC10b29sdGlwPC9PcmlnaW4+IHN1cHBvc2VzIHlvdSB3YW50IHRvIGRvIGF1dG8tcGxhY2VtZW50IHdpdGhpbiB0aGUgYnJvd3NlciB3aW5kb3cuPGJyIC8+PGJyIC8+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgcmlnaHQ6ICcxNnB4JyB9fT5cbiAgICAgICAgICAgIDxPcmlnaW4gbmFtZT1cInJlc3RyaWN0ZWRcIiBjbGFzc05hbWU9XCJ0YXJnZXQgYXV0by1yaWdodFwiIHBsYWNlPVwicmlnaHRcIj5yaWdodCBlZGdlIC0tJmd0OzwvT3JpZ2luPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIGJvdHRvbTogJzE2cHgnIH19PlxuICAgICAgICAgICAgPE9yaWdpbiBuYW1lPVwicmVzdHJpY3RlZFwiIGNsYXNzTmFtZT1cInRhcmdldCBhdXRvLWJvdHRvbVwiIHBsYWNlPVwiYm90dG9tXCI+VGhpczwvT3JpZ2luPiBpcyBhIGJvdHRvbSBvcmlnaW4uXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxUb29sdGlwIG5hbWU9XCJyZXN0cmljdGVkXCIgd2l0aGluPXsoKSA9PiB0aGlzLnJlZnMucmVzdHJpY3RlZH0+XG4gICAgICAgICAgVGhpcyBpcyBhIDxiPnJlc3RyaWN0ZWQ8L2I+IHRvb2x0aXAuXG4gICAgICAgIDwvVG9vbHRpcD5cblxuICAgICAgICA8ZGl2IHJlZj1cIm1vcmVcIiBzdHlsZT17eyB3aWR0aDogJzQyMHB4JywgYmFja2dyb3VuZENvbG9yOiAnbGlnaHRncmF5JywgbWFyZ2luVG9wOiAnMTRweCcsIHBhZGRpbmc6ICcxNnB4JyB9fT5cbiAgICAgICAgICBUd28gb3IgPE9yaWdpbiBuYW1lPVwibW9yZVwiIGNsYXNzTmFtZT1cInRhcmdldCBhdXRvLW1vcmVcIiBwbGFjZT17WydsZWZ0JywgJ3RvcCcsICdib3R0b20nLCAncmlnaHQnXX0+bW9yZSBmYWxsYmFja3M8L09yaWdpbj4gYWxzbyB3b3JrcyB3ZWxsLlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8VG9vbHRpcCBuYW1lPVwibW9yZVwiIHdpdGhpbj17KCkgPT4gdGhpcy5yZWZzLm1vcmV9PlxuICAgICAgICAgIFRoaXMgaXMgYSA8Yj5tb3JlPC9iPiB0b29sdGlwLlxuICAgICAgICA8L1Rvb2x0aXA+XG5cbiAgICAgICAgPGRpdiByZWY9XCJkaXNhYmxlZFwiIHN0eWxlPXt7IHdpZHRoOiAnNDIwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICdsaWdodGdyYXknLCBtYXJnaW5Ub3A6ICcxNHB4JywgcGFkZGluZzogJzE2cHgnIH19PlxuICAgICAgICAgIFRoZSA8T3JpZ2luIG5hbWU9XCJkaXNhYmxlZFwiIGNsYXNzTmFtZT1cInRhcmdldCBhdXRvLWRpc2FibGVkXCIgcGxhY2U9XCJsZWZ0XCI+YXV0byBwbGFjZW1lbnQ8L09yaWdpbj4gZmVhdHVyZSBjYW4gYmUgZGlzYWJsZWQgYnkgcGFzc2luZyA8Yj5mYWxzZTwvYj4gdG8gPGNvZGU+YXV0bzwvY29kZT4gcHJvcC5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPFRvb2x0aXAgbmFtZT1cImRpc2FibGVkXCIgYXV0bz17ZmFsc2V9IHdpdGhpbj17KCkgPT4gdGhpcy5yZWZzLmRpc2FibGVkfT5cbiAgICAgICAgICBUaGlzIGlzIGEgPGI+ZGlzYWJsZWQ8L2I+IHRvb2x0aXAuXG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2VsZWN0KHN0YXRlKSB7XG4gIGNvbnN0IHsgYXBwIH0gPSBzdGF0ZTtcbiAgcmV0dXJuIHsgYXBwIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc2VsZWN0KShBcHApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9leGFtcGxlcy9wbGFjZS9hcHAuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9