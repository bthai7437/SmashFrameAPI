const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "heroku_d16cdcc6fb38bc2",
  "bab8728e356b43",
  "a73154ce",
  {
    dialect: "mysql",
    host: "us-cdbr-iron-east-05.cleardb.net"
  }
);

module.exports = sequelize;
