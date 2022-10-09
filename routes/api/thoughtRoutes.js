const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  postNewThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtController");

router.route("/").get(getThoughts).post(postNewThought);
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(removeThought);
router
  .route("/:userId/thoughts/:thoughtId")
  .post(addReaction)
  .delete(removeReaction);

module.exports = router;
