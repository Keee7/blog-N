this.workbox=this.workbox||{},this.workbox.expiration=function(e,t,n,r,s){"use strict";function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}const a=(e,t)=>t.some((t=>e instanceof t));let o,c;const h=new WeakMap,u=new WeakMap,d=new WeakMap,l=new WeakMap,p=new WeakMap;let m={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return u.get(e);if("objectStoreNames"===t)return e.objectStoreNames||d.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return w(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function f(e){return"function"==typeof e?function(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(b(this),t),w(h.get(this))}:function(...t){return w(e.apply(b(this),t))}:function(t,...n){const r=e.call(b(this),t,...n);return d.set(r,t.sort?t.sort():[t]),w(r)}}(e):(e instanceof IDBTransaction&&function(e){if(u.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",i),e.removeEventListener("abort",i)},s=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",s),e.addEventListener("error",i),e.addEventListener("abort",i)}));u.set(e,t)}(e),a(e,o||(o=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,m):e)}function w(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",s),e.removeEventListener("error",i)},s=()=>{t(w(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",s),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),p.set(t,e),t}(e);if(l.has(e))return l.get(e);const t=f(e);return t!==e&&(l.set(e,t),p.set(t,e)),t}const b=e=>p.get(e),g=["get","getKey","getAll","getAllKeys","count"],x=["put","add","delete","clear"],v=new Map;function y(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(v.get(t))return v.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=x.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!g.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,s?"readwrite":"readonly");let a=i.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),s&&i.done]))[0]};return v.set(t,i),i}m=(e=>i({},e,{get:(t,n,r)=>y(t,n)||e.get(t,n,r),has:(t,n)=>!!y(t,n)||e.has(t,n)}))(m);try{self["workbox:expiration:7.0.0"]&&_()}catch(e){}const D="cache-entries",E=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class I{constructor(e){this.t=null,this.M=e}i(e){const t=e.createObjectStore(D,{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1})}N(e){this.i(e),this.M&&function(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);t&&n.addEventListener("blocked",(()=>t())),w(n).then((()=>{}))}(this.M)}async setTimestamp(e,t){const n={url:e=E(e),timestamp:t,cacheName:this.M,id:this.T(e)},r=(await this.getDb()).transaction(D,"readwrite",{durability:"relaxed"});await r.store.put(n),await r.done}async getTimestamp(e){const t=await this.getDb(),n=await t.get(D,this.T(e));return null==n?void 0:n.timestamp}async expireEntries(e,t){const n=await this.getDb();let r=await n.transaction(D).store.index("timestamp").openCursor(null,"prev");const s=[];let i=0;for(;r;){const n=r.value;n.cacheName===this.M&&(e&&n.timestamp<e||t&&i>=t?s.push(r.value):i++),r=await r.continue()}const a=[];for(const e of s)await n.delete(D,e.id),a.push(e.url);return a}T(e){return this.M+"|"+E(e)}async getDb(){return this.t||(this.t=await function(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(e,t),o=w(a);return r&&a.addEventListener("upgradeneeded",(e=>{r(w(a.result),e.oldVersion,e.newVersion,w(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),o.then((e=>{i&&e.addEventListener("close",(()=>i())),s&&e.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),o}("workbox-expiration",1,{upgrade:this.N.bind(this)})),this.t}}class k{constructor(e,t={}){this.P=!1,this.W=!1,this.S=t.maxEntries,this.K=t.maxAgeSeconds,this.L=t.matchOptions,this.M=e,this.$=new I(e)}async expireEntries(){if(this.P)return void(this.W=!0);this.P=!0;const e=this.K?Date.now()-1e3*this.K:0,n=await this.$.expireEntries(e,this.S),r=await self.caches.open(this.M);for(const e of n)await r.delete(e,this.L);this.P=!1,this.W&&(this.W=!1,t.dontWaitFor(this.expireEntries()))}async updateTimestamp(e){await this.$.setTimestamp(e,Date.now())}async isURLExpired(e){if(this.K){const t=await this.$.getTimestamp(e),n=Date.now()-1e3*this.K;return void 0===t||t<n}return!1}async delete(){this.W=!1,await this.$.expireEntries(1/0)}}return e.CacheExpiration=k,e.ExpirationPlugin=class{constructor(e={}){this.cachedResponseWillBeUsed=async({event:e,request:n,cacheName:r,cachedResponse:s})=>{if(!s)return null;const i=this.J(s),a=this.V(r);t.dontWaitFor(a.expireEntries());const o=a.updateTimestamp(n.url);if(e)try{e.waitUntil(o)}catch(e){}return i?s:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const n=this.V(e);await n.updateTimestamp(t.url),await n.expireEntries()},this.X=e,this.K=e.maxAgeSeconds,this.Y=new Map,e.purgeOnQuotaError&&r.registerQuotaErrorCallback((()=>this.deleteCacheAndMetadata()))}V(e){if(e===n.cacheNames.getRuntimeName())throw new s.WorkboxError("expire-custom-caches-only");let t=this.Y.get(e);return t||(t=new k(e,this.X),this.Y.set(e,t)),t}J(e){if(!this.K)return!0;const t=this.Z(e);return null===t||t>=Date.now()-1e3*this.K}Z(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),n=new Date(t).getTime();return isNaN(n)?null:n}async deleteCacheAndMetadata(){for(const[e,t]of this.Y)await self.caches.delete(e),await t.delete();this.Y=new Map}},e}({},workbox.core._private,workbox.core._private,workbox.core,workbox.core._private);