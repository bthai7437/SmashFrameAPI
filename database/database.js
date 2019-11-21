const Sequelize = require("sequelize");

const sequelize = new Sequelize("smash_frames", "root", "Forgetit_8", {
  dialect: "mysql",
  host: "localhost"
});

module.exports = sequelize;
