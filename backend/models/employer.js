const mongoose = require("mongoose");

const employerSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  emailAddress: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  city: { type: String },
  website: { type: String },
  AboutCompany: { type: String },
  weekends: { type: String },
  numberOfEmployees: { type: Number },
  ceo: { type: String },
  industry: { type: String },
  workingHours: { type: String },
  companyLogo: { type: String },
  favoriteSekeer: [{ type: mongoose.Schema.Types.ObjectId, ref: "Sekeer" }],
  role: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
});

module.exports = mongoose.model("Employer", employerSchema);
