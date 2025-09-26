#  E-commerce Checkout System

A scalable microservices-based checkout system for an e-commerce application.

## Technologies Used

- Node.js + Express
- MongoDB (local)
- Mongoose
- React (Vite or Next.js)
- TailwindCSS
- TypeScript
- Docker (optional for deployment)

---

## Project Structure

checkout-system/
│
├── auth-service/ → Handles user authentication (login/signup)
├── cart-service/ → Manages user's shopping cart
├── frontend/ → React-based UI for browsing and cart management
└── README.md → You're here!


---

##  Architecture Diagram



---

##  Auth Service

Handles user login and token generation.

###  Endpoints

| Method | Endpoint         | Description           |
|--------|------------------|-----------------------|
| POST   | `/auth/login`    | Login with email/password |

---

##  Cart Service

Manages cart actions for authenticated users.

### Endpoints

| Method | Endpoint           | Description               |
|--------|--------------------|---------------------------|
| POST   | `/api/addToCart`   | Add product to user's cart |
| GET    | `/api/getCart/:id` | Get all cart items for user |

---

## Frontend

Simple UI built with React + Tailwind that:

- Displays a list of products
- Lets user add items to cart
- Displays cart contents

---

## Running the Project Locally

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB (local)
- Yarn or npm

---

### Start `auth-service`

```bash
cd auth-service
npm install
npm run dev

Ensure MongoDB is running locally on port 27017.

### Start `auth-service`

cd cart-service
npm install
npm run dev

