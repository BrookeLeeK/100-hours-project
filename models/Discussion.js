const mongoose = require("mongoose");

const DiscussionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  userName: {
    type: String,
    ref: "User",
  },
});

module.exports = mongoose.model("Discussion", DiscussionSchema);