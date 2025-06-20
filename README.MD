# 🧠 Quora Clone - RESTful CRUD App

This is a simple **Quora-style** web application built using **Node.js**, **Express.js**, and **EJS**. It allows users to **Create**, **Read**, **Update**, and **Delete** posts using **RESTful routes**. The app is styled to resemble the Quora interface for better UI experience.

---

## 🚀 Features

- ✍️ Create a new post
- 📖 View all posts
- 🔍 View individual post by ID
- 📝 Edit a post
- 🗑️ Delete a post with confirmation popup
- 🧭 RESTful Routing
- 🖼️ Styled using custom CSS inspired by Quora

---

## 🏗️ Tech Stack

- **Backend**: Node.js, Express.js
- **Templating**: EJS (Embedded JavaScript)
- **Styling**: CSS (with Google Fonts)
- **Routing**: RESTful with Express
- **UUID**: For generating unique post IDs
- **Method Override**: To support PUT/PATCH/DELETE from HTML forms

---

## 📁 Folder Structure

Quora-REST/
│
├── public/ # Static files (CSS/images if needed)
├── views/ # EJS templates (form.ejs, index.ejs, edit.ejs, show.ejs)
├── index.js # Main Express server file
├── package.json
└── README.md # Project documentation


---

## 📌 Routes Overview

| Method | Route               | Description                 |
|--------|---------------------|-----------------------------|
| GET    | `/posts`            | View all posts              |
| GET    | `/posts/new`        | Form to create a new post   |
| POST   | `/posts`            | Add a new post              |
| GET    | `/posts/:id`        | View a single post          |
| GET    | `/posts/:id/edit`   | Form to edit a post         |
| PATCH  | `/posts/:id`        | Update a post               |
| DELETE | `/posts/:id`        | Delete a post               |

---

## 📌 TODO / Future Scope

- ⏳ **Connect to MongoDB** for persistent storage  
- 👥 **Add user authentication**  
- ❤️ **Like & Comment feature**  
- 🧪 **Add unit testing**  
- 📱 **Improve mobile responsiveness**
