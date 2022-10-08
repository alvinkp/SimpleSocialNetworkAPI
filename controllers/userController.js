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
};
