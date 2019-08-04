const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personSchema = new Schema({
   name: { type: String, required: true},
   availableTodos: { type: Array }
});


const Personality = mongoose.model("personality", personSchema);

module.exports = Personality; 