(()=>{const e={convertNum:e=>e>=1e4?(e/1e4).toFixed(1)+"万":e,toHHMMSS:e=>[Math.floor(e/3600),Math.floor(e/60)%60,e%60].map((e=>e.toString().padStart(2,0))).join(":"),getVideoMessage:async function(e){const a=e.slice(0,2).toLowerCase(),t={av:"aid",bv:"bvid"}[a],i=`${stellar.tag_plugins.bvideo.video_info}?vtype=${t}&type=${a}&id=${e}`,s=(await(await fetch(i)).json()).data;return s?{v_id:e,v_title:s.title,v_time:this.toHHMMSS(s.duration),v_playview:s.stat.view,v_danmaku:this.convertNum(s.stat.danmaku),v_type:"视频",v_upname:s.owner.name,v_cover:s.pic}:{v_id:e,v_title:"出错了！"}},layout:function(e){const a=e.getAttribute("v_id");this.getVideoMessage(a).then((a=>{e.children[0].innerHTML=`<div class="bvideo-box">\n              <div class="bvideo-cover">\n                  <div class="cover-default"></div>\n                  <div class="bvideo-cover-layer" style="background-image:url(${stellar.tag_plugins.bvideo.image_proxy}${a.v_cover}@320w_200h_1c_!web-space-index-myvideo.webp)">\n                      <i class="icon-video"></i>\n                  </div>\n                  <span class="duration">${a.v_time}</span>\n              </div>\n              <div class="bvideo-info">\n                  <p class="title">${a.v_title}</p>\n                  <p class="card-status">\n                      <span class="play-num">\n                          <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>\n                          <span>${a.v_playview}</span></span>\n                      <span>\n                          <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H512c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H512c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm96 64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm104 0c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm-72-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM96 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>\n                          <span>${a.v_danmaku}</span></span></p>\n                  <div class="partition">\n                      <label class="card-label">${a.v_type}</label>\n                      <label class="up-label"></label>\n                      <label class="up-name">${a.v_upname}</label>\n                  </div>\n                  <div class="actions hide"></div>\n              </div>\n          </div>`}))},init:function(){const e=document.getElementsByClassName("bvideo");for(let a=0;a<e.length;a++){const t=e[a];this.layout(t)}}};stellaris.registerThemePlugin(".bvideo",e)})();