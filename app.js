const express = require("express");

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lqcpsjtrtdswgmibrugn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxxY3BzanRydGRzd2dtaWJydWduIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgxMzgxODksImV4cCI6MTk5MzcxNDE4OX0.ZD-Z8tIZw3FMDzME0WhbJnMcHXxVvbhMU1znFnPjNXU";

const supabase = createClient(supabaseUrl, supabaseKey);

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  //send a query to the database

  let { data: hotel_chain, error } = await supabase.from("hotel_chain").select("id");
  if (error) {
    console.log(error);
  }
  res.send(hotel_chain);
});

//starts the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
