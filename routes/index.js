const path = require("path");
const router = require("express").Router();
const cruiseRoutes = require("./api/cruisez");
const personRoutes = require("./api/personz");

router.use("/api", cruiseRoutes);
router.use("/api", personRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname), "../client/build/index.html")
});

module.exports = router;