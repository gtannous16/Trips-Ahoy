const router = require("express").Router();
const personController = require("../../controllers/personController");

router.route/("/quiz")
 .get(personController.findAll)


 module.exports= router;