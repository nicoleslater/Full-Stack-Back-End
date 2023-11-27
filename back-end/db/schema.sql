DROP DATABASE IF EXISTS lovelyskincare_dev;

CREATE DATABASE lovelyskincare_dev;

\c lovelyskincare_dev;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY, 
    first_name VARCHAR(50),
    last_name VARCHAR(50), 
    email VARCHAR(250),
    shipping_address TEXT, 
    preferred_delivery BOOLEAN, 
    product_id INTEGER REFERENCES products(id)
    ON DELETE CASCADE 
);

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL, 
    description TEXT, 
    price NUMERIC, 
    _in_stock BOOLEAN, 
    ingredients TEXT, 
    category TEXT, 
    user_id INTEGER REFERENCES users(id)
    ON DELETE CASCADE
);

CREATE TABLE orders ( 
    order_id SERIAL PRIMARY KEY, 
    order_date DATE, 
    total_price NUMERIC(10, 2),
    delivery BOOLEAN, 
    pick_up BOOLEAN, 
    user_id INTEGER REFERENCES users(id)
    ON DELETE CASCADE
);