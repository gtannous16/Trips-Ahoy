const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cruiseSchema = new Schema({
    Independent: String, 
    Touristic: String,
    Outdoors: String,
    Historical: String,
    Social: String, 
    Relaxing: String,
    Foodie: String,
});

const Cruise = mongoose.model("Cruise", cruiseSchema);

module.exports = Cruise;
