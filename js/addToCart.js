// window.sessionStorage.setItem("user", userName);

const addToCartContainer = document.querySelector("#addtocart");
const addToCartProductContainer = document.querySelector("#addtocart-product");

const addToCartQueryString = document.location.search;
const addToCartParameter = new URLSearchParams(addToCartQueryString);
const addToCartPID = addToCartParameter.get("productID");

function addItem(event) {
    window.sessionStorage.setItem("id", addToCartPID);
    console.log(addToCartPID);
}

addToCartProductContainer.addEventListener("click", addItem);