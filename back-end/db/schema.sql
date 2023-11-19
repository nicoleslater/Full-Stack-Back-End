DROP DATABASE IF EXISTS lovelysoaps_dev;


CREATE DATABASE lovelysoaps_dev;

\c lovelysoaps_dev;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY, 
    first_name VARCHAR(50),
    last_name VARCHAR(50), 
    email VARCHAR(255),
    product_id INTEGER REFERENCES products (id)
    ON DELETE CASCADE
);


CREATE TABLE categories (
    category_id SERIAL PRIMARY KEY, 
    name TEXT, 
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL, 
    description TEXT, 
    price NUMERIC, 
    quantity_in_stock BOOLEAN, 
    category_id INTEGER REFERENCES categories (id)
    ON DELETE CASCADE,
    user_id INTEGER REFERENCES users (id)
    ON DELETE CASCADE
);