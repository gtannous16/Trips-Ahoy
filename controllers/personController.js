const DataBase = require("../models");

module.exports = {
  findByName: function (req, res) {
    const name = req.params.name;

    DataBase.personalities.find({
      name,
    }).then(dbModel => {
      res.json(dbModel)
    })
      .catch(err => {
        console.log(err)
        res.status(422).json(err)
      });
  }
};