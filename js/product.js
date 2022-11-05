const pImageContainer = document.querySelector(".product-image-container");
const pName = document.querySelector(".product-title");
const pPrice = document.querySelector(".price");

const queryString = document.location.search;
const parameter = new URLSearchParams(queryString);
const pID = parameter.get("productID");

const baseURL = "https://www.rainydays.casa/wp-json/wc/store/products/?P=";

const productURL = baseURL + pID;

async function getProduct() {

    try {
        const response = await fetch(productURL);
        const product = await response.json();
    
        console.log(product);
        // productsContainer.innerHTML = displayDetail(product);
        // pImageContainer.innerHTML = `<img src="${product["images"][0]["src"]}" alt="red hiking puffer jacket" class="product-image">`;
        pImageContainer.innerHTML = `Success`;
    } 
    
    catch (error) {
        pImageContainer.innerHTML = displayMessage("An error has occurred. Please try again", "error");
    }
}

getProduct();