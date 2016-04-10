webpackJsonp([6],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(158);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRedux = __webpack_require__(159);
	
	var _app = __webpack_require__(214);
	
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

/***/ 214:
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
	var toggle = _index.actions.toggle;
	var place = _index.actions.place;
	
	var App = function (_Component) {
	  _inherits(App, _Component);
	
	  function App(props) {
	    _classCallCheck(this, App);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));
	
	    _this.handleShow = _this.handleShow.bind(_this);
	    _this.handleHide = _this.handleHide.bind(_this);
	    _this.handleToggle = _this.handleToggle.bind(_this);
	    _this.handleShowDeprecated = _this.handleShowDeprecated.bind(_this);
	    return _this;
	  }
	
	  _createClass(App, [{
	    key: 'handleShow',
	    value: function handleShow(e) {
	      this.props.dispatch(show({ origin: this.refs.target }));
	    }
	  }, {
	    key: 'handleHide',
	    value: function handleHide() {
	      this.props.dispatch(hide());
	    }
	  }, {
	    key: 'handleToggle',
	    value: function handleToggle() {
	      this.props.dispatch(toggle());
	    }
	  }, {
	    key: 'handlePlace',
	    value: function handlePlace(newPlace) {
	      this.props.dispatch(place(newPlace));
	    }
	  }, {
	    key: 'handleShowDeprecated',
	    value: function handleShowDeprecated(e) {
	      this.props.dispatch(show({ el: this.refs.target }));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h1',
	          null,
	          'Remote Example'
	        ),
	        _react2.default.createElement(
	          'h2',
	          null,
	          'Basic'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          'A tooltip is controlled by ',
	          _react2.default.createElement(
	            'span',
	            { ref: 'target', className: 'target' },
	            'following buttons'
	          ),
	          '.'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          _react2.default.createElement('input', { type: 'button', value: 'Show', onClick: this.handleShow }),
	          _react2.default.createElement(
	            'span',
	            null,
	            ' '
	          ),
	          _react2.default.createElement('input', { type: 'button', value: 'Hide', onClick: this.handleHide }),
	          _react2.default.createElement(
	            'span',
	            null,
	            ' '
	          ),
	          _react2.default.createElement('input', { type: 'button', value: 'Toggle', onClick: this.handleToggle })
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          _react2.default.createElement('input', { type: 'button', value: 'Top', onClick: function onClick() {
	              return _this2.handlePlace('top');
	            } }),
	          ' ',
	          _react2.default.createElement('input', { type: 'button', value: 'Right', onClick: function onClick() {
	              return _this2.handlePlace('right');
	            } }),
	          _react2.default.createElement(
	            'span',
	            null,
	            ' '
	          ),
	          _react2.default.createElement('input', { type: 'button', value: 'Bottom', onClick: function onClick() {
	              return _this2.handlePlace('bottom');
	            } }),
	          ' ',
	          _react2.default.createElement('input', { type: 'button', value: 'Left', onClick: function onClick() {
	              return _this2.handlePlace('left');
	            } })
	        ),
	        _react2.default.createElement(
	          'h2',
	          null,
	          'Deprecated'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          _react2.default.createElement('input', { type: 'button', value: 'Show via \'el\'', onClick: this.handleShowDeprecated })
	        ),
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

/***/ }

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9yZW1vdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvcmVtb3RlL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLG9CQUFTLE1BQVQsQ0FDRTs7S0FBVSx3QkFBVjtHQUNFLGtEQURGO0VBREYsRUFJQSxTQUFTLGNBQVQsQ0FBd0IsV0FBeEIsQ0FKQSxFOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7O0tBRVE7S0FBTTtLQUFNO0tBQVE7O0tBRXRCOzs7QUFDSixZQURJLEdBQ0osQ0FBWSxLQUFaLEVBQW1COzJCQURmLEtBQ2U7O3dFQURmLGdCQUVJLFFBRFc7O0FBR2pCLFdBQUssVUFBTCxHQUFrQixNQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsT0FBbEIsQ0FIaUI7QUFJakIsV0FBSyxVQUFMLEdBQWtCLE1BQUssVUFBTCxDQUFnQixJQUFoQixPQUFsQixDQUppQjtBQUtqQixXQUFLLFlBQUwsR0FBb0IsTUFBSyxZQUFMLENBQWtCLElBQWxCLE9BQXBCLENBTGlCO0FBTWpCLFdBQUssb0JBQUwsR0FBNEIsTUFBSyxvQkFBTCxDQUEwQixJQUExQixPQUE1QixDQU5pQjs7SUFBbkI7O2dCQURJOztnQ0FVTyxHQUFHO0FBQ1osWUFBSyxLQUFMLENBQVcsUUFBWCxDQUFvQixLQUFLLEVBQUUsUUFBUSxLQUFLLElBQUwsQ0FBVSxNQUFWLEVBQWYsQ0FBcEIsRUFEWTs7OztrQ0FJRDtBQUNYLFlBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsTUFBcEIsRUFEVzs7OztvQ0FJRTtBQUNiLFlBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsUUFBcEIsRUFEYTs7OztpQ0FJSCxVQUFVO0FBQ3BCLFlBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsTUFBTSxRQUFOLENBQXBCLEVBRG9COzs7OzBDQUlELEdBQUc7QUFDdEIsWUFBSyxLQUFMLENBQVcsUUFBWCxDQUFvQixLQUFLLEVBQUUsSUFBSSxLQUFLLElBQUwsQ0FBVSxNQUFWLEVBQVgsQ0FBcEIsRUFEc0I7Ozs7OEJBSWY7OztBQUNQLGNBQ0U7OztTQUNFOzs7O1VBREY7U0FHRTs7OztVQUhGO1NBS0U7Ozs7V0FDNkI7O2VBQU0sS0FBSSxRQUFKLEVBQWEsV0FBVSxRQUFWLEVBQW5COztZQUQ3Qjs7VUFMRjtTQVNFOzs7V0FDRSx5Q0FBTyxNQUFLLFFBQUwsRUFBYyxPQUFNLE1BQU4sRUFBYSxTQUFTLEtBQUssVUFBTCxFQUEzQyxDQURGO1dBRUU7Ozs7WUFGRjtXQUdFLHlDQUFPLE1BQUssUUFBTCxFQUFjLE9BQU0sTUFBTixFQUFhLFNBQVMsS0FBSyxVQUFMLEVBQTNDLENBSEY7V0FJRTs7OztZQUpGO1dBS0UseUNBQU8sTUFBSyxRQUFMLEVBQWMsT0FBTSxRQUFOLEVBQWUsU0FBUyxLQUFLLFlBQUwsRUFBN0MsQ0FMRjtVQVRGO1NBaUJFOzs7V0FDRSx5Q0FBTyxNQUFLLFFBQUwsRUFBYyxPQUFNLEtBQU4sRUFBWSxTQUFTO3NCQUFNLE9BQUssV0FBTCxDQUFpQixLQUFqQjtjQUFOLEVBQTFDLENBREY7O1dBQzhFLHlDQUFPLE1BQUssUUFBTCxFQUFjLE9BQU0sT0FBTixFQUFjLFNBQVM7c0JBQU0sT0FBSyxXQUFMLENBQWlCLE9BQWpCO2NBQU4sRUFBNUMsQ0FEOUU7V0FFRTs7OztZQUZGO1dBR0UseUNBQU8sTUFBSyxRQUFMLEVBQWMsT0FBTSxRQUFOLEVBQWUsU0FBUztzQkFBTSxPQUFLLFdBQUwsQ0FBaUIsUUFBakI7Y0FBTixFQUE3QyxDQUhGOztXQUdvRix5Q0FBTyxNQUFLLFFBQUwsRUFBYyxPQUFNLE1BQU4sRUFBYSxTQUFTO3NCQUFNLE9BQUssV0FBTCxDQUFpQixNQUFqQjtjQUFOLEVBQTNDLENBSHBGO1VBakJGO1NBdUJFOzs7O1VBdkJGO1NBeUJFOzs7V0FDRSx5Q0FBTyxNQUFLLFFBQUwsRUFBYyxPQUFNLGlCQUFOLEVBQXNCLFNBQVMsS0FBSyxvQkFBTCxFQUFwRCxDQURGO1VBekJGO1NBNkJFOzs7O1VBN0JGO1FBREYsQ0FETzs7OztVQTlCTDs7O0FBcUVOLFVBQVMsTUFBVCxDQUFnQixLQUFoQixFQUF1QjtPQUNiLE1BQVEsTUFBUixJQURhOztBQUVyQixVQUFPLEVBQUUsUUFBRixFQUFQLENBRnFCO0VBQXZCOzttQkFLZSx5QkFBUSxNQUFSLEVBQWdCLEdBQWhCLEUiLCJmaWxlIjoicmVtb3RlLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEFwcCBmcm9tICcuL2FwcCc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vY29tbW9uL3N0b3JlJztcblxuUmVhY3RET00ucmVuZGVyKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8QXBwIC8+XG4gIDwvUHJvdmlkZXI+LFxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZXhhbXBsZXMvcmVtb3RlL2luZGV4LmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFRvb2x0aXAsIGFjdGlvbnMgfSBmcm9tICcuLi8uLi9zcmMvaW5kZXgnO1xuXG5jb25zdCB7IHNob3csIGhpZGUsIHRvZ2dsZSwgcGxhY2UgfSA9IGFjdGlvbnM7XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5oYW5kbGVTaG93ID0gdGhpcy5oYW5kbGVTaG93LmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVIaWRlID0gdGhpcy5oYW5kbGVIaWRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVUb2dnbGUgPSB0aGlzLmhhbmRsZVRvZ2dsZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU2hvd0RlcHJlY2F0ZWQgPSB0aGlzLmhhbmRsZVNob3dEZXByZWNhdGVkLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVTaG93KGUpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHNob3coeyBvcmlnaW46IHRoaXMucmVmcy50YXJnZXQgfSkpO1xuICB9XG5cbiAgaGFuZGxlSGlkZSgpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGhpZGUoKSk7XG4gIH1cblxuICBoYW5kbGVUb2dnbGUoKSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh0b2dnbGUoKSk7XG4gIH1cblxuICBoYW5kbGVQbGFjZShuZXdQbGFjZSkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2gocGxhY2UobmV3UGxhY2UpKTtcbiAgfVxuXG4gIGhhbmRsZVNob3dEZXByZWNhdGVkKGUpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHNob3coeyBlbDogdGhpcy5yZWZzLnRhcmdldCB9KSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5SZW1vdGUgRXhhbXBsZTwvaDE+XG5cbiAgICAgICAgPGgyPkJhc2ljPC9oMj5cblxuICAgICAgICA8cD5cbiAgICAgICAgICBBIHRvb2x0aXAgaXMgY29udHJvbGxlZCBieSA8c3BhbiByZWY9XCJ0YXJnZXRcIiBjbGFzc05hbWU9XCJ0YXJnZXRcIj5mb2xsb3dpbmcgYnV0dG9uczwvc3Bhbj4uXG4gICAgICAgIDwvcD5cblxuICAgICAgICA8cD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiU2hvd1wiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2hvd30gLz5cbiAgICAgICAgICA8c3Bhbj4gPC9zcGFuPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJIaWRlXCIgb25DbGljaz17dGhpcy5oYW5kbGVIaWRlfSAvPlxuICAgICAgICAgIDxzcGFuPiA8L3NwYW4+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIlRvZ2dsZVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVG9nZ2xlfSAvPlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIlRvcFwiIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUGxhY2UoJ3RvcCcpfSAvPiA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiUmlnaHRcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVBsYWNlKCdyaWdodCcpfSAvPlxuICAgICAgICAgIDxzcGFuPiA8L3NwYW4+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIkJvdHRvbVwiIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUGxhY2UoJ2JvdHRvbScpfSAvPiA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiTGVmdFwiIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUGxhY2UoJ2xlZnQnKX0gLz5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxoMj5EZXByZWNhdGVkPC9oMj5cblxuICAgICAgICA8cD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiU2hvdyB2aWEgJ2VsJ1wiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2hvd0RlcHJlY2F0ZWR9IC8+XG4gICAgICAgIDwvcD5cblxuICAgICAgICA8VG9vbHRpcD5cbiAgICAgICAgICBUaGlzIGlzIGEgdG9vbHRpcC5cbiAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZWxlY3Qoc3RhdGUpIHtcbiAgY29uc3QgeyBhcHAgfSA9IHN0YXRlO1xuICByZXR1cm4geyBhcHAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzZWxlY3QpKEFwcCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2V4YW1wbGVzL3JlbW90ZS9hcHAuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9