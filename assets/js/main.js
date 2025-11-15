document.addEventListener("DOMContentLoaded", function () {
  const REPO_NAME = "lego_world_store";
  let BASE_URL = "";
  let FILE_ROOT_PREFIX = ""; // Tiền tố cho đường dẫn khi chạy file://
  let isFile = window.location.protocol === "file:";

  // --- PHẦN SỬA LỖI CHO FILE:// ---
  const mainScript = document.querySelector('script[src*="assets/js/main.js"]');
  if (isFile && mainScript) {
    const scriptSrc = mainScript.getAttribute('src');
    FILE_ROOT_PREFIX = scriptSrc.substring(0, scriptSrc.indexOf('assets/js/main.js'));
  }

  // Xác định BASE_URL cho môi trường server
  if (!isFile && window.location.hostname.includes("github.io")) {
    BASE_URL = `${window.location.origin}/${REPO_NAME}`;
  } else if (!isFile) {
    BASE_URL = window.location.origin;
  }

  // Hàm chuyển đường dẫn
  function path(relativePath) {
    if (!relativePath) return "";
    const cleanPath = relativePath.startsWith('/') ? relativePath.substring(1) : relativePath;
    if (isFile) return `${FILE_ROOT_PREFIX}${cleanPath}`;
    return `${BASE_URL}/${cleanPath}`;
  }

  // Sửa tất cả đường dẫn
  const fixPaths = (selector, attr) => {
    document.querySelectorAll(`${selector}[${attr}^='/']`).forEach(el => {
      const originalPath = el.getAttribute(attr);
      el.setAttribute(attr, path(originalPath));
    });
  };
  fixPaths("a", "href");
  fixPaths("img", "src");
  fixPaths("head link", "href");
  fixPaths("head script", "src");

  // ===============================================
  // LOGIN LOGIC
  // ===============================================
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const username = localStorage.getItem("username");

  const nameEl = document.getElementById("name");
  const accountLink = document.getElementById("account-link");
  const cartLink = document.getElementById("cart-link");

  if (isLoggedIn && nameEl && accountLink) {
    nameEl.textContent = username || "User";
    accountLink.setAttribute("href", path("/user/account/profile.html"));
  }

  if (cartLink) {
    cartLink.addEventListener("click", function (event) {
      if (!isLoggedIn) {
        event.preventDefault();
        alert("Vui lòng đăng nhập để xem giỏ hàng.");
        window.location.href = path("/user/account/login.html");
      }
    });
  }

  // ===============================================
  // Xử lý tất cả nút thêm vào giỏ
  // ===============================================
  document.querySelectorAll(".btn-add-to-cart, .btn-add-cart, .btn-buy-now").forEach(button => {
    button.addEventListener("click", function (e) {
      e.preventDefault();  // Ngăn <a> chạy
      e.stopPropagation(); // Ngăn event lan ra thẻ cha

      if (!isLoggedIn) {
        alert("Bạn cần đăng nhập trước khi thêm sản phẩm vào giỏ hàng!");
        return;
      }

      alert("Đã thêm vào giỏ hàng!");
      window.location.href = path("/user/cart/cart-cart.html");
    });
  });

});
