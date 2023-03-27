const express = require("express"); //import express
const pg = require("pg"); //import postgres

const client = new pg.Client("postgres://xwswtjih:belDdHL2W3NQZbRMP-E3VQ5j17T_ijdt@isilo.db.elephantsql.com/xwswtjih"); //connect to database

client.connect((err) => {
  if (err) {
    return console.error("could not connect to postgres", err);
  }
  console.log("successfully connected to postgres");
});

const port = 3000;
const app = express(); //initialize express

//allow acces from other ports
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

//queries
const getChains = "SELECT * FROM hotel_chain";
const addChain = "INSERT INTO hotel_chain VALUES (5, 8)";
const getRooms = "SELECT * FROM room";
const clearTable = "DELETE FROM hotel_chain";

//routes
app.get("/", async (req, res) => {
  client.query(getChains, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    console.log("query successful");
    res.json(result.rows);
  });
});

app.get("/addChain", async (req, res) => {
  client.query(addChain, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    console.log("query successful");
  });
});

//starts the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
