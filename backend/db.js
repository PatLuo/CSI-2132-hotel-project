const pg = require("pg"); //import postgres

//create postgres client
const client = new pg.Client("postgres://xwswtjih:belDdHL2W3NQZbRMP-E3VQ5j17T_ijdt@isilo.db.elephantsql.com/xwswtjih");

//connect to postgres
client.connect((err) => {
  if (err) {
    return console.error("could not connect to postgres", err);
  }
  console.log("successfully connected to postgres");
});

//export client for use in routers
module.exports = client;
