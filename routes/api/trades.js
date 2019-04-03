const router = require("express").Router();
const tradesController = require("../../controllers/tradesController");


// Matches with "/trades/sums"
router.route("/")
  .get(tradesController.findAll)
  .post(tradesController.create);

// Matches with "/api/trades/:id"
router
  .route("/:id")
  .get(tradesController.findById)
  .put(tradesController.update)
  .delete(tradesController.remove);

module.exports = router;
