const router = require("express").Router();
const personController = require("../../controllers");

router.route/("/quiz")
 .get(personController.findAll)


 module.exports= router;