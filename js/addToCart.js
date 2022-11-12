const addToCartProductContainer = document.querySelector("#addtocart-product");
const cartItemsContainer = document.querySelector(".cart-items");
const wishItemContainer = document.querySelector("#addtowish-product");

const addToCartQueryString = document.location.search;
const addToCartParameter = new URLSearchParams(addToCartQueryString);
const addToCartPID = addToCartParameter.get("productID");

function addItem(event) {
    window.sessionStorage.setItem("id", addToCartPID);
    cartItemsContainer.style.display = "block";
    cartItemsContainer.innerHTML = addToCartPID;
    console.log(addToCartPID);
}

function checkItem() {
    const items = window.sessionStorage.getItem("id");
    if (items) {
        cartItemsContainer.style.display = "block";
        cartItemsContainer.innerHTML = items;
        console.log(items);
    }
}

addToCartProductContainer.addEventListener("click", addItem);
wishItemContainer.addEventListener("click", checkItem);