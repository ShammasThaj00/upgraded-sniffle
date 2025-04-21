/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
};
showMenu('nav-toggle', 'nav-menu');

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    // Active link
    navLink.forEach(n => n.classList.remove('active-link'));
    this.classList.add('active-link');
    
    // Remove menu mobile
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

/*===== GSAP ANIMATIONS =====*/
// OVERLAY
gsap.to(".first", 1.5, {delay: 0.5, top: "-100%", ease: "expo.inOut"});
gsap.to(".second", 1.5, {delay: 0.7, top: "-100%", ease: "expo.inOut"});
gsap.to(".third", 1.5, {delay: 0.9, top: "-100%", ease: "expo.inOut"});

// HOME IMAGE
gsap.from('.home__img', {opacity: 0, duration: 2, delay: 2, x: 60});

// HOME INFORMATION
gsap.from('.home__data', {opacity: 0, duration: 3, delay: 2.3, y: 25});
gsap.from('.anime-text', {opacity: 0, duration: 3, delay: 2.3, y: 25, ease: 'expo.out', stagger: 0.3});

// NAV ITEMS
gsap.from('.nav__logo', {opacity: 0, duration: 3, delay: 3.2, y: 25, ease: 'expo.out'});
gsap.from('.nav__item', {opacity: 0, duration: 3, delay: 3.2, y: 25, ease: 'expo.out', stagger: 0.2});

// SOCIAL ICONS
gsap.from('.home__social-icon', {opacity: 0, duration: 3, delay: 4, y: 25, ease: 'expo.out', stagger: 0.2});

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: false
});

// REVEAL SECTIONS
sr.reveal('.section-title', {});
sr.reveal('.about__img', {delay: 400});
sr.reveal('.about__subtitle', {delay: 400});
sr.reveal('.about__text', {delay: 400});

// SKILLS
sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__text', {delay: 200});
sr.reveal('.skills__data', {interval: 200});

// WORK
sr.reveal('.work__img', {interval: 200});

// CONTACT
sr.reveal('.contact__input', {interval: 200});

// ANIMATE SKILL BARS ON SCROLL
const skillBars = document.querySelectorAll('.skills__bar');

function animateSkillBars() {
    skillBars.forEach(bar => {
        const barPosition = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if(barPosition < screenPosition) {
            bar.style.width = bar.classList.contains('skills__html') ? '95%' :
                              bar.classList.contains('skills__css') ? '90%' :
                              bar.classList.contains('skills__js') ? '85%' : '80%';
        }
    });
}

window.addEventListener('scroll', animateSkillBars);

// INITIALIZE SKILL BARS WITH ZERO WIDTH AND ANIMATE THEM
document.addEventListener('DOMContentLoaded', () => {
    skillBars.forEach(bar => {
        bar.style.width = '0';
    });
    setTimeout(animateSkillBars, 1000);
});
