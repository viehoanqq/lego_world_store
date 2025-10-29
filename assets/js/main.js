

//login
document.addEventListener("DOMContentLoaded", function () {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const name = document.getElementById("name");
    const accountLink = document.getElementById("account-link");
    if (isLoggedIn === "true") {
        name.textContent = "Việt Hoàng";
        accountLink.setAttribute("href", "/user/account/profile.html");
    }

    const cartlink = document.getElementById("cart-link");
    cartlink.addEventListener("click", function (event) {
        if (isLoggedIn === "false") {
            event.preventDefault();
            alert("Vui lòng đăng nhập để xem giỏ hàng.");
            window.location.href = "/user/account/login.html";
        }
 
    },);
});