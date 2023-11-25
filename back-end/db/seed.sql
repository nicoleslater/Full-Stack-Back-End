\c lovelysoaps;

INSERT INTO products (name, description, price, _in_stock, user_id)
VALUES 
('Cocoa Butter Kisses', 'Perfect lotion for Winter Season and leaves the skin moisturized', 1899, true, 1 ),
('Green Tea Face Scrub', 'Nourshing and exfoliating that is gentle enough for sensitive skin', 999, true, 2),
('Almond Honey Soap', 'Conditions the skin with leaving the skin soft', 1599, false, 3);

INSERT INTO users (first_name, last_name, email)
VALUES 
('Sharon', 'Jones', 'sharon.jones@gmail.com'),
('Autumn', 'Stevens', 'stevenssavvy@gmail.com'),
('Caleb', 'Davis', 'davisC@gmail.com');

INSERT INTO orders (user_id, order_date, total_price)
VALUES 
(),
(),
();