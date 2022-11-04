const addToCartHTML = `<div>
                            <input type="submit" class="add-to-cart" id="addtocart">
                            <label for="addtocart" title="add to cart">
                                <div class="add-to-cart-shop">
                                    <div class="cart-container">
                                        <img src="icons/cart.svg" alt="cart" class="cartsize-shop">
                                        <p class="add-cart">+</p>
                                    </div>
                                    <p class="add-to-cart-txt-shop">Add To Cart</p>
                                </div>
                            </label>
                        </div>`;
function displayProducts (products) {
    let html = "";
    for (let i = 0; i < products.length; i++) {
            html += `<div class="item-container">
                        <a href="product.html">
                            <img src="${products[i]["images"][0]["src"]}" class="grid-image" alt="hiking jacket woman">                                                
                        </a>
                        <div class="product-footer">
                            <div>                                
                                <a href="product.html" class="a-title">
                                    <p class="p-title">${products[i]["name"]}</p>
                                    <p class="p-price">${products[i]["prices"]["price"]} ${products[i]["prices"]["currency_code"]}</p>
                                </a>
                            </div>
                            ${addToCartHTML}
                        </div>
                    </div>`;     
    }

    return html;
}

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