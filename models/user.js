const { Schema, Types } = require("mongoose");

const userSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  userName: {
    type: String,
    unique: true,
    required: [true, "You MUST provide a username."],
    trim: true,
  },
});
