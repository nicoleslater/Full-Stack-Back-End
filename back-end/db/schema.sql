DROP DATABASE IF EXISTS lovelyskincare_dev;

CREATE DATABASE lovelyskincare_dev;

\c lovelyskincare_dev;

CREATE TABLE users (
    id SERIAL PRIMARY KEY, 
    first_name TEXT,
    last_name TEXT, 
    email TEXT,
    shipping_address TEXT, 
    preferred_delivery BOOLEAN 
);

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL, 
    description TEXT, 
    price NUMERIC, 
    _in_stock BOOLEAN, 
    ingredients TEXT, 
    inventory_count NUMERIC,
    category TEXT
);

CREATE TABLE orders ( 
    order_id SERIAL PRIMARY KEY,
    product TEXT, 
    order_date TEXT, 
    total_price NUMERIC,
    delivery_date TEXT, 
    pick_up BOOLEAN,
    pick_up_date TEXT
);