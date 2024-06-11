const mongoose = require("mongoose");

const presentersSchema = new mongoose.Schema({
  job: { type: mongoose.Schema.Types.ObjectId, ref: "Job" },
  seeker: [{ type: mongoose.Schema.Types.ObjectId, ref: "Seeker" }],
});

module.exports = mongoose.model("Presenters", presentersSchema);
