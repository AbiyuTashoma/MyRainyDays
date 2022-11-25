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

async function displayRelatedProducts (relatedProductsContainer, relatedProducts, urlRelated) {
    
    relatedProductsContainer.innerHTML = "";
    
        try {    
                const rResponse = await fetch(urlRelated);
                const rProduct = await rResponse.json();

                for (let i = 0; i < relatedProducts.length; i++) {
                    const rResult = rProduct.find(({ id }) => id == relatedProducts[i]);

                    relatedProductsContainer.innerHTML += `
                                                            <a href="product.html?productID=${rResult["id"]}" class="product-a">
                                                                <img src="${rResult["images"][0]["src"]}" alt="${rResult["name"]}" class="product-image">
                                                                <p class="related-title">${rResult["name"]}</p>
                                                                <p class="related-title">${rResult["price_html"]}</p>
                                                            </a>
                                                        `; 
                }
                
    
                               
        }
    
        catch(error) {
            relatedProductsContainer.innerHTML += displayMessage("An error has occurred. Please try again", "error");
        }

}