const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

// Mobile navigation
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


// Contact form
const contactForm = document.querySelector('#contact-form');
const thankYou = document.querySelector('#thankYou');
const submitButton = contactForm.querySelector('input[type="submit"]');

contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    submitButton.value = 'Sending...';
    submitButton.disabled = true;

    const formData = new FormData(contactForm);

    try {
        const response = await fetch('contact.php', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        const result = await response.json();

        if (result.success) {
            contactForm.reset();
            contactForm.style.display = 'none';
            thankYou.style.display = 'block';
        } else {
            alert(result.message || 'Something went wrong. Please try again.');
        }

    } catch (error) {
        alert('Unable to send your message. Please try again later.');
    }

    submitButton.value = 'Send Message';
    submitButton.disabled = false;
});