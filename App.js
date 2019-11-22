const PORT = process.env.PORT || 8080;
const express = require("express");
const characterRoutes = require("./routes/character");
const bodyParser = require("body-parser");
const sequelize = require("./database/database");
const Character = require("./models/character");
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use((req, res, next) => {
  Character.findByPk(1)
    .then(character => {
      req.character = character;
      next();
    })
    .catch(err => {
      console.log(err);
    });
});

app.use("/characters", characterRoutes);

sequelize
  .sync()
  .then(result => {})
  .catch(err => {
    console.log(err);
  });
//Associations
app.listen(PORT);
