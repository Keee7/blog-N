!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).workbox={})}(this,(function(t){"use strict";try{self["workbox:window:7.0.0"]&&_()}catch(t){}function e(t,e){return new Promise((function(n){var r=new MessageChannel;r.port1.onmessage=function(t){n(t.data)},t.postMessage(e,[r.port2])}))}function n(t){var e=function(t){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof e?e:e+""}function r(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,n(o.key),o)}}function o(t,e){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},o(t,e)}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}try{self["workbox:core:7.0.0"]&&_()}catch(t){}var a=function(){var t=this;this.promise=new Promise((function(e,n){t.resolve=e,t.reject=n}))};function s(t,e){var n=location.href;return new URL(t,n).href===new URL(e,n).href}var c=function(t,e){this.type=t,Object.assign(this,e)};function u(t,e,n){return n?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}function f(){}var v={type:"SKIP_WAITING"};function l(t,e){if(!e)return t&&t.then?t.then(f):Promise.resolve()}var d=function(t){function n(e,n){var r,o;return void 0===n&&(n={}),(r=t.call(this)||this).At={},r.It=0,r.Tt=new a,r.Mt=new a,r.Bt=new a,r.Lt=0,r.Nt=new Set,r.Gt=function(){var t=r.Kt,e=t.installing;r.It>0||!s(e.scriptURL,r.zt.toString())||performance.now()>r.Lt+6e4?(r.Dt=e,t.removeEventListener("updatefound",r.Gt)):(r.Ft=e,r.Nt.add(e),r.Tt.resolve(e)),++r.It,e.addEventListener("statechange",r.Ht)},r.Ht=function(t){var e=r.Kt,n=t.target,o=n.state,i=n===r.Dt,a={sw:n,isExternal:i,originalEvent:t};!i&&r.Jt&&(a.isUpdate=!0),r.dispatchEvent(new c(o,a)),"installed"===o?r.Qt=self.setTimeout((function(){"installed"===o&&e.waiting===n&&r.dispatchEvent(new c("waiting",a))}),200):"activating"===o&&(clearTimeout(r.Qt),i||r.Mt.resolve(n))},r.Vt=function(t){var e=r.Ft,n=e!==navigator.serviceWorker.controller;r.dispatchEvent(new c("controlling",{isExternal:n,originalEvent:t,sw:e,isUpdate:r.Jt})),n||r.Bt.resolve(e)},r.Xt=(o=function(t){var e=t.data,n=t.ports,o=t.source;return u(r.getSW(),(function(){r.Nt.has(o)&&r.dispatchEvent(new c("message",{data:e,originalEvent:t,ports:n,sw:o}))}))},function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];try{return Promise.resolve(o.apply(this,t))}catch(t){return Promise.reject(t)}}),r.zt=e,r.At=n,navigator.serviceWorker.addEventListener("message",r.Xt),r}var i,f;f=t,(i=n).prototype=Object.create(f.prototype),i.prototype.constructor=i,o(i,f);var d,h,p=n.prototype;return p.register=function(t){var e=(void 0===t?{}:t).immediate,n=void 0!==e&&e;try{var r=this;return u(function(t,e){var n=t();return n&&n.then?n.then(e):e()}((function(){if(!n&&"complete"!==document.readyState)return l(new Promise((function(t){return window.addEventListener("load",t)})))}),(function(){return r.Jt=Boolean(navigator.serviceWorker.controller),r.Yt=r.Zt(),u(r.tn(),(function(t){r.Kt=t,r.Yt&&(r.Ft=r.Yt,r.Mt.resolve(r.Yt),r.Bt.resolve(r.Yt),r.Yt.addEventListener("statechange",r.Ht,{once:!0}));var e=r.Kt.waiting;return e&&s(e.scriptURL,r.zt.toString())&&(r.Ft=e,Promise.resolve().then((function(){r.dispatchEvent(new c("waiting",{sw:e,wasWaitingBeforeRegister:!0}))})).then((function(){}))),r.Ft&&(r.Tt.resolve(r.Ft),r.Nt.add(r.Ft)),r.Kt.addEventListener("updatefound",r.Gt),navigator.serviceWorker.addEventListener("controllerchange",r.Vt),r.Kt}))})))}catch(t){return Promise.reject(t)}},p.update=function(){try{return this.Kt?u(l(this.Kt.update())):u()}catch(t){return Promise.reject(t)}},p.getSW=function(){return void 0!==this.Ft?Promise.resolve(this.Ft):this.Tt.promise},p.messageSW=function(t){try{return u(this.getSW(),(function(n){return e(n,t)}))}catch(t){return Promise.reject(t)}},p.messageSkipWaiting=function(){this.Kt&&this.Kt.waiting&&e(this.Kt.waiting,v)},p.Zt=function(){var t=navigator.serviceWorker.controller;return t&&s(t.scriptURL,this.zt.toString())?t:void 0},p.tn=function(){try{var t=this;return u(function(t,e){try{var n=t()}catch(t){return e(t)}return n&&n.then?n.then(void 0,e):n}((function(){return u(navigator.serviceWorker.register(t.zt,t.At),(function(e){return t.Lt=performance.now(),e}))}),(function(t){throw t})))}catch(t){return Promise.reject(t)}},d=n,(h=[{key:"active",get:function(){return this.Mt.promise}},{key:"controlling",get:function(){return this.Bt.promise}}])&&r(d.prototype,h),Object.defineProperty(d,"prototype",{writable:!1}),d}(function(){function t(){this.nn=new Map}var e=t.prototype;return e.addEventListener=function(t,e){this.rn(t).add(e)},e.removeEventListener=function(t,e){this.rn(t).delete(e)},e.dispatchEvent=function(t){t.target=this;for(var e,n=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(this.rn(t.type));!(e=n()).done;)(0,e.value)(t)},e.rn=function(t){return this.nn.has(t)||this.nn.set(t,new Set),this.nn.get(t)},t}());t.Workbox=d,t.WorkboxEvent=c,t.messageSW=e,Object.defineProperty(t,"__esModule",{value:!0})}));