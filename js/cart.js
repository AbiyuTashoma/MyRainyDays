const user = window.sessionStorage.getItem("user");
const loginButton = document.querySelector("#login");
const loginLink = document.querySelector(".login-link");
const currentUser = document.querySelector(".current-user");
const registerContainer = document.querySelector(".register");

if (user) {
    loginButton.innerHTML = "Logout";
    loginLink.title = "logout";
    loginLink.href = "";
    currentUser.innerHTML = "UN";
    currentUser.style.display = "block";
    registerContainer.style.display = "none";
}

function logout() {
    const user = window.sessionStorage.getItem("user");

    if (user) {
        window.sessionStorage.removeItem("user");
        currentUser.style.display = "none";
    }
}

loginButton.addEventListener("click", logout);