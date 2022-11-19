// prevent defalt search
const searchFormContainer = document.querySelector(".search");

function preventSearchProduct (event) {
    event.preventDefault();
}

searchFormContainer.addEventListener("submit", preventSearchProduct);