DROP DATABASE IF EXISTS lovelysoaps_dev;

CREATE DATABASE lovelysoaps_dev;

\c lovelysoaps_dev;

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL, 
    description TEXT, 
    price NUMERIC, 
    _in_stock BOOLEAN, 
    user_id INTEGER REFERENCES users(user_id)
    ON DELETE CASCADE, 
);

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY, 
    first_name VARCHAR(50),
    last_name VARCHAR(50), 
    email VARCHAR(255),
    product_id INTEGER REFERENCES products(product_id)
    ON DELETE CASCADE
);

CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY, 
    user_id INTEGER REFERENCES users(user_id)
    ON DELETE CASCADE,
    order_date DATE, 
    total_price NUMERIC(10, 2)
);


