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
                top: targetElement.offsetTop - 80, // Adjust for fixed navbar
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

// Form submission (with validation)
document.getElementById('contact-form')?.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const service = document.getElementById('service').value;

    // Simple validation
    if (!name || !email || !phone || !message || !service) {
        alert('Please fill in all the fields.');
        return;
    }

    // If valid, proceed (for example, send data or show a success message)
    alert('Thank you for your message! We will contact you shortly.');
    this.reset(); // Reset the form after successful submission
});

// Highlight active navigation link based on scroll position
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= (sectionTop - 100)) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active-nav');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active-nav');
        }
    });
});

// Optional: Smooth scrolling for anchor links (not needed if already handled above)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').slice(1); // Clean the # from href
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for fixed navbar
                behavior: 'smooth'
            });
        }
    });
});
