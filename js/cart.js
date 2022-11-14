const cartListContainer = document.querySelector(".cart-list");

const baseURL = "https://www.rainydays.casa/wp-json/wc/v3/products/";
const consumerKey = "ck_410e0eecbaff8e7d39eee8fefaa6ac02fab52640";
const consumerSecret = "cs_bd76bc88ee10754a51d8f7bb7a7405ef4d668a22";


async function displayCartProducts() {

    cartListArray = checkCart();
    
    cartListContainer.innerHTML = `<p>Cart is empty</p>`;
    let totalPrice = 0;

    if (cartListArray.length) {                    
        cartListContainer.innerHTML = `<div class="loading"></div>`;
    }

    for (let i = 0; i < cartListArray.length; i++) {

        if ( i === 0) {
            cartListContainer.innerHTML = "";
        }
        
        try {    
            const cProductURL = `${baseURL}${cartListArray[i][0]}?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
        
            const cResponse = await fetch(cProductURL);
            const cProduct = await cResponse.json();


            // <a href="product.html?productID=${cProduct[0]}"></a>
            cartListContainer.innerHTML += `<div class="cart-row">
                                                <span>${i+1}.</span>
                                                <img src="${cProduct["images"][0]["src"]}" alt="${cProduct["name"]}" class="cart-product-image">
                                                <span class="cartrow-title">${cProduct["name"]}</span>
                                                <span class="cartrow-title">${cProduct["price_html"]}</span>
                                                <span class="cartrow-title">x${cartListArray[i][1]}</span>
                                                <span class="cartrow-title">Sub-total:${cProduct["price"]*cartListArray[i][1]}</span>
                                            </div>
                                            `;
            totalPrice += parseInt(cProduct["price"]) * cartListArray[i][1];    
        }

        catch(error) {
            cartListContainer.innerHTML += displayMessage("An error has occurred. Please try again", "error");
        }

    }

    cartListContainer.innerHTML += `<span class="total-sum">Total sum: ${totalPrice}</span>`;

}

function clearCart(event) {
    for (let i = 12; i < 25; i++) {
        const items = window.sessionStorage.getItem(i);
        if (items) {
            window.sessionStorage.removeItem(i);
        }
    }

    checkCart();
}

displayCartProducts();