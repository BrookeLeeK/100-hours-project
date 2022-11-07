const mongoose = require("mongoose");

const DaysSchema = new mongoose.Schema({
local_time: {
    type: String,
    required: true,
  },
  countup_timer: {
    type: String,
    required: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Days", DaysSchema);