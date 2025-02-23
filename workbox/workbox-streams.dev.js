this.workbox=this.workbox||{},this.workbox.streams=function(e,r,o,n,t,s){"use strict";try{self["workbox:streams:7.0.0"]&&_()}catch(e){}function a(e){r.assert.isArray(e,{moduleName:"workbox-streams",funcName:"concatenate",paramName:"sourcePromises"});const s=e.map((e=>Promise.resolve(e).then((e=>function(e){if(e instanceof Response){if(e.body)return e.body.getReader();throw new t.WorkboxError("opaque-streams-source",{type:e.type})}return e instanceof ReadableStream?e.getReader():new Response(e).body.getReader()}(e))))),a=new o.Deferred;let c=0;const l=[],i=new ReadableStream({pull(r){return s[c].then((e=>e instanceof ReadableStreamDefaultReader?e.read():void 0)).then((o=>{if(null==o?void 0:o.done){if(l.push(["Reached the end of source:",e[c]]),c++,c>=s.length){n.logger.groupCollapsed(`Concatenating ${s.length} sources.`);for(const e of l)Array.isArray(e)?n.logger.log(...e):n.logger.log(e);return n.logger.log("Finished reading all sources."),n.logger.groupEnd(),r.close(),void a.resolve()}return this.pull(r)}r.enqueue(null==o?void 0:o.value)})).catch((e=>{throw n.logger.error("An error occurred:",e),a.reject(e),e}))},cancel(){n.logger.warn("The ReadableStream was cancelled."),a.resolve()}});return{done:a.promise,stream:i}}function c(e={}){const r=new Headers(e);return r.has("content-type")||r.set("content-type","text/html"),r}function l(e,r){const{done:o,stream:n}=a(e),t=c(r);return{done:o,response:new Response(n,{headers:t})}}function i(){return s.canConstructReadableStream()}return e.concatenate=a,e.concatenateToResponse=l,e.isSupported=i,e.strategy=function(e,r){return async({event:o,request:t,url:s,params:a})=>{const u=e.map((e=>Promise.resolve(e({event:o,request:t,url:s,params:a}))));if(i()){const{done:e,response:n}=l(u,r);return o&&o.waitUntil(e),n}n.logger.log("The current browser doesn't support creating response streams. Falling back to non-streaming response instead.");const d=u.map((async e=>{const r=await e;return r instanceof Response?r.blob():new Response(r).blob()})),p=await Promise.all(d),g=c(r);return new Response(new Blob(p),{headers:g})}},e}({},workbox.core._private,workbox.core._private,workbox.core._private,workbox.core._private,workbox.core._private);