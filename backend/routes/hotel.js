const express = require("express"); //import express
const client = require("../db"); //import postgres client

const router = express.Router();

const getHotel = "SELECT * FROM hotel ORDER BY hotel_id ";

router.get("/", async (req, res) => {
  client.query(getHotel, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    res.json(result.rows);
  });
});

router.put("/", async (req, res) => {
  const { newData, originalPK } = req.body;
  const { chain_id, hotel_id, city, province, street_number, street_name, postal_code, email, number_of_rooms, categorization } = newData;
  const query = `
    UPDATE hotel
    SET chain_id = ${chain_id}, hotel_id = ${hotel_id}, city = '${city}', province = '${province}', street_number = ${street_number}, street_name = '${street_name}', postal_code = '${postal_code}', email = '${email}', number_of_rooms = ${number_of_rooms}, categorization = ${categorization}
    WHERE chain_id = ${originalPK[0]} AND hotel_id = ${originalPK[1]}`;
  client.query(query, (err, result) => {
    if (err) {
      console.log(err);
      res.send(err.code);
    } else {
      res.send("success");
    }
  });
});

router.post("/", async (req, res) => {
  const { chain_id, hotel_id, city, province, street_number, street_name, postal_code, email, number_of_rooms, categorization } = req.body;
  const query = `
    INSERT INTO hotel (chain_id,  city, province, street_number, street_name, postal_code, email, number_of_rooms, categorization)
    VALUES (${chain_id},'${city}', '${province}', ${street_number}, '${street_name}', '${postal_code}', '${email}', ${number_of_rooms}, ${categorization})`;
  client.query(query, (err, result) => {
    if (err) {
      console.log(err);
      res.send(err.code);
    } else {
      res.send("success");
    }
  });
});

router.delete("/:originalPK", async (req, res) => {
  const originalPK = req.params.originalPK.split(" ");
  const query = `
        DELETE FROM hotel
        WHERE chain_id = ${originalPK[0]} AND hotel_id = ${originalPK[1]}`;
  client.query(query, (err, result) => {
    if (err) {
      console.log(err);
      res.send(err.code);
    } else {
      res.send("success");
    }
  });
});

module.exports = router;
