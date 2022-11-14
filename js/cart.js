const cartListContainer = document.querySelector(".cart-list");

const baseURL = "https://www.rainydays.casa/wp-json/wc/v3/products/";
const consumerKey = "ck_410e0eecbaff8e7d39eee8fefaa6ac02fab52640";
const consumerSecret = "cs_bd76bc88ee10754a51d8f7bb7a7405ef4d668a22";


async function displayCartProducts() {

    cartListArray = checkCart();
    
    cartListContainer.innerHTML = "";

    for (let i = 0; i < cartListArray.length; i++) {
        try {    
            const cProductURL = `${baseURL}${cartListArray[i][0]}?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
        
            const cResponse = await fetch(cProductURL);
            const cProduct = await cResponse.json();

            cartListContainer.innerHTML += `<div class="cart-row">
                                                <p class="cartrow-title">${i+1}</p>
                                                <a href="product.html?productID=${cProduct[0]}"></a>
                                                <img src="${cProduct["images"][0]["src"]}" alt="${cProduct["name"]}" class="cart-product-image">
                                                <p class="cartrow-title">${cProduct["name"]}</p>
                                                <p class="cartrow-title">${cProduct["price_html"]}</p>
                                                <p class="cartrow-title">Quantity: ${cartListArray[i][1]}</p>
                                            </div>
                                            `;                
        }

        catch(error) {
            relatedProductsContainer.innerHTML += displayMessage("An error has occurred. Please try again", "error");
        }

    }

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