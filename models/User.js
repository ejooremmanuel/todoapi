const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    fullname: { type: String },
    email: { type: String },
    password: { type: String },
    avatarSmall: { type: String },
    avatar: { type: String },
    admin: { type: Boolean, default: false },
    task: [{ type: mongoose.Types.ObjectId, ref: "task" }],
  },
  { timestamps: true }
);

const User = model("user", userSchema);

module.exports = User;
