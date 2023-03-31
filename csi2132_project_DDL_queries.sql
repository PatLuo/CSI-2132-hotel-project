DROP TABLE IF EXISTS hotel_chain CASCADE;
CREATE TABLE hotel_chain(
	id SERIAL,
	number_of_hotels INT NOT NULL,
	PRIMARY KEY (id)
);

DROP TABLE IF EXISTS central_office;
CREATE TABLE central_office(
	chain_id INT,
	city varchar(255) NOT NULL,
	province varchar(255) NOT NULL,
	street_number INT NOT NULL,
	street_name varchar(255) NOT NULL,
	postal_code varchar(6) NOT NULL,
	PRIMARY KEY (chain_id, city, province, street_number, street_name, postal_code),
	FOREIGN KEY (chain_id) REFERENCES hotel_chain(id) ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS chain_email;
CREATE TABLE chain_email(
	chain_id INT,
	email varchar(255) CHECK (email LIKE '_%@_%._%'),
	PRIMARY KEY (chain_id, email),
	FOREIGN KEY (chain_id) REFERENCES hotel_chain(id) ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS chain_phone;
CREATE TABLE chain_phone(
	chain_id INT,
	phone_number numeric(11,0),
	PRIMARY KEY (chain_id, phone_number),
	FOREIGN KEY (chain_id) REFERENCES hotel_chain(id) ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS hotel CASCADE;
CREATE TABLE hotel(
	chain_id INT,
	hotel_id SERIAL,
	city varchar(255) NOT NULL,
	province varchar(255) NOT NULL,
	street_number INT NOT NULL,
	street_name varchar(255) NOT NULL,
	postal_code varchar(6) NOT NULL,
	email varchar(255) NOT NULL CHECK (email LIKE '_%@_%._%'),
	number_of_rooms INT NOT NULL,
	categorization INT NOT NULL CHECK (categorization >= 1 AND categorization <= 5),
	PRIMARY KEY (chain_id, hotel_id),
	FOREIGN KEY (chain_id) REFERENCES hotel_chain(id) ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS hotel_phone;
CREATE TABLE hotel_phone(
	chain_id INT,
	hotel_id INT,
	phone_number numeric(11,0),
	PRIMARY KEY (chain_id, hotel_id, phone_number),
	FOREIGN KEY (chain_id, hotel_id) REFERENCES hotel(chain_id, hotel_id) ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS employee CASCADE;
CREATE TABLE employee (
	ssn numeric(9,0), 
	first_name varchar(20) NOT NULL,
	last_name varchar(20) NOT NULL,
	
	city varchar(255) NOT NULL,
	province varchar(255) NOT NULL,
	street_number INT NOT NULL,
	street_name varchar(255) NOT NULL,
	postal_code varchar(6) NOT NULL,
	position varchar(50) NOT NULL,
	PRIMARY KEY(ssn)
);

DROP TABLE IF EXISTS supervision;
CREATE TABLE supervision (
	supervisor_ssn numeric(9,0), 
	supervisee_ssn numeric(9,0),
	PRIMARY KEY (supervisor_ssn, supervisee_ssn),
	FOREIGN KEY (supervisor_ssn) REFERENCES employee(ssn) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (supervisee_ssn) REFERENCES employee(ssn) ON DELETE CASCADE ON UPDATE CASCADE
);

-- **** RELATIONS BETWEEN HOTEL AND EMPLOYEE*******
DROP TABLE IF EXISTS works_for;
CREATE TABLE works_for(
	employee_ssn numeric(9,0),
	hotel_id INT,
	chain_id INT,
	PRIMARY KEY (employee_ssn, hotel_id, chain_id),
	FOREIGN KEY (chain_id, hotel_id) REFERENCES hotel(chain_id, hotel_id) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (employee_ssn) REFERENCES employee(ssn) ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS manages;
CREATE TABLE manages(
	hotel_manager_ssn numeric(9,0),
	hotel_id INT,
	chain_id INT,
	PRIMARY KEY (hotel_manager_ssn, hotel_id, chain_id),
	FOREIGN KEY (chain_id, hotel_id) REFERENCES hotel(chain_id, hotel_id) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (hotel_manager_ssn) REFERENCES employee(ssn) ON DELETE CASCADE ON UPDATE CASCADE
);
-- **** END OF RELATIONS BETWEEN HOTEL AND EMPLOYEE*******

DROP TABLE IF EXISTS customer CASCADE;
CREATE TABLE customer (
	ssn numeric(9,0), 
	first_name varchar(20) NOT NULL,
	last_name varchar(20) NOT NULL,
	
	city varchar(255) NOT NULL,
	province varchar(255) NOT NULL,
	street_number INT NOT NULL,
	street_name varchar(255) NOT NULL,
	postal_code varchar(6) NOT NULL,
	date_of_registration DATE NOT NULL,
	PRIMARY KEY (ssn)
);

DROP TYPE IF EXISTS rentingStatusEnum CASCADE;
CREATE TYPE rentingStatusEnum AS ENUM ('open', 'booked', 'renting');

DROP TYPE IF EXISTS roomViewEnum CASCADE;
CREATE TYPE roomViewEnum AS ENUM ('mountain', 'sea');

DROP TABLE IF EXISTS room CASCADE;
CREATE TABLE room (
	room_id SERIAL,
	hotel_id int,
	chain_id int,
	renting_status rentingStatusEnum default 'open',
	room_view roomViewEnum NOT NULL,
	price float NOT NULL,
	capacity int CHECK (capacity >= 1 AND capacity <= 5) NOT NULL,
	
	expandability int CHECK (expandability >= 0 AND expandability <=3) NOT NULL,
	PRIMARY KEY (room_id, hotel_id, chain_id),
	FOREIGN KEY (hotel_id, chain_id) REFERENCES hotel(hotel_id, chain_id) ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TYPE IF EXISTS paymentTypeEnum CASCADE;
CREATE TYPE paymentTypeEnum AS ENUM ('credit', 'debit', 'cash');

DROP TYPE IF EXISTS reservationStatusEnum CASCADE;
CREATE TYPE reservationStatusEnum AS ENUM ('booking', 'renting');

DROP TABLE IF EXISTS booking_renting;
CREATE TABLE booking_renting (
	cust_ssn numeric (9,0),
	room_id int,
	hotel_id int,
	chain_id int,
	
	payment_type paymentTypeEnum,
	payment_amount float,
	
	start_date DATE NOT NULL, 
	end_date DATE NOT NULL,
	CHECK (end_date > start_date),
	
	reservation_status reservationStatusEnum NOT NULL,
	
	PRIMARY KEY (cust_ssn, room_id, hotel_id, chain_id),
	FOREIGN KEY (cust_ssn) REFERENCES customer(ssn) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (room_id, hotel_id, chain_id) REFERENCES room(room_id, hotel_id, chain_id) ON DELETE CASCADE ON UPDATE CASCADE
); 

-- **** RELATIONS FOR ROOM*******
DROP TABLE IF EXISTS damage_or_problem;
CREATE TABLE damage_or_problem(
	room_id INT,
	hotel_id INT,
	chain_id INT,
	description varchar(255),
	PRIMARY KEY (room_id, hotel_id, chain_id, description),
	FOREIGN KEY (room_id, hotel_id, chain_id) REFERENCES room(room_id, hotel_id, chain_id) ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS room_amenity;
CREATE TABLE room_amenity(
	room_id INT,
	hotel_id INT,
	chain_id INT,
	amenity_name varchar(255),
	PRIMARY KEY (room_id, hotel_id, chain_id, amenity_name),
	FOREIGN KEY (room_id, hotel_id, chain_id) REFERENCES room(room_id, hotel_id, chain_id) ON DELETE CASCADE ON UPDATE CASCADE
);
-- **** END OF RELATIONS FOR ROOM*******

DROP TABLE IF EXISTS archives;
CREATE TABLE archives(
	archive_id SERIAL PRIMARY KEY,
	cust_ssn numeric(9,0) NOT NULL,
	room_id INT NOT NULL,
	hotel_id INT NOT NULL,
	chain_id INT NOT NULL,
	start_date DATE NOT NULL,
	end_date DATE NOT NULL,
	CHECK (end_date > start_date)
);


-- ******* TRIGGERS *******

-- ------------------------------------------------
-- Trigger for updating number of hotels in a hotel_chain
-- ------------------------------------------------
CREATE OR REPLACE FUNCTION update_number_of_hotels()
    RETURNS TRIGGER AS $BODY$
BEGIN
	IF NEW.chain_id IS NOT NULL THEN
		UPDATE hotel_chain
		SET number_of_hotels = (SELECT COUNT(*) FROM Hotel WHERE Hotel.chain_id = NEW.chain_id)
		WHERE id = NEW.chain_id;
		RETURN NEW;
	END IF;
	
	IF NEW.chain_id IS NULL THEN	-- If a row in Hotel was deleted
		UPDATE hotel_chain
		SET number_of_hotels = (SELECT COUNT(*) FROM Hotel WHERE Hotel.chain_id = OLD.chain_id)
		WHERE id = OLD.chain_id;
		RETURN OLD;
	END IF;
END;
$BODY$ LANGUAGE plpgsql;

CREATE TRIGGER update_chain_hotels_trigger
    AFTER INSERT OR UPDATE OR DELETE
    ON Hotel
    FOR EACH ROW
    EXECUTE FUNCTION update_number_of_hotels();

-- ----------------------------
-- Trigger for updating number of rooms in a hotel
-- ----------------------------
CREATE OR REPLACE FUNCTION update_number_of_rooms()
    RETURNS TRIGGER AS $BODY$
BEGIN
	IF NEW.hotel_id IS NOT NULL THEN
		UPDATE Hotel
		SET number_of_rooms = (SELECT COUNT(*) FROM Room WHERE Room.hotel_id = NEW.hotel_id)
		WHERE hotel_id = NEW.hotel_id;
		RETURN NEW;
	END IF;
	
	IF NEW.hotel_id IS NULL THEN	-- If a row in Room was deleted
		UPDATE Hotel
		SET number_of_rooms = (SELECT COUNT(*) FROM Room WHERE Room.hotel_id = OLD.hotel_id)
		WHERE hotel_id = OLD.hotel_id;
		RETURN OLD;
	END IF;
    
END;
$BODY$ LANGUAGE plpgsql;

CREATE TRIGGER update_hotel_rooms_trigger
    AFTER INSERT OR UPDATE OR DELETE
    ON Room
    FOR EACH ROW
    EXECUTE FUNCTION update_number_of_rooms();


-- ------------------------------------------------
-- Trigger for populating the Archives table with history bookings/rentings (excluding payment info)
-- ------------------------------------------------
CREATE OR REPLACE FUNCTION populate_archives()
    RETURNS TRIGGER AS $BODY$
BEGIN
	INSERT INTO archives(cust_ssn, room_id, hotel_id, chain_id, start_date, end_date)
		VALUES (NEW.cust_ssn, NEW.room_id, NEW.hotel_id, NEW.chain_id, NEW.start_date, NEW.end_date);
	RETURN NEW;
END;
$BODY$ LANGUAGE plpgsql;

CREATE TRIGGER populate_archives_trigger
    AFTER INSERT
    ON booking_renting
    FOR EACH ROW
    EXECUTE FUNCTION populate_archives();
	
-- ------------------------------------------------
-- Trigger for ensuring booking/renting dates do not overlap with existing bookings/rentings
-- ------------------------------------------------
CREATE OR REPLACE FUNCTION check_booking_dates() RETURNS TRIGGER AS $BODY$
DECLARE
    overlapping_bookings INTEGER;
BEGIN
    SELECT COUNT(*)
    INTO overlapping_bookings
    FROM booking_renting
    WHERE room_id = NEW.room_id AND hotel_id = NEW.hotel_id AND chain_id = NEW.chain_id
    AND (NEW.start_date, NEW.end_date) OVERLAPS (start_date, end_date);
    
    IF overlapping_bookings > 0 THEN
        RAISE EXCEPTION 'Booking/renting dates conflict with existing booking. Cannot have overlapping bookings/rentings.';
    END IF;
    
    RETURN NEW;
END;
$BODY$ LANGUAGE plpgsql;

CREATE TRIGGER check_booking_dates
    BEFORE INSERT ON booking_renting
    FOR EACH ROW
    EXECUTE FUNCTION check_booking_dates();
	
-- ------------------------------------------------
-- Trigger for ensuring a hotel has a manager
-- ------------------------------------------------
CREATE OR REPLACE FUNCTION check_hotel_manager()
    RETURNS TRIGGER AS $BODY$
BEGIN
	IF NOT EXISTS (  -- if no other manager exists for this hotel, then we stop the deletion
		SELECT * FROM manages
		WHERE hotel_id = OLD.hotel_id AND chain_id = OLD.chain_id AND hotel_manager_ssn != OLD.hotel_manager_ssn
	) THEN
		RAISE EXCEPTION 'A hotel must have a manager. In this case, hotel % in chain % would no longer have a manager!', OLD.hotel_id, OLD.chain_id;
	END IF;
	RETURN OLD;
END;
$BODY$ LANGUAGE plpgsql;

CREATE TRIGGER check_hotel_manager_trigger
    BEFORE UPDATE OR DELETE
    ON manages
    FOR EACH ROW
    EXECUTE FUNCTION check_hotel_manager();
	