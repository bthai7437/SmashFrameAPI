const Character = require("../models/character");

exports.getCharacters = (req, res, next) => {
  Character.findAll()
    .then(characters => {
      res.status(200).json({ characters });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.postCharacter = (req, res, next) => {
  const name = "Mario";
  const game = "Ultimate";
  Character.create({
    name: name,
    game: game
  })
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });
};
