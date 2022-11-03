const productsContainer = document.querySelector(".display");

const url = "https://www.rainydays.casa/wp-json/wc/store/products";

async function getProducts() {

    try {
        const response = await fetch(url);
        const products = await response.json();
    
        console.log(products);
        productsContainer.innerHTML = `<p>name: ${products[0]["name"]}</p>
                                        <p>price: ${products[0]["prices"]["price"]} ${products[0]["prices"]["currency_code"]}</p>
                                        <img src="${products[0]["images"][0]["src"]}">`;
    
    } 
    
    catch (error) {
        productsContainer.innerHTML = error;
    }
}

getProducts();