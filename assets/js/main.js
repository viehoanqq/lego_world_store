document.addEventListener("DOMContentLoaded", function () {
  //fix path
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

  document.querySelectorAll("img[src^='/']").forEach(img => {
    const fixed_img = path(img.getAttribute("src"));
    img.setAttribute("src", fixed_img);
  });

  document.querySelectorAll("head link[href^='/']").forEach(link => {
    link.setAttribute("href", path(link.getAttribute("href")));
  });

  document.querySelectorAll("head script[src^='/']").forEach(script => {
    script.setAttribute("src", path(script.getAttribute("src")));
  });
  // Nếu đang mở trực tiếp qua file://
  //login
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const name = document.getElementById("name");
  const accountLink = document.getElementById("account-link");
  if (isLoggedIn === "true") {
    name.textContent = "Việt Hoàng";
    accountLink.setAttribute("href", path("/user/account/profile.html"));
  }

  const cartlink = document.getElementById("cart-link");
  cartlink.addEventListener("click", function (event) {
    if (isLoggedIn === "false") {
      event.preventDefault();
      alert("Vui lòng đăng nhập để xem giỏ hàng.");
      window.location.href = path("/user/account/login.html");
    }
  });
});
