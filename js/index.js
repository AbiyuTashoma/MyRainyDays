const featuredProductsContainer = document.querySelector(".featured-products");

const featuredUrl = "https://www.rainydays.casa/wp-json/wc/store/products/?featured=true";

async function getFeaturedProducts() {

    featuredProductsContainer.innerHTML = "";

    try {
        const fResponse = await fetch(featuredUrl);
        const fProducts = await fResponse.json();
    
        for (let i = 0; i < 4; i++) {
            featuredProductsContainer.innerHTML += `
            <a href="product.html?productID=${fProducts[i]["id"]}" class="product-a">
                <img src="${fProducts[i]["images"][0]["src"]}" alt="${fProducts[i]["name"]}" class="product-image">
                <p class="related-title">${fProducts[i]["name"]}</p>
                <p class="related-title">${fProducts[i]["price_html"]}</p>
            </a>
        `;
        }

    } 
    
    catch (error) {
        featuredProductsContainer.innerHTML = displayMessage("An error has occurred. Please try again", "error");
    }

}

getFeaturedProducts();