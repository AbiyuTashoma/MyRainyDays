const productsContainer = document.querySelector(".collection-container");

const orderByContainer = document.querySelector(".orderby");

const url = "https://www.rainydays.casa/wp-json/wc/store/products/?per_page=15";


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

// orderby id and order ascending
// https://www.rainydays.casa/wp-json/wc/store/products/?orderby=id&order=asc
// orderby=price asc and desc
// https://www.rainydays.casa/wp-json/wc/store/products/?orderby=price&order=desc
// date, price, rating, popularity, modified, id, include, title, slug, menu_order, comment_count

orderByContainer.onchange = async function () {
    const orderBy = orderByContainer.value;

    const newURL = `https://www.rainydays.casa/wp-json/wc/store/products/?per_page=15&orderby=${orderBy}`;

    try {
        const response = await fetch(newURL);
        const newList = await response.json();

        productsContainer.innerHTML = displayProducts(newList);
    }

    catch (error) {
        productsContainer.innerHTML = displayMessage("An error has occurred. Please try again", "error");
    }
}