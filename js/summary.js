function load_summary(){let e,t="https://qwen.keee.top",o=document.getElementById("markd-content"),n=document.getElementById("post-ai-result-text"),r=document.getElementById("result-loading"),a=document.getElementById("ai-logo"),c=(document.getElementsByClassName("article-title"),new URL(location.href).pathname.split("/").filter((e=>""!==e)).pop()),s=o.textContent,l=t.endsWith("/")?`${t}api/summary`:`${t}/api/summary`,d={postId:c,content:s};(()=>{let e=document.createElement("span");e.className="ai-cursor",n.appendChild(e)})();let m,i=!1,u=(t,o)=>{if(r&&r.remove(),a.classList.add("typing"),t<o.length){document.querySelector(".ai-cursor").insertAdjacentText("beforebegin",o.charAt(t)),t++,e=setTimeout((()=>u(t,o)),20)}else a.classList.remove("typing"),document.querySelector(".ai-cursor")?.remove(),i=!1},h=t=>{let o=t;i=!0,clearTimeout(e),u(0,o)};fetch(`${l}?postId=${c}`,{method:"GET"}).then((e=>e.json())).then((e=>{e.isSave?(m=e.data,h(e.data)):fetch(l,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)}).then((e=>e.json())).then((e=>{1===e.code?(m=e.data,h(e.data)):console.error("Error:",e)})).catch((e=>{n.textContent=`${e}`,console.error("Fetch error:",e)}))})).catch((e=>{n.textContent=`${e}`,console.error("Fetch error:",e)}))}