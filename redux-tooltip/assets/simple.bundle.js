webpackJsonp([7],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var l=n(1),a=r(l),o=n(28),u=r(o),i=n(166),c=n(223),f=r(c),p=n(209),s=r(p);u.default.render(a.default.createElement(i.Provider,{store:s.default},a.default.createElement(f.default,null)),document.getElementById("container"))},223:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){var t=e.app;return{app:t}}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),f=r(c),p=n(166),s=n(197),d=n(224),m=r(d),b=function(e){function t(){return l(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),i(t,[{key:"render",value:function(){return f.default.createElement("div",null,f.default.createElement("h1",null,"Simple Example"),f.default.createElement(m.default,null),f.default.createElement(s.Tooltip,null,"This is a tooltip."))}}]),t}(c.Component);t.default=(0,p.connect)(u)(b)},224:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),c=r(i),f=n(197),p="data:image/gif;base64,R0lGODlhAQABAPAAAAD/AP///yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",s=function(e){function t(){return l(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("p",null,"This is an example for redux-tooltip.",c.default.createElement("br",null),"You can put a tooltip on ",c.default.createElement(f.Origin,{className:"target"},"a text"),"."),c.default.createElement("p",null,"Of course, you can also put ",c.default.createElement(f.Origin,{className:"target first"},"multiple")," ",c.default.createElement(f.Origin,{className:"target second"},"tooltips"),"."),c.default.createElement("p",null,c.default.createElement(f.Origin,{className:"image"},c.default.createElement("img",{src:p,width:"240",height:"120",alt:"placeholder"})),c.default.createElement("br",null),"It can be used as a caption of images."),c.default.createElement("p",null,c.default.createElement("span",null,"Email: "),c.default.createElement(f.Origin,{className:"user"},c.default.createElement("input",{type:"input",placeholder:"mail"}))," @ ",c.default.createElement(f.Origin,{className:"domain"},c.default.createElement("input",{type:"input",placeholder:"example.com"}))))}}]),t}(i.Component);t.default=s}});