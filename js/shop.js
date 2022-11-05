const productsContainer = document.querySelector(".collection-container");

const url = "https://www.rainydays.casa/wp-json/wc/store/products";


// orderby id and order ascending
// https://www.rainydays.casa/wp-json/wc/store/products/?orderby=id&order=asc

async function getProducts() {

    try {
        const response = await fetch(url);
        const products = await response.json();
    
        console.log(products);
        productsContainer.innerHTML = displayProducts(products);
    
    } 
    
    catch (error) {
        productsContainer.innerHTML = displayMessage("An error has occurred. Please try again", "error");
    }
}

getProducts();