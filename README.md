# 🍎 Fresh Fruits – Modern Responsive Fruit Shop Template

![[Logo](https://github.com/HoBichLien/traicay/blob/main/logo.png)]

## 🌿 Overview
**Fresh Fruits** is a clean, modern, and fully responsive website template for **fruit shops, organic stores, and healthy product businesses**.  
Built with **HTML5, CSS, and JavaScript**, it’s easy to customize and ideal for beginners or developers who want a professional online fruit store.

**Key highlights:**
- Mobile-friendly and responsive layout  
- Multiple pages ready: Index, Shop, Cart, Blog, About, Contact, Login/Register, Wishlist, About Us,Detail,Forgot-password
- Clean, well-commented code  
- Easy integration with any backend (Node.js, PHP, Flask/Django)  

---

## 📸 Screenshots

**(Replace these with your actual screenshots in `assets/images/screenshots/`)**

![Home Page](assets/images/screenshots/home.png)  
![Shop Page](assets/images/screenshots/shop.png)  
![Cart Page](assets/images/screenshots/cart.png)  
![Product Detail](assets/images/screenshots/detail.png)  
![Blog Page](assets/images/screenshots/blog.png)  

> Tip: Capture **full-page screenshots** using Chrome DevTools → `Capture full size screenshot` for the best results.

---

## ✨ Features

### Frontend
- Fully responsive, mobile-first design  
- Built with pure HTML5, CSS3, JavaScript (no frameworks)  
- Well-organized reusable components  
- SEO-friendly structure  
- Product listing ready to connect to API  
- Easy to customize colors, fonts, and content  

### Pages Included
- `index.html` – Home  
- `shop.html` – Product listing  
- `cart.html` – Shopping cart  
- `detail.html` – Product detail  
- `blog.html`, `single-post.html` – Blog pages  
- `about.html`, `contact.html` – About and Contact  
- `login.html`, `register.html`, `forgot-password.html` – Authentication  
- `wishlist.html` – Wishlist  

### Optional Backend
- Can integrate with **Node.js, PHP, or Python (Flask/Django)**  
- Includes:
  - Product API (GET, POST, DELETE)  
  - User authentication (Login/Register)  
  - Contact form endpoint  
- Frontend is structured for easy API integration  

---

## 🧭 How to Run (Frontend Only)
1. Download and extract the `.zip` file.  
2. Open the `index.html` in your browser.  
3. Done! 🎉  

---

## 🧱 How to Connect with Backend
1. Update API endpoints in `assets/js/main.js`  
   ```js
   const API_URL = "https://yourserver.com/api/products";
   fetch(API_URL)
       .then(res => res.json())
       .then(data => renderProducts(data));
##📁 Folder Structure
FreshFruits/
│
├── index.html
├── about.html
├── contact.html
├── shop.html
├── blog.html
├── detail.html
├── single-post.html
├── login.html
├── register.html
├── forgot-password.html
├── wishlist.html
├── cart.html
│
├── assets/
│   ├── css/
│   ├── js/
│   ├── images/
│   │   ├── logo.png
│   │   ├── screenshots/
│   │   │   ├── home.png
│   │   │   ├── shop.png
│   │   │   ├── cart.png
│   │   │   └── ...
│   │   └── products/
│
└── documentation/
    └── documentation.html
##💻 Technologies Used

Frontend: HTML5, CSS, JavaScript

Icons: Font Awesome

Fonts: Google Fonts

Images: Unsplash

##📄 License

Released under the MIT License – free for personal and commercial use.

##📬 Support

If you have questions or need help integrating a backend:
Email: eprojectbeginer@gmail.com
