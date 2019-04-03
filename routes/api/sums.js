const router = require("express").Router();
const sumsController = require("../../controllers/sumsController");


// Matches with "/api/sums"
router.route("/")
  .get(sumsController.findAll)
  .post(sumsController.create);

// Matches with "/api/sums/:id"
router
  .route("/:id")
  .get(sumsController.findById)
  .put(sumsController.update)
  .delete(sumsController.remove);

module.exports = router;