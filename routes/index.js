const path = require("path");
const router = require("express").Router();
//const cruiseRoutes = require("./api/cruisez");
const personRoutes = require("./api");

//router.get("/api", cruiseRoutes);
router.use("/", personRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname), "../client/build/index.html")
});

module.exports = router;