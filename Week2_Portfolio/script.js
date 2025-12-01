document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio website loaded successfully!');
    
    // Set current year in footer
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
    
    // Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });
        
        // Close menu when clicking on nav links (for mobile)
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    mobileToggle.classList.remove('active');
                }
            });
        });
    }
    
    // Form Submission
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');
    
    if (contactForm && formFeedback) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const name = document.getElementById('user-name').value.trim();
            const email = document.getElementById('user-email').value.trim();
            const message = document.getElementById('user-message').value.trim();
            
            if (!name || !email || !message) {
                formFeedback.textContent = 'Please fill in all required fields.';
                formFeedback.style.color = 'red';
                return;
            }
            
            // Simple email check
            if (!email.includes('@') || !email.includes('.')) {
                formFeedback.textContent = 'Please enter a valid email address.';
                formFeedback.style.color = 'red';
                return;
            }
            
            formFeedback.textContent = 'Thank you for your message! I\'ll get back to you soon.';
            formFeedback.style.color = 'green';
            contactForm.reset();
            
            console.log('Form submitted successfully');
        });
    }
    
    console.log('Website ready!');
});