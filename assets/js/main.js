document.addEventListener("DOMContentLoaded", function () {
  const REPO_NAME = "lego_world_store";
  let BASE_URL = "";
  let FILE_ROOT_PREFIX = ""; // Tiền tố cho đường dẫn khi chạy file://
  let isFile = window.location.protocol === "file:";

  // --- PHẦN SỬA LỖI CHO FILE:// ---
  // Tự động tìm đường dẫn tới thư mục gốc (root)
  // bằng cách xem script 'main.js' được gọi từ đâu
  if (isFile) {
    const mainScript = document.querySelector('script[src*="assets/js/main.js"]');
    if (mainScript) {
      const scriptSrc = mainScript.getAttribute('src');
      // Ví dụ: src là "../../assets/js/main.js"
      // Tiền tố (FILE_ROOT_PREFIX) sẽ là "../../"
      FILE_ROOT_PREFIX = scriptSrc.substring(0, scriptSrc.indexOf('assets/js/main.js'));
    }
  }
  // --- KẾT THÚC PHẦN SỬA LỖI ---

  // Xác định BASE_URL cho môi trường server (GitHub Pages hoặc localhost)
  if (!isFile && window.location.hostname.includes("github.io")) {
    BASE_URL = `${window.location.origin}/${REPO_NAME}`;
  } else if (!isFile) {
    BASE_URL = window.location.origin;
  }

  /**
   * Hàm 'path' đã được cập nhật
   * Nó sẽ chuyển đổi một đường dẫn gốc (ví dụ: "/assets/img.png")
   * thành đường dẫn chính xác cho mọi môi trường.
   */
  function path(relativePath) {
    if (!relativePath) return "";

    // Luôn xóa dấu / ở đầu để chúng ta kiểm soát tiền tố
    const cleanPath = relativePath.startsWith('/') ? relativePath.substring(1) : relativePath;

    if (isFile) {
      // Môi trường file://
      // Trả về: "../../" + "assets/images/logo.png" (ví dụ)
      return `${FILE_ROOT_PREFIX}${cleanPath}`;
    }

    // Môi trường Server (GitHub, localhost)
    // Trả về: "https://user.github.io/lego_world_store" + "/" + "assets/images/logo.png"
    return `${BASE_URL}/${cleanPath}`;
  }

  // Hàm này giữ nguyên như của bạn
  const fixPaths = (selector, attr) => {
    // Chỉ chọn các thuộc tính bắt đầu bằng "/"
    document.querySelectorAll(`${selector}[${attr}^='/']`).forEach(el => {
      const originalPath = el.getAttribute(attr);
      el.setAttribute(attr, path(originalPath));
    });
  };

  // Sửa tất cả đường dẫn
  fixPaths("a", "href");
  fixPaths("img", "src");
  fixPaths("head link", "href");
  fixPaths("head script", "src"); // Sửa cả script nếu có

  // ===============================================
  // LOGIN LOGIC (Giữ nguyên, giờ nó sẽ chạy đúng)
  // ===============================================
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const username = localStorage.getItem("username");

  const nameEl = document.getElementById("name");
  const accountLink = document.getElementById("account-link");
  const cartLink = document.getElementById("cart-link");

  if (isLoggedIn && nameEl && accountLink) {
    nameEl.textContent = username || "User";
    // Hàm path() sẽ tự động sửa link profile này
    accountLink.setAttribute("href", path("/user/account/profile.html"));
  }

  if (cartLink) {
    cartLink.addEventListener("click", function (event) {
      if (!isLoggedIn) {
        event.preventDefault();
        alert("Vui lòng đăng nhập để xem giỏ hàng.");
        // Hàm path() sẽ tự động sửa link login này
        window.location.href = path("/user/account/login.html");
      }
    });
  }
});

