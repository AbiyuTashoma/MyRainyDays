const productsContainer = document.querySelector(".display");

const CORS_URL = "https://noroffcors.herokuapp.com/";
const url = "http://rainydays.rf.gd/wp-json/wc/store/products";
const api_url = CORS_URL + url;

const url2 = "http://flower-power.42web.io/wp-json";
const api_url2 = CORS_URL + url2;

async function getProducts() {

    try {
        const response = await fetch(api_url2);
        const products = await response.json();
    
        console.log(products);
    } 
    
    catch (error) {
        productsContainer.innerHTML = error;
    }
}

getProducts();