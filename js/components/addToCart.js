const addToCartProductContainer = document.querySelector("#addtocart-product");
const viewCartContainer = document.querySelector(".viewcart");


function addItem(event) {
    const newQueryString = document.location.search;
    const newParameter = new URLSearchParams(newQueryString);
    const PID = newParameter.get("productID");

    const item = window.sessionStorage.getItem(PID);

    if (item) {
        window.sessionStorage.setItem(PID, parseInt(item) + 1);
    }

    else {
        window.sessionStorage.setItem(PID, 1);
    }

    checkCart();
    displayViewCart();

}

function displayViewCart() {
    if (checkCart().length) {
        viewCartContainer.style.display = "flex";
    }
}

checkCart();
displayViewCart();
addToCartProductContainer.addEventListener("click", addItem);