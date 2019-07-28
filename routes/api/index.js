const router = require("express").Router();
const cruiseRoutes = require("./cruisez");
const personRoutes = require("./personz");

router.use("/cruisez", cruiseRoutes);
router.use("/personz", personRoutes);

module.exports = router;