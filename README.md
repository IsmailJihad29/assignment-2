# Express TypeScript MongoDB E-commerce API

## Overview

This is an e-commerce API built with Express, TypeScript, and MongoDB (using Mongoose). The application allows for product and order management with data validation using Joi/Zod.

## Features

- Create, Read, Update, and Delete (CRUD) operations for products.
- Create and Read operations for orders.
- Inventory management during order creation.
- Data validation using Joi/Zod.

## Requirements

- Node.js (>= 12.x)
- MongoDB (Local or Cloud)
- ExpressJs
- TypeScript
- Eslint 
- Dotenv
- cors
- zod for validation

## Setup and Installation

1. **Clone the repository in your local folder**:
  

2. **Install dependencies**:
    ```
     npm install
    ```

3. **Create a `.env` file** with the following content:
    ```env
    PORT=5000
    MONGODB_URI= mongodb://localhost:27017/ecommerce  
    ```
    // MONGODB_URI shoud be named as DATABASE_URL otherwise project can not be run

4. **Start the MongoDB server wih the following command** (if running locally):
    ```
    npm run start:dev
    ```


The server should now be running at `http://localhost:5000`.


## User or admin can do this thing 
### Product Management

1. **Create a New Product**
2. **Retrieve a List of All Products**
3. **Retrieve a Specific Product by ID**
4. **Update Product Information**
5. **Delete a Product**
6. **Search a Product**

### Order Management

1. **Create a New Order**

2. **Retrieve All Orders**

3. **Retrieve Orders by User Email**

## Validation and Error Handling

- **Validation**: Request body validation is implemented using Joi/Zod.
- **Error Handling**: Proper error messages and status codes are returned for different error scenarios (e.g., insufficient stock, product/order not found).


