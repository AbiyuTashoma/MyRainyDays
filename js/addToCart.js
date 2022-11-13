const addToCartProductContainer = document.querySelector("#addtocart-product");
const wishItemContainer = document.querySelector("#addtowish-product");

function addItem(event) {
    const newQueryString = document.location.search;
    const newParameter = new URLSearchParams(newQueryString);
    const PID = newParameter.get("productID");

    const item = window.sessionStorage.getItem(PID);

    if (item) {
        window.sessionStorage.setItem(PID, parseInt(item) + 1);
        console.log("added: " + (parseInt(item) + 1));
    }

    else {
        window.sessionStorage.setItem(PID, 1);
        console.log("added new 1");
    }

    checkCart();
}

checkCart();
addToCartProductContainer.addEventListener("click", addItem);
wishItemContainer.addEventListener("click", clearCart);