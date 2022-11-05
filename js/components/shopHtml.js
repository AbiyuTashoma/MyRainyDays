const addToCartHTML = `<div>
                            <input type="submit" class="add-to-cart" id="addtocart">
                            <label for="addtocart" title="add to cart">
                                <div class="add-to-cart-shop">
                                    <div class="cart-container">
                                        <img src="icons/cart.svg" alt="cart" class="cartsize-shop">
                                        <p class="add-cart">+</p>
                                    </div>
                                    <p class="add-to-cart-txt-shop">Add To Cart</p>
                                </div>
                            </label>
                        </div>`;
                        
function displayProducts (products) {
    let html = "";
    for (let i = 0; i < products.length; i++) {
            html += `<div class="item-container">
                        <a href="product.html?productID=${products[i]["id"]}">
                            <img src="${products[i]["images"][0]["src"]}" class="grid-image" alt="hiking jacket woman">                                                
                        </a>
                        <div class="product-footer">
                            <div>                                
                                <a href="product.html?productID=${products[i]["id"]} class="a-title">
                                    <p class="p-title">${products[i]["name"]}</p>
                                    <p class="p-price">${products[i]["price_html"]}</p>
                                </a>
                            </div>
                            ${addToCartHTML}
                        </div>
                    </div>`;     
    }

    return html;
}