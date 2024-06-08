const mongoose = require("mongoose");

const presentersSchema = new mongoose.Schema({
  job: { type: mongoose.Schema.Types.ObjectId, ref: "Job" },
  sekeer: { type: mongoose.Schema.Types.ObjectId, ref: "Sekeer" },
});

module.exports = mongoose.model("Presenters", presentersSchema);
