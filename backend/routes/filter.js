const express = require("express"); //import express
const router = express.Router();

const client = require("../db");

router.get("/capacity/:searchValue", async (req, res) => {
  const query = `
  SELECT room_id
  FROM room
  WHERE capacity >= ${req.params.searchValue};`;
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
