const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();

// Settings
app.set("port", porcess.env.PORT || 3000);

// Middlewares
app.use(morgan("dev"));

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public/about.html"));
});

// Static files
app.use(express.static("public"));

// Server listening
app.listen(app.get("port"), () => {
  console.log("Server on port:", app.get("port"));
});
