const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cruiseSchema = new Schema({

});

const Cruise = mongoose.model("Cruise", cruiseSchema);

module.exports = Cruise;