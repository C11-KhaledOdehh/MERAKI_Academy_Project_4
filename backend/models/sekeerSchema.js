const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const sekeerSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  yearsOfExperience: { type: Number },
  cv: { type: String },
  profilePicture: { type: String },
  education: { type: String },
  favoriteJob: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }],
  jobApplied: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }],
  role: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
});
 sekeerSchema.pre("save", async function () {
  this.email = this.email.toLowerCase();
  this.password = await bcrypt.hash(this.password, 10);
}); 

module.exports = mongoose.model("useraa", sekeerSchema);
