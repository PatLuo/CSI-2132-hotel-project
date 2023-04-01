-- ******* DATA INSERTIONS *******

-- ----------------------------
-- Records of hotel_chains
-- ----------------------------
INSERT INTO hotel_chain (id, number_of_hotels) VALUES (1, 10);
INSERT INTO hotel_chain (id, number_of_hotels) VALUES (2, 24);
INSERT INTO hotel_chain (id, number_of_hotels) VALUES (3, 6);
INSERT INTO hotel_chain (id, number_of_hotels) VALUES (4, 32);
INSERT INTO hotel_chain (id, number_of_hotels) VALUES (5, 18);

-- Records of hotel chain central offices
INSERT INTO central_office (chain_id, city, province, street_number, street_name, postal_code) VALUES (1, 'Ottawa', 'ON', 1, 'Laurier', 'ABC123');
INSERT INTO central_office (chain_id, city, province, street_number, street_name, postal_code) VALUES (2, 'Toronto', 'ON', 99, 'Main', 'DEF456');
INSERT INTO central_office (chain_id, city, province, street_number, street_name, postal_code) VALUES (3, 'Vancouver', 'BC', 50, 'Georgia', 'A1B2C3');
INSERT INTO central_office (chain_id, city, province, street_number, street_name, postal_code) VALUES (4, 'New York', 'New York', 107, 'Upper Manhattan', 'Z2X5Y3');
INSERT INTO central_office (chain_id, city, province, street_number, street_name, postal_code) VALUES (5, 'Los Angeles', 'California', 23, 'Hollywood Boulevard', 'HOL123');

-- Examples of hotel chain email insertions
INSERT INTO chain_email (chain_id, email) VALUES (2, 'Toronto@hotelchain.com');
INSERT INTO chain_email (chain_id, email) VALUES (3, 'Vancouver@hotelchain.com');

-- Examples of hotel chain phone number insertions
INSERT INTO chain_phone (chain_id, phone_number) VALUES (1, 6131111111);
INSERT INTO chain_phone (chain_id, phone_number) VALUES (2, 4162222222);


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

-- Examples of Insertions for hotel_phone
INSERT INTO hotel_phone (chain_id, hotel_id, phone_number) VALUES (1, 2, 14165678901);
INSERT INTO hotel_phone (chain_id, hotel_id, phone_number) VALUES (1, 8, 15145432109);


-- ----------------------------
-- Records of rooms
-- ----------------------------
-- Insertions for hotels of the hotel_chain with id=1
INSERT INTO room (hotel_id, chain_id, room_view, price, capacity, expandability) VALUES (1, 1, 'mountain', 150.0, 2, 1);
INSERT INTO room (hotel_id, chain_id, room_view, price, capacity, expandability) VALUES (1, 1, 'sea', 200.0, 3, 0);
INSERT INTO room (hotel_id, chain_id, room_view, price, capacity, expandability) VALUES (1, 1, 'sea', 100.0, 1, 2);
INSERT INTO room (hotel_id, chain_id, room_view, price, capacity, expandability) VALUES (1, 1, 'mountain', 180.0, 4, 1);
INSERT INTO room (hotel_id, chain_id, room_view, price, capacity, expandability) VALUES (1, 1, 'mountain', 120.0, 5, 0);

INSERT INTO room (hotel_id, chain_id, room_view, price, capacity, expandability) VALUES (2, 1, 'sea', 100.0, 1, 2);
INSERT INTO room (hotel_id, chain_id, room_view, price, capacity, expandability) VALUES (2, 1, 'mountain', 150.0, 2, 1);
INSERT INTO room (hotel_id, chain_id, room_view, price, capacity, expandability) VALUES (2, 1, 'sea', 200.0, 3, 0);
INSERT INTO room (hotel_id, chain_id, room_view, price, capacity, expandability) VALUES (2, 1, 'mountain', 250.0, 4, 2);
INSERT INTO room (hotel_id, chain_id, room_view, price, capacity, expandability) VALUES (2, 1, 'sea', 300.0, 5, 1);

INSERT INTO room (hotel_id, chain_id, room_view, price, capacity, expandability) VALUES (3, 1, 'mountain', 130.0, 2, 0);
INSERT INTO room (hotel_id, chain_id, room_view, price, capacity, expandability) VALUES (3, 1, 'sea', 170.0, 3, 1);
INSERT INTO room (hotel_id, chain_id, room_view, price, capacity, expandability) VALUES (3, 1, 'mountain', 210.0, 4, 0);
INSERT INTO room (hotel_id, chain_id, room_view, price, capacity, expandability) VALUES (3, 1, 'sea', 250.0, 5, 2);
INSERT INTO room (hotel_id, chain_id, room_view, price, capacity, expandability) VALUES (3, 1, 'mountain', 290.0, 1, 1);

INSERT INTO room (hotel_id, chain_id, room_view, price, capacity, expandability) VALUES (4, 1, 'sea', 90.0, 3, 1);
INSERT INTO room (hotel_id, chain_id, room_view, price, capacity, expandability) VALUES (4, 1, 'mountain', 120.0, 4, 0);
INSERT INTO room (hotel_id, chain_id, room_view, price, capacity, expandability) VALUES (4, 1, 'sea', 150.0, 1, 2);
INSERT INTO room (hotel_id, chain_id, room_view, price, capacity, expandability) VALUES (4, 1, 'mountain', 180.0, 2, 1);
INSERT INTO room (hotel_id, chain_id, room_view, price, capacity, expandability) VALUES (4, 1, 'sea', 210.0, 5, 0);

INSERT INTO room (hotel_id, chain_id, room_view, price, capacity, expandability) VALUES (5, 1, 'sea', 160.0, 4, 2);
INSERT INTO room (hotel_id, chain_id, room_view, price, capacity, expandability) VALUES (5, 1, 'sea', 200.0, 3, 0);
INSERT INTO room (hotel_id, chain_id, room_view, price, capacity, expandability) VALUES (5, 1, 'sea', 100.0, 1, 2);
INSERT INTO room (hotel_id, chain_id, room_view, price, capacity, expandability) VALUES (5, 1, 'mountain', 180.0, 2, 1);
INSERT INTO room (hotel_id, chain_id, room_view, price, capacity, expandability) VALUES (5, 1, 'mountain', 120.0, 5, 0);

INSERT INTO room(hotel_id, chain_id, room_view, price, capacity, expandability) VALUES (6, 1, 'sea', 400.0, 5, 2);
INSERT INTO room(hotel_id, chain_id, room_view, price, capacity, expandability) VALUES (6, 1, 'mountain', 150.0, 1, 0);
INSERT INTO room(hotel_id, chain_id, room_view, price, capacity, expandability) VALUES (6, 1, 'mountain', 250.0, 3, 2);
INSERT INTO room(hotel_id, chain_id, room_view, price, capacity, expandability) VALUES (6, 1, 'sea', 350.0, 4, 1);
INSERT INTO room(hotel_id, chain_id, room_view, price, capacity, expandability) VALUES (6, 1, 'sea', 200.0, 2, 0);

INSERT INTO room(hotel_id, chain_id, room_view, price, capacity, expandability) VALUES (7, 1, 'mountain', 150.0, 1, 0);
INSERT INTO room(hotel_id, chain_id, room_view, price, capacity, expandability) VALUES (7, 1, 'sea', 250.0, 3, 1);
INSERT INTO room(hotel_id, chain_id, room_view, price, capacity, expandability) VALUES (7, 1, 'mountain', 200.0, 2, 1);
INSERT INTO room(hotel_id, chain_id, room_view, price, capacity, expandability) VALUES (7, 1, 'sea', 350.0, 5, 2);
INSERT INTO room(hotel_id, chain_id, room_view, price, capacity, expandability) VALUES (7, 1, 'mountain', 300.0, 4, 2);

INSERT INTO room(hotel_id, chain_id, room_view, price, capacity, expandability) VALUES (8, 1, 'mountain', 200.0, 2, 1);
INSERT INTO room(hotel_id, chain_id, room_view, price, capacity, expandability) VALUES (8, 1, 'sea', 250.0, 3, 2);
INSERT INTO room(hotel_id, chain_id, room_view, price, capacity, expandability) VALUES (8, 1, 'sea', 350.0, 4, 3);
INSERT INTO room(hotel_id, chain_id, room_view, price, capacity, expandability) VALUES (8, 1, 'mountain', 150.0, 1, 0);
INSERT INTO room(hotel_id, chain_id, room_view, price, capacity, expandability) VALUES (8, 1, 'mountain', 250.0, 3, 2);

-- Insertions for hotels of the hotel_chain with id=2
INSERT INTO room (hotel_id, chain_id, renting_status, room_view, price, capacity, expandability)
VALUES (9, 2, 'open', 'mountain', 100.0, 1, 0),
       (9, 2, 'open', 'sea', 120.0, 2, 1),
       (9, 2, 'open', 'mountain', 150.0, 3, 2),
       (9, 2, 'open', 'sea', 180.0, 4, 3),
       (9, 2, 'open', 'mountain', 200.0, 5, 3);
INSERT INTO room (hotel_id, chain_id, renting_status, room_view, price, capacity, expandability)
VALUES (10, 2, 'open', 'sea', 90.0, 1, 0),
       (10, 2, 'open', 'mountain', 120.0, 2, 1),
       (10, 2, 'open', 'sea', 150.0, 3, 1),
       (10, 2, 'open', 'mountain', 180.0, 4, 2),
       (10, 2, 'open', 'sea', 210.0, 5, 3);
INSERT INTO room (hotel_id, chain_id, renting_status, room_view, price, capacity, expandability)
VALUES (11, 2, 'open', 'mountain', 120.0, 1, 0),
       (11, 2, 'open', 'sea', 150.0, 2, 0),
       (11, 2, 'open', 'mountain', 180.0, 3, 1),
       (11, 2, 'open', 'sea', 210.0, 4, 2),
       (11, 2, 'open', 'mountain', 240.0, 5, 3);
INSERT INTO room (hotel_id, chain_id, renting_status, room_view, price, capacity, expandability)
VALUES (12, 2, 'open', 'sea', 150.0, 1, 0),
       (12, 2, 'open', 'mountain', 180.0, 2, 0),
       (12, 2, 'open', 'sea', 210.0, 3, 1),
       (12, 2, 'open', 'mountain', 240.0, 4, 2),
       (12, 2, 'open', 'sea', 270.0, 5, 3);
INSERT INTO room (hotel_id, chain_id, renting_status, room_view, price, capacity, expandability) 
VALUES (13, 2, 'open', 'sea', 150.0, 1, 1),
       (13, 2, 'open', 'mountain', 180.0, 2, 0),
       (13, 2, 'open', 'sea', 200.0, 3, 1),
       (13, 2, 'open', 'mountain', 220.0, 4, 2),
       (13, 2, 'open', 'sea', 300.0, 5, 3);

INSERT INTO room (hotel_id, chain_id, renting_status, room_view, price, capacity, expandability) 
VALUES (14, 2, 'open', 'sea', 100.0, 1, 1),
        (14, 2, 'open', 'mountain', 120.0, 2, 0),
        (14, 2, 'open', 'sea', 130.0, 3, 1),
        (14, 2, 'open', 'mountain', 150.0, 4, 2),
        (14, 2, 'open', 'sea', 200.0, 5, 3);

INSERT INTO room (hotel_id, chain_id, renting_status, room_view, price, capacity, expandability) 
VALUES (15, 2, 'open', 'sea', 200.0, 1, 1),
        (15, 2, 'open', 'mountain', 250.0, 2, 0),
        (15, 2, 'open', 'sea', 300.0, 3, 1),
        (15, 2, 'open', 'mountain', 350.0, 4, 2),
        (15, 2, 'open', 'sea', 400.0, 5, 3);

INSERT INTO room (hotel_id, chain_id, renting_status, room_view, price, capacity, expandability) 
VALUES (16, 2, 'open', 'sea', 100.0, 1, 1),
        (16, 2, 'open', 'mountain', 120.0, 2, 0),
        (16, 2, 'open', 'sea', 130.0, 3, 1),
        (16, 2, 'open', 'mountain', 150.0, 4, 2),
        (16, 2, 'open', 'sea', 200.0, 5, 3);

-- Insertions for hotels of the hotel_chain with id=3
INSERT INTO room (hotel_id, chain_id, renting_status, room_view, price, capacity, expandability) 
VALUES (17, 3, 'open', 'mountain', 150.0, 1, 0),
       (17, 3, 'open', 'sea', 200.0, 2, 1),
       (17, 3, 'open', 'mountain', 250.0, 3, 2),
       (17, 3, 'open', 'sea', 300.0, 4, 3),
       (17, 3, 'open', 'mountain', 350.0, 5, 0),
       (18, 3, 'open', 'sea', 175.0, 1, 0),
       (18, 3, 'open', 'mountain', 225.0, 2, 1),
       (18, 3, 'open', 'sea', 275.0, 3, 2),
       (18, 3, 'open', 'mountain', 325.0, 4, 3),
       (18, 3, 'open', 'sea', 375.0, 5, 0),
       (19, 3, 'open', 'mountain', 200.0, 1, 0),
       (19, 3, 'open', 'sea', 250.0, 2, 1),
       (19, 3, 'open', 'mountain', 300.0, 3, 2),
       (19, 3, 'open', 'sea', 350.0, 4, 3),
       (19, 3, 'open', 'mountain', 400.0, 5, 0),
       (20, 3, 'open', 'sea', 225.0, 1, 0),
       (20, 3, 'open', 'mountain', 275.0, 2, 1),
       (20, 3, 'open', 'sea', 325.0, 3, 2),
       (20, 3, 'open', 'mountain', 375.0, 4, 3),
       (20, 3, 'open', 'sea', 425.0, 5, 0),
       (21, 3, 'open', 'mountain', 150.0, 1, 0),
       (21, 3, 'open', 'sea', 200.0, 2, 1),
       (21, 3, 'open', 'mountain', 250.0, 3, 2),
       (21, 3, 'open', 'sea', 300.0, 4, 3),
       (21, 3, 'open', 'mountain', 350.0, 5, 0),
       (22, 3, 'open', 'sea', 175.0, 1, 0),
       (22, 3, 'open', 'mountain', 225.0, 2, 1),
       (22, 3, 'open', 'sea', 275.0, 3, 2),
       (22, 3, 'open', 'mountain', 325.0, 4, 3),
       (22, 3, 'open', 'sea', 375.0, 5, 0),
       (23, 3, 'open', 'mountain', 200.0, 1, 0),
       (23, 3, 'open', 'sea', 250.0, 2, 1),
       (23, 3, 'open', 'mountain', 300.0, 3, 2),
       (23, 3, 'open', 'sea', 350.0, 4, 3),
       (23, 3, 'open', 'mountain', 400.0, 5, 0),
       (24, 3, 'open', 'sea', 225.0, 1, 0),
       (24, 3, 'open', 'mountain', 275.0, 2, 1),
       (24, 3, 'open', 'sea', 325.0, 3, 2),
       (24, 3, 'open', 'mountain', 375.0, 4, 3),
       (24, 3, 'open', 'sea', 425.0, 5, 0);

-- Insertions for hotels of the hotel_chain with id=4
INSERT INTO room (hotel_id, chain_id, renting_status, room_view, price, capacity, expandability)
VALUES 
    (25, 4, 'open', 'mountain', 160.0, 1, 0),
    (25, 4, 'open', 'sea', 210.0, 2, 1),
    (25, 4, 'open', 'mountain', 260.0, 3, 2),
    (25, 4, 'open', 'sea', 310.0, 4, 3),
    (25, 4, 'open', 'mountain', 360.0, 5, 0),
    (26, 4, 'open', 'sea', 185.0, 1, 0),
    (26, 4, 'open', 'mountain', 235.0, 2, 1),
    (26, 4, 'open', 'sea', 285.0, 3, 2),
    (26, 4, 'open', 'mountain', 335.0, 4, 3),
    (26, 4, 'open', 'sea', 385.0, 5, 0),
    (27, 4, 'open', 'mountain', 210.0, 1, 0),
    (27, 4, 'open', 'sea', 260.0, 2, 1),
    (27, 4, 'open', 'mountain', 310.0, 3, 2),
    (27, 4, 'open', 'sea', 360.0, 4, 3),
    (27, 4, 'open', 'mountain', 410.0, 5, 0),
    (28, 4, 'open', 'sea', 235.0, 1, 0),
    (28, 4, 'open', 'mountain', 285.0, 2, 1),
    (28, 4, 'open', 'sea', 335.0, 3, 2),
    (28, 4, 'open', 'mountain', 385.0, 4, 3),
    (28, 4, 'open', 'sea', 435.0, 5, 0),
    (29, 4, 'open', 'mountain', 260.0, 1, 0),
    (29, 4, 'open', 'sea', 310.0, 2, 1),
    (29, 4, 'open', 'mountain', 360.0, 3, 2),
    (29, 4, 'open', 'sea', 410.0, 4, 3),
    (29, 4, 'open', 'mountain', 460.0, 5, 0),
    (30, 4, 'open', 'sea', 285.0, 1, 0),
    (30, 4, 'open', 'mountain', 335.0, 2, 1),
    (30, 4, 'open', 'sea', 385.0, 3, 2),
    (30, 4, 'open', 'mountain', 435.0, 4, 3),
    (30, 4, 'open', 'sea', 485.0, 5, 0),
    (31, 4, 'open', 'mountain', 310.0, 1, 0),
    (31, 4, 'open', 'sea', 360.0, 2, 1),
    (31, 4, 'open', 'mountain', 410.0, 3, 2),
    (31, 4, 'open', 'sea', 460.0, 4, 3),
    (31, 4, 'open', 'mountain', 510.0, 5, 0),
    (32, 4, 'open', 'sea', 335.0, 1, 0),
    (32, 4, 'open', 'mountain', 385.0, 2, 1),
    (32, 4, 'open', 'sea', 435.0, 3, 2),
    (32, 4, 'open', 'mountain', 485.0, 4, 3),
    (32, 4, 'open', 'sea', 535.0, 5, 0);

INSERT INTO room (hotel_id, chain_id, renting_status, room_view, price, capacity, expandability)
VALUES
    (33, 5, 'open', 'sea', 150.0, 1, 0),
    (33, 5, 'open', 'mountain', 200.0, 2, 1),
    (33, 5, 'open', 'sea', 250.0, 3, 2),
    (33, 5, 'open', 'mountain', 300.0, 4, 3),
    (33, 5, 'open', 'sea', 350.0, 5, 0),
    (34, 5, 'open', 'mountain', 175.0, 1, 0),
    (34, 5, 'open', 'sea', 225.0, 2, 1),
    (34, 5, 'open', 'mountain', 275.0, 3, 2),
    (34, 5, 'open', 'sea', 325.0, 4, 3),
    (34, 5, 'open', 'mountain', 375.0, 5, 0),
    (35, 5, 'open', 'sea', 200.0, 1, 0),
    (35, 5, 'open', 'mountain', 250.0, 2, 1),
    (35, 5, 'open', 'sea', 300.0, 3, 2),
    (35, 5, 'open', 'mountain', 350.0, 4, 3),
    (35, 5, 'open', 'sea', 400.0, 5, 0),
    (36, 5, 'open', 'mountain', 225.0, 1, 0),
    (36, 5, 'open', 'sea', 275.0, 2, 1),
    (36, 5, 'open', 'mountain', 325.0, 3, 2),
    (36, 5, 'open', 'sea', 375.0, 4, 3),
    (36, 5, 'open', 'mountain', 425.0, 5, 0),
    (37, 5, 'open', 'sea', 160.0, 1, 0),
    (37, 5, 'open', 'mountain', 210.0, 2, 1),
    (37, 5, 'open', 'sea', 260.0, 3, 2),
    (37, 5, 'open', 'mountain', 310.0, 4, 3),
    (37, 5, 'open', 'sea', 360.0, 5, 0),
    (38, 5, 'open', 'mountain', 185.0, 1, 0),
    (38, 5, 'open', 'sea', 235.0, 2, 1),
    (38, 5, 'open', 'mountain', 285.0, 3, 2),
    (38, 5, 'open', 'sea', 335.0, 4, 3),
    (38, 5, 'open', 'mountain', 385.0, 5, 0),
    (39, 5, 'open', 'sea', 210.0, 1, 0),
    (39, 5, 'open', 'mountain', 260.0, 2, 1),
    (39, 5, 'open', 'sea', 310.0, 3, 2),
    (39, 5, 'open', 'mountain', 360.0, 4, 3),
    (39, 5, 'open', 'sea', 410.0, 5, 0),
    (40, 5, 'open', 'mountain', 235.0, 1, 0),
    (40, 5, 'open', 'sea', 285.0, 2, 1),
    (40, 5, 'open', 'mountain', 335.0, 3, 2),
    (40, 5, 'open', 'sea', 385.0, 4, 3),
    (40, 5, 'open', 'mountain', 435.0, 5, 0);


-- Examples of Insertions for Room related relations (Amenities, Damage/Problems)
INSERT INTO room_amenity(room_id, hotel_id, chain_id, amenity_name) VALUES (1,1,3, 'Fridge');
INSERT INTO room_amenity(room_id, hotel_id, chain_id, amenity_name) VALUES (1,1,3, 'Coffee maker');
INSERT INTO room_amenity(room_id, hotel_id, chain_id, amenity_name) VALUES (1,1,3, 'Microwave');

INSERT INTO damage_or_problem (room_id, hotel_id, chain_id, description) VALUES (106, 2, 1, 'Broken lights');
INSERT INTO damage_or_problem (room_id, hotel_id, chain_id, description) VALUES (153, 11, 2, 'Insufficient shampoo');


-- ----------------------------
-- Example Records of Employees
-- ----------------------------
INSERT INTO employee(ssn, first_name, last_name, city, province, street_number, street_name, postal_code, position)
VALUES (334567890, 'John', 'Doe', 'Ottawa', 'ON', 123, 'Main St', '1001', 'Manager');

INSERT INTO employee(ssn, first_name, last_name, city, province, street_number, street_name, postal_code, position)
VALUES (234567891, 'Bob', 'Smith', 'Toronto', 'ON', 551, 'Yonge', '576', 'Accountant');

INSERT INTO employee(ssn, first_name, last_name, city, province, street_number, street_name, postal_code, position)
VALUES (567891234, 'Doe', 'Smith', 'Regina', 'Saskatchewan', 53, 'Avenue', 'ABC153', 'Supervisor');

-- Insertions for Employee related relations
INSERT INTO works_for(employee_ssn, hotel_id, chain_id) VALUES (334567890, 2, 1);
INSERT INTO manages (hotel_manager_ssn, hotel_id, chain_id) VALUES (334567890, 2, 1);
INSERT INTO supervision(supervisor_ssn, supervisee_ssn) VALUES (567891234, 234567891);


-- ----------------------------
-- Example Records of Customers
-- ----------------------------
INSERT INTO customer (ssn, first_name, last_name, city, province, street_number, street_name, postal_code, date_of_registration)
VALUES (123456777, 'Jone', 'Johnson', 'Toronto', 'ON', 123, 'Yonge', 'K12A34', '2022-01-03');

INSERT INTO customer (ssn, first_name, last_name, city, province, street_number, street_name, postal_code, date_of_registration)
VALUES (123456777, 'Jone', 'Johnson', 'Toronto', 'ON', 123, 'Yonge', 'K12A34', '2022-01-03');


-- ----------------------------
-- Example Records of Booking/Renting
-- ----------------------------
INSERT INTO booking_renting(cust_ssn, room_id, hotel_id, chain_id, payment_type, payment_amount, start_date, end_date, reservation_status)
VALUES (323456751, 155, 12, 2, 'credit', 150, '2023-04-01', '2023-04-02', 'renting');

INSERT INTO booking_renting (cust_ssn, room_id, hotel_id, chain_id, start_date, end_date, reservation_status) 
VALUES (123457, 8, 1, 1,'2023-02-01', '2023-02-05', 'booking');

--Nothing for the table Archives as any insertions in the table booking_renting will populate the Archives table as well (via trigger). 
