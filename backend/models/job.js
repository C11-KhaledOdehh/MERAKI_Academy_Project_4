const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true },
  jobType: { type: String, required: true },
  Industry: { type: String, required: true },
  jobLocation: { type: String, required: true },
  experienceLevel: { type: String, required: true },
  Skills: { type: String, required: true },
  languages: { type: String, required: true },
  howToApply: { type: String, required: true },
  HoursOrShift: { type: String, required: true },
  description: { type: String, required: true },
  requirement: { type: String, required: true },
});

module.exports = mongoose.model("Job", jobSchema);
