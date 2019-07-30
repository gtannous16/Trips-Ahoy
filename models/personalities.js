const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personSchema = new Schema({
    Independent: String, 
    Touristic: String,
    Outdoors: String,
    Historical: String,
    Social: String, 
    Relaxing: String,
    Foodie: String,
});

const Person = mongoose.model("Person", personSchema);

module.exports = Person;