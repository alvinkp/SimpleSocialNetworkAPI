const { Thought } = require("../models");

module.exports = {
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
};
