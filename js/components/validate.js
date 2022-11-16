//clean and validate string
function validateText (stringValue, len = 1) {
    if (stringValue.trim().length >= len) {
        return true;
    }

    else {
        return false;
    }
}

//Trim and validate number + phone
function validateNumber (num, len = 8) {
    const numTrim = num.trim();
    if (numTrim.length == len) {
        return true;
    }

    else {
        return false;
    }
}

//validate email
function validateEmail (emailValue) {
    const regEx = /\S+@\S+\.\S+/;
    const match = regEx.test(emailValue);
    return match;
}

function validateMonth (monthValue) {
    if (1 <= monthValue && monthValue <= 12) {
        return true;
    }

    else {
        return false;
    }

}

//clear cart
function clearCart() {
    for (let i = 12; i < 25; i++) {
        const items = window.sessionStorage.getItem(i);
        if (items) {
            window.sessionStorage.removeItem(i);
        }
    }

    checkCart();
}