/*

*/
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{108:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n(8)),o=s(n(4)),i=s(n(89));function s(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=n(15),_=n(59),y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(c,e);var t,n,r,s=a(c);function c(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),s.call(this,e)}return t=c,(n=[{key:"_extra",value:function(){p(h(c.prototype),"_extra",this).call(this),this._outer=d.one(this._prop.selector);var e=this._outer;e.classList.add("".concat(this._prefix)),this._text=e.innerText,0==this._text.length&&(this._text=e.textContent),this._html=e.innerHTML,this._splitBool=!1,this._el={letters:[],words:[],lines:[]},this.split()}},{key:"_setEvents",value:function(){var e=this;p(h(c.prototype),"_setEvents",this).call(this),this.addEvent("viewport",{target:"w_",name:this.name,do:function(){e._resize()}})}},{key:"_resize",value:function(){var e=this;setTimeout((function(){e._resizeFunc()}),this._prop.resizeTimeout)}},{key:"_resizeFunc",value:function(){this.split(),this.lbt("resize")}},{key:"split",value:function(){var e=this._prop;this._outer.classList.add("".concat(this._prefix,"_splitting")),this._splitBool||(this._wordsSplit(),this._lettersSplit(),this._outer.innerHTML="",this._lettersAppend(),this._wordsAppend()),this._splitBool&&this._linesRemove(),e.appendLines||this._splitBool||this._appendSpaces(),e.appendLines?(this._appendSpaces(),this._linesSplit(),this._removeBr(),this._linesAppend(),this._appendSpaces()):this._linesSplit(),this._splitBool=!0,this._outer.classList.remove("".concat(this._prefix,"_splitting")),this.lbt("split",this._el)}},{key:"_wordsSplit",value:function(){var e=this,t=this._text.split(""),n=[],r=[],o=0;t.forEach((function(e){var i=!1,s=!1,c=e.charCodeAt(0),l=!1,p=o==t.length-1;32===c||160===c?i=!0:10===c&&(s=!0),(s||i||p)&&(l=!0,p&&r.push(e)),l?(r.length>0&&n.push({el:!1,children:r,newline:s,content:r.join(""),type:"word"}),r=[]):r.push(e),o++})),this._prop.appendWords&&n.forEach((function(t){t.el=_({selector:"span",styles:"".concat(e._prefix,"__word")}),t.el.classList.add(),e._prop.appendLetters||(t.el.innerHTML=t.content)})),this._el.words=n}},{key:"_wordsAppend",value:function(){var e=this;this._prop.appendWords&&this._el.words.forEach((function(t){e._outer.appendChild(t.el)}))}},{key:"_lettersSplit",value:function(){var e=this;this._el.words.forEach((function(t){var n=t.children,r=[],o=0;n.forEach((function(i){var s=o==n.length-1,c={el:!1,content:i,whitespace:s,newline:!(!s||!t.newline),type:"letter"};e._prop.appendLetters&&(c.el=_({selector:"span",styles:"".concat(e._prefix,"__letter")}),c.el.innerHTML=i),r.push(c),e._el.letters.push(c),o++})),t.children=r}))}},{key:"_lettersAppend",value:function(){var e=this;this._prop.appendLetters&&(this._prop.appendWords?this._el.words.forEach((function(e){e.children.forEach((function(t){e.el.appendChild(t.el)}))})):this._prop.appendWords||this._el.letters.forEach((function(t){e._outer.appendChild(t.el)})))}},{key:"_appendSpaces",value:function(){var e=this._prop,t=this._el;e.appendWords?this._appendSpacesType(t.words):e.appendLetters&&this._appendSpacesType(t.letters)}},{key:"_appendSpacesType",value:function(e){e.forEach((function(e){var t=!1;if(("word"==e.type||e.whitespace)&&(t=!0),t&&(t=document.createTextNode(" "),(0,i.default)(t,e.el)),e.newline){var n=_({selector:"br"});(0,i.default)(n,e.el)}}))}},{key:"_removeBr",value:function(){this._outer.querySelectorAll("br").forEach((function(e){e.remove()}))}},{key:"_linesSplit",value:function(){var e=this,t=this._prop,n=[];t.appendWords?n=this._el.words:t.appendLetters&&(n=this._el.letters);for(var r=[],o=[],i=0,s=!1,c=0;c<n.length;c++){var l=n[c],p=l.el.offsetTop;s=p!==i,i=p,s&o.length>0&&(r.push(o),o=[]),o.push(l)}r.push(o);var u=this._el.lines;r.forEach((function(n){var r={el:!1,children:n,content:"",type:"line"};n.forEach((function(e){r.content+=e.content,("word"==e.type||e.whitespace)&&(r.content+=" ")})),t.appendLines&&(r.el=_({selector:"span",styles:"".concat(e._prefix,"__line")})),u.push(r)}))}},{key:"_linesAppend",value:function(){var e=this;this._prop.appendLines&&this._el.lines.forEach((function(t){e._outer.appendChild(t.el),t.children.forEach((function(e){t.el.appendChild(e.el)}))}))}},{key:"_linesRemove",value:function(){var e=this._prop,t=this._el,n=this._outer;e.appendLines&&(e.appendWords?t.words.forEach((function(e){n.appendChild(e.el)})):e.appendLetters&&t.letters.forEach((function(e){n.appendChild(e.el)}))),t.lines.forEach((function(e){e.el&&e.el.remove()})),t.lines=[]}},{key:"destroy",value:function(){p(h(c.prototype),"destroy",this).call(this),this._outer.innerHTML=this._html}},{key:"prefix",get:function(){return"".concat(this._v.prefix,"text-split")}},{key:"defaultProp",get:function(){return(0,o.default)(p(h(c.prototype),"defaultProp",this),{selector:".".concat(this._prefix),resizeTimeout:0,appendLetters:!0,appendWords:!0,appendLines:!1})}},{key:"letters",get:function(){return this._el.letters}},{key:"words",get:function(){return this._el.words}},{key:"lines",get:function(){return this._el.lines}},{key:"elements",get:function(){return this._el}},{key:"outer",get:function(){return this._outer}}])&&l(t.prototype,n),r&&l(t,r),c}(r.default);t.default=y},162:function(e,t,n){"use strict";n.r(t),n.d(t,"SplitText",(function(){return b}));var r=n(6),o=n(108),i=n.n(o),s=n(12),c=n(34);function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var y=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":_(Reflect))&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},v="split-text",b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(h,e);var t,n,r,o=f(h);function h(){var e;return l(this,h),(e=o.apply(this,arguments))._viewed=!1,e}return t=h,(n=[{key:"createRenderRoot",value:function(){return this}},{key:"firstUpdated",value:function(){this.classList.add(v)}},{key:"connectedCallback",value:function(){var e=this;u(d(h.prototype),"connectedCallback",this).call(this);var t=this.children[0];this._text=new i.a({selector:t,appendLines:!0,appendLetters:!1}),this._text.on("split",this._setLines.bind(this)),s.a.on("hide",(function(){e._text.split()})),this.classList.add("v-view"),this["v-view-callback"]=function(){e._viewed=!0},this._setLines(!0)}},{key:"_setLines",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this._text&&this._text.lines.forEach((function(n){n.el&&(e._viewed?n.el.classList.remove("v-view"):(n.el.classList.add("v-view"),t=!0))})),t){var n=c.a.get();n&&n.updateEl()}}},{key:"disconnectedCallback",value:function(){u(d(h.prototype),"disconnectedCallback",this).call(this),this._text&&(this._text.destroy(),this._text=void 0)}}])&&p(t.prototype,n),r&&p(t,r),h}(r.a);b=y([Object(r.b)(v)],b)},89:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){var n=t.parentNode,r=t.nextSibling;r?n.insertBefore(e,r):n.appendChild(e)};t.default=n}}]);