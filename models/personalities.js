const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personSchema = new Schema({
   name: String,
   availableTodos: Array

});


const Personality = mongoose.model("Personality", personSchema);

module.exports = Personality; 