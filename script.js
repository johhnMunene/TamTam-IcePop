// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple form validation example (if you have forms)
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (event) {
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            let valid = true;

            if (!name.value.trim()) {
                alert('Please enter your name.');
                valid = false;
            }
            if (!email.value.trim()) {
                alert('Please enter your email.');
                valid = false;
            }
            if (!message.value.trim()) {
                alert('Please enter your message.');
                valid = false;
            }

            if (!valid) {
                event.preventDefault();
            }
        });
    }
});