const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const taskSchema = new Schema(
  {
    title: {
      type: String,
    },

    description: {
      type: String,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    files: {
      type: [],
    },
    user: [{ type: mongoose.Types.ObjectId, ref: "user" }],
  },
  { timestamps: true }
);

const Task = model("task", taskSchema);

module.exports = Task;
