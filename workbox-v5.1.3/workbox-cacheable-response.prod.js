this.workbox=this.workbox||{},this.workbox.cacheableResponse=function(s){"use strict";try{self["workbox:cacheable-response:5.1.3"]&&_()}catch(s){}class e{constructor(s={}){this.s=s.statuses,this.t=s.headers}isResponseCacheable(s){let e=!0;return this.s&&(e=this.s.includes(s.status)),this.t&&e&&(e=Object.keys(this.t).some((e=>s.headers.get(e)===this.t[e]))),e}}return s.CacheableResponse=e,s.CacheableResponsePlugin=class{constructor(s){this.cacheWillUpdate=async({response:s})=>this.i.isResponseCacheable(s)?s:null,this.i=new e(s)}},s}({});