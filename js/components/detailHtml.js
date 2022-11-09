function createAttribute (attributelist, attributeName) {
    let html = "";

    if (attributelist.length > 0) {
        for (let j = 0; j < attributelist.length; j++) {
            if (attributelist[j]["name"] == attributeName) {
                for (let i = 0; i < attributelist[j]["options"].length; i++) {
                    html += `<option value="${attributelist[j]["options"][i]}">${attributelist[j]["options"][i]}`;
                }
            }
        }
            
    }
    

    else {
        html = `<option value="none" disabled selected>none</option>`;
    }

    return html;
}

async function displayRelatedProducts (relatedProductsContainer, relatedProducts, baseURL, consumerKey, consumerSecret) {

    
    relatedProductsContainer.innerHTML = "";
    for (let i = 0; i < relatedProducts.length; i++) {
    
        try {    
                const rProductURL = `${baseURL}${relatedProducts[i]}?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
            
                const rResponse = await fetch(rProductURL);
                const rProduct = await rResponse.json();
    
                relatedProductsContainer.innerHTML += `
                                                            <a href="product.html?productID=${rProduct["id"]}" class="product-a">
                                                                <img src="${rProduct["images"][0]["src"]}" alt="${rProduct["name"]}" class="product-image">
                                                                <p class="related-title">${rProduct["name"]}</p>
                                                                <p class="related-title">${rProduct["price_html"]}</p>
                                                            </a>
                                                        `;                
        }
    
        catch(error) {
            relatedProductsContainer.innerHTML += displayMessage("An error has occurred. Please try again", "error");
        }
    }

}