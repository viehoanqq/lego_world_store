lego_world_store/
│
├── index.html                       # Trang chủ khách hàng
│
├── pages/                           # Trang hiển thị thông tin chung
│   ├── policy.html
│   ├── contact.html
│   ├── about.html
│   └── 404.html
│
├── components/                       # HTML tái sử dụng
│   ├── header.html
│   └── footer.html
│
├── user/                              # Module xử lý end-user
│   ├── account/
│   │   ├── login.html
│   │   ├── register.html
│   │   ├── profile.html
│   │   └── edit.html
│   ├── product/
│   │   ├── list.html
│   │   ├── detail.html
│   │   └── search.html
│   ├── cart/
│   │   └── cart.html
│   └── checkout/
│       └── checkout.html
│
├── admin/                            # Module xử lý Admin-panel
│   ├── login.html
│   ├── dashboard.html
│   ├── users/
│   │   ├── list.html
│   │   ├── reset-password.html
│   │   └── lock-unlock.html
│   ├── product-types/
│   │   ├── add.html
│   │   ├── edit.html
│   │   ├── delete.html
│   │   └── hidden.html
│   │    
│   ├── products/
│   │   ├── add.html
│   │   ├── edit.html
│   │   ├── delete.html
│   │   └── hidden.html
│   ├── import/
│   │   ├── list.html
│   │   ├── add.html
│   │   └── edit.html
│   ├── pricing/
│   │   ├── list.html
│   │   └── edit.html
│   ├── orders/
│   │   ├── list.html
│   │   └── details.html
│   └── inventory/
│       ├── stock.html
│       ├── warning.html
│       └── history.html
│
├── assets/
│   ├── css/                         # Tất cả CSS
│   │   ├── index.css                  # CSS chung toàn site
│   │   │
│   │   ├── pages/                    # CSS cho các trang thông tin
│   │   │   ├── policy.css
│   │   │   ├── contact.css
│   │   │   ├── about.css
│   │   │   └── 404.css
│   │   │
│   │   ├── user/                     # CSS module end-user
│   │   │   ├── account.css
│   │   │   ├── product.css
│   │   │   ├── cart.css
│   │   │   └── checkout.css
│   │   │
│   │   ├── components/              # CSS cho header/footer
│   │   │   ├── header.css
│   │   │   └── footer.css
│   │   │
│   │   └── admin/                    # CSS module admin
│   │       ├── login.css
│   │       ├── dashboard.css
│   │       ├── users.css
│   │       ├── product-types.css
│   │       ├── products.css
│   │       ├── import.css
│   │       ├── pricing.css
│   │       ├── orders.css
│   │       └── inventory.css
│   │
│   ├── images/                       # Hình ảnh
│   │   ├── logo.png
│   │   ├── banner1.jpg
│   │   └── ...
│   │
│   └── fonts/                        # Font chữ offline
├── README.md
└── CONTRIBUTING.md
