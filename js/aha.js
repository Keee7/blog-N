function browserTC(){iziToast.warning({title:"检测到您的浏览器版本过低",message:"这可能会导致网站样式错乱",timeout:5e3,position:"topRight"})}function browserVersion(){var e=navigator.userAgent,i=e.indexOf("compatible")>-1&&e.indexOf("MSIE")>-1,o=(e.indexOf("Trident")>-1&&e.indexOf("rv:11.0"),e.indexOf("Edge")>-1&&!i),t=e.indexOf("Firefox")>-1,n=e.indexOf("Opera")>-1||e.indexOf("OPR")>-1,r=e.indexOf("Chrome")>-1&&e.indexOf("Safari")>-1&&-1==e.indexOf("Edge")&&-1==e.indexOf("OPR");e.indexOf("Safari")>-1&&-1==e.indexOf("Chrome")&&-1==e.indexOf("Edge")&&e.indexOf("OPR");o?e.split("Edge/")[1].split(".")[0]<90&&browserTC():t?e.split("Firefox/")[1].split(".")[0]<90&&browserTC():n?e.split("OPR/")[1].split(".")[0]<80&&browserTC():r&&e.split("Chrome/")[1].split(".")[0]<90&&browserTC()}function setCookies(e,i){let o=new Date((new Date).getTime()+24*i*60*60*1e3).toGMTString();for(let i in e)document.cookie=i+"="+e[i]+";expires="+o}function getCookie(e){var i,o=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(i=document.cookie.match(o))?unescape(i[2]):null}if(function(){"use strict";document.onkeydown=function(e){123==(e=e||window.event).keyCode&&iziToast.info({title:"已开启开发者模式",message:"请遵守MIT协议",timeout:2e3,backgroundColor:"#e5f7ff",icon:"Fontawesome",icon:"far fa-copyright",position:"topRight"})}}(),document.body.oncopy=function(){iziToast.info({timeout:2e3,icon:"Fontawesome",closeOnEscape:"true",transitionIn:"bounceInLeft",transitionOut:"fadeOutRight",layout:"2",position:"topRight",icon:"far fa-copy",backgroundColor:"#e5f7ff",title:"复制成功",message:"请遵守 CC BY-NC-SA 4.0 协议"})},1!=getCookie("browsertc")&&(setCookies({browsertc:1},1),browserVersion()),now=new Date,hour=now.getHours(),hour<6)var hello="凌晨好";else if(hour<9)hello="早上好";else if(hour<12)hello="上午好";else if(hour<14)hello="中午好";else if(hour<17)hello="下午好";else if(hour<19)hello="傍晚好";else if(hour<22)hello="晚上好";else hello="夜深了";function FixedCardWidget(e,i,o){if("id"===e)var t=document.getElementById(i);else t=document.getElementsByClassName(i)[o];t&&(t.className.indexOf("fixed-card-widget")>-1?RemoveFixedCardWidget():(RemoveFixedCardWidget(),CreateQuitBox(),t.classList.add("fixed-card-widget")))}function CreateQuitBox(){document.getElementById("aside-content").insertAdjacentHTML("beforebegin",'<div id="quit-box" onclick="RemoveFixedCardWidget()"></div>')}function RemoveFixedCardWidget(){var e=document.querySelectorAll(".fixed-card-widget");if(e)for(i=0;i<e.length;i++)e[i].classList.remove("fixed-card-widget");var o=document.getElementById("quit-box");o&&o.remove()}RemoveFixedCardWidget(),window.ATK_LIGHTBOX_CONF={groupAll:!0};