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

async function displayRelatedProducts (relatedProductsContainer, related, baseURL, consumerKey, consumerSecret) {

    
    relatedProductsContainer.innerHTML = "";
    for (let i = 0; i < related.length; i++) {
    
        try {    
                const rproductURL = `${baseURL}${related[i]}?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
            
                const rresponse = await fetch(rproductURL);
                const rproduct = await rresponse.json();
    
                relatedProductsContainer.innerHTML += `<div>
                            <img src="${rproduct["images"][0]["src"]}" alt="${rproduct["name"]}" class="product-image">
                            <p>${rproduct["name"]}</p>
                            <p>${rproduct["price_html"]}</p>
                    </div>`;                
        }
    
        catch(error) {
            relatedProductsContainer.innerHTML += displayMessage("An error has occurred. Please try again", "error");
        }
    }

}