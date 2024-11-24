# Paperly - Stationery Shop API

Paperly is an Express-based API for managing a stationery shop's products and orders. The project integrates MongoDB with Mongoose for database management and provides endpoints for performing CRUD operations on stationery products and handling customer orders.

## Features

- **CRUD Operations for Stationery Products**
  - Create, read, update, and delete products in the stationery shop.
- **Order Management**
  - Customers can place orders for products, with inventory management integrated.
  - When an order is placed, the product quantity is reduced, and stock availability is updated.
- **Revenue Calculation**
  - Calculate total revenue from all orders using MongoDB aggregation.

## Tech Stack

- **Backend**: Node.js with Express
- **Database**: MongoDB with Mongoose for schema definition and data operations
- **TypeScript**: Static typing for better development experience and reliability
- **Error Handling Zod**: Custom error messages and responses for validation errors, not found errors, etc.

## Installation

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v18.x or later)
- MongoDB instance (Local or MongoDB Atlas)

### 1. Clone the Repository

```bash
git clone https://github.com/ShafayetAhmad/Paperly_Basic_Backend.git
cd Paperly_Basic_Backend
```

### 2. Install Dependencies

Install the required Node.js packages:

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory of the project and set up the following variables:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
NODE_ENV=development

```

- Replace `your_mongodb_connection_string` with your MongoDB connection URL (e.g., MongoDB Atlas or local instance).

### 4. Start the Server

To start the development server, run:

```bash
npm run dev
```

By default, the server will run on `http://localhost:5000`.

### 5. Testing the API

You can use tools like **Postman** or **Insomnia** to test the API endpoints. Ensure your server is running and interact with the following routes:

- **Create Product**: `POST /api/products`
- **Get All Products**: `GET /api/products`
- **Get Product by ID**: `GET /api/products/:productId`
- **Update Product**: `PUT /api/products/:productId`
- **Delete Product**: `DELETE /api/products/:productId`
- **Place Order**: `POST /api/orders`
- **Calculate Revenue**: `GET /api/orders/revenue`

## API Endpoints

### 1. Create a Stationery Product

- **Endpoint**: `POST /api/products`
- **Request Body**:

  ```json
  {
    "name": "Notebook",
    "brand": "Moleskine",
    "price": 15,
    "category": "Office Supplies",
    "description": "A high-quality notebook for professionals.",
    "quantity": 200,
    "inStock": true
  }
  ```

- **Response**:
  ```json
  {
    "message": "Product created successfully",
    "success": true,
    "data": {
      "_id": "648a45e5f0123c45678d9012",
      "name": "Notebook",
      "brand": "Moleskine",
      "price": 15,
      "category": "Office Supplies",
      "description": "A high-quality notebook for professionals.",
      "quantity": 200,
      "inStock": true
    }
  }
  ```

### 2. Get All Products

- **Endpoint**: `GET /api/products`
- **Query Params**: `searchTerm` (Optional, for filtering by name, brand, or category)
- **Response**:
  ```json
  {
    "message": "Products retrieved successfully",
    "success": true,
    "data": [...]
  }
  ```

### 3. Get a Specific Product

- **Endpoint**: `GET /api/products/:productId`
- **Response**:
  ```json
  {
    "message": "Product retrieved successfully",
    "success": true,
    "data": {
      "_id": "648a45e5f0123c45678d9012",
      "name": "Notebook",
      "brand": "Moleskine",
      "price": 15,
      "category": "Office Supplies",
      "description": "A high-quality notebook for professionals.",
      "quantity": 200,
      "inStock": true
    }
  }
  ```

### 4. Update a Product

- **Endpoint**: `PUT /api/products/:productId`
- **Request Body**:

  ```json
  {
    "price": 18,
    "quantity": 180
  }
  ```

- **Response**:
  ```json
  {
    "message": "Product updated successfully",
    "success": true,
    "data": {
      "_id": "648a45e5f0123c45678d9012",
      "name": "Notebook",
      "price": 18,
      "quantity": 180
    }
  }
  ```

### 5. Delete a Product

- **Endpoint**: `DELETE /api/products/:productId`
- **Response**:
  ```json
  {
    "message": "Product deleted successfully",
    "success": true
  }
  ```

### 6. Place an Order

- **Endpoint**: `POST /api/orders`
- **Request Body**:

  ```json
  {
    "email": "customer@example.com",
    "product": "648a45e5f0123c45678d9012",
    "quantity": 2,
    "totalPrice": 36
  }
  ```

- **Response**:
  ```json
  {
    "message": "Order created successfully",
    "success": true,
    "data": {
      "_id": "648b45f5e1234b56789a6789",
      "email": "customer@example.com",
      "product": "648a45e5f0123c45678d9012",
      "quantity": 2,
      "totalPrice": 36
    }
  }
  ```

### 7. Calculate Revenue

- **Endpoint**: `GET /api/orders/revenue`
- **Response**:
  ```json
  {
    "message": "Revenue calculated successfully",
    "success": true,
    "data": {
      "totalRevenue": 720
    }
  }
  ```

## Error Handling

- **Validation Errors**: Return specific error messages for validation failures (e.g., invalid email, insufficient stock).
- **Not Found**: If a product or order is not found, return a `404` error.
- **Server Errors**: Return a generic error response with the stack trace for debugging.

### Sample Error Response:

```json
{
  "message": "Validation failed",
  "success": false,
  "error": {
    "name": "ValidationError",
    "errors": {
      "price": {
        "message": "Price must be a positive number",
        "name": "ValidatorError",
        "properties": {
          "message": "Price must be a positive number",
          "type": "min",
          "min": 0
        }
      }
    }
  },
  "stack": "Error: Something went wrong\n at app.js:23:13"
}
```

---

### Contact

For more information, you can mail [Shafayet Ahmad Kanon](mailto:shafayet.ahmad1@hotmail.com).
