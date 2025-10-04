```plaintext
lego_shop/
│
├── index.html                            # Trang chủ
│
├── about.html
├── contact.html
├── policy.html
│
├── /user                                 # Giao diện người dùng (khách hàng)
│   ├── account-login.html
│   ├── account-register.html
│   ├── account-profile.html
│   ├── catalog.html
│   ├── product-detail.html
│   ├── search-results.html
│   ├── cart.html
│   ├── checkout.html
│   ├── order-confirmation.html
│   ├── orders.html
│   └── order-detail-user.html
│
├── /admin                                # Giao diện quản trị viên
│   ├── admin-login.html
│   ├── dashboard.html
│   ├── users.html
│   ├── product-types.html
│   ├── products.html
│   ├── product-add.html
│   ├── product-edit.html
│   ├── imports.html
│   ├── import-add.html
│   ├── import-edit.html
│   ├── pricing.html
│   ├── orders.html
│   ├── order-detail.html
│   └── inventory.html
│
├── /components                           # Chứa phần tái sử dụng
│   ├── header.html                       # Header chung (user)
│   ├── footer.html                       # Footer chung (user)
│   ├── admin-header.html                 # Header riêng cho admin
│   └── admin-sidebar.html                # Menu trái (admin)
│
├── /css                                  # Mỗi trang có CSS riêng
│   ├── index.css
│   ├── about.css
│   ├── contact.css
│   ├── policy.css
│   ├── account-login.css
│   ├── account-register.css
│   ├── account-profile.css
│   ├── catalog.css
│   ├── product-detail.css
│   ├── search-results.css
│   ├── cart.css
│   ├── checkout.css
│   ├── order-confirmation.css
│   ├── orders.css
│   ├── order-detail-user.css
│   ├── admin-login.css
│   ├── dashboard.css
│   ├── users.css
│   ├── product-types.css
│   ├── products.css
│   ├── product-add.css
│   ├── product-edit.css
│   ├── imports.css
│   ├── import-add.css
│   ├── import-edit.css
│   ├── pricing.css
│   ├── admin-orders.css
│   ├── order-detail.css
│   └── inventory.css
│
├── /assets
│   ├── /images                           # Hình sản phẩm, logo
│   │   ├── logo.png
│   │   ├── banner1.jpg
│   │   └── ...
│   ├── /icons                            # Icon SVG, PNG
│   │   ├── cart.svg
│   │   └── search.svg
│   └── /fonts                            # Font chữ offline
├── CONTRIBUTING.md
└── README.md                          

