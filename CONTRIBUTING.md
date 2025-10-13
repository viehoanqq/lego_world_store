
---

# CONTRIBUTING.md — Hướng dẫn đóng góp và quy trình Git cho nhóm

Tài liệu này mô tả quy trình làm việc với Git cho nhóm. Mỗi thành viên cần tuân thủ để đảm bảo dự án được quản lý chuyên nghiệp và tránh xung đột mã nguồn.

---

## Cấu trúc nhánh

* `main`: nhánh ổn định, chỉ Leader có quyền merge vào.
* `branch-hoang`, `branch-anh`, `branch-binh`, `branch-chi`: nhánh cá nhân của từng thành viên. Mỗi thành viên chỉ làm việc trên nhánh riêng của mình.

---

## Thiết lập lần đầu

1. Cài đặt Git và VS Code nếu cần.
2. Clone repository về máy:

```bash
git clone https://github.com/viehoanqq/lego_world_store.git
cd lego_world_store
```

3. Nếu chưa có nhánh cá nhân trên local, checkout và push lên remote:

```bash
git checkout -b branch-ten-minh
git push origin branch-ten-minh
```

---

## Trước khi bắt đầu code

Mỗi lần làm việc mới, luôn đảm bảo bạn đang ở trên nhánh cá nhân, cập nhật từ remote và đồng bộ với `main`:

```bash
git checkout branch-cua-toi 
git pull origin branch-cua-toi
git fetch origin main
git merge origin main
```

Nếu có conflict, xử lý ngay tại bước này trước khi code.

---

## Trong khi code

* Thực hiện công việc theo task được giao.
* Chia commit thành từng thay đổi nhỏ, có ý nghĩa, tránh gom tất cả vào một commit lớn.
* Test cục bộ để đảm bảo code hoạt động đúng.

---

## Commit và push code

1. Thêm các file thay đổi:

```bash
git add .
# hoặc chỉ add file cụ thể
git add path/to/file
```

2. Tạo commit với message ngắn gọn và rõ ràng. Message nên có cấu trúc:

```
TYPE: mô tả ngắn
```

Ví dụ:

```bash
git commit -m "feat: thêm chức năng đăng nhập"
git commit -m "fix: sửa lỗi validate form"
git commit -m "docs: bổ sung hướng dẫn cài đặt"
```

Trong đó TYPE có thể là: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`.

3. Đẩy code lên remote:

```bash
git push origin branch-cua-toi
```

---

## Tạo Pull Request (PR) để merge vào main

1. Truy cập repository trên GitHub, chọn tab **Pull Requests** và bấm **New pull request**.
2. Chọn base là `main` và compare là `branch-cua-toi`.
3. Viết tiêu đề và mô tả ngắn gọn cho PR, bao gồm nội dung thay đổi, cách kiểm thử và link issue (nếu có).
4. Submit PR để Leader review.

---

## Review và merge

* Chỉ Leader được quyền merge vào `main`.
* Thành viên submit PR và chờ Leader review.
* Nếu PR bị báo conflict, thành viên cần xử lý conflict trên local:

```bash
git checkout branch-cua-toi
git fetch origin
git merge origin/main
# sửa conflict, sau đó:
git add .
git commit -m "fix: resolve conflict với main"
git push origin branch-cua-toi
```

Sau khi push, PR sẽ được cập nhật và có thể merge.

---

## Quy tắc chung

* Không ai được push trực tiếp vào `main`.
* Mỗi thành viên chỉ làm việc trên nhánh riêng của mình.
* Trước khi bắt đầu code, luôn pull nhánh cá nhân và merge từ `main`.
* Commit message phải rõ ràng, ngắn gọn.
* Tất cả thay đổi phải được test trước khi push.
* Mọi thay đổi đều phải thông qua Pull Request.

---

## Checklist nhanh

1. `git checkout branch-cua-toi`
2. `git pull origin branch-cua-toi`
3. `git merge origin/main` (xử lý conflict nếu có)
4. Code và test cục bộ
5. `git add .`
6. `git commit -m "TYPE: mô tả ngắn"`
7. `git push origin branch-cua-toi`
8. Tạo Pull Request từ nhánh cá nhân vào main
9. Chờ Leader review và merge

---
