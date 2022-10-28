// //Event selection
// const eventContainer = document.querySelector("#event");
// const seatContainer = document.querySelector(".seat-container");
// const seatLabelContainer = document.querySelector(".seat-label");
// const reservationContainer = document.querySelector(".reservation");

// eventContainer.onchange = function() {
//     const eventValue = eventContainer.value;
//     const allSeat = document.querySelectorAll("input.seat");
//     const checkedSeat = countSeat(allSeat);
//     const quantity = quantityContainer.value;

//     if (eventValue === "aeronautics_lecture") {
//         seatContainer.style.display = "flex";
//         seatLabelContainer.style.display = "block";
//         reservationContainer.style.display = "none";
//         displayPrice(priceContainer, checkedSeat);
//         clearError(noteQuantityContainer, quantityContainer);
//     }

//     if ((eventValue === "night_museum") || (eventValue === "guided_tour")) {
//         seatContainer.style.display = "none";
//         seatLabelContainer.style.display = "none";
//         reservationContainer.style.display = "block";
//         displayPrice(priceContainer, quantity);
//         clearError(noteSelectSeat, roomContainer);
//     }
// }

// //Date
// const dateContainer = document.querySelector("#event-date");
// setDate(dateContainer);

// //Seat selection
// const roomContainer = document.querySelector(".lecture-room");
// const priceContainer = document.querySelector(".price");

// const noteSelectSeat = document.querySelector(".note-seat");
// displayPrice(priceContainer, 0);

// //Reservation
// const quantityContainer = document.querySelector("#quantity");
// const noteQuantityContainer = document.querySelector(".note-quantity");

// quantityContainer.onchange = function() {
//     const reserved = quantityContainer.value;
//     displayPrice(priceContainer, reserved);
// }

// quantityContainer.onkeyup = function() {
//     const reserved = quantityContainer.value;
//     displayPrice(priceContainer, reserved);
// }

// roomContainer.onchange = function() {
//     const allSeat = document.querySelectorAll("input.seat");
//     const checkedSeat = countSeat(allSeat);

//     displayPrice(priceContainer, checkedSeat);
//     clearError(noteSelectSeat, roomContainer);
// }

//Personal information
const firstNameContainer = document.querySelector("#first-name");
const lastNameContainer = document.querySelector("#last-name");
const mobileContainer = document.querySelector("#mobile");
const emailContainer = document.querySelector("#email");
const messageContainer = document.querySelector(".message");
const eventFormContainer = document.querySelector(".event-form");

const noteFirstNameContainer = document.querySelector(".note-firstname");
const noteLastNameContainer = document.querySelector(".note-lastname");
const noteMobileContainer = document.querySelector(".note-mobile");
const noteEmailContainer = document.querySelector(".note-email");

//Payment information
const cardNumberContainer = document.querySelector("#card-number");
const validMonthContainer = document.querySelector("#valid-month");
const validYearContainer = document.querySelector("#valid-year");
const validCVCContainer = document.querySelector("#cvc");
const validVippsNumberContainer = document.querySelector("#mobile-number");
const visaPaymentRadio = document.querySelector("#visa-payment");
const vippsPaymentRadio = document.querySelector("#vipps-payment");

const noteCardNumberContainer = document.querySelector(".note-cardnumber");
const noteValidThruContainer = document.querySelector(".note-validthru");
const noteCVCContainer = document.querySelector(".note-cvc");
const noteVippsNumberContainer = document.querySelector(".note-vippsnumber");

//payment method change
visaPaymentRadio.onchange = function() {
    clearVippsError();
}

vippsPaymentRadio.onchange = function() {
    clearVisaError();
}

//Clear error
quantityContainer.oninput = function() {
    clearError(noteQuantityContainer, quantityContainer);
}

firstNameContainer.oninput = function() {
    clearError(noteFirstNameContainer, firstNameContainer);
}

lastNameContainer.oninput = function() {
    clearError(noteLastNameContainer, lastNameContainer);
}

mobileContainer.oninput = function() {
    clearError(noteMobileContainer, mobileContainer);
}

emailContainer.oninput = function() {
    clearError(noteEmailContainer, emailContainer);
}

cardNumberContainer.oninput = function() {
    clearError(noteCardNumberContainer, cardNumberContainer);
}

validMonthContainer.oninput = function() {
    clearError(noteValidThruContainer, validMonthContainer);
}

validYearContainer.oninput = function() {
    clearError(noteValidThruContainer, validYearContainer);
}

validCVCContainer.oninput = function() {
    clearError(noteCVCContainer, validCVCContainer);
}

validVippsNumberContainer.oninput = function() {
    clearError(noteVippsNumberContainer, validVippsNumberContainer);
}

//Validate form
function validate(event) {
    event.preventDefault();
    messageContainer.innerHTML = "";
    let validBooking = true;

    const selectedEvent = eventContainer.value;

    const seats = document.querySelectorAll("input.seat");
    const checkedSeat = countSeat(seats);

    const quantity = quantityContainer.value;
    const validQuantity = validateMoney(quantity);

    const firstName = firstNameContainer.value;
    const lastName = lastNameContainer.value;
    const mobile = mobileContainer.value;
    const email = emailContainer.value;

    const cardNumber = cardNumberContainer.value;
    const validMonth = validMonthContainer.value;
    const validYear = validYearContainer.value;
    const validCVC = validCVCContainer.value;
    const validVipps = validVippsNumberContainer.value;
    const visaChecked = visaPaymentRadio.checked;
    const vippsChecked = vippsPaymentRadio.checked;

    const validFirstName = validateText(firstName, 2);
    const validLastName = validateText(lastName, 2);
    const validMobile = validateNumber(mobile);
    const validEmail = validateEmail(email);

    const validCardNumber = validateNumber(cardNumber, 16);
    const validValidMonth = validateMonth(validMonth);
    const validValidYear = validateNumber(validYear, 2);
    const validValidCVC = validateNumber(validCVC, 3);
    const validValidVipps = validateNumber(validVipps);

// booking
    if (!checkedSeat && (selectedEvent === "aeronautics_lecture")) {
        validBooking = false;
        setError(noteSelectSeat, roomContainer, "Select Seat");
    }

    if (!validQuantity && ((selectedEvent === "night_museum") || (selectedEvent === "guided_tour"))) {
        validBooking = false;
        setError(noteQuantityContainer, quantityContainer, "Enter valid reservation");
    }

// payment
    if (!validCardNumber && visaChecked) {
        validBooking = false;
        setError(noteCardNumberContainer, cardNumberContainer, "Enter valid card number");
    }

    if (!validValidMonth && visaChecked) {
        validBooking = false;
        setError(noteValidThruContainer, validMonthContainer, "Enter valid month");
    }

    if (!validValidYear && visaChecked) {
        validBooking = false;
        setError(noteValidThruContainer, validYearContainer, "Enter valid year");
    }

    if (!validValidCVC && visaChecked) {
        validBooking = false;
        setError(noteCVCContainer, validCVCContainer, "Enter valid CVC");
    }

    if (!validValidVipps && vippsChecked) {
        validBooking = false;
        setError(noteVippsNumberContainer, validVippsNumberContainer, "Enter valid phone number");
    }

//personal info

    if (!validFirstName) {
        validBooking = false;
        setError(noteFirstNameContainer, firstNameContainer, "First name is required");
    }

    if (!validLastName) {
        validBooking = false;
        setError(noteLastNameContainer, lastNameContainer, "Last name is required");
    }

    if (!validMobile) {
        validBooking = false;
        setError(noteMobileContainer, mobileContainer, "Enter valid Phone number");
    }

    if (!validEmail) {
        validBooking = false;
        setError(noteEmailContainer, emailContainer, "Enter valid email");
    }

    if (validBooking) {
        messageContainer.innerHTML = displayMessage("Booking successfully completed!", "success");
        eventFormContainer.reset();
        setDate(dateContainer);
        displayPrice(priceContainer, 0);
    }
}

//Add event listener
eventFormContainer.addEventListener("submit", validate);