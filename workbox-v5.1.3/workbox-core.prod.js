this.workbox=this.workbox||{},this.workbox.core=function(e){"use strict";try{self["workbox:core:5.1.3"]&&_()}catch(e){}class t extends Error{constructor(e,t){super(((e,...t)=>{let n=e;return t.length>0&&(n+=` :: ${JSON.stringify(t)}`),n})(e,t)),this.name=e,this.details=t}}const n=new Set,s={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},r=e=>[s.prefix,e,s.suffix].filter((e=>e&&e.length>0)).join("-"),o={updateDetails:e=>{(e=>{for(const t of Object.keys(s))e(t)})((t=>{"string"==typeof e[t]&&(s[t]=e[t])}))},getGoogleAnalyticsName:e=>e||r(s.googleAnalytics),getPrecacheName:e=>e||r(s.precache),getPrefix:()=>s.prefix,getRuntimeName:e=>e||r(s.runtime),getSuffix:()=>s.suffix};async function a(){for(const e of n)await e()}const c=e=>new URL(String(e),location.href).href.replace(new RegExp(`^${location.origin}`),""),i=(e,t)=>e.filter((e=>t in e)),l=async({request:e,mode:t,plugins:n=[]})=>{const s=i(n,"cacheKeyWillBeUsed");let r=e;for(const e of s)r=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:r}),"string"==typeof r&&(r=new Request(r));return r},u=async({cacheName:e,request:t,event:n,matchOptions:s,plugins:r=[]})=>{const o=await self.caches.open(e),a=await l({plugins:r,request:t,mode:"read"});let c=await o.match(a,s);for(const t of r)if("cachedResponseWillBeUsed"in t){const r=t.cachedResponseWillBeUsed;c=await r.call(t,{cacheName:e,event:n,matchOptions:s,cachedResponse:c,request:a})}return c},h={put:async({cacheName:e,request:n,response:s,event:r,plugins:o=[],matchOptions:h})=>{const f=await l({plugins:o,request:n,mode:"write"});if(!s)throw new t("cache-put-with-no-response",{url:c(f.url)});const p=await(async({request:e,response:t,event:n,plugins:s=[]})=>{let r=t,o=!1;for(const t of s)if("cacheWillUpdate"in t){o=!0;const s=t.cacheWillUpdate;if(r=await s.call(t,{request:e,response:r,event:n}),!r)break}return o||(r=r&&200===r.status?r:void 0),r||null})({event:r,plugins:o,response:s,request:f});if(!p)return;const d=await self.caches.open(e),g=i(o,"cacheDidUpdate"),w=g.length>0?await u({cacheName:e,matchOptions:h,request:f}):null;try{await d.put(f,p)}catch(e){throw"QuotaExceededError"===e.name&&await a(),e}for(const t of g)await t.cacheDidUpdate.call(t,{cacheName:e,event:r,oldResponse:w,newResponse:p,request:f})},match:u};let f,p;function d(){if(void 0===p){const e=new Response("");if("body"in e)try{new Response(e.body),p=!0}catch(e){p=!1}p=!1}return p}class g{constructor(e,t,{onupgradeneeded:n,onversionchange:s}={}){this.t=null,this.s=e,this.i=t,this.o=n,this.u=s||(()=>this.close())}get db(){return this.t}async open(){if(!this.t)return this.t=await new Promise(((e,t)=>{let n=!1;setTimeout((()=>{n=!0,t(new Error("The open request was blocked and timed out"))}),this.OPEN_TIMEOUT);const s=indexedDB.open(this.s,this.i);s.onerror=()=>t(s.error),s.onupgradeneeded=e=>{n?(s.transaction.abort(),s.result.close()):"function"==typeof this.o&&this.o(e)},s.onsuccess=()=>{const t=s.result;n?t.close():(t.onversionchange=this.u.bind(this),e(t))}})),this}async getKey(e,t){return(await this.getAllKeys(e,t,1))[0]}async getAll(e,t,n){return await this.getAllMatching(e,{query:t,count:n})}async getAllKeys(e,t,n){return(await this.getAllMatching(e,{query:t,count:n,includeKeys:!0})).map((e=>e.key))}async getAllMatching(e,{index:t,query:n=null,direction:s="next",count:r,includeKeys:o=!1}={}){return await this.transaction([e],"readonly",((a,c)=>{const i=a.objectStore(e),l=t?i.index(t):i,u=[],h=l.openCursor(n,s);h.onsuccess=()=>{const e=h.result;e?(u.push(o?e:e.value),r&&u.length>=r?c(u):e.continue()):c(u)}}))}async transaction(e,t,n){return await this.open(),await new Promise(((s,r)=>{const o=this.t.transaction(e,t);o.onabort=()=>r(o.error),o.oncomplete=()=>s(),n(o,(e=>s(e)))}))}async l(e,t,n,...s){return await this.transaction([t],n,((n,r)=>{const o=n.objectStore(t),a=o[e].apply(o,s);a.onsuccess=()=>r(a.result)}))}close(){this.t&&(this.t.close(),this.t=null)}}g.prototype.OPEN_TIMEOUT=2e3;const w={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[e,t]of Object.entries(w))for(const n of t)n in IDBObjectStore.prototype&&(g.prototype[n]=async function(t,...s){return await this.l(n,t,e,...s)});const y={fetch:async({request:e,fetchOptions:n,event:s,plugins:r=[]})=>{if("string"==typeof e&&(e=new Request(e)),s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const o=i(r,"fetchDidFail"),a=o.length>0?e.clone():null;try{for(const t of r)if("requestWillFetch"in t){const n=t.requestWillFetch,r=e.clone();e=await n.call(t,{request:r,event:s})}}catch(e){throw new t("plugin-error-request-will-fetch",{thrownError:e})}const c=e.clone();try{let t;t="navigate"===e.mode?await fetch(e):await fetch(e,n);for(const e of r)"fetchDidSucceed"in e&&(t=await e.fetchDidSucceed.call(e,{event:s,request:c,response:t}));return t}catch(e){for(const t of o)await t.fetchDidFail.call(t,{error:e,event:s,originalRequest:a.clone(),request:c.clone()});throw e}}};function m(e){return new Promise((t=>setTimeout(t,e)))}var b=Object.freeze({__proto__:null,assert:null,cacheNames:o,cacheWrapper:h,canConstructReadableStream:function(){if(void 0===f)try{new ReadableStream({start(){}}),f=!0}catch(e){f=!1}return f},canConstructResponseFromBodyStream:d,dontWaitFor:function(e){e.then((()=>{}))},DBWrapper:g,Deferred:class{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}},deleteDatabase:async e=>{await new Promise(((t,n)=>{const s=indexedDB.deleteDatabase(e);s.onerror=()=>{n(s.error)},s.onblocked=()=>{n(new Error("Delete blocked"))},s.onsuccess=()=>{t()}}))},executeQuotaErrorCallbacks:a,fetchWrapper:y,getFriendlyURL:c,logger:null,resultingClientExists:async function(e){if(!e)return;let t=await self.clients.matchAll({type:"window"});const n=new Set(t.map((e=>e.id)));let s;const r=performance.now();for(;performance.now()-r<2e3&&(t=await self.clients.matchAll({type:"window"}),s=t.find((t=>e?t.id===e:!n.has(t.id))),!s);)await m(100);return s},timeout:m,WorkboxError:t});const x={get googleAnalytics(){return o.getGoogleAnalyticsName()},get precache(){return o.getPrecacheName()},get prefix(){return o.getPrefix()},get runtime(){return o.getRuntimeName()},get suffix(){return o.getSuffix()}};return e._private=b,e.cacheNames=x,e.clientsClaim=function(){self.addEventListener("activate",(()=>self.clients.claim()))},e.copyResponse=async function(e,t){const n=e.clone(),s={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=t?t(s):s,o=d()?n.body:await n.blob();return new Response(o,r)},e.registerQuotaErrorCallback=function(e){n.add(e)},e.setCacheNameDetails=function(e){o.updateDetails(e)},e.skipWaiting=function(){self.addEventListener("install",(()=>self.skipWaiting()))},e}({});