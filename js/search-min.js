isMobile=!0,window.matchMedia("only screen and (min-width: 900px)").matches&&(isMobile=!1),window.addEventListener("orientationchange",(function(){window.matchMedia("only screen and (min-width: 900px)").matches?isMobile=!1:isMobile=!0}));let _=document.querySelector.bind(document),page=_("#page"),exit=_("#exit"),header=_(".page-header"),sidebar=_(".sidebar"),search=_("#search-input"),results=_("#results-container"),clear=_("#clear-search");clear.addEventListener("click",(function(e){for(search.focus(),search.value="",clear.style.display="none",result=results.lastElementChild;result;)results.removeChild(result),result=results.lastElementChild})),exit.addEventListener("click",(function(e){if(isMobile){let s=_("footer"),l=_(".loaded");l&&(sidebar.style.display="",header.style.display="",s.style.display="",l.style.display="",search.blur(),e.target.style="",clear.style.display="none"),search.value&&(results.style.display="none")}})),search.addEventListener("focus",(function(e){if(isMobile){let e=_("footer"),s=_(".loaded");s&&(s.style.display="none",e.style.display="none",header.style.display="none",sidebar.style.display="none",exit.style="min-height: 70vh;"),search.value&&(clear.style.display="",results.style.display="")}})),search.addEventListener("input",(function(e){e.target.value?clear.style.display="":clear.style.display="none"}));