\c lovelyskincare_dev;

INSERT INTO users (first_name, last_name, email, shipping_address, preferred_delivery)
VALUES 
('Sharon', 'Jones', 'sharon.jones@gmail.com', '789 Elm St, Smallburg, TX, 83201', true),
('Autumn', 'Stevens', 'stevenssavvy@gmail.com', '456 Oak Rd, Suburbatoon, OR, 97123', true),
('William', 'Wilson', 'wwilson62@yahoo.com', '1314 Lopez Square Apt 93, North Daniel, NC 28540', true),
('Caleb', 'Davis', 'davisC@gmail.com', '352 Finley Parkway Apt 5E, East Lydia, NY 12345', false),
('Elijah', 'Thompson', 'elijah.thompson@gmail.com', '123 Pine St, Townsville, CA, 90210', true),
('Olivia', 'Garcia', 'olivia.garcia@yahoo.com', '567 Birch Ln, Villageton, FL, 33601', false),
('Jackson', 'Baker', 'jbaker84@gmail.com', '789 Oak Ave, Countryside, AZ, 85001', true),
('Lily', 'Miller', 'lily.miller@hotmail.com', '101 Cedar Rd, Suburbia, WA, 98001', false),
('Noah', 'Hill', 'noah.hill@gmail.com', '876 Elm Blvd, Cityville, TX, 75001', true),
('Sophia', 'Taylor', 's.taylor@aol.com', '2586 Robinson Junctions Suite 04, Lake Andrewburgh, MN 14567', true);

INSERT INTO products (name, description, price, stocked, ingredients, inventory_count, category)
VALUES 
('Rose Butter Kisses', 'Perfect lotion for Winter Season and leaves the skin moisturized', 18.99, true,'Rose Oil, Cocoa Butter & Jasmine Essential Oil', 25, 'Lotion'),
('Shea Rose', 'Nourshing and exfoliating that is gentle enough for sensitive skin', 9.99, true, 'Shea Butter, Rose Oil & Goat Milk Soap Base', 25,'Lotion'),
('Winter Rose', 'Gentle toner to balance pH and retain moisture', 9.99, true, 'Purified Water, Rose Water & Witch Hazel', 100, 'Toner'),
('Rose Mist', 'Refreshing rose water spray to set makeup and hydrate skin', 11.99, true, 'Rose Water, Purified Water & Green Tea', 10, 'Face Mist'),
('Rose Honey Soap', 'Conditions the skin leaving it soft and moisturized', 15.99, true, 'Honey Soap Base, Rose Oil & Eucalyptus Essentail Oil', 50, 'Soap'),
('Jasmine Dream Cream', 'Luxurious cream with the calming scent of jasmine', 24.99, true, 'Jasmine Oil, Shea Butter & Almond Oil', 30, 'Cream'),
('Lavender Fields Soap', 'Relaxing soap with lavender fragrance', 12.99, true, 'Lavender Oil, Coconut Oil & Glycerin', 40, 'Soap'),
('Green Tea Infusion Toner', 'Revitalizing toner enriched with green tea extracts', 14.99, true, 'Green Tea Extract, Witch Hazel & Chamomile', 25, 'Toner'),
('Cocoa Bliss Body Butter', 'Indulgent body butter with the goodness of cocoa', 19.99, true, 'Cocoa Butter, Vanilla Oil & Jojoba Oil', 20, 'Body Butter'),
('Citrus Burst Face Scrub', 'Energizing face scrub with citrus extracts', 16.99, true, 'Citrus Extracts, Sugar & Jojoba Beads', 15, 'Face Scrub');

INSERT INTO orders (order_date, product, total_price, delivery_date, pick_up, pick_up_date)
VALUES 
('01-05-2023', 'Shea Rose', 9.99, '01-08-2023', false, 'N/A'),
('03-11-2023', 'Winter Rose', 9.99, '03-15-2023', false, 'N/A'),
('11-10-2023', 'Rose Butter Kisses', 18.99, '11-18-2023', false, 'N/A'),
('05-25-2023', 'Rose Mist', 11.99, '05-28-2023', false, 'N/A'),
('02-14-2023', 'Rose Honey Soap',15.99, 'N/A', true, '02-17-2023'),
('04-02-2023', 'Cocoa Bliss Body Butter', 19.99, '04-10-2023', false, 'N/A'),
('06-15-2023', 'Green Tea Infusion Toner', 14.99, '06-20-2023', false, 'N/A'),
('09-08-2023', 'Jasmine Dream Cream', 24.99, '09-15-2023', false, 'N/A'),
('07-21-2023', 'Lavender Fields Soap', 12.99, '07-25-2023', false, 'N/A'),
('12-03-2023', 'Citrus Burst Face Scrub', 16.99, '12-10-2023', false, 'N/A');
