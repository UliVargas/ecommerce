const express = require("express");
const morgan = require("morgan");

const app = express();


//middleware
app.use(express.json());
app.use(morgan("dev"));

module.export = app;