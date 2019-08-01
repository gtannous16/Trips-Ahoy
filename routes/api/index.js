const router = require("express").Router();
//const cruiseRoutes = require("./cruisez");
const personRoutes = require("./personz");

//router.use("/cruisez", cruiseRoutes);
router.use("/", personRoutes);

module.exports = router;