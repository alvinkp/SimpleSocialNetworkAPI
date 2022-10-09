const { User } = require("../models");

module.exports = {
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
};
