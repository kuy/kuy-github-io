webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(158);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRedux = __webpack_require__(159);
	
	var _app = __webpack_require__(210);
	
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

/***/ 210:
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
	
	var show = _index.actions.show;
	var hide = _index.actions.hide;
	var keep = _index.actions.keep;
	var delay = _index.actions.delay;
	
	// Inject 'of' method to make curried function easily
	
	function inject(func, that) {
	  func.of = function (name) {
	    return function (e) {
	      return func.call(that, name, e);
	    };
	  };
	}
	
	var App = function (_Component) {
	  _inherits(App, _Component);
	
	  function App(props) {
	    _classCallCheck(this, App);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));
	
	    inject(_this.handleHover, _this);
	    inject(_this.handleLeave, _this);
	    return _this;
	  }
	
	  _createClass(App, [{
	    key: 'handleHover',
	    value: function handleHover(name, e) {
	      this.props.dispatch(keep({ name: name }));
	    }
	  }, {
	    key: 'handleLeave',
	    value: function handleLeave(name, e) {
	      this.props.dispatch(hide({ name: name }));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h1',
	          null,
	          'Keep Example'
	        ),
	        _react2.default.createElement(
	          'h2',
	          null,
	          'Text'
	        ),
	        _react2.default.createElement(
	          'ol',
	          null,
	          _react2.default.createElement(
	            'li',
	            null,
	            'Hover on ',
	            _react2.default.createElement(
	              _index.Origin,
	              { name: 'text', className: 'target', delay: true },
	              'an origin element'
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            null,
	            'Hover on a tooltip'
	          ),
	          _react2.default.createElement(
	            'li',
	            null,
	            'You can keep tooltip!'
	          )
	        ),
	        _react2.default.createElement(
	          _index.Tooltip,
	          { name: 'text', onHover: this.handleHover.of('text'), onLeave: this.handleLeave.of('text') },
	          'Hover and keep tooltip :)'
	        ),
	        _react2.default.createElement(
	          'h2',
	          null,
	          'SVG'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          'This tooltip has ',
	          _react2.default.createElement(
	            _index.Origin,
	            { name: 'svg', className: 'target', delay: true },
	            'SVG'
	          ),
	          ' content.'
	        ),
	        _react2.default.createElement(
	          _index.Tooltip,
	          { name: 'svg', onHover: this.handleHover.of('svg'), onLeave: this.handleLeave.of('svg') },
	          _react2.default.createElement(
	            'div',
	            { className: 'svg-frame' },
	            _react2.default.createElement(
	              'svg',
	              { height: '210', width: '210' },
	              _react2.default.createElement('polygon', { points: '100,10 40,198 190,78 10,78 160,198', style: { fill: 'lime', stroke: 'purple', strokeWidth: 5, fillRule: 'nonzero' } })
	            )
	          )
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9rZWVwL2luZGV4LmpzIiwid2VicGFjazovLy8uL2V4YW1wbGVzL2tlZXAvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsb0JBQVMsTUFBVCxDQUNFOztLQUFVLHdCQUFWO0dBQ0Usa0RBREY7RUFERixFQUlBLFNBQVMsY0FBVCxDQUF3QixXQUF4QixDQUpBLEU7Ozs7Ozs7Ozs7Ozs7OztBQ05BOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7S0FFUTtLQUFNO0tBQU07S0FBTTs7OztBQUcxQixVQUFTLE1BQVQsQ0FBZ0IsSUFBaEIsRUFBc0IsSUFBdEIsRUFBNEI7QUFDMUIsUUFBSyxFQUFMLEdBQVUsZ0JBQVE7QUFDaEIsWUFBTyxhQUFLO0FBQ1YsY0FBTyxLQUFLLElBQUwsQ0FBVSxJQUFWLEVBQWdCLElBQWhCLEVBQXNCLENBQXRCLENBQVAsQ0FEVTtNQUFMLENBRFM7SUFBUixDQURnQjtFQUE1Qjs7S0FRTTs7O0FBQ0osWUFESSxHQUNKLENBQVksS0FBWixFQUFtQjsyQkFEZixLQUNlOzt3RUFEZixnQkFFSSxRQURXOztBQUdqQixZQUFPLE1BQUssV0FBTCxPQUFQLEVBSGlCO0FBSWpCLFlBQU8sTUFBSyxXQUFMLE9BQVAsRUFKaUI7O0lBQW5COztnQkFESTs7aUNBUVEsTUFBTSxHQUFHO0FBQ25CLFlBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsS0FBSyxFQUFFLFVBQUYsRUFBTCxDQUFwQixFQURtQjs7OztpQ0FJVCxNQUFNLEdBQUc7QUFDbkIsWUFBSyxLQUFMLENBQVcsUUFBWCxDQUFvQixLQUFLLEVBQUUsVUFBRixFQUFMLENBQXBCLEVBRG1COzs7OzhCQUlaO0FBQ1AsY0FDRTs7O1NBQ0U7Ozs7VUFERjtTQUdFOzs7O1VBSEY7U0FJRTs7O1dBQ0U7Ozs7YUFBYTs7aUJBQVEsTUFBSyxNQUFMLEVBQVksV0FBVSxRQUFWLEVBQW1CLGFBQXZDOztjQUFiO1lBREY7V0FFRTs7OztZQUZGO1dBR0U7Ozs7WUFIRjtVQUpGO1NBVUU7O2FBQVMsTUFBSyxNQUFMLEVBQVksU0FBUyxLQUFLLFdBQUwsQ0FBaUIsRUFBakIsQ0FBb0IsTUFBcEIsQ0FBVCxFQUFzQyxTQUFTLEtBQUssV0FBTCxDQUFpQixFQUFqQixDQUFvQixNQUFwQixDQUFULEVBQTNEOztVQVZGO1NBY0U7Ozs7VUFkRjtTQWVFOzs7O1dBQ21COztlQUFRLE1BQUssS0FBTCxFQUFXLFdBQVUsUUFBVixFQUFtQixhQUF0Qzs7WUFEbkI7O1VBZkY7U0FtQkU7O2FBQVMsTUFBSyxLQUFMLEVBQVcsU0FBUyxLQUFLLFdBQUwsQ0FBaUIsRUFBakIsQ0FBb0IsS0FBcEIsQ0FBVCxFQUFxQyxTQUFTLEtBQUssV0FBTCxDQUFpQixFQUFqQixDQUFvQixLQUFwQixDQUFULEVBQXpEO1dBQ0U7O2VBQUssV0FBVSxXQUFWLEVBQUw7YUFDRTs7aUJBQUssUUFBTyxLQUFQLEVBQWEsT0FBTSxLQUFOLEVBQWxCO2VBQ0UsMkNBQVMsUUFBTyxvQ0FBUCxFQUE0QyxPQUFPLEVBQUUsTUFBTSxNQUFOLEVBQWMsUUFBUSxRQUFSLEVBQWtCLGFBQWEsQ0FBYixFQUFnQixVQUFVLFNBQVYsRUFBekQsRUFBckQsQ0FERjtjQURGO1lBREY7VUFuQkY7UUFERixDQURPOzs7O1VBaEJMOzs7QUFpRE4sVUFBUyxNQUFULENBQWdCLEtBQWhCLEVBQXVCO09BQ2IsTUFBUSxNQUFSLElBRGE7O0FBRXJCLFVBQU8sRUFBRSxRQUFGLEVBQVAsQ0FGcUI7RUFBdkI7O21CQUtlLHlCQUFRLE1BQVIsRUFBZ0IsR0FBaEIsRSIsImZpbGUiOiJrZWVwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEFwcCBmcm9tICcuL2FwcCc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vY29tbW9uL3N0b3JlJztcblxuUmVhY3RET00ucmVuZGVyKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8QXBwIC8+XG4gIDwvUHJvdmlkZXI+LFxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZXhhbXBsZXMva2VlcC9pbmRleC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBUb29sdGlwLCBPcmlnaW4sIGFjdGlvbnMgfSBmcm9tICcuLi8uLi9zcmMvaW5kZXgnO1xuXG5jb25zdCB7IHNob3csIGhpZGUsIGtlZXAsIGRlbGF5IH0gPSBhY3Rpb25zO1xuXG4vLyBJbmplY3QgJ29mJyBtZXRob2QgdG8gbWFrZSBjdXJyaWVkIGZ1bmN0aW9uIGVhc2lseVxuZnVuY3Rpb24gaW5qZWN0KGZ1bmMsIHRoYXQpIHtcbiAgZnVuYy5vZiA9IG5hbWUgPT4ge1xuICAgIHJldHVybiBlID0+IHtcbiAgICAgIHJldHVybiBmdW5jLmNhbGwodGhhdCwgbmFtZSwgZSk7XG4gICAgfTtcbiAgfTtcbn1cblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBpbmplY3QodGhpcy5oYW5kbGVIb3ZlciwgdGhpcyk7XG4gICAgaW5qZWN0KHRoaXMuaGFuZGxlTGVhdmUsIHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlSG92ZXIobmFtZSwgZSkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goa2VlcCh7IG5hbWUgfSkpO1xuICB9XG5cbiAgaGFuZGxlTGVhdmUobmFtZSwgZSkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goaGlkZSh7IG5hbWUgfSkpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+S2VlcCBFeGFtcGxlPC9oMT5cblxuICAgICAgICA8aDI+VGV4dDwvaDI+XG4gICAgICAgIDxvbD5cbiAgICAgICAgICA8bGk+SG92ZXIgb24gPE9yaWdpbiBuYW1lPVwidGV4dFwiIGNsYXNzTmFtZT1cInRhcmdldFwiIGRlbGF5PmFuIG9yaWdpbiBlbGVtZW50PC9PcmlnaW4+PC9saT5cbiAgICAgICAgICA8bGk+SG92ZXIgb24gYSB0b29sdGlwPC9saT5cbiAgICAgICAgICA8bGk+WW91IGNhbiBrZWVwIHRvb2x0aXAhPC9saT5cbiAgICAgICAgPC9vbD5cblxuICAgICAgICA8VG9vbHRpcCBuYW1lPVwidGV4dFwiIG9uSG92ZXI9e3RoaXMuaGFuZGxlSG92ZXIub2YoJ3RleHQnKX0gb25MZWF2ZT17dGhpcy5oYW5kbGVMZWF2ZS5vZigndGV4dCcpfT5cbiAgICAgICAgICBIb3ZlciBhbmQga2VlcCB0b29sdGlwIDopXG4gICAgICAgIDwvVG9vbHRpcD5cblxuICAgICAgICA8aDI+U1ZHPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVGhpcyB0b29sdGlwIGhhcyA8T3JpZ2luIG5hbWU9XCJzdmdcIiBjbGFzc05hbWU9XCJ0YXJnZXRcIiBkZWxheT5TVkc8L09yaWdpbj4gY29udGVudC5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxUb29sdGlwIG5hbWU9XCJzdmdcIiBvbkhvdmVyPXt0aGlzLmhhbmRsZUhvdmVyLm9mKCdzdmcnKX0gb25MZWF2ZT17dGhpcy5oYW5kbGVMZWF2ZS5vZignc3ZnJyl9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ZnLWZyYW1lXCI+XG4gICAgICAgICAgICA8c3ZnIGhlaWdodD1cIjIxMFwiIHdpZHRoPVwiMjEwXCI+XG4gICAgICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz1cIjEwMCwxMCA0MCwxOTggMTkwLDc4IDEwLDc4IDE2MCwxOThcIiBzdHlsZT17eyBmaWxsOiAnbGltZScsIHN0cm9rZTogJ3B1cnBsZScsIHN0cm9rZVdpZHRoOiA1LCBmaWxsUnVsZTogJ25vbnplcm8nIH19IC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZWxlY3Qoc3RhdGUpIHtcbiAgY29uc3QgeyBhcHAgfSA9IHN0YXRlO1xuICByZXR1cm4geyBhcHAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzZWxlY3QpKEFwcCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2V4YW1wbGVzL2tlZXAvYXBwLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==