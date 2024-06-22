(function(c){"use strict";var e=window,g=e.document,h=encodeURIComponent,i=A("Object"),j=A("Number"),k=A("String"),m=A("Array"),n=A("Function"),o=A("RegExp");function q(t,e){return void 0!==t&&-1!==t.indexOf(e)}function v(t,e){for(var r=0,n=t.length;r<n;r++)if(t[r]==e)return r;return-1}function A(t){return function(e){return Object.prototype.toString.call(e)==="[object ".concat(t,"]")}}function D(){for(var t=0,e={};t<arguments.length;t++){var r=arguments[t];for(var n in r)e[n]=r[n]}return e}function I(t){return t.replace(/&/g,"~_~")}function K(t){var e="";for(var r in t)""!==e&&(e+="&"),e+=r+"="+h(h(I(String(t[r]))));return e}function O(t){return t.replace(/^\s+|\s+$/g,"")}function Q(){return+new Date}function R(t){var r=e.navigator.userAgent,n=new RegExp(/\b(?:Chrome|CrMo|CriOS)\/([\d.]+)/).exec(r);return!(n&&n.length&&n[1])||parseInt(n[1])>t}var V={root:e,doc:g,NFKivY:i,SkKBjD:j,qQXzeL:n,QauvcB:o,jPvmCm:k,pWExzw:m,xdaPuS:q,extend:D,NOwfJP:K,trim:O,now:Q,arrayIndexOf:v,checkChormeMoblie:R},W=function(){var t,e=a2("meta"),r=a2("title"),n={kw:"",ds:""};n.tt=V.trim(r.length?r[0].innerHTML:""),n.tt=n.tt.slice(0,1e3);for(var o=0;o<e.length;o++)e[o].name&&(t=e[o].name.toLowerCase(),V.xdaPuS("keywords",t)&&(n.kw=e[o].content),V.xdaPuS("description",t)&&(n.ds=e[o].content.slice(0,30)));return n}();function a2(t){return V.doc.getElementsByTagName(t.toLowerCase())}function a4(){var t="";try{t=V.root.top.document.referrer}catch(e){if(V.root.parent)try{t=V.root.parent.document.referrer}catch(e){t=""}}return""===t&&(t=V.doc.referrer),t}function a8(){var t,e=a2("meta"),r=a2("title"),n={kw:"",ds:""};n.tt=V.trim(r.length?r[0].innerHTML:""),n.tt=n.tt.slice(0,1e3);for(var o=0;o<e.length;o++)e[o].name&&(t=e[o].name.toLowerCase(),V.xdaPuS("keywords",t)&&(n.kw=e[o].content),V.xdaPuS("description",t)&&(n.ds=e[o].content.slice(0,30)));return n}var ae={ZNMTWj:W,jcSWhb:a4,getMeta1:a8},af=(ag=String.fromCharCode,ah={dMsN:function(t){return null==t?"":ah.RCWS(t,15,(function(t){return ag(t+32)}))+" "},QqPF:function(t){for(var e=ah.Isoq(t),r=new Uint8Array(2*e.length),n=0,o=e.length;n<o;n++){var i=e.charCodeAt(n);r[2*n]=i>>>8,r[2*n+1]=i%256}return r},zvqA:function(t){return null==t?"":ah.RCWS(t,6,(function(t){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$".charAt(t)}))},Isoq:function(t){return ah.RCWS(t,16,(function(t){return ag(t)}))},RCWS:function(t,e,r){if(null==t)return"";var n,o,i,a={},u={},c="",f="",s="",l=2,h=3,d=2,p=[],g=0,v=0;for(i=0;i<t.length;i+=1)if(c=t.charAt(i),Object.prototype.hasOwnProperty.call(a,c)||(a[c]=h++,u[c]=!0),f=s+c,Object.prototype.hasOwnProperty.call(a,f))s=f;else{if(Object.prototype.hasOwnProperty.call(u,s)){if(s.charCodeAt(0)<256){for(n=0;n<d;n++)g<<=1,v==e-1?(v=0,p.push(r(g)),g=0):v++;for(o=s.charCodeAt(0),n=0;n<8;n++)g=g<<1|1&o,v==e-1?(v=0,p.push(r(g)),g=0):v++,o>>=1}else{for(o=1,n=0;n<d;n++)g=g<<1|o,v==e-1?(v=0,p.push(r(g)),g=0):v++,o=0;for(o=s.charCodeAt(0),n=0;n<16;n++)g=g<<1|1&o,v==e-1?(v=0,p.push(r(g)),g=0):v++,o>>=1}0==--l&&(l=Math.pow(2,d),d++),delete u[s]}else for(o=a[s],n=0;n<d;n++)g=g<<1|1&o,v==e-1?(v=0,p.push(r(g)),g=0):v++,o>>=1;0==--l&&(l=Math.pow(2,d),d++),a[f]=h++,s=String(c)}if(""!==s){if(Object.prototype.hasOwnProperty.call(u,s)){if(s.charCodeAt(0)<256){for(n=0;n<d;n++)g<<=1,v==e-1?(v=0,p.push(r(g)),g=0):v++;for(o=s.charCodeAt(0),n=0;n<8;n++)g=g<<1|1&o,v==e-1?(v=0,p.push(r(g)),g=0):v++,o>>=1}else{for(o=1,n=0;n<d;n++)g=g<<1|o,v==e-1?(v=0,p.push(r(g)),g=0):v++,o=0;for(o=s.charCodeAt(0),n=0;n<16;n++)g=g<<1|1&o,v==e-1?(v=0,p.push(r(g)),g=0):v++,o>>=1}0==--l&&(l=Math.pow(2,d),d++),delete u[s]}else for(o=a[s],n=0;n<d;n++)g=g<<1|1&o,v==e-1?(v=0,p.push(r(g)),g=0):v++,o>>=1;0==--l&&(l=Math.pow(2,d),d++)}for(o=2,n=0;n<d;n++)g=g<<1|1&o,v==e-1?(v=0,p.push(r(g)),g=0):v++,o>>=1;for(;;){if(g<<=1,v==e-1){p.push(r(g));break}v++}return p.join("")}},ah),ag,ah;function aL(t){return(aL="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var aP={parse:function gw(aV){return eval("("+aV+")")},stringify:(aQ=Object.prototype.toString,aR=Object.prototype.hasOwnProperty,aS={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"},aT=function(t){return aS[t]||"\\u"+(t.charCodeAt(0)+65536).toString(16).substr(1)},aU=/[\\"\u0000-\u001F\u2028\u2029]/g,function t(e){if(null==e)return"null";if("number"==typeof e)return isFinite(e)?e.toString():"null";if("boolean"==typeof e)return e.toString();if("object"===aL(e)){if("function"==typeof e.toJSON)return t(e.toJSON());if(a=e,"[object Array]"===aQ.call(a)){for(var r="[",n=0;n<e.length;n++)r+=(n?", ":"")+t(e[n]);return r+"]"}if("[object Object]"===aQ.call(e)){var o=[];for(var i in e)aR.call(e,i)&&o.push(t(i)+": "+t(e[i]));return"{"+o.join(", ")+"}"}}var a;return'"'+e.toString().replace(aU,aT)+'"'})},aQ,aR,aS,aT,aU;function b3(){if("undefined"!=typeof Uint8Array&&null!==Uint8Array){var t=Uint8Array,e=Uint16Array,r=Uint32Array,n=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),o=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),i=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),a=function(t,n){for(var o=new e(31),i=0;i<31;++i)o[i]=n+=1<<t[i-1];var a=new r(o[30]);for(i=1;i<30;++i)for(var u=o[i];u<o[i+1];++u)a[u]=u-o[i]<<5|i;return[o,a]},u=a(n,2),c=u[0],f=u[1];c[28]=258,f[258]=28;for(var s=a(o,0),l=(s[0],s[1]),h=new e(32768),d=0;d<32768;++d){var p=(43690&d)>>>1|(21845&d)<<1;p=(61680&(p=(52428&p)>>>2|(13107&p)<<2))>>>4|(3855&p)<<4,h[d]=((65280&p)>>>8|(255&p)<<8)>>>1}var g=function(t,r,n){for(var o=t.length,i=0,a=new e(r);i<o;++i)++a[t[i]-1];var u,c=new e(r);for(i=0;i<r;++i)c[i]=c[i-1]+a[i-1]<<1;if(n){u=new e(1<<r);var f=15-r;for(i=0;i<o;++i)if(t[i])for(var s=i<<4|t[i],l=r-t[i],d=c[t[i]-1]++<<l,p=d|(1<<l)-1;d<=p;++d)u[h[d]>>>f]=s}else for(u=new e(o),i=0;i<o;++i)t[i]&&(u[i]=h[c[t[i]-1]++]>>>15-t[i]);return u},v=new t(288);for(d=0;d<144;++d)v[d]=8;for(d=144;d<256;++d)v[d]=9;for(d=256;d<280;++d)v[d]=7;for(d=280;d<288;++d)v[d]=8;var y=new t(32);for(d=0;d<32;++d)y[d]=5;var m=g(v,9,0),w=g(y,5,0),x=function(t){return(t/8|0)+(7&t&&1)},S=function(n,o,i){(null==o||o<0)&&(o=0),(null==i||i>n.length)&&(i=n.length);var a=new(n instanceof e?e:n instanceof r?r:t)(i-o);return a.set(n.subarray(o,i)),a},A=function(t,e,r){r<<=7&e;var n=e/8|0;t[n]|=r,t[n+1]|=r>>>8},b=function(t,e,r){r<<=7&e;var n=e/8|0;t[n]|=r,t[n+1]|=r>>>8,t[n+2]|=r>>>16},V=function(r,n){for(var o=[],i=0;i<r.length;++i)r[i]&&o.push({s:i,f:r[i]});var a=o.length,u=o.slice();if(!a)return[M,0];if(1==a){var c=new t(o[0].s+1);return c[o[0].s]=1,[c,1]}o.sort((function(t,e){return t.f-e.f})),o.push({s:-1,f:25001});var f=o[0],s=o[1],l=0,h=1,d=2;for(o[0]={s:-1,f:f.f+s.f,l:f,r:s};h!=a-1;)f=o[o[l].f<o[d].f?l++:d++],s=o[l!=h&&o[l].f<o[d].f?l++:d++],o[h++]={s:-1,f:f.f+s.f,l:f,r:s};var p=u[0].s;for(i=1;i<a;++i)u[i].s>p&&(p=u[i].s);var g=new e(p+1),v=O(o[h-1],g,0);if(v>n){i=0;var y=0,m=v-n,w=1<<m;for(u.sort((function(t,e){return g[e.s]-g[t.s]||t.f-e.f}));i<a;++i){var x=u[i].s;if(!(g[x]>n))break;y+=w-(1<<v-g[x]),g[x]=n}for(y>>>=m;y>0;){var S=u[i].s;g[S]<n?y-=1<<n-g[S]++-1:++i}for(;i>=0&&y;--i){var A=u[i].s;g[A]==n&&(--g[A],++y)}v=n}return[new t(g),v]},O=function t(e,r,n){return-1==e.s?Math.max(t(e.l,r,n+1),t(e.r,r,n+1)):r[e.s]=n},k=function(t){for(var r=t.length;r&&!t[--r];);for(var n=new e(++r),o=0,i=t[0],a=1,u=function(t){n[o++]=t},c=1;c<=r;++c)if(t[c]==i&&c!=r)++a;else{if(!i&&a>2){for(;a>138;a-=138)u(32754);a>2&&(u(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(u(i),--a;a>6;a-=6)u(8304);a>2&&(u(a-3<<5|8208),a=0)}for(;a--;)u(i);a=1,i=t[c]}return[n.subarray(0,o),r]},j=function(t,e){for(var r=0,n=0;n<e.length;++n)r+=t[n]*e[n];return r},_=function(t,e,r){var n=r.length,o=x(e+2);t[o]=255&n,t[o+1]=n>>>8,t[o+2]=255^t[o],t[o+3]=255^t[o+1];for(var i=0;i<n;++i)t[o+i+4]=r[i];return 8*(o+4+n)},C=function(t,r,a,u,c,f,s,l,h,d,p){A(r,p++,a),++c[256];for(var x=V(c,15),S=x[0],O=x[1],C=V(f,15),E=C[0],M=C[1],I=k(S),T=I[0],U=I[1],L=k(E),q=L[0],P=L[1],D=new e(19),N=0;N<T.length;++N)D[31&T[N]]++;for(N=0;N<q.length;++N)D[31&q[N]]++;for(var R=V(D,7),Q=R[0],B=R[1],W=19;W>4&&!Q[i[W-1]];--W);var K,F,X,z,H=d+5<<3,$=j(c,v)+j(f,y)+s,Y=j(c,S)+j(f,E)+s+14+3*W+j(D,Q)+(2*D[16]+3*D[17]+7*D[18]);if(H<=$&&H<=Y)return _(r,p,t.subarray(h,h+d));if(A(r,p,1+(Y<$)),p+=2,Y<$){K=g(S,O,0),F=S,X=g(E,M,0),z=E;var J=g(Q,B,0);for(A(r,p,U-257),A(r,p+5,P-1),A(r,p+10,W-4),p+=14,N=0;N<W;++N)A(r,p+3*N,Q[i[N]]);p+=3*W;for(var G=[T,q],Z=0;Z<2;++Z){var tt=G[Z];for(N=0;N<tt.length;++N){var et=31&tt[N];A(r,p,J[et]),p+=Q[et],et>15&&(A(r,p,tt[N]>>>5&127),p+=tt[N]>>>12)}}}else K=m,F=v,X=w,z=y;for(N=0;N<l;++N)if(u[N]>255){et=u[N]>>>18&31,b(r,p,K[et+257]),p+=F[et+257],et>7&&(A(r,p,u[N]>>>23&31),p+=n[et]);var rt=31&u[N];b(r,p,X[rt]),p+=z[rt],rt>3&&(b(r,p,u[N]>>>5&8191),p+=o[rt])}else b(r,p,K[u[N]]),p+=F[u[N]];return b(r,p,K[256]),p+F[256]},E=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),M=new t(0),I=function(){for(var t=new Int32Array(256),e=0;e<256;++e){for(var r=e,n=9;--n;)r=(1&r&&-306674912)^r>>>1;t[e]=r}return t}(),T=function(i,a,u,c,s){return function(i,a,u,c,s,h){var d=i.length,p=new t(c+d+5*(1+Math.ceil(d/7e3))+s),g=p.subarray(c,p.length-s),v=0;if(!a||d<8)for(var y=0;y<=d;y+=65535){var m=y+65535;m<d?v=_(g,v,i.subarray(y,m)):(g[y]=h,v=_(g,v,i.subarray(y,d)))}else{for(var w=E[a-1],A=w>>>13,b=8191&w,V=(1<<u)-1,O=new e(32768),k=new e(V+1),j=Math.ceil(u/3),I=2*j,T=function(t){return(i[t]^i[t+1]<<j^i[t+2]<<I)&V},U=new r(25e3),L=new e(288),q=new e(32),P=0,D=0,N=(y=0,0),R=0,Q=0;y<d;++y){var B=T(y),W=32767&y,K=k[B];if(O[W]=K,k[B]=W,R<=y){var F=d-y;if((P>7e3||N>24576)&&F>423){v=C(i,g,0,U,L,q,D,N,Q,y-Q,v),N=P=D=0,Q=y;for(var X=0;X<286;++X)L[X]=0;for(X=0;X<30;++X)q[X]=0}var z=2,H=0,$=b,Y=W-K&32767;if(F>2&&B==T(y-Y))for(var J=Math.min(A,F)-1,G=Math.min(32767,y),Z=Math.min(258,F);Y<=G&&--$&&W!=K;){if(i[y+z]==i[y+z-Y]){for(var tt=0;tt<Z&&i[y+tt]==i[y+tt-Y];++tt);if(tt>z){if(z=tt,H=Y,tt>J)break;var et=Math.min(Y,tt-2),rt=0;for(X=0;X<et;++X){var nt=y-Y+X+32768&32767,ot=nt-O[nt]+32768&32767;ot>rt&&(rt=ot,K=nt)}}}Y+=(W=K)-(K=O[W])+32768&32767}if(H){U[N++]=268435456|f[z]<<18|l[H];var it=31&f[z],at=31&l[H];D+=n[it]+o[at],++L[257+it],++q[at],R=y+z,++P}else U[N++]=i[y],++L[i[y]]}}v=C(i,g,h,U,L,q,D,N,Q,y-Q,v),!h&&7&v&&(v=_(g,v+1,M))}return S(p,0,c+x(v)+s)}(i,null==a.level?6:a.level,null==a.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(i.length)))):12+a.mem,u,c,!s)},U=function(t,e,r){for(;r;++e)t[e]=r,r>>>=8},L="undefined"!=typeof TextEncoder&&new TextEncoder,q="undefined"!=typeof TextDecoder&&new TextDecoder;try{q.decode(M,{stream:!0})}catch(t){}return{gzipSync:function(t,e){e||(e={});var r=function(){var t=-1;return{p:function(e){for(var r=t,n=0;n<e.length;++n)r=I[255&r^e[n]]^r>>>8;t=r},d:function(){return~t}}}(),n=t.length;r.p(t);var o=T(t,e,function(t){return 10+(t.filename&&t.filename.length+1||0)}(e),8),i=o.length;return function(t,e){var r=e.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=e.level<2?4:9==e.level?2:0,t[9]=3,0!=e.mtime&&U(t,4,Math.floor(new Date(e.mtime||Date.now())/1e3)),r){t[3]=8;for(var n=0;n<=r.length;++n)t[n+10]=r.charCodeAt(n)}}(o,e),U(o,i-8,r.d()),U(o,i-4,n),o},strToU8:function(e,r){if(r){for(var n=new t(e.length),o=0;o<e.length;++o)n[o]=e.charCodeAt(o);return n}if(L)return L.encode(e);var i=e.length,a=new t(e.length+(e.length>>1)),u=0,c=function(t){a[u++]=t};for(o=0;o<i;++o){if(u+5>a.length){var f=new t(u+8+(i-o<<1));f.set(a),a=f}var s=e.charCodeAt(o);s<128||r?c(s):s<2048?(c(192|s>>6),c(128|63&s)):s>55295&&s<57344?(c(240|(s=65536+(1047552&s)|1023&e.charCodeAt(++o))>>18),c(128|s>>12&63),c(128|s>>6&63),c(128|63&s)):(c(224|s>>12),c(128|s>>6&63),c(128|63&s))}return S(a,0,u)}}}return!1}var fd=b3();function fe(){var t,e,r,n;return n=V.root.navigator.userAgent,V.root.ActiveXObject&&(e=n.indexOf("MSIE "))>0?parseInt(n.substring(e+5,n.indexOf(".",e)),10):n.indexOf("Trident/")>0?(r=n.indexOf("rv:"),parseInt(n.substring(r+3,n.indexOf(".",r)),10)):(t=n.indexOf("Edge/"))>0&&parseInt(n.substring(t+5,n.indexOf(".",t)),10)}function fj(t,e,r){var n,o,i,a,u,c,f,s=[],l=[],h=0,d=fe()||NaN;function p(t,e){var r;return-1!==(r=function(t,e){var r,n;if(null!=Array.prototype.indexOf)return t.indexOf(e);for(n=t.length,r=-1;++r<n;)if(t[r]===e)return r;return-1}(l,t))&&l.splice(r,1),V.root.laWaitTime=(new Date).valueOf()+10,""!==e?h-=300:void 0}function g(t,e){return t.onload=null,t.onerror=null,t.onabort=null,p(t,e)}return(u=!!(a=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./))&&parseInt(a[2],10))&&22>u?c=!1:(c=!0,i=navigator.userAgent,"ArrayBufferView"in V.root||(-1!==i.indexOf("Android")?c=!1:-1!==i.indexOf("CPU OS ")?(-1!==i.indexOf("CPU OS 6_")||-1!==i.indexOf("CPU OS 5_")||-1!==i.indexOf("CPU OS 4_")||-1!==i.indexOf("CPU OS 3_"))&&(c=!1):-1!==i.indexOf("CPU iPhone OS ")?(-1!==i.indexOf("iPhone OS 6_")||-1!==i.indexOf("iPhone OS 5_")||-1!==i.indexOf("iPhone OS 4_"))&&(c=!1):-1!==i.indexOf("Intel Mac OS X")&&(-1!==i.indexOf("Mac OS X 10_6")||-1!==i.indexOf("Mac OS X 10_7"))&&(c=!1))),s=[],l=[],f="undefined"==typeof Uint8Array||null===Uint8Array?V.root.XMLHttpRequest&&7!==d?af.dMsN(aP.stringify(e)):af.zvqA(aP.stringify(e)):fd.gzipSync(fd.strToU8(aP.stringify(e)),{level:6,mem:8}),i=t+(t.indexOf("?")<0?"?":"&")+"dt=4",V.root.laWaitTime=(new Date).valueOf()+300,V.root.XMLHttpRequest&&7!==d?"withCredentials"in(n=new XMLHttpRequest)?(n.open("POST",i,!0),n.withCredentials=!0,n.onreadystatechange=function(){return 4===n.readyState&&(V.root.laWaitTime=(new Date).valueOf()+10)&&function(t){var e;return-1!==(e=s.indexOf(t))?s.splice(e,1):void 0}(n)&&200===n.status},n.send("undefined"!=typeof ArrayBuffer&&null!==ArrayBuffer?c?f:f.buffer:f),s.push(n)):"undefined"!=typeof XDomainRequest&&(n=new XDomainRequest,"http:"===document.location.protocol&&(i=t+(t.indexOf("?")<0?"?":"&")+"dt=1"),n.open("POST",i),n.onload=function(){return p(n,r)},n.onerror=function(t){return p(n,r)},n.onprogress=function(){return{}},n.ontimeout=function(){return{}},n.send(f),l.push(n)):("http:"===V.root.location.protocol&&(o=t.replace("https://","http://")+(t.indexOf("?")<0?"?":"&")+"dt=2&data=".concat(f)),o.length<=2036&&function(t,e){var r;return(r=document.createElement("img")).width=1,r.height=1,r.onload=function(){return g(r,e)},r.onerror=r.onabort=function(){return g(r,e)},r.src=t,l.push(r)}(o,r))}var fP={report:fj},fQ={get:function(t){return decodeURIComponent(V.doc.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(t).replace(/[-.+*]/g,"\\$&")+"\\s*\\=s*([^;]*).*$)|^.*$"),"$1"))||null},set:function(t,e,r,n,o,i){if(!t||/^(?:expires|max-age|path|domain|secure)$/i.test(t))return!1;var a="";if(r)switch(r.constructor){case Number:a=r===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+r;break;case String:a="; expires="+r;break;case Date:a="; expires="+r.toUTCString()}return V.doc.cookie=encodeURIComponent(t)+"="+encodeURIComponent(e)+a+(o?"; domain="+o:"")+(n?"; path="+n:"")+(i?"; secure":""),!0}},fR={get:function(t){return aP.parse((ae.isMobi?V.root.localStorage.getItem(t):fQ.get(t))||"{}")},set:function(t,e,r,n){return ae.isMobi?V.root.localStorage.setItem(t,e):fQ.set(t,e,r,n)}},fS={cookie:fQ,store:fR},fT=V.doc.addEventListener?function(t,e,r){t.addEventListener(e,r,!0)}:V.doc.attachEvent?function(t,e,r){t.attachEvent("on"+e,r)}:function(t,e,r){t["on"+e]=r};function gg(t,e,r){for(var n=e.split(" "),o=0,i=n.length;o<i;o++)fT(t,n[o],r)}var gn=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function go(t){return"string"==typeof t&&gn.test(t)}for(var gq=[],gr=0;gr<256;++gr)gq.push((gr+256).toString(16).substr(1));function gs(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(gq[t[e+0]]+gq[t[e+1]]+gq[t[e+2]]+gq[t[e+3]]+"-"+gq[t[e+4]]+gq[t[e+5]]+"-"+gq[t[e+6]]+gq[t[e+7]]+"-"+gq[t[e+8]]+gq[t[e+9]]+"-"+gq[t[e+10]]+gq[t[e+11]]+gq[t[e+12]]+gq[t[e+13]]+gq[t[e+14]]+gq[t[e+15]]).toLowerCase();if(!go(r))throw TypeError("Stringified UUID is invalid");return r}function gw(t){if(!go(t))throw TypeError("Invalid UUID");var e,r=new Uint8Array(16);return r[0]=(e=parseInt(t.slice(0,8),16))>>>24,r[1]=e>>>16&255,r[2]=e>>>8&255,r[3]=255&e,r[4]=(e=parseInt(t.slice(9,13),16))>>>8,r[5]=255&e,r[6]=(e=parseInt(t.slice(14,18),16))>>>8,r[7]=255&e,r[8]=(e=parseInt(t.slice(19,23),16))>>>8,r[9]=255&e,r[10]=(e=parseInt(t.slice(24,36),16))/1099511627776&255,r[11]=e/4294967296&255,r[12]=e>>>24&255,r[13]=e>>>16&255,r[14]=e>>>8&255,r[15]=255&e,r}function gA(t){t=unescape(encodeURIComponent(t));for(var e=[],r=0;r<t.length;++r)e.push(t.charCodeAt(r));return e}var gE="6ba7b810-9dad-11d1-80b4-00c04fd430c8",gF="6ba7b811-9dad-11d1-80b4-00c04fd430c8";function gG(t,e,r){function n(t,n,o,i){if("string"==typeof t&&(t=gA(t)),"string"==typeof n&&(n=gw(n)),16!==n.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var a=new Uint8Array(16+t.length);if(a.set(n),a.set(t,n.length),(a=r(a))[6]=15&a[6]|e,a[8]=63&a[8]|128,o){i=i||0;for(var u=0;u<16;++u)o[i+u]=a[u];return o}return gs(a)}try{n.name=t}catch(t){}return n.DNS=gE,n.URL=gF,n}function gS(t,e,r,n){switch(t){case 0:return e&r^~e&n;case 1:case 3:return e^r^n;case 2:return e&r^e&n^r&n}}function gX(t,e){return t<<e|t>>>32-e}function h0(t){var e=[1518500249,1859775393,2400959708,3395469782],r=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof t){var n=unescape(encodeURIComponent(t));t=[];for(var o=0;o<n.length;++o)t.push(n.charCodeAt(o))}else Array.isArray(t)||(t=Array.prototype.slice.call(t));t.push(128);for(var i=t.length/4+2,a=Math.ceil(i/16),u=new Array(a),c=0;c<a;++c){for(var f=new Uint32Array(16),s=0;s<16;++s)f[s]=t[64*c+4*s]<<24|t[64*c+4*s+1]<<16|t[64*c+4*s+2]<<8|t[64*c+4*s+3];u[c]=f}u[a-1][14]=8*(t.length-1)/Math.pow(2,32),u[a-1][14]=Math.floor(u[a-1][14]),u[a-1][15]=8*(t.length-1)&4294967295;for(var l=0;l<a;++l){for(var h=new Uint32Array(80),d=0;d<16;++d)h[d]=u[l][d];for(var p=16;p<80;++p)h[p]=gX(h[p-3]^h[p-8]^h[p-14]^h[p-16],1);for(var g=r[0],v=r[1],y=r[2],m=r[3],w=r[4],x=0;x<80;++x){var S=Math.floor(x/20),A=gX(g,5)+gS(S,v,y,m)+w+e[S]+h[x]>>>0;w=m,m=y,y=gX(v,30)>>>0,v=g,g=A}r[0]=r[0]+g>>>0,r[1]=r[1]+v>>>0,r[2]=r[2]+y>>>0,r[3]=r[3]+m>>>0,r[4]=r[4]+w>>>0}return[r[0]>>24&255,r[0]>>16&255,r[0]>>8&255,255&r[0],r[1]>>24&255,r[1]>>16&255,r[1]>>8&255,255&r[1],r[2]>>24&255,r[2]>>16&255,r[2]>>8&255,255&r[2],r[3]>>24&255,r[3]>>16&255,r[3]>>8&255,255&r[3],r[4]>>24&255,r[4]>>16&255,r[4]>>8&255,255&r[4]]}var ho=gG("v5",80,h0),hp=fS.store;function hq(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"===t?e:3&e|8).toString(16)})).toUpperCase()}function ht(){return"placeholder"in document.createElement("input")}function hu(){var t=navigator.userAgent;return!!(t.indexOf("compatible")>-1&&t.indexOf("MSIE")>-1)&&(new RegExp("MSIE (\\d+\\.\\d+);").test(t),parseFloat(RegExp.$1)<10||!ht()||void 0)}function hw(){return"undefined"==typeof Uint8Array||null===Uint8Array}function hx(t){var e=t.connection||t.mozConnection||t.webkitConnection||t.oConnection;return V.xdaPuS(t.userAgent,"mobile")&&e?e.type:"unknow"}function hA(t,e){var r=new Date(new Date(new Date(new Date((new Date).getTime()).setHours(0,0,0,0))).getTime()+864e5-1).getTime();return r-t<=18e5?r:t+e}function hE(t,e,r){var n,o=hA(t,e.SessionTimeout),i=e.ck;try{(n=hp.get("__vtins__"+i))&&V.SkKBjD(n.expires)&&n.expires<t&&(n=!1)}catch(t){n=!1}var a=n&&V.jPvmCm(n.sid)&&V.SkKBjD(n.expires)&&n.expires>t?0:1,u=a?1:n.vd+1,c=a?iE.xnFNCY()||iE.noUint8Array()?iE.KhuHSO():ho("\n    ".concat(i,"\n    ").concat(r.userAgent,"\n    ").concat(t,"\n    ").concat(Math.random().toString(36).substr(-8),"\n  "),iE.KhuHSO()):n.sid,f=o,s=V.SkKBjD(n.ct)&&parseInt(t)-parseInt(n.ct)>0?parseInt(t)-parseInt(n.ct):0,l=V.SkKBjD(n.stt)?parseInt(n.stt)+s:s;hp.set("__vtins__"+i,aP.stringify({sid:c,vd:u,stt:l,dr:s,expires:f,ct:t}),null,"/");var h=fS.cookie.get("__51uvsct__"+i);return!V.SkKBjD(parseInt(h))||isNaN(parseInt(h))?(fS.cookie.set("__51uvsct__"+i,1,1/0,"/"),h=1):0==s&&(h=parseInt(h)+1,fS.cookie.set("__51uvsct__"+i,h,1/0,"/")),[a,a?c:hp.get("__vtins__"+i).sid,u,l,s,h]}function hT(t){return t.language||t.browserLanguage}function hV(t){var e,r,n="";return e=V.root.history.pushState,r=V.root.history.replaceState,null!=e&&(V.root.history.pushState=function(r){return function(){return r.prevUrl=V.root.location.toString(),e.apply(V.root.history,arguments),setTimeout((function(){return t()}),0)}}(this)),null!=r&&(V.root.history.replaceState=function(){return n=V.root.location.toString(),r.apply(V.root.history,arguments),setTimeout((function(){return t()}),0)}),null!=e&&(n=ae.jcSWhb(),"function"==typeof Object.defineProperty&&Object.defineProperty(V.doc,"referrer",{get:function(){return n},configurable:!0}),gg(V.root,"popstate",t)),gg(V.root,"hashchange",t)}function i1(t){if(null==t)throw new TypeError("Cannot convert undefined or null to object");var e=[];for(var r in t)t.hasOwnProperty(r)&&e.push(r);return e}function i5(t){return"[object Array]"==Object.prototype.toString.call(t)}function i7(t,e){if(t.length&&i5(t)&&"function"==typeof e){for(var r=[],n=0;n<t.length;n++){var o=t[n];e(o,n,t)&&r.push(o)}return r}return[]}function ie(t,e){if(!V.NFKivY(t)||!V.NFKivY(e))throw new Error("params error");for(var r={},n=[],o=i7(i1(t),(function(r){if(V.arrayIndexOf(i1(e),r)>-1&&e[r]&&e[r](t[r]))return n.push(r),!0})),i=0;i<o.length;i++)r[n[i]]=t[n[i]];return r}function io(t){return new Date(t).toDateString()===(new Date).toDateString()||!(new Date(t)<new Date)&&void 0}function iq(){return!!navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)}function ir(t){var e="";if(!(t.indexOf("?")>-1))return null;var r={};if(-1!=(e="?".concat(t.split("?")[1])).indexOf("?"))for(var n=e.substr(1).split("&"),o=0;o<n.length;o++){var i=n[o].split("=")[0],a=unescape(n[o].split("=")[1]);r[i]="true"===a||"false"!==a&&a}return r}function iz(t,e){e=e||window.location.search;var r=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),n=e.substr(1).match(r);return null!=n?decodeURIComponent(n[2]):""}var iE={hJdYQm:hx,AczpQq:hE,hKJlvN:hT,DvIuqD:hV,YCrNdE:ie,ptHPZe:io,KhuHSO:hq,xnFNCY:hu,noUint8Array:hw,isMobile:iq,GetQueryString:ir,getQueryStringInURL:iz};function iF(t,e){var r=fS.cookie.get("__51vcke__"+t.ck),n=fS.cookie.get("__51vuft__"+t.ck);try{fS.store.get("__vtins__"+t.ck)}catch(t){}var o=V.now();return r?fS.cookie.set("__51vcke__"+t.ck,r,1/0,"/"):(r=e,fS.cookie.set("__51vcke__"+t.ck,e,1/0,"/")),n&&!isNaN(n)?(n=Number(n),fS.cookie.set("__51vuft__"+t.ck,n,1/0,"/")):(n=o,fS.cookie.set("__51vuft__"+t.ck,n,1/0,"/")),t.uid=r,t.uft=Number(n)||o,t}function iM(t,e){var r=!1,n=/sdk\.51\.la/.test(e),o=document.getElementById("LA_COLLECT");if(o)r=!iV(u=o.getAttribute("src"));else for(var i=document.getElementsByTagName("script"),a=0;a<=i.length-1;a++){var u;if(r=!0,(u=i[a].getAttribute("src")).indexOf("js-sdk-pro.min.js")>=0){r=!iV(u);break}}return r?!n&&/^http[s]?/.test(e)?"".concat(e.replace(/\/$/,""),"/js-sdk-event.min.js?u=").concat(t):!n&&/^\/\//.test(e)&&"//"!==e?"".concat("https:"===self.location.protocol?"https:":"http:").concat(e.replace(/\/$/,""),"/js-sdk-event.min.js?u=").concat(t):!n&&e?"/".concat(e.replace(/\/$/,"").replace(/^\//,""),"/js-sdk-event.min.js?u=").concat(t):"/js-sdk-event.min.js?u=".concat(t):("https:"===self.location.protocol?"https:":"http:")+"//sdk.51.la/event/js-sdk-event.min.js?u=".concat(t)}function iV(t){return!!t&&t.indexOf("sdk.51.la")>=0}function iX(t,e,r){var n=iM(t,e?decodeURIComponent(e):""),o=document.createElement("script");o.setAttribute("id","LA_CODELESS"),o.setAttribute("src",n),o.setAttribute("data-LA-ev",t),o.setAttribute("crossorigin","anonymous"),o.setAttribute("charset","UTF-8"),document.getElementsByTagName("head")[0].appendChild(o),o.readyState?o.onreadystatechange=function(){("complete"==o.readyState||"loaded"==o.readyState)&&r&&r()}:o.onload=function(){r&&r()}}function j3(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};"{}"===aP.stringify(t)?V.root.LA&&(t=V.root.LA.config?V.extend(t,V.root.LA.config):V.extend(t,V.root.LA._config)):V.root.LA.config=t;var e=iE.YCrNdE(t,{hashMode:function(t){return"boolean"==typeof t},SessionTimeout:function(t){return!!(V.SkKBjD(t)&&t>=18e5&&t<=72e5)},autoTrack:function(t){return"boolean"==typeof t},prefix:function(t){return"/"===t?"":t}}),r=V.root.location,n=V.extend({url:("https:"===r.protocol?"https:":"http:")+"//collect-v6.51.la/v6/collect",id:t.id,ck:t.ck||t.id,hashMode:!1,autoTrack:!1,SessionTimeout:18e5,prefix:""},e),o=V.now(),i=V.root.navigator,a=iE.AczpQq(o,n,i),u=V.root.screen,c=iE.xnFNCY()||iE.noUint8Array()?iE.KhuHSO():ho("\n    ".concat(n.id,"\n    ").concat(i.userAgent,"\n    ").concat(o,"\n    ").concat(ae.jcSWhb(),"\n    ").concat(u.width+"*"+u.height,"\n    ").concat(a[1],"\n    ").concat(iE.hJdYQm(i),"\n    ").concat(Math.random().toString(36).substr(-8),"\n  "),iE.KhuHSO()),f=r.href,s={id:n.id,rt:o,tt:ae.ZNMTWj.tt,kw:ae.ZNMTWj.kw,ds:ae.ZNMTWj.ds,sid:a[1],cu:r.href,pu:ae.jcSWhb(),rl:u.width+"*"+u.height,lang:iE.hKJlvN(i),ct:iE.hJdYQm(i),svd:a[2],ce:i.cookieEnabled?1:0,cd:u.colorDepth||u.pixelDepth,stt:a[3],dr:a[4],uvsc:a[5]},l=iF(V.extend(n,s),c);s.uid=l.uid,s.uft=l.uft;var h=iE.getQueryStringInURL("LA_RM_TK")||"",d=V.checkChormeMoblie(45);!h&&d&&fP.report(n.url,s,s.uid),n.autoTrack||!V.root.LA||V.root.LA.track||(V.root.LA.track=function(){V.root.console&&V.root.console.warn&&console.warn("自2022年5月1日起，51.LA事件分析功能将调整为默认不开启，如您需要继续使用，可查看配置教程进行开启->https://support.qq.com/products/400900/faqs/117264")}),n.hashMode&&iE.DvIuqD((function(){if(f!==V.root.location.href){f=V.root.location.href;var t=V.now(),e=iE.AczpQq(t,n,i),r=ae.getMeta1(),o=(s=V.extend(s,{id:n.id,pu:s.cu,rt:t,tt:r.tt,kw:r.kw,ds:r.ds,sid:e[1],svd:e[2],stt:e[3],dr:e[4],uvsc:e[5],cu:V.root.location.href})).uid=iF(V.extend(n,s),c);s.uid=o.uid,s.uft=o.uft,d&&fP.report(n.url,s,s.uid)}})),n.autoTrack&&d&&iX(s.id,n.prefix)}V.root.LA&&V.root.LA.config&&j3(),V.root.LA&&V.root.LA.ids&&V.pWExzw(V.root.LA.ids)&&V.root.LA.ids.length>0&&(V.root.LA._config=V.root.LA.ids.shift(),j3());try{var jq=V.doc.getElementById("LA_COLLECT");if(jq){var jr=jq&&jq.getAttribute("src")||"";if(jr){var js=iE.GetQueryString(jr);js&&j3(js)}}}catch(t){}c.init=j3})(this.LA=this.LA||{});