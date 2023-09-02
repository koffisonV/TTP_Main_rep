const path = require("path");
const express = require("express");
const volleyball = require("volleyball");
const morgan = require("morgan");
const app = express();
require("dotenv").config();
module.exports = app;

// Logging middleware
app.use(volleyball);
app.use(morgan("dev"));

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static file-serving middleware
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(
  express.static(
    path.join(__dirname, "..", "node_modules", "font-awesome", "css")
  )
);
app.use(
  "/fonts",
  express.static(
    path.join(__dirname, "..", "node_modules", "font-awesome", "fonts")
  )
);

app.use("/auth", require("./auth"));

app.use((req, res, next) => {
  if (path.extname(req.path).length > 0) {
    res.status(404).end();
  } else {
    next();
  }
});

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

// sends index.html
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/index.html"));
});

// Error catching endware
app.use((err, req, res, next) => {
  console.error(err, typeof next);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});
