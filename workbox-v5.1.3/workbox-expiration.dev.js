this.workbox=this.workbox||{},this.workbox.expiration=function(e,t,a,r,s,i,n,o,c,m){"use strict";try{self["workbox:expiration:5.1.3"]&&_()}catch(e){}const h="cache-entries",u=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class p{constructor(e){this._cacheName=e,this._db=new i.DBWrapper("workbox-expiration",1,{onupgradeneeded:e=>this._handleUpgrade(e)})}_handleUpgrade(e){const t=e.target.result.createObjectStore(h,{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1}),n.deleteDatabase(this._cacheName)}async setTimestamp(e,t){const a={url:e=u(e),timestamp:t,cacheName:this._cacheName,id:this._getId(e)};await this._db.put(h,a)}async getTimestamp(e){return(await this._db.get(h,this._getId(e))).timestamp}async expireEntries(e,t){const a=await this._db.transaction(h,"readwrite",((a,r)=>{const s=a.objectStore(h).index("timestamp").openCursor(null,"prev"),i=[];let n=0;s.onsuccess=()=>{const a=s.result;if(a){const r=a.value;r.cacheName===this._cacheName&&(e&&r.timestamp<e||t&&n>=t?i.push(a.value):n++),a.continue()}else r(i)}})),r=[];for(const e of a)await this._db.delete(h,e.id),r.push(e.url);return r}_getId(e){return this._cacheName+"|"+u(e)}}class d{constructor(e,a={}){if(this._isRunning=!1,this._rerunRequested=!1,t.assert.isType(e,"string",{moduleName:"workbox-expiration",className:"CacheExpiration",funcName:"constructor",paramName:"cacheName"}),!a.maxEntries&&!a.maxAgeSeconds)throw new s.WorkboxError("max-entries-or-age-required",{moduleName:"workbox-expiration",className:"CacheExpiration",funcName:"constructor"});a.maxEntries&&t.assert.isType(a.maxEntries,"number",{moduleName:"workbox-expiration",className:"CacheExpiration",funcName:"constructor",paramName:"config.maxEntries"}),a.maxAgeSeconds&&t.assert.isType(a.maxAgeSeconds,"number",{moduleName:"workbox-expiration",className:"CacheExpiration",funcName:"constructor",paramName:"config.maxAgeSeconds"}),this._maxEntries=a.maxEntries,this._maxAgeSeconds=a.maxAgeSeconds,this._cacheName=e,this._timestampModel=new p(e)}async expireEntries(){if(this._isRunning)return void(this._rerunRequested=!0);this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),s=await self.caches.open(this._cacheName);for(const e of t)await s.delete(e);t.length>0?(r.logger.groupCollapsed(`Expired ${t.length} `+(1===t.length?"entry":"entries")+" and removed "+(1===t.length?"it":"them")+" from the "+`'${this._cacheName}' cache.`),r.logger.log(`Expired the following ${1===t.length?"URL":"URLs"}:`),t.forEach((e=>r.logger.log(`    ${e}`))),r.logger.groupEnd()):r.logger.debug("Cache expiration ran and found no entries to remove."),this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,a.dontWaitFor(this.expireEntries()))}async updateTimestamp(e){t.assert.isType(e,"string",{moduleName:"workbox-expiration",className:"CacheExpiration",funcName:"updateTimestamp",paramName:"url"}),await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(this._maxAgeSeconds){return await this._timestampModel.getTimestamp(e)<Date.now()-1e3*this._maxAgeSeconds}throw new s.WorkboxError("expired-test-without-max-age",{methodName:"isURLExpired",paramName:"maxAgeSeconds"})}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}return e.CacheExpiration=d,e.ExpirationPlugin=class{constructor(e={}){if(this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:s,cachedResponse:i})=>{if(!i)return null;const n=this._isResponseDateFresh(i),o=this._getCacheExpiration(s);a.dontWaitFor(o.expireEntries());const m=o.updateTimestamp(t.url);if(e)try{e.waitUntil(m)}catch(t){"request"in e&&r.logger.warn(`Unable to ensure service worker stays alive when updating cache entry for '${c.getFriendlyURL(e.request.url)}'.`)}return n?i:null},this.cacheDidUpdate=async({cacheName:e,request:a})=>{t.assert.isType(e,"string",{moduleName:"workbox-expiration",className:"Plugin",funcName:"cacheDidUpdate",paramName:"cacheName"}),t.assert.isInstance(a,Request,{moduleName:"workbox-expiration",className:"Plugin",funcName:"cacheDidUpdate",paramName:"request"});const r=this._getCacheExpiration(e);await r.updateTimestamp(a.url),await r.expireEntries()},!e.maxEntries&&!e.maxAgeSeconds)throw new s.WorkboxError("max-entries-or-age-required",{moduleName:"workbox-expiration",className:"Plugin",funcName:"constructor"});e.maxEntries&&t.assert.isType(e.maxEntries,"number",{moduleName:"workbox-expiration",className:"Plugin",funcName:"constructor",paramName:"config.maxEntries"}),e.maxAgeSeconds&&t.assert.isType(e.maxAgeSeconds,"number",{moduleName:"workbox-expiration",className:"Plugin",funcName:"constructor",paramName:"config.maxAgeSeconds"}),this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&m.registerQuotaErrorCallback((()=>this.deleteCacheAndMetadata()))}_getCacheExpiration(e){if(e===o.cacheNames.getRuntimeName())throw new s.WorkboxError("expire-custom-caches-only");let t=this._cacheExpirations.get(e);return t||(t=new d(e,this._config),this._cacheExpirations.set(e,t)),t}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);if(null===t)return!0;return t>=Date.now()-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),a=new Date(t).getTime();return isNaN(a)?null:a}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}},e}({},workbox.core._private,workbox.core._private,workbox.core._private,workbox.core._private,workbox.core._private,workbox.core._private,workbox.core._private,workbox.core._private,workbox.core);