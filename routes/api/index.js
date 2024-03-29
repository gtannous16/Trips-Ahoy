const router = require("express").Router();
const cruiseRoutes = require("./cruisez");
const personRoutes = require("./personz");

router.use("/", cruiseRoutes);
router.use("/", personRoutes);

module.exports = router;