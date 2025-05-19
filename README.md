🧑‍🏫 Mentor Registration & Login System
A full-stack web application that allows mentors (and optionally admins) to register, log in, and access role-based features. Built with:

Frontend: React + Vite
Backend: Node.js + Express + MongoDB
Authentication: Role-based auth with hashed passwords and JWT
🔧 Folder Structure
mentor-auth-system/ ├── client/ # React frontend ├── server/ # Node + Express backend └── README.md # Project overview

✨ Features
✅ Mentor/Admin Registration
🔒 Secure Password Hashing with bcrypt
🛂 JWT-based Login System
🔐 Role-based Authentication (mentor / admin)
🎨 Responsive, professional UI
🔄 Redirects after auth
📦 Toast messages for feedback
🚀 Getting Started
Follow the steps below to run the app locally.

🖥️ Frontend (client/)
Tech Stack
React + Vite
Axios
React Router DOM
React Toastify
Setup
cd client
npm install
npm run dev

---

## ✨ Features

- ✅ Mentor/Admin Registration
- 🔒 Secure Password Hashing with bcrypt
- 🛂 JWT-based Login System
- 🔐 Role-based Authentication (`mentor` / `admin`)
- 🎨 Responsive, professional UI
- 🔄 Redirects after auth
- 📦 Toast messages for feedback

---

## 🚀 Getting Started

Follow the steps below to run the app locally.

---

## 🖥️ Frontend (`client/`)

### Tech Stack

- React + Vite
- Axios
- React Router DOM
- React Toastify

### Setup

```bash
cd client
npm install
npm run dev


🖥️ Backend (server/)

Tech Stack:

Node.js
Express
MongoDB + Mongoose
bcryptjs
JSON Web Tokens (JWT)
dotenv


Setup
cd server
npm install
npm run dev

API Endpoints

🧪 API Endpoints
Auth Routes
Method	Endpoint	Description
POST	/api/auth/register	Register user
POST	/api/auth/login	Login & get JWT token

🔐 Role Structure
mentor – default role
admin – can be assigned manually or via UI (optional future feature)
