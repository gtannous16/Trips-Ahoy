const  DataBase  =  require("../models/personalities");


module.exports = {
    findByName: function(req, res) {
        const name = req.params.name;
        
        DataBase.find({
           name,
        }).then(dbModel  =>  {
            console.log(`the dbmodel is ${dbModel}`)
            res.json(dbModel)
        })
        .catch(err => {
            console.log(err)
            res.status(422).json(err)
        });
    }
};