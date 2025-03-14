document.addEventListener('DOMContentLoaded', function() {
    // FAQ Toggle
    const faqToggles = document.querySelectorAll('.faq-toggle');
    faqToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const answer = this.parentElement.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                this.textContent = '+';
            } else {
                answer.style.display = 'block';
                this.textContent = 'X';
            }
        });
    });

    // Testimonial Controls
    const testimonialControls = document.querySelectorAll('.testimonial-controls button');
    let testimonialIndex = 0;
    const testimonials = document.querySelectorAll('.testimonial-item');
    testimonials.forEach((testimonial, index) => {
        if (index !== 0) {
            testimonial.style.display = 'none';
        }
    });

    testimonialControls.forEach(control => {
        control.addEventListener('click', function() {
            testimonials[testimonialIndex].style.display = 'none';
            if (this.textContent === '<') {
                testimonialIndex = (testimonialIndex - 1 + testimonials.length) % testimonials.length;
            } else {
                testimonialIndex = (testimonialIndex + 1) % testimonials.length;
            }
            testimonials[testimonialIndex].style.display = 'block';
        });
    });

    // Contact Form Submission (Simple Alert)
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Form submitted!'); // Замініть на реальну обробку
        });
    }
});