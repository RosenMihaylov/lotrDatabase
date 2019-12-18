const sequilize = require("sequelize");
const db = require("../config/database");

const Cards = db.define("cards", {
  side: {
    type: sequilize.STRING
  },
  name: {
    type: sequilize.STRING
  },
  subname: {
    type: sequilize.STRING
  },
  twilight: {
    type: sequilize.INTEGER
  },
  strenght: {
    type: sequilize.INTEGER
  },
  vitality: {
    type: sequilize.INTEGER
  },
  cardImage: {
    type: sequilize.STRING
  },
  cardText: {
    type: sequilize.STRING
  }
});

module.exports = Cards;
