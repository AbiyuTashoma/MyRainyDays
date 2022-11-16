const cartListContainer = document.querySelector(".cart-list");
const cartInfoContainer = document.querySelector(".cart-info");
const cartPageBtnContainer = document.querySelector(".cartpage-btn");
const checkoutContainer = document.querySelector("continue-checkout");
const continueShoppingContainer = document.querySelector(".continue-shopping");

const baseURL = "https://www.rainydays.casa/wp-json/wc/v3/products/";
const consumerKey = "ck_410e0eecbaff8e7d39eee8fefaa6ac02fab52640";
const consumerSecret = "cs_bd76bc88ee10754a51d8f7bb7a7405ef4d668a22";


async function displayCartProducts() {

    cartListArray = checkCart();
    
    cartInfoContainer.innerHTML = `<p>Cart is empty</p>`;
    let totalPrice = 0;
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
        cartPageBtnContainer.style.display = "flex";
    }

    for (let i = 0; i < cartListArray.length; i++) {
        
        try {    
            const cProductURL = `${baseURL}${cartListArray[i][0]}?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
        
            const cResponse = await fetch(cProductURL);
            const cProduct = await cResponse.json();

            totalPrice += parseInt(cProduct["price"]) * cartListArray[i][1];

            tableBody += `<tr>
                                <th scope="row">${i+1}</th>
                                <td>
                                    <a href="product.html?productID=${cProduct["id"]}"  class="td-description">
                                        <img src="${cProduct["images"][0]["src"]}" alt="${cProduct["name"]}" class="cart-product-image">
                                        <span>&nbsp;${cProduct["name"]}</span>
                                        <span>&nbsp;${cProduct["price_html"]}</span>
                                    </a>
                                </td>
                                <td>${cartListArray[i][1]}</td>
                                <td>${cProduct["price"]*cartListArray[i][1]}</td>
                            </tr>`;
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
                                                <td></td>
                                                <td></td>
                                                <td>Total sum</td>
                                                <td>${totalPrice}</td>
                                            </tr>
                                        </tfoot>
                                        
                                    </table>`;

}

displayCartProducts();