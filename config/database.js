const Sequelize = require("sequelize");

module.exports = new Sequelize("lotr", "postgres", "rosen", {
  host: "localhost",
  dialect: "postgres",
  operatorsAliasesss: false,

  pool: {
    max: 5,
    min: 0,
    aquire: 30000,
    idle: 10000
  }
});
