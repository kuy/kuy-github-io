webpackJsonp([0],{0:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r=n(1),o=a(r),l=n(28),u=a(l),i=n(166),c=n(196),s=a(c),f=n(209),d=a(f);u.default.render(o.default.createElement(i.Provider,{store:d.default},o.default.createElement(s.default,null)),document.getElementById("container"))},196:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(){var e=new Date;return e.toString()}function c(e){var t=e.app;return{app:t}}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),d=n(1),p=a(d),h=n(166),m=n(197),v=(m.actions.show,m.actions.content),g=10,y="Count down from "+g,b=function(e){function t(e){o(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={count:[]},n.handleHover=n.handleHover.bind(n),n.handleLeave=n.handleLeave.bind(n),n.handleCountHover=n.handleCountHover.bind(n),n}return u(t,e),f(t,[{key:"handleHover",value:function(){var e=this;this.updateContent(),this.token=setInterval(function(){e.updateContent()},1e3)}},{key:"handleLeave",value:function(){clearInterval(this.token)}},{key:"updateContent",value:function(){this.props.dispatch(v(i()))}},{key:"handleCountHover",value:function(){var e=this;this.setState(s({},this.state,{count:[y]})),this.token=setInterval(function(){var t=e.state.count;t=g<=t.length?[y]:[].concat(r(t),[g-t.length]),e.setState(s({},e.state,{count:t}))},1e3)}},{key:"handleLeave",value:function(){clearInterval(this.token)}},{key:"render",value:function(){var e=p.default.createElement("div",null,p.default.createElement("span",{style:{color:"red",marginRight:"5px"}},"Red"),p.default.createElement("span",{style:{color:"green",marginRight:"5px"}},"Green"),p.default.createElement("span",{style:{color:"blue",marginRight:"5px"}},"Blue")),t=this.state.count,n=t.join(", ");return p.default.createElement("div",null,p.default.createElement("h1",null,"Content Example"),p.default.createElement("p",null,"If you provide a ",p.default.createElement(m.Origin,{className:"target custom",content:"This is a custom content."},"custom")," content via Origin component's prop, it will overwrite a ",p.default.createElement(m.Origin,{className:"target default"},"default")," content of Tooltip component.",p.default.createElement("br",null),p.default.createElement(m.Origin,{className:"target html",content:"This is a <b>html</b> content.<br />Sanitized by <a href='#'>DOMPurify</a>.<script>console.log('Hello XSS!');</script>"},"HTML")," as string and ",p.default.createElement(m.Origin,{className:"target dom",content:e},"DOM element")," are also supported."),p.default.createElement("p",null,"What time is it ",p.default.createElement(m.Origin,{className:"target time",onHover:this.handleHover,onLeave:this.handleLeave},"now"),"?"),p.default.createElement("p",null,"Count down: ",p.default.createElement(m.Origin,{name:"count",className:"target count",onHover:this.handleCountHover,onLeave:this.handleLeave},"Here")),p.default.createElement(m.Tooltip,null,"This is a default content.",p.default.createElement("br",null),"It's a second line."),p.default.createElement(m.Tooltip,{name:"count"},n))}}]),t}(d.Component);t.default=(0,h.connect)(c)(b)}});