!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).workbox={})}(this,(function(e){"use strict";try{self["workbox:window:5.1.3"]&&_()}catch(e){}function t(e,t){return new Promise((function(n){var r=new MessageChannel;r.port1.onmessage=function(e){n(e.data)},e.postMessage(t,[r.port2])}))}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}try{self["workbox:core:5.1.3"]&&_()}catch(e){}var r=function(){var e=this;this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n}))};function i(e,t){var n=location.href;return new URL(e,n).href===new URL(t,n).href}var o=function(e,t){this.type=e,Object.assign(this,t)};function a(e,t,n){return n?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}function s(){}var c=function(e){var s,c;function v(t,n){var s,c;return void 0===n&&(n={}),(s=e.call(this)||this).t={},s.i=0,s.o=new r,s.u=new r,s.s=new r,s.v=0,s.h=new Set,s.l=function(){var e=s.g,t=e.installing;s.i>0||!i(t.scriptURL,s.m)||performance.now()>s.v+6e4?(s.p=t,e.removeEventListener("updatefound",s.l)):(s.P=t,s.h.add(t),s.o.resolve(t)),++s.i,t.addEventListener("statechange",s.j)},s.j=function(e){var t=s.g,n=e.target,r=n.state,i=n===s.p,a=i?"external":"",c={sw:n,originalEvent:e};!i&&s.k&&(c.isUpdate=!0),s.dispatchEvent(new o(a+r,c)),"installed"===r?s.O=self.setTimeout((function(){"installed"===r&&t.waiting===n&&s.dispatchEvent(new o(a+"waiting",c))}),200):"activating"===r&&(clearTimeout(s.O),i||s.u.resolve(n))},s._=function(e){var t=s.P;t===navigator.serviceWorker.controller&&(s.dispatchEvent(new o("controlling",{sw:t,originalEvent:e,isUpdate:s.k})),s.s.resolve(t))},s.M=(c=function(e){var t=e.data,n=e.source;return a(s.getSW(),(function(){s.h.has(n)&&s.dispatchEvent(new o("message",{data:t,sw:n,originalEvent:e}))}))},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];try{return Promise.resolve(c.apply(this,e))}catch(e){return Promise.reject(e)}}),s.m=t,s.t=n,navigator.serviceWorker.addEventListener("message",s.M),s}c=e,(s=v).prototype=Object.create(c.prototype),s.prototype.constructor=s,s.__proto__=c;var f,h,d=v.prototype;return d.register=function(e){var t=(void 0===e?{}:e).immediate,n=void 0!==t&&t;try{var r=this;return function(e,t){var n=e();return n&&n.then?n.then(t):t()}((function(){if(!n&&"complete"!==document.readyState)return u(new Promise((function(e){return window.addEventListener("load",e)})))}),(function(){return r.k=Boolean(navigator.serviceWorker.controller),r.R=r.S(),a(r.U(),(function(e){r.g=e,r.R&&(r.P=r.R,r.u.resolve(r.R),r.s.resolve(r.R),r.R.addEventListener("statechange",r.j,{once:!0}));var t=r.g.waiting;return t&&i(t.scriptURL,r.m)&&(r.P=t,Promise.resolve().then((function(){r.dispatchEvent(new o("waiting",{sw:t,wasWaitingBeforeRegister:!0}))})).then((function(){}))),r.P&&(r.o.resolve(r.P),r.h.add(r.P)),r.g.addEventListener("updatefound",r.l),navigator.serviceWorker.addEventListener("controllerchange",r._,{once:!0}),r.g}))}))}catch(e){return Promise.reject(e)}},d.update=function(){try{return this.g?u(this.g.update()):void 0}catch(e){return Promise.reject(e)}},d.getSW=function(){try{return void 0!==this.P?this.P:this.o.promise}catch(e){return Promise.reject(e)}},d.messageSW=function(e){try{return a(this.getSW(),(function(n){return t(n,e)}))}catch(e){return Promise.reject(e)}},d.S=function(){var e=navigator.serviceWorker.controller;return e&&i(e.scriptURL,this.m)?e:void 0},d.U=function(){try{var e=this;return function(e,t){try{var n=e()}catch(e){return t(e)}return n&&n.then?n.then(void 0,t):n}((function(){return a(navigator.serviceWorker.register(e.m,e.t),(function(t){return e.v=performance.now(),t}))}),(function(e){throw e}))}catch(e){return Promise.reject(e)}},f=v,(h=[{key:"active",get:function(){return this.u.promise}},{key:"controlling",get:function(){return this.s.promise}}])&&n(f.prototype,h),v}(function(){function e(){this.B=new Map}var t=e.prototype;return t.addEventListener=function(e,t){this.L(e).add(t)},t.removeEventListener=function(e,t){this.L(e).delete(t)},t.dispatchEvent=function(e){e.target=this;var t=this.L(e.type),n=Array.isArray(t),r=0;for(t=n?t:t[Symbol.iterator]();;){var i;if(n){if(r>=t.length)break;i=t[r++]}else{if((r=t.next()).done)break;i=r.value}i(e)}},t.L=function(e){return this.B.has(e)||this.B.set(e,new Set),this.B.get(e)},e}());function u(e,t){if(!t)return e&&e.then?e.then(s):Promise.resolve()}e.Workbox=c,e.messageSW=t,Object.defineProperty(e,"__esModule",{value:!0})}));