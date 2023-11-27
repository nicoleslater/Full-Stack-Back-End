DROP DATABASE IF EXISTS lovelyskincare_dev;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS orders;

CREATE DATABASE lovelyskincare_dev;

\c lovelyskincare_dev;

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL, 
    description TEXT, 
    price NUMERIC, 
    _in_stock BOOLEAN, 
    ingredients TEXT,
    user_id INTEGER REFERENCES users(user_id)
    ON DELETE CASCADE, 
    category TEXT
);

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY, 
    first_name VARCHAR(50),
    last_name VARCHAR(50), 
    email VARCHAR(255),
    shipping_address TEXT,
    preferred_delivery BOOLEAN,
    product_id INTEGER REFERENCES products(product_id)
    ON DELETE CASCADE
);

CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY, 
    user_id INTEGER REFERENCES users(user_id)
    ON DELETE CASCADE,
    order_date DATE, 
    total_price NUMERIC(10, 2), 
    delivery BOOLEAN, 
    pick_up BOOLEAN
);


