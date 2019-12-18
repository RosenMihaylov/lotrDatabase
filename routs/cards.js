const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Card = require("../models/Cards");

// Get Card list
router.get("/", (req, res) =>
  Card.findAll()
    .then(cards => {
      res.render("cards", {
        cards
      });
    })
    .catch(err => console.log(err))
);

//Display add cards form
router.get("/add", (req, res) => res.render("add"));

//add a card
router.post("/add", (req, res) => {
  const data = {
    side: "fellowhip",
    name: "Aragorn",
    subname: "Elessar",
    twilight: 4,
    strenght: 8,
    vitality: 4,
    cardImage: "http://Cardstcgwiki.com/wiki/_media/cards:Cards01089.jpg",
    cardText:
      "Ranger. Maneuver: Exert Aragorn to make him defender +1 until the regroup phase."
  };

  let {
    side,
    name,
    subname,
    twilight,
    strenght,
    vitality,
    cardImage,
    cardText
  } = data;

  //Insert into Table
  Card.create({
    side,
    name,
    subname,
    twilight,
    strenght,
    vitality,
    cardImage,
    cardText
  })
    .then(card => res.redirect("/cards"))
    .catch(err => console.log(err));
});

module.exports = router;
