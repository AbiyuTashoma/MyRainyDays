//clean and validate string
function validateText (stringValue, len = 1) {
    if (stringValue.trim().length >= len) {
        return true;
    }

    else {
        return false;
    }
}

//Trim and validate phonenumber
function validateNumber (phone, len = 8) {
    const phoneTrim = phone.trim();
    if (phoneTrim.length == len) {
        return true;
    }

    else {
        return false;
    }
}

//clean and validate money
function validateMoney (money) {
    if (money > 0) {
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

//validate matching passwords
function validateMatch (value1, value2) {
    if (value1 === value2) {
        return true;
    }

    else {
        return false;
    }
}

//validate user info
function validateProfile (username, password) {
    if ((username === "username") && (password === "password")) {
        return true;
    }

    else {
        return false;
    }
}

function validateMonth (monthValue) {
    if (1 <= monthValue && monthValue <= 12) {
        return true;
    }

    else {
        return false;
    }

}

//Set valid date
function setDate (calender) {
    const date = new Date();
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    
    if (day < 10) {
        day = "0" + day;
    }

    if (month < 10) {
        month = "0" + month;
    }

    const today = year + "-" + month + "-" + day;

    calender.value = today;
    calender.min = today;
}

//Count seats
function countSeat (seats) {
    let totalSeat = 0;
    seats.forEach(function(seat) {
        if (seat.checked && !seat.disabled) {
            totalSeat += 1;
        }
    })

    return totalSeat;
}
