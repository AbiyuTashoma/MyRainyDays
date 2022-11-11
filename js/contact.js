const contactFormContainer = document.querySelector(".contact-form");
const messageContainer = document.querySelector(".message");

const nameContainer = document.querySelector("#name");
const emailContainer = document.querySelector("#email");
const contactMessageContainer = document.querySelector("#contact-message")

const noteNameContainer = document.querySelector(".note-name");
const noteEmailContainer = document.querySelector(".note-email");
const noteContactMessageContainer = document.querySelector(".note-contact");

//clear error message onchange and oninput
nameContainer.oninput = function() {
    clearError(noteNameContainer, nameContainer);
}

emailContainer.oninput = function() {
    clearError(noteEmailContainer, emailContainer);
}

contactMessageContainer.oninput = function() {
    clearError(noteContactMessageContainer, contactMessageContainer);
}

//validate form
function validate(event) {
    event.preventDefault();
    messageContainer.innerHTML = "";
    let validFeedback = true;

    const name = nameContainer.value;
    const email = emailContainer.value;
    const message = contactMessageContainer.value;

    const validName = validateText(name, 2);
    const validEmail = validateEmail(email);
    const validMessage = validateText(message, 5);

    if (!validName) {
        validFeedback = false;
        setError(noteNameContainer, nameContainer, "Name is required");
    }

    if (!validEmail) {
        validCheckout = false;
        setError(noteEmailContainer, emailContainer, "Enter valid email");
    }

    if (!validMessage) {
        validFeedback = false;
        setError(noteContactMessageContainer, contactMessageContainer, "Enter valid message");
    }

    //on submit
    if (validFeedback) {
        messageContainer.innerHTML = displayMessage("Message successfully sent!", "success");
        contactFormContainer.reset();
    }
}

//Add event listener
contactFormContainer.addEventListener ("submit", validate);