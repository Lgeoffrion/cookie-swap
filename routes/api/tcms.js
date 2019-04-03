const router = require("express").Router();
const tcmsController = require("../../controllers/tcmsController");


// Matches with "/api/tcms"
// router.route("/")
//   .get(tcmsController.findAll)
//   .post(tcmsController.create);

// Matches with "/api/tcms/:id"
router
  .route("/:id")
  .get(tcmsController.findById)
  // .put(tcmsController.update)
  // .delete(tcmsController.remove);

module.exports = router;

