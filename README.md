# E-Commerce Website

A complete online shopping platform built for small businesses and individual sellers. This project focuses on simple product browsing, secure authentication, and smooth checkout features.

## Project Status

### Completed
- User Signup
- User Login
- JWT Authentication
- User Roles (Admin, Seller, Customer)

### Upcoming Features
- Product listing
- Searching, filtering, sorting
- Pagination
- Cart system
- Coupon and discount system
- Online payments 
- Cashback system
- Admin and seller dashboard

---

## Project Purpose

- Provide an affordable and simple online selling solution
- Offer users a clean and powerful product browsing experience
- Implement search, filter, sort, and pagination
- Build a real world, scalable full stack e-commerce platform

---

## System Architecture

Frontend → Backend (API) → Database → Payment Gateway

### Frontend
- React.js
- React Router
- Axios
- TailwindCSS or Bootstrap

### Backend
- Node.js
- Express.js
- JWT Authentication

### Database
- MySQL or MongoDB

### Hosting
- Frontend: [Vercel](https://fullstack-endsem.vercel.app) 
- Backend: [Render](https://fullstackendsem.onrender.com) 

---

## Key Features

### Product Browsing
- Product image, name, price
- Category, brand, rating
- Search by name or category
- Filters for price, category, brand
- Sorting for price, rating, latest
- Pagination

### Cart and Checkout
- Add to cart
- Update quantity
- Remove items
- Apply coupon codes
- Online payment
- Cashback generation after payment

### Admin and Seller Dashboard
- Add products
- Edit products
- Delete products
- Manage coupons
- Manage orders

### Authentication
- Login and signup
- JWT-based security
- Role management
- Protected admin/seller routes

---

## API Endpoints

### Products
GET /api/products  
GET /api/products/:id  
POST /api/products  
PUT /api/products/:id  
DELETE /api/products/:id  

### Cart
POST /api/cart/add  
PUT /api/cart/update  
DELETE /api/cart/remove  

### Coupons
POST /api/coupons/apply  

### Payments
POST /api/checkout  
POST /api/payment/verify  

### Cashback
POST /api/cashback  

---

## Example Product Query

GET /api/products?search=laptop&category=electronics&price_min=30000&price_max=80000&sort=price_asc&page=2&limit=10

---

## Expected Outcome

- Fully functional and scalable e-commerce website
- Clean, responsive interface
- Secure authentication
- Smooth checkout experience
- Product browsing with search, filter, sort, and pagination
- Deployed on cloud platforms

