function displayProducts (products) {
    let html = "";
    for (let i = 0; i < products.length; i++) {
            html += `<div class="item-container">
                        <a href="product.html?productID=${products[i]["id"]}">
                            <img src="${products[i]["images"][0]["src"]}" class="grid-image" alt="hiking jacket woman">                                                
                        </a>
                        <div class="product-footer">
                            <div class="title-container">                                
                                <a href="product.html?productID=${products[i]["id"]}" class="a-title">
                                    <p class="p-title">${products[i]["name"]}</p>
                                    <p class="p-price">${products[i]["price_html"]}</p>
                                </a>
                            </div>
                                <a href="product.html?productID=${products[i]["id"]}" class="a-title">
                                    <div>
                                        <input type="button" class="view-product" id="viewproduct" value="View">
                                    </div>
                                </a>
                            </div>
                    </div>`;     
    }

    return html;
}