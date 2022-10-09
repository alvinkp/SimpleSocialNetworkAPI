const { Thought, User } = require("../models");

module.exports = {
  // Get all thoughts
  getThoughts(req, res) {
    Thought.find({}, (err, result) => {
      if (result) {
        res.status(200).json(result);
      } else {
        console.log("There was an error trying to get all thoughts!");
        res
          .status(500)
          .json({ error: "There was an error trying to get all thoughts!" });
      }
    });
  },
  // Get a single thought by id
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .populate({
        path: "reactions",
        select: "-__v",
      })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought found with that ID" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Post a new thought
  postNewThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $addToSet: { thoughts: thought._id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res.status(404).json({
              message: "Thought created, but found no user with that ID",
            })
          : res.json("Created the Thought")
      )
      .catch((err) => res.status(500).json(err));
  },
  // Update a thought
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought found with that ID" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Add a friend to thought
  addReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought found with that ID" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Remove a friend from thought
  removeReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought found with that ID" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
};
