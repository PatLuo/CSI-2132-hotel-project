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

const addChain = "INSERT INTO hotel_chain VALUES (5, 8)";
const getRooms = "SELECT * FROM room";
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

app.put("/", async (req, res) => {
  const data = req.body;
  const query = `UPDATE hotel_chain SET number_of_hotels = ${data.number_of_hotels} WHERE id = ${data.id}`;
  client.query(query, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    res.json(result.rows);
  });
  res.send("updated");
});
//starts the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
