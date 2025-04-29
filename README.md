# 📚 BookStore

An online bookstore where users can explore free and paid books securely. Built with the MERN Stack and integrated with Stripe for payments.

![1](https://github.com/user-attachments/assets/5ee71914-1f04-49ee-a77d-8916e46582bc)

![2](https://github.com/user-attachments/assets/c60702a5-9e54-4e05-a7b7-870ba37c4cfa)

![3](https://github.com/user-attachments/assets/3eeceeeb-f8cd-4974-940f-3d8a1b43b771)

## ✨ Features

- 🛒 Browse a collection of free and paid books
- 📚 Download **free books** in PDF format without login
- 🔒 **Signup/Login required** to view and purchase **paid books**
- 💳 Secure payments via **Stripe Checkout**
- 🌙 Fully responsive design with light/dark mode
- ⚡ Fast loading and smooth user experience

## 🚀 Tech Stack

- **Frontend:** React.js, TailwindCSS, DaisyUI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Payments:** Stripe API

## 🔥 Core Functionality

- **Free Books:**  
  - No signup required
  - Download available directly
  
- **Paid Books:**  
  - Login/Signup required
  - Redirects to Stripe checkout for payment
  - Access after successful payment

- **Authentication Protection:**  
  - Users must be logged in to view paid book details
  - Secure session management

---

## 🛠️ Installation & Running Locally

### 1. Clone the repository

```bash
git clone https://github.com/Adarsh-Kumbar/BookStore.git
cd BookStore
```

### 2. Install Frontend and Backend dependencies
Open two terminals:

Terminal 1 - Server
```bash


cd server
npm install
npm start
```
### Terminal 2 - Client
```bash

cd client
npm install
npm run dev
```

### 3. Set up Environment Variables
Create a .env file inside the server/ folder and add:

```env

PORT=3000
MONGO_URL=your_mongodb_connection_url
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

For the frontend (client/), create a .env file:

```env

VITE_STRIPEPK=your_stripe_publishable_key
```


