![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

# 🍎 Webfruits – Modern Responsive Fruit Shop Template

![Logo](https://github.com/HoBichLien/traicay/blob/main/logo.png?raw=true)

## 📘 Documentation
📗 [View Full Documentation](https://traicay-five.vercel.app/documentation/documentation.html)

## 🌿 Overview
**Webfruits** is a clean, modern, and fully responsive website template for **fruit shops, organic stores, and healthy product businesses**.  
Built with **HTML5, CSS, and JavaScript**, it’s easy to customize and ideal for beginners or developers who want a professional online fruit store.

**Key highlights:**
- Mobile-friendly and responsive layout  
- Multiple pages ready: Index, Shop, Cart, Blog, About, Contact, Login/Register, Wishlist, About Us,Detail,Forgot-password
- Clean, well-commented code  
- Easy integration with any backend (Node.js, PHP, Flask/Django)  

> ⚠️ Note: This is a **Frontend Only** template (HTML, CSS, JS).  
> Backend features such as product management or authentication are not included.

---

## 📸 Screenshots

**(Replace these with your actual screenshots in `assets/images/screenshots/`)**

![Home Page](https://github.com/HoBichLien/traicay/blob/main/home.png?raw=true) 
![Shop Page](https://github.com/HoBichLien/traicay/blob/main/shop.png?raw=true)  
![Cart Page](https://github.com/HoBichLien/traicay/blob/main/cart.png?raw=true)  
![About Page](https://github.com/HoBichLien/traicay/blob/main/about.png?raw=true) 
![Contact Page](https://github.com/HoBichLien/traicay/blob/main/contact.png?raw=true)  
![Blog Page](https://github.com/HoBichLien/traicay/blob/main/blog.png?raw=true)
![Wishlist Page](https://github.com/HoBichLien/traicay/blob/main/wishlist.png?raw=true) 
![Login Page](https://github.com/HoBichLien/traicay/blob/main/login.png?raw=true)  
![Register Page](https://github.com/HoBichLien/traicay/blob/main/register.png?raw=true)
![Forgot-password Page](https://github.com/HoBichLien/traicay/blob/main/forgot-password.png?raw=true) 
![Single-post Page](https://github.com/HoBichLien/traicay/blob/main/single-post.png?raw=true)  
![Detail Page](https://github.com/HoBichLien/traicay/blob/main/detail.png?raw=true)

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
```
webfruits/
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
│   │   ├── banners/
│   │   ├── favicon/
│   │   └── products/
│
└── documentation/
    └── documentation.html
```
##💻 Technologies Used

Frontend: HTML5, CSS, JavaScript

Icons: Font Awesome

Fonts: Google Fonts

Images: Unsplash

##📄 License

Released under the MIT License – free for personal and commercial use.
See license.txt for full terms.

##📬 Support

If you have questions or need help integrating a backend:
Email: eprojectbeginer@gmail.com
