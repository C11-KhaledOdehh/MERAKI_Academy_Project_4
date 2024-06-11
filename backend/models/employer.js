const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const employerSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  city: { type: String },
  website: { type: String },
  aboutCompany: { type: String },
  weekends: { type: String },
  numberOfEmployees: { type: Number },
  ceo: { type: String },
  industry: { type: String },
  workingHours: { type: String },
  companyLogo: { type: String },
  
  role: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
});
employerSchema.pre("save", async function () {
  this.email = this.email.toLowerCase();
  this.password = await bcrypt.hash(this.password, 10);
}); 
module.exports = mongoose.model("Employer", employerSchema);
