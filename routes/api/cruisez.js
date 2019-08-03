const router =  require("express").Router();
const cruiseController = require("../../controllers/cruiseController");

router.route("/quiz/cruise/:name")
    .get(cruiseController.findByName)

module.exports = router;