const express = require("express"); //import express
const router = express.Router();

const client = require("../db");

router.get("/", async (req, res) => {
  client.query("SELECT * FROM booking_renting ORDER BY cust_ssn, room_id", (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    res.json(result.rows);
  });
});

router.put("/", async (req, res) => {
  const { newData, originalPK } = req.body;
  const { payment_type, reservation_status } = newData;
  const { cust_ssn, room_id, hotel_id, chain_id } = originalPK;
  const query = `
    UPDATE booking_renting
    SET payment_type = '${payment_type}', reservation_status = '${reservation_status}'
    WHERE cust_ssn = ${cust_ssn} AND room_id = ${room_id} AND hotel_id = ${hotel_id} AND chain_id = ${chain_id} `;
  client.query(query, (err, result) => {
    if (err) {
      console.log(err);
      res.send(err.code);
    } else {
      res.send("success");
    }
  });
});

// router.post("/", async (req, res) => {}

module.exports = router;
