const indicatorMenuContainer = document.querySelector(".indicator-menu");

const pImageContainer = document.querySelector(".product-image-container");
const pNameContainer = document.querySelector(".product-title");
const pPriceContainer = document.querySelector(".price");

const sizeContainer = document.querySelector("#size");
const colorContainer = document.querySelector("#color");

const descriptionContainer = document.querySelector(".description");


const relatedProductsContainer = document.querySelector(".related-products");

const queryString = document.location.search;
const parameter = new URLSearchParams(queryString);
const pID = parameter.get("productID");

const baseURL = "https://www.rainydays.casa/wp-json/wc/v3/products/";
const storeURL = "https://www.rainydays.casa/wp-json/wc/store/products/?per_page=15";

const consumerKey = "ck_410e0eecbaff8e7d39eee8fefaa6ac02fab52640";
const consumerSecret = "cs_bd76bc88ee10754a51d8f7bb7a7405ef4d668a22";

const productURL = `${baseURL}${pID}?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;

async function getProduct() {

    try {
        const response = await fetch(productURL);
        const product = await response.json();
    
        pImageContainer.innerHTML = `<img src="${product["images"][0]["src"]}" alt="${product["name"]}" class="product-image">`;
        pNameContainer.innerHTML = `${product["name"]}`;
        pPriceContainer.innerHTML = `${product["price_html"]}`;

        sizeContainer.innerHTML = createAttribute(product["attributes"], "size");
        colorContainer.innerHTML = createAttribute(product["attributes"], "color");
        
        descriptionContainer.innerHTML = `About the product: ${product["description"]}`;
        indicatorMenuContainer.innerHTML += `${product["name"]}`;

        displayRelatedProducts (relatedProductsContainer, product.related_ids, storeURL);
    } 
    
    catch (error) {
        pImageContainer.innerHTML = displayMessage("An error has occurred. Please try again", "error");
    }

}

getProduct();

displayViewCart();


