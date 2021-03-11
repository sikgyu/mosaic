const express = require("express");
const fs = require("fs");
let globalData;

let app = express();
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.set("view engine", "ejs");


app.get("/", (req, res) => res.render("pages/index"));

app.listen(8080, () => {
    console.log("Server is running on port 8080 🚀");
  });