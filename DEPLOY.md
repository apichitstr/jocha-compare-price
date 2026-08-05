# Deploy ขึ้น GitHub Pages

## 1. สร้าง repository บน GitHub

สร้าง repo ใหม่ชื่อแนะนำ: `jocha-compare-price`

## 2. อัปโหลดไฟล์ขึ้น repo

ไฟล์ที่ต้องมีอยู่ที่ root ของ repo:
- `index.html`
- `styles.css`
- `app.js`
- `README.md`

หรือใช้สคริปต์ช่วย push:

```powershell
.\PUBLISH.ps1 -GitHubUser <your-github-username> -RepoName jocha-compare-price
```

## 3. เปิด GitHub Pages

1. เข้า repo บน GitHub
2. ไปที่ `Settings` -> `Pages`
3. ที่ `Build and deployment`
4. เลือก `Source: Deploy from a branch`
5. เลือก branch `main` และ folder `/ (root)`
6. กด `Save`

## 4. รอระบบ deploy

รอประมาณ 1-3 นาที แล้วเปิด URL:

`https://<your-github-username>.github.io/jocha-compare-price/`

## 5. อัปเดตเวอร์ชันใหม่

เมื่อแก้ไฟล์แล้ว push เข้า `main` ระบบจะ deploy ใหม่อัตโนมัติ

## คำสั่ง Git แบบ manual

```powershell
git init
git checkout -B main
git add .
git commit -m "Initial commit: Jocha Compare Price"
git remote add origin https://github.com/<your-github-username>/jocha-compare-price.git
git push -u origin main
```
