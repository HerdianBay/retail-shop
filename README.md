# 🛍️ Retail Shop

**Retail Shop** is a simple e-commerce web application built with **React + TypeScript** using **Vite** as the build tool.  
The app displays products fetched from the **Platzi Fake Store API** and includes three main pages: **Home**, **Products**, and **About**. This project was created as a front-end development practice using React and TypeScript.

Live App : https://retail-shop-bice.vercel.app/

---

## 🚀 Main Features

### 🏠 Home

A welcoming landing page that introduces the company or e-commerce platform. However, it is currently still in the form of a template with customizable data.

### 🛒 Products

Displays a list of products fetched in real-time from the **Platzi Fake Store API**.  
Each product card includes basic details such as an image, title, price, and short description.

### 👨‍💻 About

A page introducing the developer behind this project, along with the technologies used to build it.

---

## 🧰 Tech Stack

- ⚡ [Vite](https://vitejs.dev/) — Fast build tool for modern front-end projects
- ⚛️ [React](https://react.dev/)
- 🧠 [TypeScript](https://www.typescriptlang.org/)
- 🎨 [Tailwind CSS](https://tailwindcss.com/)
- 🌼 [DaisyUI](https://daisyui.com/)
- 🌐 [Platzi Fake Store API](https://fakeapi.platzi.com/)

---

## 📦 Installation & Setup

Make sure you have **Node.js** installed (version 18 or higher is recommended).

```bash
# 1. Clone the repository
git clone https://github.com/username/repo-name.git

# 2. Navigate to the project folder
cd repo-name

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

---

## API Used

This project fetches product data from the **Platzi Fake Store API**: https://api.escuelajs.co/api/v1/products
Example product data structure:

```bash
{
  "id": 1,
  "title": "Handmade Fresh Table",
  "price": 687,
  "description": "Ergonomic executive chair upholstered in bonded black leather",
  "images": ["https://api.escuelajs.co/api/v1/files/..."],
  "category": {
    "id": 2,
    "name": "Furniture",
    "image": "https://api.escuelajs.co/api/v1/files/..."
  }
}
```
