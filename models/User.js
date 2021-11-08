const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    fullname: { type: String },
    email: { type: String },
    password: { type: String },
    avatar: { type: String },
    task: [{ type: mongoose.Types.ObjectId, ref: "task" }],
  },
  { timestamps: true }
);

module.exports = {
  User: model("user", userSchema),
};
