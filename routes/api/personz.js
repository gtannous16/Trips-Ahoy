const router =  require("express").Router();
const personController = require("../../controllers/personController");

router.route("/quiz/person/:name")
    .get(personController.findByName)

module.exports = router;