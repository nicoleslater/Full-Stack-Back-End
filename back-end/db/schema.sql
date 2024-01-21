DROP DATABASE IF EXISTS lovelyskincare_dev;

CREATE DATABASE lovelyskincare_dev;

\c lovelyskincare_dev;

CREATE TABLE users (
    id SERIAL PRIMARY KEY, 
    name TEXT,
    email TEXT,
    shipping_address TEXT,
    preferred_delivery BOOLEAN 
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL, 
    description TEXT, 
    price NUMERIC, 
    stocked BOOLEAN, 
    ingredients TEXT, 
    inventory NUMERIC,
    category TEXT
);

CREATE TABLE orders ( 
    id SERIAL PRIMARY KEY,
    order_date TEXT,
    name TEXT, 
    total_price NUMERIC,
    delivery_date TEXT, 
    pick_up BOOLEAN,
);