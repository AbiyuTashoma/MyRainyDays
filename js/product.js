const productsContainer = document.querySelector(".collection-container");

const url = "https://www.rainydays.casa/wp-json/wc/store/products";

async function getProducts() {

    try {
        const response = await fetch(url);
        const products = await response.json();
    
        console.log(products);
        productsContainer.innerHTML = displayProducts(products);
    
    } 
    
    catch (error) {
        productsContainer.innerHTML = error;
    }
}

getProducts();