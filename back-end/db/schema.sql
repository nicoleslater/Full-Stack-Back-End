DROP DATABASE IF EXISTS lovelysoaps_dev;


CREATE DATABASE lovelysoaps_dev;

\c lovelysoaps_dev;

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

CREATE TABLE order_items (
    order_item_id SERIAL PRIMARY KEY, 
    order_id INTEGER REFERENCES orders(order_id)
    ON DELETE CASCADE,
    product_id INTEGER REFERENCES products(product_id)
    ON DELETE CASCADE,
    quantity INTEGER
)


CREATE TABLE categories (
    category_id SERIAL PRIMARY KEY, 
    name TEXT, 
);

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL, 
    description TEXT, 
    price NUMERIC, 
    quantity_in_stock BOOLEAN, 
    category_id INTEGER REFERENCES categories(category_id)
    ON DELETE CASCADE,
    user_id INTEGER REFERENCES users(user_id)
    ON DELETE CASCADE, 
);