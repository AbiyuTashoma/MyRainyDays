function displayMessage (message, messageType) {
    const html = `<div class="${messageType} message-area">
                        <span>${message}</span>
                    </div>`;

    return html;
}

function setError(noteContainer, inputContainer, errorMessage) {
    noteContainer.innerHTML = `<div class="note">${errorMessage}</div>`;
    inputContainer.style.borderColor = "red";
}

function clearError(noteContainer, inputContainer) {
    noteContainer.innerHTML = "";
    inputContainer.style.borderColor = "";
}

//clear error message in group
function clearVisaError() {
    clearError(noteCardNumberContainer, cardNumberContainer);
    clearError(noteValidThruContainer, validMonthContainer);
    clearError(noteValidThruContainer, validYearContainer);
    clearError(noteCVCContainer, validCVCContainer);
}

function clearVippsError() {
    clearError(noteVippsNumberContainer, validVippsNumberContainer);
}