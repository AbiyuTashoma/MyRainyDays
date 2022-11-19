const productsContainer = document.querySelector(".collection-container");

const orderByContainer = document.querySelector(".orderby");

const searchItemContainer = document.querySelector("#search-item");
const searchFormContainer = document.querySelector(".search");

const url = "https://www.rainydays.casa/wp-json/wc/store/products/?per_page=15";


async function getProducts(targetUrl) {

    try {
        const response = await fetch(targetUrl);
        const products = await response.json();
    
        productsContainer.innerHTML = displayProducts(products);

    } 
    
    catch (error) {
        productsContainer.innerHTML = displayMessage("An error has occurred. Please try again", "error");
    }

}

getProducts(url);

// order products
orderByContainer.onchange = function () {
    const orderBy = orderByContainer.value;
    let newURL = `https://www.rainydays.casa/wp-json/wc/store/products/?per_page=15&orderby=${orderBy}`;

    if (orderBy === "lowprice") {
        newURL = `https://www.rainydays.casa/wp-json/wc/store/products/?per_page=15&orderby=price&order=asc`;
    }

    getProducts(newURL);

}

// search for products
function searchProduct (event) {
    event.preventDefault();
    const searchText = searchItemContainer.value;
    const searchUrl = `https://www.rainydays.casa/wp-json/wc/store/products/?search=${searchText}`;

    getProducts(searchUrl);

}

searchFormContainer.addEventListener("submit", searchProduct);
