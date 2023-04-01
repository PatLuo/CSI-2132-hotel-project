-- ----------------------------
-- Queries For Customer Table (Insert/Update/Delete)
-- ----------------------------
SELECT * FROM customer;

--values to be replaced by user input in the UI
UPDATE customer
SET ssn='${ssn}', first_name='${first_name}', 
	last_name='${last_name}', city='${city}', province='${province}', 
	street_number=${street_number}, street_name='${street_name}', 
	postal_code='${postal_code}', date_of_registration='${date_of_registration}'
WHERE ssn=${originalPK};

--values to be replaced by user input in the UI
INSERT INTO customer (ssn, first_name, last_name, city, province, street_number, street_name, postal_code, date_of_registration)
VALUES ('${ssn}', '${first_name}', '${last_name}', '${city}', '${province}', ${street_number}, '${street_name}', '${postal_code}', '${date_of_registration}');

--values to be replaced by user input in the UI
DELETE FROM customer WHERE ssn = ${req.params.ssn};

-- ----------------------------
-- Queries For Employee Table (Insert/Update/Delete)
-- ----------------------------
SELECT * FROM Employee;

--values to be replaced by user input in the UI
UPDATE employee
SET ssn = '${ssn}', first_name = '${first_name}', 
	last_name = '${last_name}', city = '${city}', province = '${province}', 
	street_number = ${street_number}, street_name = '${street_name}', 
	postal_code = '${postal_code}', position = '${position}'
WHERE ssn = ${originalPK};

--values to be replaced by user input in the UI
INSERT INTO employee (ssn, first_name, last_name, city, province, street_number, street_name, postal_code, position)
    VALUES ('${ssn}', '${first_name}', '${last_name}', '${city}', '${province}', ${street_number}, '${street_name}', '${postal_code}', '${position}');

--values to be replaced by user input in the UI
DELETE FROM employee WHERE ssn = ${req.params.ssn};


-- ----------------------------
-- Queries For Hotel Table (Insert/Update/Delete)
-- ----------------------------
SELECT * FROM hotel ORDER BY hotel_id;

--values to be replaced by user input in the UI
UPDATE hotel
SET chain_id = ${chain_id}, hotel_id = ${hotel_id}, city = '${city}', 
	province = '${province}', street_number = ${street_number}, 
	street_name = '${street_name}', postal_code = '${postal_code}', 
	email = '${email}', number_of_rooms = ${number_of_rooms}, categorization = ${categorization}
WHERE chain_id = ${originalPK[0]} AND hotel_id = ${originalPK[1]};

--values to be replaced by user input in the UI
INSERT INTO hotel (chain_id,  city, province, street_number, street_name, postal_code, email, number_of_rooms, categorization)
    VALUES (${chain_id},'${city}', '${province}', ${street_number}, '${street_name}', '${postal_code}', '${email}', ${number_of_rooms}, ${categorization});

--values to be replaced by user input in the UI
DELETE FROM hotel
WHERE chain_id = ${originalPK[0]} AND hotel_id = ${originalPK[1]};

-- ----------------------------
-- Queries For Room Table (Insert/Update/Delete)
-- ----------------------------
SELECT * FROM room ORDER BY room_id;

--values to be replaced by user input in the UI
UPDATE room
SET hotel_id = ${hotel_id}, chain_id = ${chain_id}, 
	renting_status = '${renting_status}', room_view = '${room_view}', 
	price = ${price}, capacity = ${capacity}, expandability = ${expandability}
WHERE room_id = ${originalPK[0]} AND hotel_id = ${originalPK[1]} AND chain_id = ${originalPK[2]} ;

--values to be replaced by user input in the UI
INSERT INTO room ( hotel_id, chain_id, renting_status, room_view, price, capacity, expandability)
VALUES ( ${hotel_id}, ${chain_id}, '${renting_status}', '${room_view}', ${price}, ${capacity}, ${expandability});

--values to be replaced by user input in the UI
DELETE FROM room
WHERE room_id = ${req.params.originalPK[0]} AND 
	hotel_id = ${req.params.originalPK[1]} AND 
	chain_id = ${req.params.originalPK[2]};


-- ----------------------------
-- Queries For Room Filtering/Search
-- ----------------------------
-- Filter by start_date and end_date of booking/renting
SELECT room_id
FROM room r 
WHERE r.room_id NOT IN 
(SELECT room_id 
FROM booking_renting b 
WHERE (b.start_date, b.end_date) OVERLAPS (:inputStartDate, :inputEndDate)); -- dates to be replaced by user input
		
-- Filter by room price
SELECT room_id
FROM room
WHERE price <= :inputPrice; --to be replaced by user input

-- Filter by number of rooms in a hotel
SELECT room_id
FROM hotel JOIN room USING (hotel_id, chain_id)
WHERE number_of_rooms >= :inputNumRooms; --to be replaced by user input

-- Filter by categorization of a hotel
SELECT room_id
FROM hotel JOIN room USING (hotel_id, chain_id)
WHERE categorization = :inputCategorization; --to be replaced by user input
 
-- Filter by hotel chain
SELECT room_id
FROM hotel JOIN room USING (hotel_id, chain_id)
WHERE chain_id = :inputChainID; --to be replaced by user input

-- Filter by area (city)
SELECT room_id
FROM hotel JOIN room USING (hotel_id, chain_id)
WHERE city = :inputCity; --to be replaced by user input

-- Filter by room capacity
SELECT room_id
FROM room
WHERE capacity = :inputCapacity; --to be replaced by user input


-- ----------------------------
-- SQL user Views queries
-- ----------------------------

--View 1: the first view is the number of available rooms per area.
CREATE VIEW available_rooms_per_city AS
SELECT h.city, COUNT(r.room_id) AS available_rooms
FROM hotel h
JOIN room r USING (hotel_id, chain_id)
WHERE r.room_id NOT IN (SELECT room_id 
						FROM booking_renting b 
						WHERE b.room_id=r.room_id AND b.reservation_status='renting')
GROUP BY h.city;

SELECT * FROM available_rooms_per_city;

-- View 2: the second view is the capacity of all the rooms of a specific hotel 
-- There were 2 possible interpretations for this view. We decided to use the first interpretation:

-- First interpretation: display the total combined capacity of a hotel (i.e., the combined capacity of all rooms under the hotel)
CREATE VIEW hotel_room_capacity AS
SELECT hotel_id, SUM(capacity) AS total_capacity
FROM room
GROUP BY hotel_id;

SELECT * FROM hotel_room_capacity;

-- Second interpretation: display the capacity of each room under the hotel.
DROP VIEW IF EXISTS hotel_room_capacity;
CREATE VIEW hotel_room_capacity AS
SELECT hotel_id, room_id, capacity
FROM room
ORDER BY hotel_id;


-- ----------------------------
-- Queries For Booking_Renting Table
-- ----------------------------
SELECT * FROM booking_renting ORDER BY cust_ssn, room_id;

--values to be replaced by user input in the UI
UPDATE booking_renting
SET payment_type = '${payment_type}', reservation_status = '${reservation_status}'
WHERE cust_ssn = ${cust_ssn} AND room_id = ${room_id} AND hotel_id = ${hotel_id} AND chain_id = ${chain_id};

--values to be replaced by user input in the UI
INSERT INTO booking_renting (cust_ssn, room_id, hotel_id, chain_id, payment_type, payment_amount, start_date, end_date, reservation_status)
  VALUES ('${cust_ssn}', ${room_id}, ${hotel_id}, ${chain_id}, '${payment_type}', ${payment_amount}, '${start_date}', '${end_date}', 'booking');
  
--values to be replaced by user input in the UI
INSERT INTO booking_renting (cust_ssn, room_id, hotel_id, chain_id, payment_amount, start_date, end_date, reservation_status)
  VALUES ('${cust_ssn}', ${room_id}, ${hotel_id}, ${chain_id}, ${payment_amount}, '${start_date}', '${end_date}', 'booking');

--values to be replaced by user input in the UI
INSERT INTO booking_renting (cust_ssn, room_id, hotel_id, chain_id, payment_type, payment_amount, start_date, end_date, reservation_status)
  VALUES ('${cust_ssn}', ${room_id}, ${hotel_id}, ${chain_id}, '${payment_type}', ${payment_amount}, '${start_date}', '${end_date}', 'renting');