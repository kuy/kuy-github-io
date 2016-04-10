webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(158);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRedux = __webpack_require__(159);
	
	var _app = __webpack_require__(209);
	
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

/***/ 209:
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
	var delay = _index.actions.delay;
	
	var App = function (_Component) {
	  _inherits(App, _Component);
	
	  function App() {
	    _classCallCheck(this, App);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
	  }
	
	  _createClass(App, [{
	    key: 'handleTimeout',
	    value: function handleTimeout(type, duration) {
	      this.props.dispatch(show({ origin: this.refs.bold }));
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
	          'Delay Example'
	        ),
	        _react2.default.createElement(
	          'h2',
	          null,
	          'Basic usage'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          'After leaving from ',
	          _react2.default.createElement(
	            _index.Origin,
	            { delay: true, className: 'target' },
	            'an origin element'
	          ),
	          ', a tooltip will stay a while.',
	          _react2.default.createElement('br', null),
	          'The default duration is 1.5 seconds.'
	        ),
	        _react2.default.createElement(
	          'h2',
	          null,
	          'Advanced usage'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          'You can specify a duration to delay hiding of a tooltip.',
	          _react2.default.createElement('br', null),
	          'For example: ',
	          _react2.default.createElement(
	            _index.Origin,
	            { delay: 500, className: 'target' },
	            '0.5 second'
	          ),
	          ', ',
	          _react2.default.createElement(
	            _index.Origin,
	            { delay: '1000', className: 'target' },
	            '1 second'
	          ),
	          ', ',
	          _react2.default.createElement(
	            _index.Origin,
	            { delay: 2000.0, className: 'target' },
	            '2 seconds'
	          ),
	          ', ',
	          _react2.default.createElement(
	            _index.Origin,
	            { delay: '3000.0', className: 'target' },
	            '3 seconds'
	          )
	        ),
	        _react2.default.createElement(
	          'h2',
	          null,
	          'Delay on show'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          'Hovering on an ',
	          _react2.default.createElement(
	            _index.Origin,
	            { delay: true, delayOn: 'show', className: 'target' },
	            'origin'
	          ),
	          ', but it is\'n shown immediately.',
	          _react2.default.createElement('br', null),
	          'You need to stay a while on it. Delay on ',
	          _react2.default.createElement(
	            _index.Origin,
	            { delay: true, delayOn: 'both', className: 'target' },
	            'both'
	          ),
	          '.'
	        ),
	        _react2.default.createElement(
	          'h2',
	          null,
	          'Timeout callback'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          'The callback function is ',
	          _react2.default.createElement(
	            'b',
	            { ref: 'bold' },
	            'called'
	          ),
	          ' when ',
	          _react2.default.createElement(
	            _index.Origin,
	            { delay: true, className: 'target', onTimeout: this.handleTimeout.bind(this) },
	            'timeout'
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
	            'delay'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9kZWxheS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9kZWxheS9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxvQkFBUyxNQUFULENBQ0U7O0tBQVUsd0JBQVY7R0FDRSxrREFERjtFQURGLEVBSUEsU0FBUyxjQUFULENBQXdCLFdBQXhCLENBSkEsRTs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztLQUVRO0tBQU07S0FBTTs7S0FFZDs7Ozs7Ozs7Ozs7bUNBQ1UsTUFBTSxVQUFVO0FBQzVCLFlBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsS0FBSyxFQUFFLFFBQVEsS0FBSyxJQUFMLENBQVUsSUFBVixFQUFmLENBQXBCLEVBRDRCOzs7OzhCQUlyQjtBQUNQLGNBQ0U7OztTQUNFOzs7O1VBREY7U0FHRTs7OztVQUhGO1NBSUU7Ozs7V0FDcUI7O2VBQVEsYUFBTSxXQUFVLFFBQVYsRUFBZDs7WUFEckI7O1dBQzhHLHlDQUQ5Rzs7VUFKRjtTQVNFOzs7O1VBVEY7U0FVRTs7OztXQUMwRCx5Q0FEMUQ7O1dBRWU7O2VBQVEsT0FBTyxHQUFQLEVBQVksV0FBVSxRQUFWLEVBQXBCOztZQUZmOztXQUUyRTs7ZUFBUSxPQUFNLE1BQU4sRUFBYSxXQUFVLFFBQVYsRUFBckI7O1lBRjNFOztXQUVzSTs7ZUFBUSxPQUFPLE1BQVAsRUFBZSxXQUFVLFFBQVYsRUFBdkI7O1lBRnRJOztXQUVvTTs7ZUFBUSxPQUFNLFFBQU4sRUFBZSxXQUFVLFFBQVYsRUFBdkI7O1lBRnBNO1VBVkY7U0FlRTs7OztVQWZGO1NBZ0JFOzs7O1dBQ2lCOztlQUFRLGFBQU0sU0FBUSxNQUFSLEVBQWUsV0FBVSxRQUFWLEVBQTdCOztZQURqQjs7V0FDZ0gseUNBRGhIOztXQUUyQzs7ZUFBUSxhQUFNLFNBQVEsTUFBUixFQUFlLFdBQVUsUUFBVixFQUE3Qjs7WUFGM0M7O1VBaEJGO1NBcUJFOzs7O1VBckJGO1NBc0JFOzs7O1dBQzJCOztlQUFHLEtBQUksTUFBSixFQUFIOztZQUQzQjs7V0FDeUQ7O2VBQVEsYUFBTSxXQUFVLFFBQVYsRUFBbUIsV0FBVyxLQUFLLGFBQUwsQ0FBbUIsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBWCxFQUFqQzs7WUFEekQ7O1VBdEJGO1NBMEJFOzs7O1dBQ1k7Ozs7WUFEWjs7VUExQkY7UUFERixDQURPOzs7O1VBTEw7OztBQXlDTixVQUFTLE1BQVQsQ0FBZ0IsS0FBaEIsRUFBdUI7T0FDYixNQUFRLE1BQVIsSUFEYTs7QUFFckIsVUFBTyxFQUFFLFFBQUYsRUFBUCxDQUZxQjtFQUF2Qjs7bUJBS2UseUJBQVEsTUFBUixFQUFnQixHQUFoQixFIiwiZmlsZSI6ImRlbGF5LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEFwcCBmcm9tICcuL2FwcCc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vY29tbW9uL3N0b3JlJztcblxuUmVhY3RET00ucmVuZGVyKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8QXBwIC8+XG4gIDwvUHJvdmlkZXI+LFxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZXhhbXBsZXMvZGVsYXkvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgVG9vbHRpcCwgT3JpZ2luLCBhY3Rpb25zIH0gZnJvbSAnLi4vLi4vc3JjL2luZGV4JztcblxuY29uc3QgeyBzaG93LCBoaWRlLCBkZWxheSB9ID0gYWN0aW9ucztcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgaGFuZGxlVGltZW91dCh0eXBlLCBkdXJhdGlvbikge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goc2hvdyh7IG9yaWdpbjogdGhpcy5yZWZzLmJvbGQgfSkpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+RGVsYXkgRXhhbXBsZTwvaDE+XG5cbiAgICAgICAgPGgyPkJhc2ljIHVzYWdlPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQWZ0ZXIgbGVhdmluZyBmcm9tIDxPcmlnaW4gZGVsYXkgY2xhc3NOYW1lPVwidGFyZ2V0XCI+YW4gb3JpZ2luIGVsZW1lbnQ8L09yaWdpbj4sIGEgdG9vbHRpcCB3aWxsIHN0YXkgYSB3aGlsZS48YnIgLz5cbiAgICAgICAgICBUaGUgZGVmYXVsdCBkdXJhdGlvbiBpcyAxLjUgc2Vjb25kcy5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxoMj5BZHZhbmNlZCB1c2FnZTwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFlvdSBjYW4gc3BlY2lmeSBhIGR1cmF0aW9uIHRvIGRlbGF5IGhpZGluZyBvZiBhIHRvb2x0aXAuPGJyIC8+XG4gICAgICAgICAgRm9yIGV4YW1wbGU6IDxPcmlnaW4gZGVsYXk9ezUwMH0gY2xhc3NOYW1lPVwidGFyZ2V0XCI+MC41IHNlY29uZDwvT3JpZ2luPiwgPE9yaWdpbiBkZWxheT1cIjEwMDBcIiBjbGFzc05hbWU9XCJ0YXJnZXRcIj4xIHNlY29uZDwvT3JpZ2luPiwgPE9yaWdpbiBkZWxheT17MjAwMC4wfSBjbGFzc05hbWU9XCJ0YXJnZXRcIj4yIHNlY29uZHM8L09yaWdpbj4sIDxPcmlnaW4gZGVsYXk9XCIzMDAwLjBcIiBjbGFzc05hbWU9XCJ0YXJnZXRcIj4zIHNlY29uZHM8L09yaWdpbj5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxoMj5EZWxheSBvbiBzaG93PC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgSG92ZXJpbmcgb24gYW4gPE9yaWdpbiBkZWxheSBkZWxheU9uPVwic2hvd1wiIGNsYXNzTmFtZT1cInRhcmdldFwiPm9yaWdpbjwvT3JpZ2luPiwgYnV0IGl0IGlzJ24gc2hvd24gaW1tZWRpYXRlbHkuPGJyIC8+XG4gICAgICAgICAgWW91IG5lZWQgdG8gc3RheSBhIHdoaWxlIG9uIGl0LiBEZWxheSBvbiA8T3JpZ2luIGRlbGF5IGRlbGF5T249XCJib3RoXCIgY2xhc3NOYW1lPVwidGFyZ2V0XCI+Ym90aDwvT3JpZ2luPi5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxoMj5UaW1lb3V0IGNhbGxiYWNrPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIGlzIDxiIHJlZj1cImJvbGRcIj5jYWxsZWQ8L2I+IHdoZW4gPE9yaWdpbiBkZWxheSBjbGFzc05hbWU9XCJ0YXJnZXRcIiBvblRpbWVvdXQ9e3RoaXMuaGFuZGxlVGltZW91dC5iaW5kKHRoaXMpfT50aW1lb3V0PC9PcmlnaW4+LlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPFRvb2x0aXA+XG4gICAgICAgICAgVGhpcyBpcyBhIDxiPmRlbGF5PC9iPiB0b29sdGlwLlxuICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNlbGVjdChzdGF0ZSkge1xuICBjb25zdCB7IGFwcCB9ID0gc3RhdGU7XG4gIHJldHVybiB7IGFwcCB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHNlbGVjdCkoQXBwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZXhhbXBsZXMvZGVsYXkvYXBwLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==