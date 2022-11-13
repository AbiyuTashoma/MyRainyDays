const cartItemsContainer = document.querySelector(".cart-items");

function checkCart() {

    let cartItems = 0;

    for (let i = 12; i < 25; i++) {
        const items = window.sessionStorage.getItem(i);
        if (items) {
            cartItems += parseInt(items)
            console.log(i +" "+ items);
        }
    }

    if (cartItems !== 0) {
        cartItemsContainer.innerHTML = cartItems;
        console.log("total count: " + cartItems);
    }
   
}

function clearCart(event) {
    for (let i = 12; i < 25; i++) {
        const items = window.sessionStorage.getItem(i);
        if (items) {
            window.sessionStorage.removeItem(i);
        }
    }

    cartItemsContainer.innerHTML = 0;
    console.log("total count: " + 0);
}

checkCart();