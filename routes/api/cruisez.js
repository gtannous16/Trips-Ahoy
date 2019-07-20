const router = require("express").Router();
const personController = require("../../controllers");

router.route/("/cruises")
 .get(personController.findAll)


 module.exports= router;