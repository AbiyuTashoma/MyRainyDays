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


//checkout form and feedback
const messageContainer = document.querySelector(".message");
const checkoutFormContainer = document.querySelector(".checkout-form");

//Personal information
const firstNameContainer = document.querySelector("#first-name");
const lastNameContainer = document.querySelector("#last-name");
const mobileContainer = document.querySelector("#mobile");
const emailContainer = document.querySelector("#email");

const noteFirstNameContainer = document.querySelector(".note-firstname");
const noteLastNameContainer = document.querySelector(".note-lastname");
const noteMobileContainer = document.querySelector(".note-mobile");
const noteEmailContainer = document.querySelector(".note-email");

//Payment information
const cardNumberContainer = document.querySelector("#card-number");
const validMonthContainer = document.querySelector("#valid-month");
const validYearContainer = document.querySelector("#valid-year");
const validCVCContainer = document.querySelector("#cvc");
const validVippsNumberContainer = document.querySelector("#vipps-mobile");
const visaPaymentRadio = document.querySelector("#visa-payment");
const vippsPaymentRadio = document.querySelector("#vipps-payment");

const noteCardNumberContainer = document.querySelector(".note-cardnumber");
const noteValidThruContainer = document.querySelector(".note-validthru");
const noteCVCContainer = document.querySelector(".note-cvc");
const noteVippsNumberContainer = document.querySelector(".note-vippsnumber");

//clear error message onchange and oninput
visaPaymentRadio.onchange = function() {
    clearVippsError();
}

vippsPaymentRadio.onchange = function() {
    clearVisaError();
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
    let validCheckout = true;

    // const selectedEvent = eventContainer.value;

    // const seats = document.querySelectorAll("input.seat");
    // const checkedSeat = countSeat(seats);

    // const quantity = quantityContainer.value;
    // const validQuantity = validateMoney(quantity);

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

// Checkout
    // if (!checkedSeat && (selectedEvent === "aeronautics_lecture")) {
    //     validCheckout = false;
    //     setError(noteSelectSeat, roomContainer, "Select Seat");
    // }

    // if (!validQuantity && ((selectedEvent === "night_museum") || (selectedEvent === "guided_tour"))) {
    //     validCheckout = false;
    //     setError(noteQuantityContainer, quantityContainer, "Enter valid reservation");
    // }

// payment
    if (!validCardNumber && visaChecked) {
        validCheckout = false;
        setError(noteCardNumberContainer, cardNumberContainer, "Enter valid card number");
    }

    if (!validValidMonth && visaChecked) {
        validCheckout = false;
        setError(noteValidThruContainer, validMonthContainer, "Enter valid month");
    }

    if (!validValidYear && visaChecked) {
        validCheckout = false;
        setError(noteValidThruContainer, validYearContainer, "Enter valid year");
    }

    if (!validValidCVC && visaChecked) {
        validCheckout = false;
        setError(noteCVCContainer, validCVCContainer, "Enter valid CVC");
    }

    if (!validValidVipps && vippsChecked) {
        validCheckout = false;
        setError(noteVippsNumberContainer, validVippsNumberContainer, "Enter valid phone number");
    }

//personal info

    if (!validFirstName) {
        validCheckout = false;
        setError(noteFirstNameContainer, firstNameContainer, "First name is required");
    }

    if (!validLastName) {
        validCheckout = false;
        setError(noteLastNameContainer, lastNameContainer, "Last name is required");
    }

    if (!validMobile) {
        validCheckout = false;
        setError(noteMobileContainer, mobileContainer, "Enter valid Phone number");
    }

    if (!validEmail) {
        validCheckout = false;
        setError(noteEmailContainer, emailContainer, "Enter valid email");
    }

    if (validCheckout) {
        messageContainer.innerHTML = displayMessage("Order successfully completed!", "success");
        checkoutFormContainer.reset();
        // setDate(dateContainer);
        // displayPrice(priceContainer, 0);
    }
}

//Add event listener
checkoutFormContainer.addEventListener("submit", validate);