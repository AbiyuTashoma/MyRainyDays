const cartListContainer = document.querySelector(".cart-list");
const cartInfoContainer = document.querySelector(".cart-info");
const cartPageBtnContainer = document.querySelector(".cartpage-btn");
const checkoutContainer = document.querySelector(".continue-checkout");
const continueShoppingContainer = document.querySelector(".continue-shopping");

const storeURL = "https://www.rainydays.casa/wp-json/wc/store/products/?per_page=15";

async function displayCartProducts() {

    cartListArray = checkCart();
    
    cartInfoContainer.innerHTML = `<p>Cart is empty</p>`;
    let totalPrice = 0;
    let currency = "";
    let tableBody = `<tr>
                        <th scope="row">0</th>
                        <td class="td-description">0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>`;

    if (cartListArray.length) {
        cartInfoContainer.style.display = "none";
        cartListContainer.innerHTML = `<div class="loading"></div>`;
        tableBody = "";
        checkoutContainer.style.display = "block";
        
        try {    

            const cResponse = await fetch(storeURL);
            const cProduct = await cResponse.json();

            currency = cProduct[0]["prices"]["currency_suffix"];

            for (let i = 0; i < cartListArray.length; i++) {

                const cResult = cProduct.find(({ id }) => id == cartListArray[i][0]);

                totalPrice += cResult["prices"]["price"] * parseInt(cartListArray[i][1]);

                tableBody += `<tr>
                                    <th scope="row">${i+1}</th>
                                    <td>
                                        <a href="product.html?productID=${cResult["id"]}"  class="td-description">
                                            <img src="${cResult["images"][0]["src"]}" alt="${cResult["name"]}" class="cart-product-image">
                                            <span>&nbsp;${cResult["name"]}</span>
                                            <span>&nbsp;${cResult["price_html"]}</span>
                                        </a>
                                    </td>
                                    <td>${cartListArray[i][1]}</td>
                                    <td>${cResult["prices"]["price"]*parseInt(cartListArray[i][1])}${cResult["prices"]["currency_suffix"]}</td>
                                </tr>`;
            }
        }

        catch(error) {
            cartListContainer.innerHTML += displayMessage("An error has occurred. Please try again", "error");
        }

    }

    cartListContainer.innerHTML = `<table>
                                        <caption>Cart list</caption>
                                        <thead>
                                            <tr>
                                                <th scope="col">item</th>
                                                <th scope="col">description</th>
                                                <th scope="col">quantity</th>
                                                <th scope="col">subtotal</th>
                                            </tr>
                                        </thead>
                                        <tbody>${tableBody}</tbody>
                                        <tfoot>
                                            <tr>
                                                <td class="no-border"></td>
                                                <td class="no-border"></td>
                                                <td>Total sum</td>
                                                <td>${totalPrice}${currency}</td>
                                            </tr>
                                        </tfoot>
                                        
                                    </table>`;

}

displayCartProducts();