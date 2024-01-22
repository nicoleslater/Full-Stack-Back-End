DROP DATABASE IF EXISTS lovelyskincare_dev;

CREATE DATABASE lovelyskincare_dev;

\c lovelyskincare_dev;

CREATE TABLE users (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    email TEXT,
    address TEXT,
    delivery BOOLEAN 
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
    orderDate TEXT,
    name TEXT NOT NULL, 
    price NUMERIC,
    delivered BOOLEAN, 
    pickUp BOOLEAN
);