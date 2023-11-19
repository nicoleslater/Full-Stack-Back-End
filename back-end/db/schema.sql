DROP DATABASE IF EXISTS lovelysoaps_dev;


CREATE DATABASE lovelysoaps_dev;

\c lovelysoaps_dev;



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
    ON DELETE CASCADE 
);