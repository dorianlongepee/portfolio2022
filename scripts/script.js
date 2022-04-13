const hamburgerOpen = document.querySelector('.header__open');
const hamburgerClose = document.querySelector('.header__close');
const menu = document.querySelector(".aside-nav");
const links = document.querySelectorAll("nav ul li");
const credits = document.querySelector(".creds-nav")

const body = document.querySelector("body")

const backdrop = document.querySelector('.backdrop');

let TLMenu = gsap.timeline();

function closeMenu(){
    TLMenu
    .to(body, {overflowY:'scroll'})
    .to(menu,{duration:0.8, x:'100%',ease:'power4'}, "-=0.4")
    .to(backdrop, {duration:0.8, autoAlpha:0}, "-=0.8")
    .to(links, {duration: 0.6, x:'400px'})
    .to(credits, {duration: 0.6, y:'100px', autoAlpha:0})
}
function openMenu(){
    TLMenu
    .to(body, {duration:0, overflow:'hidden'})
    .to(backdrop, {duration:0.8, autoAlpha:0.8})
    .to(menu, {duration:0.8, x:0,ease:'power4'}, "-=0.8")
    .to(links, {duration: 0.6, x:0, ease:'power3', stagger:0.1}, "-=0.8")
    .to(credits, {duration: 0.6, y:0, autoAlpha:1, ease:'power3'}, "-=0.4")
}


hamburgerOpen.addEventListener("click", () => {
    openMenu();
})

hamburgerClose.addEventListener("click", () => {
    closeMenu();
})

const nav = document.querySelector(".header");

window.addEventListener('scroll', () => {
    
    if(window.scrollY > 30) {
        nav.classList.add('anim-nav');
    } else {
        nav.classList.remove('anim-nav');
    }
})