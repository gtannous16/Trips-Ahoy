const  DataBase  =  require("../models/personalities");

module.exports = {
    findByName: function(req, res) {
        DataBase.find({name:req.params.name})
            
            .then(dbModel  =>  res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};