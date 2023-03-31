const express = require("express"); //import express
const router = express.Router();

const client = require("../db");

const getCustomers = "SELECT * FROM customer";

router.get("/", async (req, res) => {
  client.query(getCustomers, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    res.json(result.rows);
  });
});

router.put("/", async (req, res) => {
  const { newData, originalPK } = req.body;
  const { ssn, first_name, last_name, city, province, street_number, street_name, postal_code, date_of_registration } = newData;
  const query = `
    UPDATE customer
    SET ssn = '${ssn}', first_name = '${first_name}', last_name = '${last_name}', city = '${city}', province = '${province}', street_number = ${street_number}, street_name = '${street_name}', postal_code = '${postal_code}', date_of_registration = '${date_of_registration}'
    WHERE ssn = ${originalPK}`;
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
  const { ssn, first_name, last_name, city, province, street_number, street_name, postal_code, date_of_registration } = req.body;
  const query = `
    INSERT INTO customer (ssn, first_name, last_name, city, province, street_number, street_name, postal_code, date_of_registration)
    VALUES ('${ssn}', '${first_name}', '${last_name}', '${city}', '${province}', ${street_number}, '${street_name}', '${postal_code}', '${date_of_registration}')`;
  client.query(query, (err, result) => {
    if (err) {
      console.log(err);
      res.send(err.code);
    } else {
      res.send("success");
    }
  });
});

router.delete("//:ssn", async (req, res) => {
  const query = `
    DELETE FROM customer
    WHERE ssn = ${req.params.ssn}`;
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
