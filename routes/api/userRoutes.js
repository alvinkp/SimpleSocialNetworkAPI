const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  postNewUser,
  updateUser,
} = require("../../controllers/userController");

router.route("/").get(getUsers).post(postNewUser);
router.route("/:userId").get(getSingleUser).put(updateUser);

module.exports = router;
