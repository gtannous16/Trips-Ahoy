const  DataBase  =  require("../models/personalities");

module.exports = {
    findByName: function(req, res) {
        const name = req.params.name;
        const options = {
            [name]: { $exists: true }
        };

        console.log('Options: ', options);
        DataBase.find(options)
            .then(dbModel  =>  res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};