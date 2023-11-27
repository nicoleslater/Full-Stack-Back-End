\c lovelysoaps;

INSERT INTO products (name, description, price, _in_stock, images, inventory_count, category)
VALUES 
('Cocoa Butter Kisses', 'Perfect lotion for Winter Season and leaves the skin moisturized', 1899, true),
('Green Tea Face Scrub', 'Nourshing and exfoliating that is gentle enough for sensitive skin', 999, true),
('Almond Honey Soap', 'Conditions the skin with leaving the skin soft', 1599, false);

INSERT INTO users (first_name, last_name, email, shipping_address, preferred_delivery)
VALUES 
('Sharon', 'Jones', 'sharon.jones@gmail.com', '789 Elm St, Smallburg, TX, 83201', true),
('Autumn', 'Stevens', 'stevenssavvy@gmail.com', '456 Oak Rd, Suburbatoon, OR, 97123', true),
('Caleb', 'Davis', 'davisC@gmail.com', '352 Finley Parkway Apt 5E, East Lydia, NY 12345', false);

INSERT INTO orders (user_id, order_date, total_price, delivery, pick_up)
VALUES 
(1, '2023-01-05', 49.97, true, false),
(2, '2023-03-11', 74.93, false, true),
(3, '2023-02-14', 25.48, true, false);