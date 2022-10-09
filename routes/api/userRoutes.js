const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  postNewUser,
  updateUser,
  addFriend,
  //   removeFriend,
} = require("../../controllers/userController");

router.route("/").get(getUsers).post(postNewUser);
router.route("/:userId").get(getSingleUser).put(updateUser);
router.route("/:userId/friends/:friendId").post(addFriend); //.delete(removeFriend);

module.exports = router;
