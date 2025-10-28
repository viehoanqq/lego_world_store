
    document.addEventListener("DOMContentLoaded", function () {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const name = document.getElementById("name");
    const accountLink = document.getElementById("account-link");
    if (isLoggedIn === "true") {
        name.textContent = "Việt Hoàng";
        accountLink.setAttribute("href", "user/account/profile.html");
    }
    });
