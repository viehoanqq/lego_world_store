document.addEventListener("DOMContentLoaded", function () {
  const REPO_NAME = "lego_world_store";
  let BASE_URL = "";
  let FILE_ROOT_PREFIX = "";
  let isFile = window.location.protocol === "file:";


  if (isFile) {
    const mainScript = document.querySelector('script[src*="assets/js/admin.js"]');
    if (mainScript) {
      const scriptSrc = mainScript.getAttribute('src');
      FILE_ROOT_PREFIX = scriptSrc.substring(0, scriptSrc.indexOf('assets/js/admin.js'));
    }
  }

  if (!isFile && window.location.hostname.includes("github.io")) {
    BASE_URL = `${window.location.origin}/${REPO_NAME}`;
  } else if (!isFile) {
    BASE_URL = window.location.origin;
  }

  function path(relativePath) {
    if (!relativePath) return "";
    const cleanPath = relativePath.startsWith('/') ? relativePath.substring(1) : relativePath;

    if (isFile) {
      return `${FILE_ROOT_PREFIX}${cleanPath}`;
    }
    return `${BASE_URL}/${cleanPath}`;
  }

  const fixPaths = (selector, attr) => {
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
});