const terminalText =
    document.getElementById("terminalTyping");


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

    const currentMessage =
        terminalMessages[messageIndex];


    if (!deleting) {

        terminalText.textContent =
            currentMessage.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (
            characterIndex ===
            currentMessage.length
        ) {

            deleting = true;

            setTimeout(
                typeTerminal,
                1800
            );

            return;
        }

    } else {

        terminalText.textContent =
            currentMessage.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            messageIndex++;


            if (
                messageIndex >=
                terminalMessages.length
            ) {

                messageIndex = 0;

            }

        }

    }


    setTimeout(
        typeTerminal,
        deleting ? 35 : 70
    );
}


if (terminalText) {

    typeTerminal();

}

//mobile menu

const menuIcon =
    document.querySelector("#menu-icon");

const navbar =
    document.querySelector(".navbar");


if (menuIcon && navbar) {

    menuIcon.onclick = () => {

        menuIcon.classList.toggle("bx-x");

        navbar.classList.toggle("active");

    };

}



const navLinks =
    document.querySelectorAll(".navbar a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuIcon.classList.remove("bx-x");

    });

});