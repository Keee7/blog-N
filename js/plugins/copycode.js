(()=>{const e={copyCode:async function(e,t){if(navigator.clipboard)try{await navigator.clipboard.writeText(t)}catch(t){e.innerText="未获得用户许可",e.classList.add("warning"),setTimeout((()=>{e.innerText=stellar.plugins.copycode.default_text,e.classList.remove("warning")}),3e3)}else e.innerText="当前浏览器不支持此API",e.classList.add("warning"),setTimeout((()=>{e.innerText=stellar.plugins.copycode.default_text,e.classList.remove("warning")}),3e3)},init:function(){document.querySelectorAll(".code").forEach((t=>{const s=window.getComputedStyle(t,"::before"),n=s.width.split("px")[0],i=s.padding.split(" ").pop().split("px")[0],c=document.createElement("div");c.classList.add("copy-btn"),c.style.right=Number(n)+2*Number(i)+"px",c.innerText=stellar.plugins.copycode.default_text,t.appendChild(c),c.addEventListener("click",(async function(t){const s=t.target;await e.copyCode(s,s.parentElement.children[0]?.innerText),s.innerText=stellar.plugins.copycode.success_text,s.classList.add("success"),setTimeout((()=>{s.innerText=stellar.plugins.copycode.default_text,s.classList.remove("success")}),3e3)}))}))}};stellaris.registerThemePlugin(".code",e)})();