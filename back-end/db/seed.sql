\c lovelyskincare_dev;

INSERT INTO users (first_name, last_name, email, shipping_address, preferred_delivery)
VALUES 
('Sharon', 'Jones', 'sharon.jones@gmail.com', '789 Elm St, Smallburg, TX, 83201', true),
('Autumn', 'Stevens', 'stevenssavvy@gmail.com', '456 Oak Rd, Suburbatoon, OR, 97123', true),
('Caleb', 'Davis', 'davisC@gmail.com', '352 Finley Parkway Apt 5E, East Lydia, NY 12345', false);

INSERT INTO products (name, description, price, _in_stock, ingredients, inventory_count, category)
VALUES 
('Rose Butter Kisses', 'Perfect lotion for Winter Season and leaves the skin moisturized', 18.99, true,'Rose Oil, Cocoa Butter & Jasmine Essential Oil', 25, 'Lotion'),
('Shea Rose', 'Nourshing and exfoliating that is gentle enough for sensitive skin', 9.99, true, 'Shea Butter, Rose Oil & Goat Milk Soap Base', 25,'Lotion'),
('Rose Honey Soap', 'Conditions the skin leaving it soft and moisturized', 15.99, false, 'Honey Soap Base, Rose Oil & Eucalyptus Essentail Oil', 50, 'Soap');

INSERT INTO orders (order_date, total_price, delivery_date, pick_up)
VALUES 
('01-05-2023', 18.99, '01-08-2023', false),
('03-11-2023', 9.99, '03-15-2023', false),
('02-14-2023', 15.99, '02-18-2023', true);