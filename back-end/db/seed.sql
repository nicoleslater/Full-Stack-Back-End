\c lovelyskincare_dev;

INSERT INTO users (first_name, last_name, email, shipping_address, preferred_delivery)
VALUES 
('Sharon', 'Jones', 'sharon.jones@gmail.com', '789 Elm St, Smallburg, TX, 83201', true),
('Autumn', 'Stevens', 'stevenssavvy@gmail.com', '456 Oak Rd, Suburbatoon, OR, 97123', true),
('Caleb', 'Davis', 'davisC@gmail.com', '352 Finley Parkway Apt 5E, East Lydia, NY 12345', false);

INSERT INTO orders (order_date, total_price, delivery_date, pick_up)
VALUES 
('2023-01-05', 1899, '2023-01-08', false),
('2023-03-11', 999, '2023-03-15', false),
('2023-02-14', 1599,'2023-02-18', true);

INSERT INTO products (name, description, price, _in_stock, ingredients, inventory_count, category)
VALUES 
('Rose Butter Kisses', 'Perfect lotion for Winter Season and leaves the skin moisturized', 1899, true,'Rose Oil, Cocoa Butter & Jasmine Essential Oil', 25, 'Lotion'),
('Shea Rose', 'Nourshing and exfoliating that is gentle enough for sensitive skin', 999, true, 'Shea Butter, Grapeseed Oil & Goat Milk Soap Base', 25,'Lotion'),
('Rose Honey Soap', 'Conditions the skin leaving it soft and moisturized', 1599, false, 'Honey Soap Base, Rose Oil & Eucalyptus Essentail Oil', 50, 'Soap');