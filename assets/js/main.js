

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

    const REPO_NAME = "lego_world_store"; 
    let BASE_URL = window.location.origin;
    if (window.location.hostname.includes("github.io")) {
    BASE_URL += `/${REPO_NAME}`;
}
    function path(relativePath) {
    return `${BASE_URL}${relativePath.startsWith("/") ? "" : "/"}${relativePath}`;
}
    document.querySelectorAll("a[href^='/']").forEach(link => {
    const fixed = path(link.getAttribute("href"));
    link.setAttribute("href", fixed);
  });
});
