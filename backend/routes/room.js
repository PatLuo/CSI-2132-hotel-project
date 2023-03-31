const express = require("express"); //import express
const router = express.Router();

const client = require("../db");

const getRoom = "SELECT * FROM room";

router.get("/", async (req, res) => {
  client.query(getRoom, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    res.json(result.rows);
  });
});

router.put("/", async (req, res) => {
  const { newData, originalPK } = req.body;
  const { hotel_id, chain_id, renting_status, room_view, price, capacity, expandability } = newData;
  const query = `
    UPDATE room
    SET hotel_id = ${hotel_id}, chain_id = ${chain_id}, renting_status = '${renting_status}', room_view = '${room_view}', price = ${price}, capacity = ${capacity}, expandability = ${expandability}
    WHERE room_id = ${originalPK[0]} AND hotel_id = ${originalPK[1]} AND chain_id = ${originalPK[2]} `;
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
  const { hotel_id, chain_id, renting_status, room_view, price, capacity, expandability } = req.body;
  console.log(req.body);
  const query = `
    INSERT INTO room ( hotel_id, chain_id, renting_status, room_view, price, capacity, expandability)
    VALUES ( ${hotel_id}, ${chain_id}, '${renting_status}', '${room_view}', ${price}, ${capacity}, ${expandability})`;
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
  const query = `
    DELETE FROM room
    WHERE room_id = ${req.params.originalPK[0]} AND hotel_id = ${req.params.originalPK[1]} AND chain_id = ${req.params.originalPK[2]}`;
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
