(()=>{const e={requestAPI:(e,t,r)=>{let a=5;!function s(){return new Promise(((o,i)=>{let n=0,l=setTimeout((()=>{0===n&&(n=2,l=null,i("请求超时"),0==a&&r())}),5e3);fetch(e).then((function(e){if(2!==n&&(clearTimeout(l),o(e),l=null,n=1),e.ok)return e.json();throw new Error("Network response was not ok.")})).then((function(e){a=0,t(e)})).catch((function(e){a>0?(a-=1,setTimeout((()=>{s()}),5e3)):r()}))}))}()},layout:function(e){const t=$(e.el)[0];$(t).append('<div class="loading-wrap"><svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" stroke-opacity=".3" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="1.3s" values="60;0"/></path><path stroke-dasharray="15" stroke-dashoffset="15" d="M12 3C16.9706 3 21 7.02944 21 12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0"/><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></g></svg></div>'),this.requestAPI(e.api,(function(r){$(t).find(".loading-wrap").remove();(r.content||r).forEach(((r,a)=>{var s='<div class="user-card">';s+='<a class="card-link" target="_blank" rel="external nofollow noopener noreferrer"',s+=' href="'+(r.html_url||r.url)+'">',s+='<img src="'+(r.avatar_url||r.avatar||e.avatar)+'" onerror="javascript:this.src=\''+e.avatar+"';\">",s+='<div class="name"><span>'+(r.title||r.login)+"</span></div>",s+="</a>",s+="</div>",$(t).find(".group-body").append(s)}))}),(function(){$(t).find(".loading-wrap svg").remove(),$(t).find(".loading-wrap").append('<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" d="M12 3L21 20H3L12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"/></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M12 10V14"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="6;0"/></path></g><circle cx="12" cy="17" r="1" fill="currentColor" fill-opacity="0"><animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.4s" values="0;1"/></circle></svg>'),$(t).find(".loading-wrap").addClass("error")}))},init:function(){const e=document.getElementsByClassName("stellar-friends-api");for(let t=0;t<e.length;t++){const r=e[t],a=r.getAttribute("api");null!=a&&this.layout({el:r,api:a,class:r.getAttribute("class"),avatar:stellar.root+"images/avatar.svg"})}}};stellaris.registerThemePlugin(".stellar-friends-api",e)})();