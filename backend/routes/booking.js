const express = require("express"); //import express
const router = express.Router();

const client = require("../db");

router.get("/", async (req, res) => {
  client.query("SELECT * FROM booking_renting", (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    res.json(result.rows);
  });
});

module.exports = router;
