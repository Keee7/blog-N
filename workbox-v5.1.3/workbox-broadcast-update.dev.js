this.workbox=this.workbox||{},this.workbox.broadcastUpdate=function(e,a,t,s,o,r,n){"use strict";try{self["workbox:broadcast-update:5.1.3"]&&_()}catch(e){}const d=(e,a,t)=>{if(!(e instanceof Response&&a instanceof Response))throw new r.WorkboxError("invalid-responses-are-same-args");return t.some((t=>e.headers.has(t)&&a.headers.has(t)))?t.every((t=>{const s=e.headers.has(t)===a.headers.has(t),o=e.headers.get(t)===a.headers.get(t);return s&&o})):(o.logger.warn("Unable to determine where the response has been updated because none of the headers that would be checked are present."),o.logger.debug("Attempting to compare the following: ",e,a,t),!0)},c=["content-length","etag","last-modified"],i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);function h(e){return{cacheName:e.cacheName,updatedURL:e.request.url}}class p{constructor({headersToCheck:e,generatePayload:a}={}){this._headersToCheck=e||c,this._generatePayload=a||h}async notifyIfUpdated(e){if(a.assert.isType(e.cacheName,"string",{moduleName:"workbox-broadcast-update",className:"BroadcastCacheUpdate",funcName:"notifyIfUpdated",paramName:"cacheName"}),a.assert.isInstance(e.newResponse,Response,{moduleName:"workbox-broadcast-update",className:"BroadcastCacheUpdate",funcName:"notifyIfUpdated",paramName:"newResponse"}),a.assert.isInstance(e.request,Request,{moduleName:"workbox-broadcast-update",className:"BroadcastCacheUpdate",funcName:"notifyIfUpdated",paramName:"request"}),e.oldResponse&&!d(e.oldResponse,e.newResponse,this._headersToCheck)){o.logger.log("Newer response found (and cached) for:",e.request.url);const a={type:"CACHE_UPDATED",meta:"workbox-broadcast-update",payload:this._generatePayload(e)};if("navigate"===e.request.mode){let a;e.event instanceof FetchEvent&&(a=e.event.resultingClientId);await s.resultingClientExists(a)&&!i||await t.timeout(3500)}const r=await self.clients.matchAll({type:"window"});for(const e of r)e.postMessage(a)}}}return e.BroadcastCacheUpdate=p,e.BroadcastUpdatePlugin=class{constructor(e){this.cacheDidUpdate=async e=>{n.dontWaitFor(this._broadcastUpdate.notifyIfUpdated(e))},this._broadcastUpdate=new p(e)}},e.responsesAreSame=d,e}({},workbox.core._private,workbox.core._private,workbox.core._private,workbox.core._private,workbox.core._private,workbox.core._private);