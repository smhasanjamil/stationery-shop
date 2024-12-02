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
  - (This is the backend-only app, so the frontend can be built separately using frameworks like React or Angular)
- **Backend:**
  - **Node.js** with **Express.js** for RESTful API development.
  - **MongoDB** with **Mongoose** for data modeling and persistence.
  - **Zod** for data validation.
  - **ESLint** for code linting and styling.
  - **TypeScript** for type safety.

## CRUD Operations

### Product Management

**1. Create a Product**

- Endpoint: `POST /api/products/create-product`
- Request Body:

```json
{
  "name": "Product Name",
  "brand": "Product Brand",
  "price": 10.5,
  "category": "Writing",
  "description": "Description of the product",
  "quantity": 100,
  "inStock": true
}
```

- Action: Creates a new product in the database.
  **2. Get All Products**
- Endpoint: `GET /api/products`
- Action: Fetches a list of all products.
  **3. Get Single Product**
- Endpoint: `GET /api/products/:productId`
- Action: Fetches a single product by its ID.
  **4. Update a Product**
- Endpoint: `PUT /api/products/:productId`
- Request Body: (Similar to Create)
- Action: Updates the product details.
  **5. Delete a Product**
- Endpoint: `DELETE /api/products/:productId`
- Action: Deletes a product by its ID.

## Order Management

**1. Create an Order**

- Endpoint: `POST /api/orders`
- Request Body:

```json
{
  "email": "customer@example.com",
  "product": "product_id",
  "quantity": 2,
  "totalPrice": 21
}
```

- Action: Creates an order for the given product, checks stock, and updates inventory.
  **2. Calculate Revenue**
- Endpoint: `GET /api/orders/revenue`
- Action: Calculates the total revenue from all orders placed.

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

Access the live application at: <a href="https://stationery-shop-backend-assignment2.vercel.app/" target="_blank">Click Here</a>
