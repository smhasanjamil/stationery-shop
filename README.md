# Stationery Shop App

A full-stack CRUD application to manage products and orders for a stationery shop. This app allows users to create, read, update, and delete products, as well as place orders and calculate total revenue.

## Features

- **Product Management:** Create, view, update, and delete products in various categories.
- **Order Management:** Place orders, with calculations for total price based on product quantity.
- **Revenue Calculation:** Calculate total revenue based on orders placed.
- **Data Validation:** Input validation using Zod for product and order data.
- **API Endpoints:**
  - **Product Routes:** Create, Update, Read, Delete products.
  - **Order Routes:** Create orders and calculate total revenue.

## Technologies Used

- **Frontend:**

  - (This is the backend-only app, so the frontend can be built separately using frameworks like React, Next.js or Angular)

- **Backend:**
  - **Node.js** with **Express.js** for RESTful API development.
  - **MongoDB** with **Mongoose** for data modeling and persistence.
  - **Zod** for data validation.
  - **ESLint** for code linting and styling.
  - **TypeScript** for type safety.

## Project Model

### 1. Stationery Product Model
- name (string)
- brand (string)
- price (number)
- category (string)
- description (string)
- quantity (number)
- inStock (boolean)

### 2. Order Model

- email (string)
- product (ObjectId)
- quantity (number)
- totalPrice (number)

## Project Setup

**1. Clone the Repository**

```bash
git clone https://github.com/smhasanjamil/stationery-shop
cd stationery-shop
```

**2. Install Dependencies**

```bash
npm install
```

**3. Configure Environment Variables:**

Create a `.env` file in the root of the project and add the following variables:

```makefile
PORT=5000
DATABASE_URL= Your custom mongodb url
```

**4. Run the Application:**

```bash
npm run dev
```

## Live Application

Access the live application at: [Click Here](https://stationery-shop-backend-assignment2.vercel.app/)

## CRUD Operations

### 1. Create a Stationery Product

- **Endpoint:** `/api/products`
- **Method:** `POST`
- **Example:** `https://stationery-shop-backend-assignment2.vercel.app/api/products`
- **Request Body:**

```json
{
  "name": "Permanent Marker",
  "brand": "Sharpie",
  "price": 2.49,
  "category": "Office Supplies",
  "description": "Black permanent marker with a fine tip for precise writing and marking.",
  "quantity": 250,
  "inStock": true
}
```

### 2. Get All Stationery Products

- **Endpoint:** `/api/products`
- **Method:** `GET`
- **Example:** `https://stationery-shop-backend-assignment2.vercel.app/api/products`

### 3. Get a Specific Stationery Product

- **Endpoint:** `/api/products/:productId`
- **Method:** `GET`
- **Example:** `https://stationery-shop-backend-assignment2.vercel.app/api/products/674ff3d484c3c6944d807991`

### 4. Update a Stationery Product

- **Endpoint:** `/api/products/:productId`
- **Method:** `PUT`
- **Example:** `https://stationery-shop-backend-assignment2.vercel.app/api/products/674ff3d484c3c6944d807991`
- **Request Body:**

```json
{
  "name": "Highlighter Set",
  "brand": "Stabilo"
}
```

### 5. Delete a Stationery Product

- **Endpoint:** `/api/products/:productId`
- **Method:** `DELETE`
- **Example:** `https://stationery-shop-backend-assignment2.vercel.app/api/products/674ff3d484c3c6944d807991`

### 6. Order a Stationery Product

- **Endpoint:** `/api/orders`
- **Method:** `POST`
- **Example:** `https://stationery-shop-backend-assignment2.vercel.app/api/orders`
- **Request Body:**

```json
{
  "email": "jane.smith@example.com",
  "product": "674ff41a84c3c6944d807995",
  "quantity": 4,
  "totalPrice": 6.0
}
```

### 7. Calculate Revenue from Orders

- **Endpoint:** `/api/orders/revenue`
- **Method:** `GET`
- **Example:** `https://stationery-shop-backend-assignment2.vercel.app/api/orders/revenue`
