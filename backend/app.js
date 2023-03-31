const express = require("express"); //import express
const cors = require("cors"); //import cors

//import routes
const customerRouter = require("./routes/customer");
const employeeRouter = require("./routes/employee");
const hotelRouter = require("./routes/hotel");
const roomRouter = require("./routes/room");
const viewsRouter = require("./routes/views");

const port = 3000;
const app = express(); //initialize express

//use cors to allow communication between frontend and backend
app.use(
  cors({
    origin: "http://127.0.0.1:5173",
    methods: ["PUT", "GET", "POST", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json()); //needed to parse json data

//redirect routes to associated router
app.use("/customer", customerRouter);
app.use("/employee", employeeRouter);
app.use("/hotel", hotelRouter);
app.use("/room", roomRouter);
app.use("/views", viewsRouter);

//starts the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
