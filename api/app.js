const express = require("express");
const app = express();
const morgan = require("morgan");
const routes = require("./routes/index.js");


//Middleware
app.use(morgan("dev"))
app.use(express.json());

//Cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

//Routes
app.use(routes)


module.exports = app;