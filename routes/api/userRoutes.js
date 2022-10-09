const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  postNewUser,
} = require("../../controllers/userController");

router.route("/").get(getUsers).post(postNewUser);
router.route("/:userId").get(getSingleUser);

module.exports = router;
