const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 5000;

//const personalityModel = require('./models/personalities');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("root/build"));
// }

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/tripsdb");

app.listen(PORT, function() {
    console.log(`Server listening on PORT ${PORT}!`);
});

