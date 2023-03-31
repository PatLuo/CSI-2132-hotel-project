const express = require("express"); //import express
const router = express.Router();

const client = require("../db");

router.get("/all", async (req, res) => {
  const query = `SELECT room_id FROM room;`;
  client.query(query, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    res.json(result.rows);
  });
});

router.get("/date/:searchValue", async (req, res) => {
  const searchValue = req.params.searchValue.split(",");
  const query = `
  SELECT room_id
  FROM room r 
  WHERE r.room_id NOT IN (SELECT room_id 
    FROM booking_renting b 
    WHERE (b.start_date, b.end_date) OVERLAPS ('${searchValue[0]}', '${searchValue[1]}'));`;
  client.query(query, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    console.log(result.rows.length);
    res.json(result.rows);
  });
});

router.get("/capacity/:searchValue", async (req, res) => {
  const query = `
  SELECT room_id
  FROM room
  WHERE capacity = ${req.params.searchValue};`;
  client.query(query, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    res.json(result.rows);
  });
});

router.get("/area/:searchValue", async (req, res) => {
  const searchValue = req.params.searchValue.charAt(0).toUpperCase() + req.params.searchValue.slice(1);
  const query = `
    SELECT room_id
    FROM hotel JOIN room USING (hotel_id, chain_id)
    WHERE city = '${searchValue}';`;
  client.query(query, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    res.json(result.rows);
  });
});

router.get("/chain/:searchValue", async (req, res) => {
  const query = `
  SELECT room_id
  FROM hotel JOIN room USING (hotel_id, chain_id)
  WHERE chain_id = ${req.params.searchValue};
  `;
  client.query(query, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    res.json(result.rows);
  });
});

router.get("/category/:searchValue", async (req, res) => {
  const query = `
    SELECT room_id
FROM hotel JOIN room USING (hotel_id, chain_id)
WHERE categorization = ${req.params.searchValue};
 
    `;
  client.query(query, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    res.json(result.rows);
  });
});

router.get("/numRooms/:searchValue", async (req, res) => {
  const query = `
    SELECT room_id
    FROM hotel JOIN room USING (hotel_id, chain_id)
    WHERE number_of_rooms >= ${req.params.searchValue};
   
      `;
  client.query(query, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    res.json(result.rows);
  });
});

router.get("/price/:searchValue", async (req, res) => {
  const query = `
    SELECT room_id
    FROM room
    WHERE price <= ${req.params.searchValue};`;
  client.query(query, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    res.json(result.rows);
  });
});

module.exports = router;
