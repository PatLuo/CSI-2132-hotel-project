const express = require("express"); //import express
const router = express.Router();

const client = require("../db");

router.get("/roomsPerArea", async (req, res) => {
  const query = `SELECT * FROM available_rooms_per_city`;
  client.query(query, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    res.json(result.rows);
  });
});

router.get("/capacityPerHotel", async (req, res) => {
  const query = `SELECT * FROM hotel_room_capacity ORDER BY hotel_id;`;
  client.query(query, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    res.json(result.rows);
  });
});

router.get("/capacityPerHotel/:id", async (req, res) => {
  const query = `SELECT * FROM hotel_room_capacity WHERE hotel_id = ${req.params.id};`;
  client.query(query, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    res.json(result.rows);
  });
});
module.exports = router;
