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

//shipping information
const streetAddressContainer = document.querySelector("#street-address");
const postalCodeContainer = document.querySelector("#postal-code");
const cityContainer = document.querySelector("#city");

const noteStreetAddressContainer = document.querySelector(".note-streetaddress");
const notePostalCodeContainer = document.querySelector(".note-postalcode");
const noteCityContainer = document.querySelector(".note-city");

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
//personel information
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

//clear error message onchange and oninput
//shipping information
streetAddressContainer.oninput = function() {
    clearError(noteStreetAddressContainer, streetAddressContainer);
}

postalCodeContainer.oninput = function() {
    clearError(notePostalCodeContainer, postalCodeContainer);
}

cityContainer.oninput = function() {
    clearError(noteCityContainer, cityContainer);
}

//clear error message onchange and oninput
//payment information
visaPaymentRadio.onchange = function() {
    clearVippsError();
}

vippsPaymentRadio.onchange = function() {
    clearVisaError();
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

    const firstName = firstNameContainer.value;
    const lastName = lastNameContainer.value;
    const mobile = mobileContainer.value;
    const email = emailContainer.value;

    const streeAddress = streetAddressContainer.value;
    const postalCode = postalCodeContainer.value;
    const city = cityContainer.value;

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

    const validStreetAddress = validateText(streeAddress, 5);
    const validPostalCode = validateNumber(postalCode, 4);
    const validCity = validateText(city, 2);

    const validCardNumber = validateNumber(cardNumber, 16);
    const validValidMonth = validateMonth(validMonth);
    const validValidYear = validateNumber(validYear, 2);
    const validValidCVC = validateNumber(validCVC, 3);
    const validValidVipps = validateNumber(validVipps);

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

    //shipping
    if (!validStreetAddress) {
        validCheckout = false;
        setError(noteStreetAddressContainer, streetAddressContainer, "Enter valid street address");
    }

    if (!validPostalCode) {
        validCheckout = false;
        setError(notePostalCodeContainer, postalCodeContainer, "Enter valid postal code");
    }

    if (!validCity) {
        validCheckout = false;
        setError(noteCityContainer, cityContainer, "Enter valid city");
    }

    //payment
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

    //on checkout
    if (validCheckout) {
        messageContainer.innerHTML = displayMessage("Order successfully completed!", "success");
        checkoutFormContainer.reset();
        clearCart();
    }
}

//Add event listener
checkoutFormContainer.addEventListener("submit", validate);