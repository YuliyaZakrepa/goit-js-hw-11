import{a as m,S as p,i as s}from"./assets/vendor-DFA_L3eI.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function f(i){return m("https://pixabay.com/api/",{params:{key:"55684410-10358821b17bf14561ffe1031",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(a=>a.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),g=new p(".gallery a",{captionsData:"alt",captionDelay:250});function h(i){const t=i.map(({webformatURL:o,largeImageURL:a,tags:e,likes:r,views:n,comments:u,downloads:d})=>`<li class="gallery-item">
    <a href = "${a}" class = "gallery-link">
    <img src = "${o}" alt = "${e}"/>
    <div class="info-wrapper"> 
    <p>likes: ${r}</p>
    <p>views: ${n}</p>
    <p>comments: ${u}</p>
    <p>downloads: ${d}</p>
    </div>
    </a>
  </li>`).join("");l.innerHTML=t,g.refresh()}function y(){l.innerHTML=""}function F(){c.classList.remove("hidden")}function L(){c.classList.add("hidden")}const b=document.querySelector(".form"),S=document.querySelector("input");b.addEventListener("submit",q);function q(i){i.preventDefault();const t=S.value.trim().toLocaleLowerCase();if(t.length===0){s.warning({message:"Please enter a search query!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FFFFFF",maxWidth:432});return}y(),F(),f(t).then(o=>{o.hits.length>0?h(o.hits):s.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FFFFFF",maxWidth:432})}).catch(o=>{s.error({message:"Error fetching data!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FFFFFF",maxWidth:432})}).finally(()=>{i.target.reset(),L()})}
//# sourceMappingURL=index.js.map
