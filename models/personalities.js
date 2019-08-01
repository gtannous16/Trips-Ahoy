const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personSchema = new Schema({
    name: String,
    personality: [
        {
            country: [
                {
                    todo: String,
                    image: String
                }
            ]
        }
    ]

});

const Person = mongoose.model("Person", personSchema);

module.exports = Person; 