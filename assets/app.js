(()=>{function n(){let o=document.querySelectorAll("[data-aos]"),s=new IntersectionObserver(e=>{e.forEach(t=>{if(t.intersectionRatio>0){let r=t.target.getAttribute("data-aos");t.target.classList.add(r),s.unobserve(t.target)}})});o.forEach(e=>{s.observe(e)})}function a(){let o=document.documentElement,s='<div class="scroll-sentinel" aria-hidden="true"></div>',e=new DOMParser().parseFromString(s,"text/html").body.firstChild;document.body.appendChild(e);let t=new IntersectionObserver(r=>{r.forEach(l=>{l.intersectionRatio<=0?o.classList.add("scrolled"):o.classList.remove("scrolled")})});t.observe(e)}document.addEventListener("DOMContentLoaded",()=>{n(),a()});})();
//# sourceMappingURL=app.js.map
