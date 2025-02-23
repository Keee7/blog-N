this.workbox=this.workbox||{},this.workbox.backgroundSync=function(e,t,r,s,n){"use strict";function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},a.apply(this,arguments)}const o=(e,t)=>t.some((t=>e instanceof t));let i,u;const c=new WeakMap,y=new WeakMap,d=new WeakMap,h=new WeakMap,l=new WeakMap;let m={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return y.get(e);if("objectStoreNames"===t)return e.objectStoreNames||d.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return q(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function g(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(u||(u=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(p(this),t),q(c.get(this))}:function(...t){return q(e.apply(p(this),t))}:function(t,...r){const s=e.call(p(this),t,...r);return d.set(s,t.sort?t.sort():[t]),q(s)}}function b(e){return"function"==typeof e?g(e):(e instanceof IDBTransaction&&function(e){if(y.has(e))return;const t=new Promise(((t,r)=>{const s=()=>{e.removeEventListener("complete",n),e.removeEventListener("error",a),e.removeEventListener("abort",a)},n=()=>{t(),s()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",n),e.addEventListener("error",a),e.addEventListener("abort",a)}));y.set(e,t)}(e),o(e,i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,m):e)}function q(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,r)=>{const s=()=>{e.removeEventListener("success",n),e.removeEventListener("error",a)},n=()=>{t(q(e.result)),s()},a=()=>{r(e.error),s()};e.addEventListener("success",n),e.addEventListener("error",a)}));return t.then((t=>{t instanceof IDBCursor&&c.set(t,e)})).catch((()=>{})),l.set(t,e),t}(e);if(h.has(e))return h.get(e);const t=b(e);return t!==e&&(h.set(e,t),l.set(t,e)),t}const p=e=>l.get(e);const f=["get","getKey","getAll","getAllKeys","count"],w=["put","add","delete","clear"],D=new Map;function N(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(D.get(t))return D.get(t);const r=t.replace(/FromIndex$/,""),s=t!==r,n=w.includes(r);if(!(r in(s?IDBIndex:IDBObjectStore).prototype)||!n&&!f.includes(r))return;const a=async function(e,...t){const a=this.transaction(e,n?"readwrite":"readonly");let o=a.store;return s&&(o=o.index(t.shift())),(await Promise.all([o[r](...t),n&&a.done]))[0]};return D.set(t,a),a}m=(e=>a({},e,{get:(t,r,s)=>N(t,r)||e.get(t,r,s),has:(t,r)=>!!N(t,r)||e.has(t,r)}))(m);try{self["workbox:background-sync:7.0.0"]&&_()}catch(e){}const E="requests",k="queueName";class v{constructor(){this._db=null}async addEntry(e){const t=(await this.getDb()).transaction(E,"readwrite",{durability:"relaxed"});await t.store.add(e),await t.done}async getFirstEntryId(){const e=await this.getDb(),t=await e.transaction(E).store.openCursor();return null==t?void 0:t.value.id}async getAllEntriesByQueueName(e){const t=await this.getDb(),r=await t.getAllFromIndex(E,k,IDBKeyRange.only(e));return r||new Array}async getEntryCountByQueueName(e){return(await this.getDb()).countFromIndex(E,k,IDBKeyRange.only(e))}async deleteEntry(e){const t=await this.getDb();await t.delete(E,e)}async getFirstEntryByQueueName(e){return await this.getEndEntryFromIndex(IDBKeyRange.only(e),"next")}async getLastEntryByQueueName(e){return await this.getEndEntryFromIndex(IDBKeyRange.only(e),"prev")}async getEndEntryFromIndex(e,t){const r=await this.getDb(),s=await r.transaction(E).store.index(k).openCursor(e,t);return null==s?void 0:s.value}async getDb(){return this._db||(this._db=await function(e,t,{blocked:r,upgrade:s,blocking:n,terminated:a}={}){const o=indexedDB.open(e,t),i=q(o);return s&&o.addEventListener("upgradeneeded",(e=>{s(q(o.result),e.oldVersion,e.newVersion,q(o.transaction))})),r&&o.addEventListener("blocked",(()=>r())),i.then((e=>{a&&e.addEventListener("close",(()=>a())),n&&e.addEventListener("versionchange",(()=>n()))})).catch((()=>{})),i}("workbox-background-sync",3,{upgrade:this._upgradeDb})),this._db}_upgradeDb(e,t){t>0&&t<3&&e.objectStoreNames.contains(E)&&e.deleteObjectStore(E);e.createObjectStore(E,{autoIncrement:!0,keyPath:"id"}).createIndex(k,k,{unique:!1})}}class S{constructor(e){this._queueName=e,this._queueDb=new v}async pushEntry(e){s.assert.isType(e,"object",{moduleName:"workbox-background-sync",className:"QueueStore",funcName:"pushEntry",paramName:"entry"}),s.assert.isType(e.requestData,"object",{moduleName:"workbox-background-sync",className:"QueueStore",funcName:"pushEntry",paramName:"entry.requestData"}),delete e.id,e.queueName=this._queueName,await this._queueDb.addEntry(e)}async unshiftEntry(e){s.assert.isType(e,"object",{moduleName:"workbox-background-sync",className:"QueueStore",funcName:"unshiftEntry",paramName:"entry"}),s.assert.isType(e.requestData,"object",{moduleName:"workbox-background-sync",className:"QueueStore",funcName:"unshiftEntry",paramName:"entry.requestData"});const t=await this._queueDb.getFirstEntryId();t?e.id=t-1:delete e.id,e.queueName=this._queueName,await this._queueDb.addEntry(e)}async popEntry(){return this._removeEntry(await this._queueDb.getLastEntryByQueueName(this._queueName))}async shiftEntry(){return this._removeEntry(await this._queueDb.getFirstEntryByQueueName(this._queueName))}async getAll(){return await this._queueDb.getAllEntriesByQueueName(this._queueName)}async size(){return await this._queueDb.getEntryCountByQueueName(this._queueName)}async deleteEntry(e){await this._queueDb.deleteEntry(e)}async _removeEntry(e){return e&&await this.deleteEntry(e.id),e}}const R=["method","referrer","referrerPolicy","mode","credentials","cache","redirect","integrity","keepalive"];class x{static async fromRequest(e){const t={url:e.url,headers:{}};"GET"!==e.method&&(t.body=await e.clone().arrayBuffer());for(const[r,s]of e.headers.entries())t.headers[r]=s;for(const r of R)void 0!==e[r]&&(t[r]=e[r]);return new x(t)}constructor(e){s.assert.isType(e,"object",{moduleName:"workbox-background-sync",className:"StorableRequest",funcName:"constructor",paramName:"requestData"}),s.assert.isType(e.url,"string",{moduleName:"workbox-background-sync",className:"StorableRequest",funcName:"constructor",paramName:"requestData.url"}),"navigate"===e.mode&&(e.mode="same-origin"),this._requestData=e}toObject(){const e=Object.assign({},this._requestData);return e.headers=Object.assign({},this._requestData.headers),e.body&&(e.body=e.body.slice(0)),e}toRequest(){return new Request(this._requestData.url,this._requestData)}clone(){return new x(this.toObject())}}const I="workbox-background-sync",B=new Set,j=e=>{const t={request:new x(e.requestData).toRequest(),timestamp:e.timestamp};return e.metadata&&(t.metadata=e.metadata),t};class L{constructor(e,{forceSyncFallback:r,onSync:s,maxRetentionTime:n}={}){if(this._syncInProgress=!1,this._requestsAddedDuringSync=!1,B.has(e))throw new t.WorkboxError("duplicate-queue-name",{name:e});B.add(e),this._name=e,this._onSync=s||this.replayRequests,this._maxRetentionTime=n||10080,this._forceSyncFallback=Boolean(r),this._queueStore=new S(this._name),this._addSyncListener()}get name(){return this._name}async pushRequest(e){s.assert.isType(e,"object",{moduleName:"workbox-background-sync",className:"Queue",funcName:"pushRequest",paramName:"entry"}),s.assert.isInstance(e.request,Request,{moduleName:"workbox-background-sync",className:"Queue",funcName:"pushRequest",paramName:"entry.request"}),await this._addRequest(e,"push")}async unshiftRequest(e){s.assert.isType(e,"object",{moduleName:"workbox-background-sync",className:"Queue",funcName:"unshiftRequest",paramName:"entry"}),s.assert.isInstance(e.request,Request,{moduleName:"workbox-background-sync",className:"Queue",funcName:"unshiftRequest",paramName:"entry.request"}),await this._addRequest(e,"unshift")}async popRequest(){return this._removeRequest("pop")}async shiftRequest(){return this._removeRequest("shift")}async getAll(){const e=await this._queueStore.getAll(),t=Date.now(),r=[];for(const s of e){const e=60*this._maxRetentionTime*1e3;t-s.timestamp>e?await this._queueStore.deleteEntry(s.id):r.push(j(s))}return r}async size(){return await this._queueStore.size()}async _addRequest({request:e,metadata:t,timestamp:s=Date.now()},a){const o={requestData:(await x.fromRequest(e.clone())).toObject(),timestamp:s};switch(t&&(o.metadata=t),a){case"push":await this._queueStore.pushEntry(o);break;case"unshift":await this._queueStore.unshiftEntry(o)}r.logger.log(`Request for '${n.getFriendlyURL(e.url)}' has been added to background sync queue '${this._name}'.`),this._syncInProgress?this._requestsAddedDuringSync=!0:await this.registerSync()}async _removeRequest(e){const t=Date.now();let r;switch(e){case"pop":r=await this._queueStore.popEntry();break;case"shift":r=await this._queueStore.shiftEntry()}if(r){const s=60*this._maxRetentionTime*1e3;return t-r.timestamp>s?this._removeRequest(e):j(r)}}async replayRequests(){let e;for(;e=await this.shiftRequest();)try{await fetch(e.request.clone()),r.logger.log(`Request for '${n.getFriendlyURL(e.request.url)}' has been replayed in queue '${this._name}'`)}catch(s){throw await this.unshiftRequest(e),r.logger.log(`Request for '${n.getFriendlyURL(e.request.url)}' failed to replay, putting it back in queue '${this._name}'`),new t.WorkboxError("queue-replay-failed",{name:this._name})}r.logger.log(`All requests in queue '${this.name}' have successfully replayed; the queue is now empty!`)}async registerSync(){if("sync"in self.registration&&!this._forceSyncFallback)try{await self.registration.sync.register(`${I}:${this._name}`)}catch(e){r.logger.warn(`Unable to register sync event for '${this._name}'.`,e)}}_addSyncListener(){"sync"in self.registration&&!this._forceSyncFallback?self.addEventListener("sync",(e=>{if(e.tag===`${I}:${this._name}`){r.logger.log(`Background sync for tag '${e.tag}' has been received`);const t=async()=>{let t;this._syncInProgress=!0;try{await this._onSync({queue:this})}catch(e){if(e instanceof Error)throw t=e,t}finally{!this._requestsAddedDuringSync||t&&!e.lastChance||await this.registerSync(),this._syncInProgress=!1,this._requestsAddedDuringSync=!1}};e.waitUntil(t())}})):(r.logger.log("Background sync replaying without background sync event"),this._onSync({queue:this}))}static get _queueNames(){return B}}return e.BackgroundSyncPlugin=class{constructor(e,t){this.fetchDidFail=async({request:e})=>{await this._queue.pushRequest({request:e})},this._queue=new L(e,t)}},e.Queue=L,e.QueueStore=S,e.StorableRequest=x,e}({},workbox.core._private,workbox.core._private,workbox.core._private,workbox.core._private);