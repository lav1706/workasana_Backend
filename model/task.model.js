const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
  team: { type: mongoose.Schema.Types.ObjectId, ref: "Team", required: true },
  status: {
    type: String,
    enum: ["To Do", "In Progress", "Completed", "Blocked"],
    default: "To Do",
  },
  dueDate: { type: Date },
  timeToComplete: { type: Number, required: true },
  priority: { type: String, enum: ["Low", "Medium", "High"], default: "Low" },
  owners: [
    { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  ],
});

module.exports = mongoose.model("Task", taskSchema);
