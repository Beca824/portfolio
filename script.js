const terminalText = document.getElementById("terminalTyping");

const terminalMessages = [
    "loading_security_lab...",
    "checking_environment...",
    "initializing_linux_tools...",
    "loading_recon_modules...",
    "loading_web_security_modules...",
    "checking_lab_progress...",
    "environment_ready"
];

let messageIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeTerminal() {

    const currentMessage = terminalMessages[messageIndex];

    if (!deleting) {

        terminalText.textContent =
            currentMessage.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentMessage.length) {

            deleting = true;

            setTimeout(typeTerminal, 1800);
            return;
        }

    } else {

        terminalText.textContent =
            currentMessage.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            messageIndex++;

            if (messageIndex >= terminalMessages.length) {
                messageIndex = 0;
            }
        }
    }

    setTimeout(typeTerminal, deleting ? 35 : 70);
}

if (terminalText) {
    typeTerminal();
}


//Mobile Navigation
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

if (menuIcon && navbar) {

    menuIcon.onclick = () => {

        menuIcon.classList.toggle("bx-x");
        navbar.classList.toggle("active");

    };

}

//contact form
const contactForm = document.querySelector("#contact-form");
const thankYou = document.querySelector("#thankYou");

if (contactForm && thankYou) {

    const submitButton =
        contactForm.querySelector('input[type="submit"]');

    contactForm.addEventListener("submit", async (event) => {

        event.preventDefault();

        submitButton.value = "Sending...";
        submitButton.disabled = true;

        const formData = new FormData(contactForm);

        try {

            const response = await fetch(
                "contact.php",
                {
                    method: "POST",
                    body: formData,
                    headers: {
                        "Accept": "application/json"
                    }
                }
            );

            const result = await response.json();

            if (result.success) {

                contactForm.reset();

                contactForm.style.display = "none";

                thankYou.style.display = "block";

            } else {

                alert(
                    result.message ||
                    "Something went wrong. Please try again."
                );

            }

        } catch (error) {

            alert(
                "Unable to send your message. Please try again later."
            );

            console.error(
                "Contact form error:",
                error
            );

        }

        submitButton.value = "Send Message";
        submitButton.disabled = false;

    });

}
