//!function(){"use strict";try{self["workbox:sw:7.1.0"]&&_()}catch(t){}const t={backgroundSync:"background-sync",broadcastUpdate:"broadcast-update",cacheableResponse:"cacheable-response",core:"core",expiration:"expiration",googleAnalytics:"offline-ga",navigationPreload:"navigation-preload",precaching:"precaching",rangeRequests:"range-requests",routing:"routing",strategies:"strategies",streams:"streams",recipes:"recipes"};self.workbox=new class{constructor(){return this.v={},this.Pt={debug:"localhost"===self.location.hostname,modulePathPrefix:null,modulePathCb:null},this.$t=this.Pt.debug?"dev":"prod",this.jt=!1,new Proxy(this,{get(e,s){if(e[s])return e[s];const o=t[s];return o&&e.loadModule(`workbox-${o}`),e[s]}})}setConfig(t={}){if(this.jt)throw new Error("Config must be set before accessing workbox.* modules");Object.assign(this.Pt,t),this.$t=this.Pt.debug?"dev":"prod"}loadModule(t){const e=this.St(t);try{importScripts(e),this.jt=!0}catch(s){throw console.error(`Unable to import module '${t}' from '${e}'.`),s}}St(t){if(this.Pt.modulePathCb)return this.Pt.modulePathCb(t,this.Pt.debug);let e=["https://storage.googleapis.com/workbox-cdn/releases/7.1.0"];const s=`${t}.${this.$t}.js`,o=this.Pt.modulePathPrefix;return o&&(e=o.split("/"),""===e[e.length-1]&&e.splice(e.length-1,1)),e.push(s),e.join("/")}}}();
!function(){"use strict";try{self["workbox:sw:7.1.0"]&&_()}catch(e){}const e={backgroundSync:"background-sync",broadcastUpdate:"broadcast-update",cacheableResponse:"cacheable-response",core:"core",expiration:"expiration",googleAnalytics:"offline-ga",navigationPreload:"navigation-preload",precaching:"precaching",rangeRequests:"range-requests",routing:"routing",strategies:"strategies",streams:"streams"};self.workbox=new class{constructor(){return this.v={},this.t={debug:"localhost"===self.location.hostname,modulePathPrefix:null,modulePathCb:null},this.s=this.t.debug?"dev":"prod",this.o=!1,new Proxy(this,{get(o,t){if(o[t])return o[t];const s=e[t];return s&&o.loadModule(`workbox-${s}`),o[t]}})}setConfig(e={}){if(this.o)throw new Error("Config must be set before accessing workbox.* modules");Object.assign(this.t,e),this.s=this.t.debug?"dev":"prod"}loadModule(e){const o=this.i(e);try{importScripts(o),this.o=!0}catch(t){throw console.error(`Unable to import module '${e}' from '${o}'.`),t}}i(e){if(this.t.modulePathCb)return this.t.modulePathCb(e,this.t.debug);let o=["https://storage.googleapis.com/workbox-cdn/releases/5.1.3"];const t=`${e}.${this.s}.js`,s=this.t.modulePathPrefix;return s&&(o=s.split("/"),""===o[o.length-1]&&o.splice(o.length-1,1)),o.push(t),o.join("/")}}}(),workbox.setConfig({modulePathPrefix:"https://cdn.jsdmirror.com/gh/renbaoshuo/workbox-cdn/dist"}),workbox.core.setCacheNameDetails({prefix:"Keee-blog"}),workbox.navigationPreload.enable(),self.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/https:\/\/cdn\.(bootcdn\.net|jsdelivr\.net|jsdmirror\.com)|https:\/\/(jsd\.onmicrosoft\.cn|s4\.zstatic\.net)/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:30,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})],fetchOptions:{mode:"cors",credentials:"omit"}})),workbox.routing.registerRoute(/.*.(?:svg|ico|js|css)/,new workbox.strategies.StaleWhileRevalidate({cacheName:"local",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:30,maxAgeSeconds:259200}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})],fetchOptions:{mode:"cors",credentials:"omit"}})),workbox.routing.registerRoute(/.*.(?:woff2|ttf|woff)/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})],fetchOptions:{mode:"cors",credentials:"omit"}})),workbox.routing.setDefaultHandler(new workbox.strategies.NetworkFirst({networkTimeoutSeconds:.5,cacheName:"working",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:30,maxAgeSeconds:259200}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[1,200]})]}));