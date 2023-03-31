const pg = require("pg"); //import postgres

const client = new pg.Client("postgres://xwswtjih:belDdHL2W3NQZbRMP-E3VQ5j17T_ijdt@isilo.db.elephantsql.com/xwswtjih");
client.connect((err) => {
  if (err) {
    return console.error("could not connect to postgres", err);
  }
  console.log("successfully connected to postgres");
});

module.exports = client;
