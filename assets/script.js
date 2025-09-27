// Tiny sprinkles of animation without heavy libraries
(function(){
// Entrance animation
document.addEventListener('DOMContentLoaded',()=>{
document.body.classList.add('ready');
// Subtle pop for primary buttons
const pops = document.querySelectorAll('.pop');
pops.forEach((el)=>{
el.addEventListener('mouseenter',()=> el.style.transform='scale(1.03)');
el.addEventListener('mouseleave',()=> el.style.transform='');
});
});


// On hash change or nav click, scroll to top smoothly (for internal links)
document.addEventListener('click', (e)=>{
const a = e.target.closest('a[href^="#"]');
if(!a) return;
const id = a.getAttribute('href');
const el = document.querySelector(id);
if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth',block:'start'}); }
});
})();