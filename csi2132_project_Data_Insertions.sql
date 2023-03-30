-- ******* DATA INSERTIONS *******

-- ----------------------------
-- Records of hotel_chains
-- ----------------------------
INSERT INTO hotel_chain (id, number_of_hotels) VALUES (1, 10);
INSERT INTO hotel_chain (id, number_of_hotels) VALUES (2, 24);
INSERT INTO hotel_chain (id, number_of_hotels) VALUES (3, 6);
INSERT INTO hotel_chain (id, number_of_hotels) VALUES (4, 32);
INSERT INTO hotel_chain (id, number_of_hotels) VALUES (5, 18);

-- ----------------------------
-- Records of hotels
-- --------------------------
INSERT INTO hotel (chain_id, city, province, street_number, street_name, postal_code, email, number_of_rooms, categorization)
VALUES (1, 'Toronto', 'Ontario', 123, 'Main St', 'M1M1M1', 'hotel1@example.com', 100, 4);
INSERT INTO hotel (chain_id, city, province, street_number, street_name, postal_code, email, number_of_rooms, categorization)
VALUES (1, 'Toronto', 'Ontario', 456, 'Queen St', 'M2M2M2', 'hotel2@example.com', 80, 3);
INSERT INTO hotel (chain_id, city, province, street_number, street_name, postal_code, email, number_of_rooms, categorization)
VALUES (1, 'Vancouver', 'British Columbia', 101, 'Baker St', 'V1V1V1', 'hotel3@example.com', 150, 4);
INSERT INTO hotel (chain_id, city, province, street_number, street_name, postal_code, email, number_of_rooms, categorization)
VALUES (1, 'Vancouver', 'British Columbia', 345, 'Market St', 'V2V2V2', 'hotel4@example.com', 50, 2);
INSERT INTO hotel (chain_id, city, province, street_number, street_name, postal_code, email, number_of_rooms, categorization)
VALUES (1, 'Charlottetown', 'Prince Edward Island', 678, 'George St', 'C1C1C1', 'hotel5@example.com', 70, 3);
INSERT INTO hotel (chain_id, city, province, street_number, street_name, postal_code, email, number_of_rooms, categorization)
VALUES (1, 'Regina', 'Saskatchewan', 910, 'Park St', 'S4S4S4', 'hotel6@example.com', 90, 4);
INSERT INTO hotel (chain_id, city, province, street_number, street_name, postal_code, email, number_of_rooms, categorization)
VALUES (1, 'Regina', 'Saskatchewan', 111, 'Victoria St', 'S5S5S5', 'hotel7@example.com', 60, 3);
INSERT INTO hotel (chain_id, city, province, street_number, street_name, postal_code, email, number_of_rooms, categorization)
VALUES (1, 'Montreal', 'Quebec', 456, 'Saint-Catherine St', 'H2H2H2', 'hotel8@example.com', 120, 5);

INSERT INTO hotel (chain_id, city, province, street_number, street_name, postal_code, email, number_of_rooms, categorization)
VALUES (2, 'Calgary', 'Alberta', 222, '1st St', 'T1T1T1', 'hotel9@example.com', 80, 2);
INSERT INTO hotel (chain_id, city, province, street_number, street_name, postal_code, email, number_of_rooms, categorization)
VALUES (2, 'Calgary', 'Alberta', 444, '2nd St', 'T2T2T2', 'hotel10@example.com', 120, 4);
INSERT INTO hotel (chain_id, city, province, street_number, street_name, postal_code, email, number_of_rooms, categorization)
VALUES (2, 'Edmonton', 'Alberta', 555, '3rd St', 'T3T3T3', 'hotel11@example.com', 100, 3);
INSERT INTO hotel (chain_id, city, province, street_number, street_name, postal_code, email, number_of_rooms, categorization)
VALUES (2, 'Edmonton', 'Alberta', 777, '4th St', 'T4T4T4', 'hotel12@example.com', 70, 2);
INSERT INTO hotel (chain_id, city, province, street_number, street_name, postal_code, email, number_of_rooms, categorization)
VALUES (2, 'Halifax', 'Nova Scotia', 888, 'Spring Garden Rd', 'B3B3B3', 'hotel13@example.com', 150, 4);
INSERT INTO hotel (chain_id, city, province, street_number, street_name, postal_code, email, number_of_rooms, categorization)
VALUES (2, 'Halifax', 'Nova Scotia', 999, 'Barrington St', 'B4B4B4', 'hotel14@example.com', 80, 3);
INSERT INTO hotel (chain_id, city, province, street_number, street_name, postal_code, email, number_of_rooms, categorization)
VALUES (2, 'Winnipeg', 'Manitoba', 111, 'Portage Ave', 'R3R3R3', 'hotel15@example.com', 120, 5);
INSERT INTO hotel (chain_id, city, province, street_number, street_name, postal_code, email, number_of_rooms, categorization)
VALUES (2, 'Winnipeg', 'Manitoba', 222, 'Osborne St', 'R4R4R4', 'hotel16@example.com', 100, 4);

INSERT INTO hotel (chain_id, city, province, street_number, street_name, postal_code, email, number_of_rooms, categorization)
VALUES (3, 'Toronto', 'Ontario', 111, 'King St W', 'M5V2X4', 'hotel19@example.com', 150, 5);
INSERT INTO hotel (chain_id, city, province, street_number, street_name, postal_code, email, number_of_rooms, categorization)
VALUES (3, 'Toronto', 'Ontario', 222, 'Queen St E', 'M4E1G6', 'hotel20@example.com', 120, 4);
INSERT INTO hotel (chain_id, city, province, street_number, street_name, postal_code, email, number_of_rooms, categorization)
VALUES (3, 'Toronto', 'Ontario', 333, 'Yonge St', 'M4Y1Z9', 'hotel21@example.com', 100, 3);
INSERT INTO hotel (chain_id, city, province, street_number, street_name, postal_code, email, number_of_rooms, categorization)
VALUES (3, 'Toronto', 'Ontario', 444, 'Bloor St W', 'M5S1X5', 'hotel22@example.com', 70, 2);
INSERT INTO hotel (chain_id, city, province, street_number, street_name, postal_code, email, number_of_rooms, categorization)
VALUES (3, 'Montreal', 'Quebec', 555, 'St Catherine St W', 'H3B4C9', 'hotel23@example.com', 80, 3);
INSERT INTO hotel (chain_id, city, province, street_number, street_name, postal_code, email, number_of_rooms, categorization)
VALUES (3, 'Montreal', 'Quebec', 666, 'Rue Sherbrooke O', 'H3A1E3', 'hotel24@example.com', 90, 4);
INSERT INTO hotel (chain_id, city, province, street_number, street_name, postal_code, email, number_of_rooms, categorization)
VALUES (3, 'Vancouver', 'British Columbia', 777, 'Robson St', 'V6Z2E8', 'hotel25@example.com', 100, 5);
INSERT INTO hotel (chain_id, city, province, street_number, street_name, postal_code, email, number_of_rooms, categorization)
VALUES (3, 'Vancouver', 'British Columbia', 888, 'Homer St', 'V6B2W5', 'hotel26@example.com', 120, 4);

INSERT INTO hotel (chain_id, city, province, street_number, street_name, postal_code, email, number_of_rooms, categorization)
VALUES (4, 'New York', 'New York', 123, 'Broadway', '10001', 'hotel27@example.com', 200, 5);
INSERT INTO hotel (chain_id, city, province, street_number, street_name, postal_code, email, number_of_rooms, categorization)
VALUES (4, 'New York', 'New York', 234, 'Lexington Ave', '10010', 'hotel28@example.com', 150, 4);
INSERT INTO hotel (chain_id, city, province, street_number, street_name, postal_code, email, number_of_rooms, categorization)
VALUES (4, 'New York', 'New York', 345, 'Park Ave S', '10016', 'hotel29@example.com', 100, 3);
INSERT INTO hotel (chain_id, city, province, street_number, street_name, postal_code, email, number_of_rooms, categorization)
VALUES (4, 'New York', 'New York', 456, '5th Ave', '10018', 'hotel30@example.com', 80, 2);
INSERT INTO hotel (chain_id, city, province, street_number, street_name, postal_code, email, number_of_rooms, categorization)
VALUES (4, 'Los Angeles', 'California', 567, 'Hollywood Blvd', '90028', 'hotel31@example.com', 90, 3);
INSERT INTO hotel (chain_id, city, province, street_number, street_name, postal_code, email, number_of_rooms, categorization)
VALUES (4, 'Los Angeles', 'California', 678, 'Wilshire Blvd', '90024', 'hotel32@example.com', 120, 4);
INSERT INTO hotel (chain_id, city, province, street_number, street_name, postal_code, email, number_of_rooms, categorization)
VALUES (4, 'San Francisco', 'California', 789, 'Market St', '94103', 'hotel33@example.com', 100, 5);
INSERT INTO hotel (chain_id, city, province, street_number, street_name, postal_code, email, number_of_rooms, categorization)
VALUES (4, 'San Francisco', 'California', 890, 'Union Square', '94108', 'hotel34@example.com', 70, 2);

INSERT INTO hotel (chain_id, city, province, street_number, street_name, postal_code, email, number_of_rooms, categorization)
VALUES (5, 'New York', 'NY', 123, 'Broadway', '10001', 'hotel35@example.com', 200, 5);
INSERT INTO hotel (chain_id, city, province, street_number, street_name, postal_code, email, number_of_rooms, categorization)
VALUES (5, 'New York', 'NY', 234, '5th Avenue', '10016', 'hotel36@example.com', 150, 4);
INSERT INTO hotel (chain_id, city, province, street_number, street_name, postal_code, email, number_of_rooms, categorization)
VALUES (5, 'New York', 'NY', 345, 'Times Square', '10036', 'hotel37@example.com', 100, 3);
INSERT INTO hotel (chain_id, city, province, street_number, street_name, postal_code, email, number_of_rooms, categorization)
VALUES (5, 'Los Angeles', 'CA', 456, 'Hollywood Boulevard', '90028', 'hotel38@example.com', 80, 2);
INSERT INTO hotel (chain_id, city, province, street_number, street_name, postal_code, email, number_of_rooms, categorization)
VALUES (5, 'Toronto', 'ON', 567, 'Yonge Street', 'M5B1S5', 'hotel39@example.com', 90, 3);
INSERT INTO hotel (chain_id, city, province, street_number, street_name, postal_code, email, number_of_rooms, categorization)
VALUES (5, 'Toronto', 'ON', 678, 'Queen Street West', 'M5V2A4', 'hotel40@example.com', 120, 4);
INSERT INTO hotel (chain_id, city, province, street_number, street_name, postal_code, email, number_of_rooms, categorization)
VALUES (5, 'Vancouver', 'BC', 789, 'Robson Street', 'V6B5J3', 'hotel41@example.com', 100, 5);
INSERT INTO hotel (chain_id, city, province, street_number, street_name, postal_code, email, number_of_rooms, categorization)
VALUES (5, 'Vancouver', 'BC', 890, 'Granville Street', 'V6Z1L2', 'hotel42@example.com', 80, 2);

-- ----------------------------
-- Records of rooms
-- ----------------------------
INSERT INTO room (hotel_id, chain_id, room_view, price, capacity, expandability) VALUES (1, 1, 'mountain', 150.0, 2, 1);
INSERT INTO room (hotel_id, chain_id, room_view, price, capacity, expandability) VALUES (1, 1, 'sea', 200.0, 3, 0);
INSERT INTO room (hotel_id, chain_id, room_view, price, capacity, expandability) VALUES (1, 1, 'sea', 100.0, 1, 2);
INSERT INTO room (hotel_id, chain_id, room_view, price, capacity, expandability) VALUES (1, 1, 'mountain', 180.0, 4, 1);
INSERT INTO room (hotel_id, chain_id, room_view, price, capacity, expandability) VALUES (1, 1, 'mountain', 120.0, 5, 0);
