const cartItemsIndicator = document.querySelector(".cart-items");

function checkCart() {

    let cartItems = 0;
    let cartList = [];

    for (let i = 12; i < 25; i++) {
        const items = window.sessionStorage.getItem(i);
        if (items) {
            cartItems += parseInt(items)
            cartList.push([parseInt(i), parseInt(items)]);
            console.log(i +" "+ items);
        }
    }

    cartItemsIndicator.innerHTML = cartItems;
    console.log("total count: " + cartItems);
    console.log();

    return cartList;
   
}

checkCart();