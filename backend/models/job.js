const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true },
  jobType: { type: String, required: true },
  industry: { type: String, required: true },
  jobLocation: { type: String, required: true },
  experienceLevel: { type: String, required: true },
  skills: { type: [String], required: true },
  languages:  { type: [String], required: true },
  howToApply: { type: String, required: true },
  hoursOrShift: { type: String, required: true },
  description: { type: String, required: true },
  requirement: { type: String, required: true },
  employer: { type: mongoose.Schema.Types.ObjectId, ref: "Employer" },
});

module.exports = mongoose.model("Job", jobSchema);
