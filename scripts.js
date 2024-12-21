// scripts.js

// Add interactivity to the "Learn More" button in the Hero section
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('click', () => {
    alert('Thank you for your interest! Stay tuned for more details.');
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Highlight active navigation link based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index].classList.add('active');
        }
    });
});

// Validate the contact form before submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', event => {
    event.preventDefault(); // Prevent default form submission
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Please enter a valid email address.');
    } else {
        const modal = document.querySelector('.thank-you-modal');
        modal.classList.add('show');
        setTimeout(() => {
            modal.classList.remove('show');
            contactForm.reset();
        }, 3000);
    }
});

// Toggle dark mode
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

// Reveal sections on scroll
const sections = document.querySelectorAll('section');
const revealSection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.1
});

sections.forEach(section => {
    sectionObserver.observe(section);
});
