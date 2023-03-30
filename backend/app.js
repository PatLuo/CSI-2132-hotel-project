const express = require("express"); //import express
const pg = require("pg"); //import postgres
const cors = require("cors"); //import cors

const port = 3000;
const app = express(); //initialize express

const client = new pg.Client("postgres://xwswtjih:belDdHL2W3NQZbRMP-E3VQ5j17T_ijdt@isilo.db.elephantsql.com/xwswtjih"); //connect to database
client.connect((err) => {
  if (err) {
    return console.error("could not connect to postgres", err);
  }
  console.log("successfully connected to postgres");
});

//allow acces from other ports
app.use(
  cors({
    origin: "http://127.0.0.1:5173",
    methods: ["PUT", "GET", "POST", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json()); //parse json

//queries
const getChains = "SELECT * FROM hotel_chain";
const getCustomers = "SELECT * FROM customer";
const getEmployees = "SELECT * FROM empoployee";
const getHotels = "SELECT * FROM hotel";
const getRooms = "SELECT * FROM room";

const addChain = "INSERT INTO hotel_chain VALUES (5, 8)";
const clearTable = "DELETE FROM hotel_chain";
const updateTable = "UPDATE hotel_chain SET hotel_id = $`1` WHERE hotel_id = 1";

//routes
app.get("/", async (req, res) => {
  client.query(getChains, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    res.json(result.rows);
  });
});

app.get("/getCustomer", async (req, res) => {
  client.query(getCustomers, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    res.json(result.rows);
  });
});

app.put("/updateCustomer", async (req, res) => {
  const { newData, originalPK } = req.body;
  const { ssn, first_name, last_name, city, province, street_number, street_name, postal_code, date_of_registration } = newData;
  const query = `
  UPDATE customer
  SET ssn = '${ssn}', first_name = '${first_name}', last_name = '${last_name}', city = '${city}', province = '${province}', street_number = ${street_number}, street_name = '${street_name}', postal_code = '${postal_code}', date_of_registration = '${date_of_registration}'
  WHERE ssn = ${originalPK}`;

  client.query(query, (err, result) => {
    if (err) {
      res.send(err.code);
    } else {
      console.log("successfully updated customer");
      res.send("success");
    }
  });
});

//starts the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
