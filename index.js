// Mobile menu toggle
document.getElementById('menu-toggle')?.addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    if (menu) menu.classList.toggle('hidden');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// Back to top button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 300) {
        backToTopButton?.classList.remove('opacity-0', 'invisible');
        backToTopButton?.classList.add('opacity-100', 'visible');
    } else {
        backToTopButton?.classList.remove('opacity-100', 'visible');
        backToTopButton?.classList.add('opacity-0', 'invisible');
    }
});

backToTopButton?.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Form submission
document.getElementById('contact-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message! We will contact you shortly.');
    this.reset();
});

// Highlight active navigation link
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active-nav');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active-nav');
        }
    });
});
