const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const Character = sequelize.define("character", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: { type: Sequelize.STRING, allowNull: false },
  game: { type: Sequelize.STRING, allowNull: false }
});

module.exports = Character;
