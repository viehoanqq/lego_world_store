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
  document.querySelectorAll(".btn-add-to-cart, .btn-add-cart").forEach(button => {
    button.addEventListener("click", function (e) {
      e.preventDefault();  // Ngăn <a> chạy
      e.stopPropagation(); // Ngăn event lan ra thẻ cha

      if (!isLoggedIn) {
        alert("Bạn cần đăng nhập trước khi thêm sản phẩm vào giỏ hàng!");
        return;
      }

      alert("Đã thêm vào giỏ hàng!");
    });
  });
  document.querySelectorAll(".btn-buy-now").forEach(button => {
    button.addEventListener("click", function (e) {
      e.preventDefault();  // Ngăn <a> chạy
      e.stopPropagation(); // Ngăn event lan ra thẻ cha

      if (!isLoggedIn) {
        alert("Bạn cần đăng nhập trước khi thêm sản phẩm vào giỏ hàng!");
        return;
      }
      window.location.href = path("/user/cart/cart-cart.html");
    });
  });
   const trigger = document.getElementById('openAdvancedSearch');
  const overlay = document.getElementById('advancedSearchOverlay');
  const closeBtn = document.getElementById('closeAdvancedSearch');
  const form = document.getElementById('advancedSearchForm');

  // Mở popup
  if (trigger) {
    trigger.addEventListener('click', () => {
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  // Đóng popup
  function closePopup() {
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  closeBtn?.addEventListener('click', closePopup);
  overlay?.addEventListener('click', (e) => {
    if (e.target === overlay) closePopup();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) closePopup();
  });

  // Xử lý tìm kiếm → chuyển đến trang search.html kèm tham số
  form?.addEventListener('submit', function(e) {
    e.preventDefault();

    const params = new URLSearchParams();
    const keyword = document.getElementById('keyword').value.trim();
    const category = document.getElementById('category').value;
    const age = document.getElementById('age').value;
    const priceMin = document.getElementById('priceMin').value;
    const priceMax = document.getElementById('priceMax').value;

    if (keyword) params.append('q', keyword);
    if (category) params.append('cat', category);
    if (age) params.append('age', age);
    if (priceMin) params.append('min', priceMin);
    if (priceMax) params.append('max', priceMax);
    window.location.href = path("/user/product/search.html");
  });
});