const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Card = require("../models/Cards");
const sequelize = require("sequelize");
const Op = sequelize.Op;

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
  let {
    side,
    name,
    subname,
    twilight,
    strenght,
    vitality,
    cardImage,
    cardText
  } = req.body;

  let errors = [];

  // validate fields
  if (!side) {
    errors.push({ text: "Please add Side" });
  }
  if (!name) {
    errors.push({ text: "Please add name" });
  }
  if (!subname) {
    errors.push({ text: "Please add subname" });
  }
  if (!twilight) {
    errors.push({ text: "Please add twilight" });
  }
  if (!strenght) {
    errors.push({ text: "Please add strenght" });
  }
  if (!vitality) {
    errors.push({ text: "Please add vitality" });
  }
  if (!cardImage) {
    errors.push({ text: "Please add a link to the card Image" });
  }
  if (!cardText) {
    errors.push({ text: "Please add card Text" });
  }
  console.log(errors.length);
  //Check for errors
  if (errors.length > 0) {
    res.render("add", {
      errors,
      side,
      name,
      subname,
      twilight,
      strenght,
      vitality,
      cardImage,
      cardText
    });
  } else {
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
  }
  //
});

//Search for a card
router.get("/search", (req, res) => {
  const { term } = req.query;
  Card.findAll({ where: { side: { [Op.like]: term } } })
    .then(cards => res.render("cards", { cards }))
    .catch(err => console.log(err));
});

module.exports = router;
