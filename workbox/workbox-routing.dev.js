this.workbox=this.workbox||{},this.workbox.routing=function(e,t,r,o,a){"use strict";try{self["workbox:routing:7.0.0"]&&_()}catch(e){}const s=["DELETE","GET","HEAD","PATCH","POST","PUT"],n=e=>e&&"object"==typeof e?(t.assert.hasMethod(e,"handle",{moduleName:"workbox-routing",className:"Route",funcName:"constructor",paramName:"handler"}),e):(t.assert.isType(e,"function",{moduleName:"workbox-routing",className:"Route",funcName:"constructor",paramName:"handler"}),{handle:e});class i{constructor(e,r,o="GET"){t.assert.isType(e,"function",{moduleName:"workbox-routing",className:"Route",funcName:"constructor",paramName:"match"}),o&&t.assert.isOneOf(o,s,{paramName:"method"}),this.handler=n(r),this.match=e,this.method=o}setCatchHandler(e){this.catchHandler=n(e)}}class u extends i{constructor(e,o,a){t.assert.isInstance(e,RegExp,{moduleName:"workbox-routing",className:"RegExpRoute",funcName:"constructor",paramName:"pattern"});super((({url:t})=>{const o=e.exec(t.href);if(o){if(t.origin===location.origin||0===o.index)return o.slice(1);r.logger.debug(`The regular expression '${e.toString()}' only partially matched against the cross-origin URL '${t.toString()}'. RegExpRoute's will only handle cross-origin requests if they match the entire URL.`)}}),o,a)}}class l{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,r=this.handleRequest({request:t,event:e});r&&e.respondWith(r)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data;r.logger.debug("Caching URLs from the window",t.urlsToCache);const o=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const r=new Request(...t);return this.handleRequest({request:r,event:e})})));e.waitUntil(o),e.ports&&e.ports[0]&&o.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:o}){t.assert.isInstance(e,Request,{moduleName:"workbox-routing",className:"Router",funcName:"handleRequest",paramName:"options.request"});const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return void r.logger.debug("Workbox Router only supports URLs that start with 'http'.");const n=s.origin===location.origin,{params:i,route:u}=this.findMatchingRoute({event:o,request:e,sameOrigin:n,url:s});let l=u&&u.handler;const c=[];l&&(c.push(["Found a route to handle this request:",u]),i&&c.push(["Passing the following params to the route's handler:",i]));const h=e.method;if(!l&&this._defaultHandlerMap.has(h)&&(c.push(`Failed to find a matching route. Falling back to the default handler for ${h}.`),l=this._defaultHandlerMap.get(h)),!l)return void r.logger.debug(`No route found for: ${a.getFriendlyURL(s)}`);let g;r.logger.groupCollapsed(`Router is responding to: ${a.getFriendlyURL(s)}`),c.forEach((e=>{Array.isArray(e)?r.logger.log(...e):r.logger.log(e)})),r.logger.groupEnd();try{g=l.handle({url:s,request:e,event:o,params:i})}catch(e){g=Promise.reject(e)}const d=u&&u.catchHandler;return g instanceof Promise&&(this._catchHandler||d)&&(g=g.catch((async t=>{if(d){r.logger.groupCollapsed(`Error thrown when responding to:  ${a.getFriendlyURL(s)}. Falling back to route's Catch Handler.`),r.logger.error("Error thrown by:",u),r.logger.error(t),r.logger.groupEnd();try{return await d.handle({url:s,request:e,event:o,params:i})}catch(e){e instanceof Error&&(t=e)}}if(this._catchHandler)return r.logger.groupCollapsed(`Error thrown when responding to:  ${a.getFriendlyURL(s)}. Falling back to global Catch Handler.`),r.logger.error("Error thrown by:",u),r.logger.error(t),r.logger.groupEnd(),this._catchHandler.handle({url:s,request:e,event:o});throw t}))),g}findMatchingRoute({url:e,sameOrigin:t,request:o,event:s}){const n=this._routes.get(o.method)||[];for(const i of n){let n;const u=i.match({url:e,sameOrigin:t,request:o,event:s});if(u)return u instanceof Promise&&r.logger.warn(`While routing ${a.getFriendlyURL(e)}, an async matchCallback function was used. Please convert the following route to use a synchronous matchCallback function:`,i),n=u,(Array.isArray(n)&&0===n.length||u.constructor===Object&&0===Object.keys(u).length||"boolean"==typeof u)&&(n=void 0),{route:i,params:n}}return{}}setDefaultHandler(e,t="GET"){this._defaultHandlerMap.set(t,n(e))}setCatchHandler(e){this._catchHandler=n(e)}registerRoute(e){t.assert.isType(e,"object",{moduleName:"workbox-routing",className:"Router",funcName:"registerRoute",paramName:"route"}),t.assert.hasMethod(e,"match",{moduleName:"workbox-routing",className:"Router",funcName:"registerRoute",paramName:"route"}),t.assert.isType(e.handler,"object",{moduleName:"workbox-routing",className:"Router",funcName:"registerRoute",paramName:"route"}),t.assert.hasMethod(e.handler,"handle",{moduleName:"workbox-routing",className:"Router",funcName:"registerRoute",paramName:"route.handler"}),t.assert.isType(e.method,"string",{moduleName:"workbox-routing",className:"Router",funcName:"registerRoute",paramName:"route.method"}),this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new o.WorkboxError("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new o.WorkboxError("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}let c;const h=()=>(c||(c=new l,c.addFetchListener(),c.addCacheListener()),c);return e.NavigationRoute=class extends i{constructor(e,{allowlist:r=[/./],denylist:o=[]}={}){t.assert.isArrayOfClass(r,RegExp,{moduleName:"workbox-routing",className:"NavigationRoute",funcName:"constructor",paramName:"options.allowlist"}),t.assert.isArrayOfClass(o,RegExp,{moduleName:"workbox-routing",className:"NavigationRoute",funcName:"constructor",paramName:"options.denylist"}),super((e=>this._match(e)),e),this._allowlist=r,this._denylist=o}_match({url:e,request:t}){if(t&&"navigate"!==t.mode)return!1;const o=e.pathname+e.search;for(const e of this._denylist)if(e.test(o))return r.logger.log(`The navigation route ${o} is not being used, since the URL matches this denylist pattern: ${e.toString()}`),!1;return this._allowlist.some((e=>e.test(o)))?(r.logger.debug(`The navigation route ${o} is being used.`),!0):(r.logger.log(`The navigation route ${o} is not being used, since the URL being navigated to doesn't match the allowlist.`),!1)}},e.RegExpRoute=u,e.Route=i,e.Router=l,e.registerRoute=function(e,t,a){let s;if("string"==typeof e){const n=new URL(e,location.href);{if(!e.startsWith("/")&&!e.startsWith("http"))throw new o.WorkboxError("invalid-string",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});const t=e.startsWith("http")?n.pathname:e,a="[*:?+]";new RegExp(`${a}`).exec(t)&&r.logger.debug(`The '$capture' parameter contains an Express-style wildcard character (${a}). Strings are now always interpreted as exact matches; use a RegExp for partial or wildcard matches.`)}s=new i((({url:t})=>(t.pathname===n.pathname&&t.origin!==n.origin&&r.logger.debug(`${e} only partially matches the cross-origin URL ${t.toString()}. This route will only handle cross-origin requests if they match the entire URL.`),t.href===n.href)),t,a)}else if(e instanceof RegExp)s=new u(e,t,a);else if("function"==typeof e)s=new i(e,t,a);else{if(!(e instanceof i))throw new o.WorkboxError("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});s=e}return h().registerRoute(s),s},e.setCatchHandler=function(e){h().setCatchHandler(e)},e.setDefaultHandler=function(e){h().setDefaultHandler(e)},e}({},workbox.core._private,workbox.core._private,workbox.core._private,workbox.core._private);