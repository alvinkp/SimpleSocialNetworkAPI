const { User } = require("../models");

module.exports = {
  // Get all users
  getUsers(req, res) {
    User.find({}, (err, result) => {
      if (result) {
        res.status(200).json(result);
      } else {
        console.log("There was an error trying to get all users!");
        res
          .status(500)
          .json({ error: "There was an error trying to get all users!" });
      }
    });
  },
  // Get a single user by id
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .populate({
        path: "thoughts",
        path: "friends",
        select: "-__v",
      })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user found with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Post a new user
  postNewUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // Update a user
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user found with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user found with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
};
