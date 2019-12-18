const express = require("express");
const expHbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");

const db = require("./config/database");

//test db
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch(err => console.log("Error" + err));

const app = express();

//HandleBars
app.engine("handlebars", expHbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Set static folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => res.render("Index", { layot: "landing" }));

//cards routs
app.use("/cards", require("./routs/cards"));
const PORT = process.env.Port || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
``;
