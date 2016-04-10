webpackJsonp([4],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(158);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRedux = __webpack_require__(159);
	
	var _app = __webpack_require__(212);
	
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

/***/ 212:
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
	
	var SVGOrigin = _index.Origin.wrapBy('g');
	
	var App = function (_Component) {
	  _inherits(App, _Component);
	
	  function App(props) {
	    _classCallCheck(this, App);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));
	
	    _this.handleMove = _this.handleMove.bind(_this);
	    _this.handleLeave = _this.handleLeave.bind(_this);
	    return _this;
	  }
	
	  _createClass(App, [{
	    key: 'handleMove',
	    value: function handleMove(e) {
	      var origin = { x: e.clientX, y: e.clientY };
	      this.props.dispatch(_index.actions.show({ origin: origin, content: 'Moving Tooltip!' }));
	    }
	  }, {
	    key: 'handleLeave',
	    value: function handleLeave() {
	      this.props.dispatch(_index.actions.hide());
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
	          'Origin Example'
	        ),
	        _react2.default.createElement(
	          'h2',
	          null,
	          'Custom Origin'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          _react2.default.createElement(
	            'svg',
	            { width: '240', height: '70' },
	            _react2.default.createElement(
	              'g',
	              { transform: 'translate(40, 10)' },
	              _react2.default.createElement(
	                SVGOrigin,
	                { className: 'red', content: 'Red' },
	                _react2.default.createElement('rect', { fill: 'red', x: '0', y: '0', width: '50', height: '50' })
	              ),
	              _react2.default.createElement(
	                SVGOrigin,
	                { className: 'green', content: 'Green' },
	                _react2.default.createElement('circle', { fill: 'green', cx: '85', cy: '25', r: '25' })
	              ),
	              _react2.default.createElement(
	                'g',
	                { transform: 'translate(120, 0)' },
	                _react2.default.createElement(
	                  SVGOrigin,
	                  { className: 'blue', content: 'Blue' },
	                  _react2.default.createElement('rect', { fill: 'blue', x: '0', y: '0', width: '50', height: '50' })
	                ),
	                _react2.default.createElement(
	                  'g',
	                  { transform: 'translate(15, 15)' },
	                  _react2.default.createElement(
	                    SVGOrigin,
	                    { className: 'inner', content: 'Inner' },
	                    _react2.default.createElement('rect', { fill: 'lightblue', x: '0', y: '0', width: '20', height: '20' })
	                  )
	                )
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'h2',
	          null,
	          'Moving Tooltip'
	        ),
	        _react2.default.createElement('div', {
	          className: 'moving',
	          style: { width: '260px', height: '120px', backgroundColor: 'lightgray' },
	          onMouseMove: this.handleMove,
	          onMouseLeave: this.handleLeave
	        }),
	        _react2.default.createElement(_index.Tooltip, null)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9vcmlnaW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvb3JpZ2luL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLG9CQUFTLE1BQVQsQ0FDRTs7S0FBVSx3QkFBVjtHQUNFLGtEQURGO0VBREYsRUFJQSxTQUFTLGNBQVQsQ0FBd0IsV0FBeEIsQ0FKQSxFOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRUEsS0FBTSxZQUFZLGNBQU8sTUFBUCxDQUFjLEdBQWQsQ0FBWjs7S0FFQTs7O0FBQ0osWUFESSxHQUNKLENBQVksS0FBWixFQUFtQjsyQkFEZixLQUNlOzt3RUFEZixnQkFFSSxRQURXOztBQUVqQixXQUFLLFVBQUwsR0FBa0IsTUFBSyxVQUFMLENBQWdCLElBQWhCLE9BQWxCLENBRmlCO0FBR2pCLFdBQUssV0FBTCxHQUFtQixNQUFLLFdBQUwsQ0FBaUIsSUFBakIsT0FBbkIsQ0FIaUI7O0lBQW5COztnQkFESTs7Z0NBT08sR0FBRztBQUNaLFdBQU0sU0FBUyxFQUFFLEdBQUcsRUFBRSxPQUFGLEVBQVcsR0FBRyxFQUFFLE9BQUYsRUFBNUIsQ0FETTtBQUVaLFlBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsZUFBUSxJQUFSLENBQWEsRUFBRSxjQUFGLEVBQVUsU0FBUyxpQkFBVCxFQUF2QixDQUFwQixFQUZZOzs7O21DQUtBO0FBQ1osWUFBSyxLQUFMLENBQVcsUUFBWCxDQUFvQixlQUFRLElBQVIsRUFBcEIsRUFEWTs7Ozs4QkFJTDtBQUNQLGNBQ0U7OztTQUNFOzs7O1VBREY7U0FHRTs7OztVQUhGO1NBSUU7OztXQUNFOztlQUFLLE9BQU0sS0FBTixFQUFZLFFBQU8sSUFBUCxFQUFqQjthQUNFOztpQkFBRyxXQUFVLG1CQUFWLEVBQUg7ZUFDRTtBQUFDLDBCQUFEO21CQUFXLFdBQVUsS0FBVixFQUFnQixTQUFRLEtBQVIsRUFBM0I7aUJBQ0Usd0NBQU0sTUFBSyxLQUFMLEVBQVcsR0FBRSxHQUFGLEVBQU0sR0FBRSxHQUFGLEVBQU0sT0FBTSxJQUFOLEVBQVcsUUFBTyxJQUFQLEVBQXhDLENBREY7Z0JBREY7ZUFJRTtBQUFDLDBCQUFEO21CQUFXLFdBQVUsT0FBVixFQUFrQixTQUFRLE9BQVIsRUFBN0I7aUJBQ0UsMENBQVEsTUFBSyxPQUFMLEVBQWEsSUFBRyxJQUFILEVBQVEsSUFBRyxJQUFILEVBQVEsR0FBRSxJQUFGLEVBQXJDLENBREY7Z0JBSkY7ZUFPRTs7bUJBQUcsV0FBVSxtQkFBVixFQUFIO2lCQUNFO0FBQUMsNEJBQUQ7cUJBQVcsV0FBVSxNQUFWLEVBQWlCLFNBQVEsTUFBUixFQUE1QjttQkFDRSx3Q0FBTSxNQUFLLE1BQUwsRUFBWSxHQUFFLEdBQUYsRUFBTSxHQUFFLEdBQUYsRUFBTSxPQUFNLElBQU4sRUFBVyxRQUFPLElBQVAsRUFBekMsQ0FERjtrQkFERjtpQkFJRTs7cUJBQUcsV0FBVSxtQkFBVixFQUFIO21CQUNFO0FBQUMsOEJBQUQ7dUJBQVcsV0FBVSxPQUFWLEVBQWtCLFNBQVEsT0FBUixFQUE3QjtxQkFDRSx3Q0FBTSxNQUFLLFdBQUwsRUFBaUIsR0FBRSxHQUFGLEVBQU0sR0FBRSxHQUFGLEVBQU0sT0FBTSxJQUFOLEVBQVcsUUFBTyxJQUFQLEVBQTlDLENBREY7b0JBREY7a0JBSkY7Z0JBUEY7Y0FERjtZQURGO1VBSkY7U0EyQkU7Ozs7VUEzQkY7U0E0QkU7QUFDRSxzQkFBVSxRQUFWO0FBQ0Esa0JBQU8sRUFBRSxPQUFPLE9BQVAsRUFBZ0IsUUFBUSxPQUFSLEVBQWlCLGlCQUFpQixXQUFqQixFQUExQztBQUNBLHdCQUFhLEtBQUssVUFBTDtBQUNiLHlCQUFjLEtBQUssV0FBTDtVQUpoQixDQTVCRjtTQW1DRSxtREFuQ0Y7UUFERixDQURPOzs7O1VBaEJMOzs7QUEyRE4sVUFBUyxNQUFULENBQWdCLEtBQWhCLEVBQXVCO09BQ2IsTUFBUSxNQUFSLElBRGE7O0FBRXJCLFVBQU8sRUFBRSxRQUFGLEVBQVAsQ0FGcUI7RUFBdkI7O21CQUtlLHlCQUFRLE1BQVIsRUFBZ0IsR0FBaEIsRSIsImZpbGUiOiJvcmlnaW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgQXBwIGZyb20gJy4vYXBwJztcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9jb21tb24vc3RvcmUnO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxBcHAgLz5cbiAgPC9Qcm92aWRlcj4sXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJykpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9leGFtcGxlcy9vcmlnaW4vaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgVG9vbHRpcCwgT3JpZ2luLCBhY3Rpb25zIH0gZnJvbSAnLi4vLi4vc3JjL2luZGV4JztcblxuY29uc3QgU1ZHT3JpZ2luID0gT3JpZ2luLndyYXBCeSgnZycpO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmhhbmRsZU1vdmUgPSB0aGlzLmhhbmRsZU1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUxlYXZlID0gdGhpcy5oYW5kbGVMZWF2ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlTW92ZShlKSB7XG4gICAgY29uc3Qgb3JpZ2luID0geyB4OiBlLmNsaWVudFgsIHk6IGUuY2xpZW50WSB9O1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9ucy5zaG93KHsgb3JpZ2luLCBjb250ZW50OiAnTW92aW5nIFRvb2x0aXAhJyB9KSk7XG4gIH1cblxuICBoYW5kbGVMZWF2ZSgpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbnMuaGlkZSgpKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPk9yaWdpbiBFeGFtcGxlPC9oMT5cblxuICAgICAgICA8aDI+Q3VzdG9tIE9yaWdpbjwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxzdmcgd2lkdGg9XCIyNDBcIiBoZWlnaHQ9XCI3MFwiPlxuICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDQwLCAxMClcIj5cbiAgICAgICAgICAgICAgPFNWR09yaWdpbiBjbGFzc05hbWU9XCJyZWRcIiBjb250ZW50PVwiUmVkXCI+XG4gICAgICAgICAgICAgICAgPHJlY3QgZmlsbD1cInJlZFwiIHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjUwXCIgaGVpZ2h0PVwiNTBcIiAvPlxuICAgICAgICAgICAgICA8L1NWR09yaWdpbj5cbiAgICAgICAgICAgICAgPFNWR09yaWdpbiBjbGFzc05hbWU9XCJncmVlblwiIGNvbnRlbnQ9XCJHcmVlblwiPlxuICAgICAgICAgICAgICAgIDxjaXJjbGUgZmlsbD1cImdyZWVuXCIgY3g9XCI4NVwiIGN5PVwiMjVcIiByPVwiMjVcIiAvPlxuICAgICAgICAgICAgICA8L1NWR09yaWdpbj5cbiAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEyMCwgMClcIj5cbiAgICAgICAgICAgICAgICA8U1ZHT3JpZ2luIGNsYXNzTmFtZT1cImJsdWVcIiBjb250ZW50PVwiQmx1ZVwiPlxuICAgICAgICAgICAgICAgICAgPHJlY3QgZmlsbD1cImJsdWVcIiB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCI1MFwiIGhlaWdodD1cIjUwXCIgLz5cbiAgICAgICAgICAgICAgICA8L1NWR09yaWdpbj5cbiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTUsIDE1KVwiPlxuICAgICAgICAgICAgICAgICAgPFNWR09yaWdpbiBjbGFzc05hbWU9XCJpbm5lclwiIGNvbnRlbnQ9XCJJbm5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8cmVjdCBmaWxsPVwibGlnaHRibHVlXCIgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIC8+XG4gICAgICAgICAgICAgICAgICA8L1NWR09yaWdpbj5cbiAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxoMj5Nb3ZpbmcgVG9vbHRpcDwvaDI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJtb3ZpbmdcIlxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMjYwcHgnLCBoZWlnaHQ6ICcxMjBweCcsIGJhY2tncm91bmRDb2xvcjogJ2xpZ2h0Z3JheScgfX0gXG4gICAgICAgICAgb25Nb3VzZU1vdmU9e3RoaXMuaGFuZGxlTW92ZX1cbiAgICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuaGFuZGxlTGVhdmV9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPFRvb2x0aXAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2VsZWN0KHN0YXRlKSB7XG4gIGNvbnN0IHsgYXBwIH0gPSBzdGF0ZTtcbiAgcmV0dXJuIHsgYXBwIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc2VsZWN0KShBcHApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9leGFtcGxlcy9vcmlnaW4vYXBwLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==