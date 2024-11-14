/*================== TOGGLE ICON NAVBAR =======================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

/* ================= SCROLL SECTION ACTIVE LINK ===============*/

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    /*======================= STICKY NAVBAR ==========================*/

    let header = document.querySelector('.header'); // corrected: changed 'header' to '.header' for consistency
    header.classList.toggle('sticky', window.scrollY > 100);

    /*========================= REMOVE TOGGLE ICON AND NAVBAR =====================*/

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/* ===========================SCROLL REVEAL =======================*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});  // fixed capitalization error on ScrollReveal initialization

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' }); // fixed missing '.' for class name 'heading'
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, contact form', { origin: 'bottom' }); // corrected: 'button' to 'bottom'
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

/* =========================== TYPED JS =======================*/
const typed = new Typed('.multiple-text', {
    strings: ['Software Engineer', 'Web Designer', 'Data Analyst'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});
