const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 5000;

//const personalityModel = require('./models/percd clinpm sonalities');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(routes);
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/tripsdb"; 
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, function(err) {
    if(err) {
        console.log(`There was an error connecting to mongo...\n${err}`)
    }
});

app.listen(PORT, function() {
    console.log(`Server listening on PORT ${PORT}!`);
});

