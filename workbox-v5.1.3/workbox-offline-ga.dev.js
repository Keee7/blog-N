this.workbox=this.workbox||{},this.workbox.googleAnalytics=function(e,t,o,r,a,n,s,i,c){"use strict";try{self["workbox:google-analytics:5.1.3"]&&_()}catch(e){}const l="www.google-analytics.com",u="www.googletagmanager.com",w=/^\/(\w+\/)?collect/,g=e=>{const t=({url:e})=>e.hostname===l&&w.test(e.pathname),o=new c.NetworkOnly({plugins:[e]});return[new n.Route(t,o,"GET"),new n.Route(t,o,"POST")]},h=e=>{const t=new i.NetworkFirst({cacheName:e});return new n.Route((({url:e})=>e.hostname===l&&"/analytics.js"===e.pathname),t,"GET")},m=e=>{const t=new i.NetworkFirst({cacheName:e});return new n.Route((({url:e})=>e.hostname===u&&"/gtag/js"===e.pathname),t,"GET")},y=e=>{const t=new i.NetworkFirst({cacheName:e});return new n.Route((({url:e})=>e.hostname===u&&"/gtm.js"===e.pathname),t,"GET")};return e.initialize=(e={})=>{const n=o.cacheNames.getGoogleAnalyticsName(e.cacheName),i=new t.BackgroundSyncPlugin("workbox-google-analytics",{maxRetentionTime:2880,onSync:(c=e,async({queue:e})=>{let t;for(;t=await e.shiftRequest();){const{request:o,timestamp:n}=t,s=new URL(o.url);try{const e="POST"===o.method?new URLSearchParams(await o.clone().text()):s.searchParams,t=n-(Number(e.get("qt"))||0),i=Date.now()-t;if(e.set("qt",String(i)),c.parameterOverrides)for(const t of Object.keys(c.parameterOverrides)){const o=c.parameterOverrides[t];e.set(t,o)}"function"==typeof c.hitFilter&&c.hitFilter.call(null,e),await fetch(new Request(s.origin+s.pathname,{body:e.toString(),method:"POST",mode:"cors",credentials:"omit",headers:{"Content-Type":"text/plain"}})),a.logger.log(`Request for '${r.getFriendlyURL(s.href)}'has been replayed`)}catch(o){throw await e.unshiftRequest(t),a.logger.log(`Request for '${r.getFriendlyURL(s.href)}'failed to replay, putting it back in the queue.`),o}}a.logger.log("All Google Analytics request successfully replayed; the queue is now empty!")})});var c;const l=[y(n),h(n),m(n),...g(i)],u=new s.Router;for(const e of l)u.registerRoute(e);u.addFetchListener()},e}({},workbox.backgroundSync,workbox.core._private,workbox.core._private,workbox.core._private,workbox.routing,workbox.routing,workbox.strategies,workbox.strategies);