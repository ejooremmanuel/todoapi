const mongoose = require("mongoose");
const { Schema, model } = mongoose;
let toonavatar = require("cartoon-avatar");
let url = toonavatar.generate_avatar();
const userSchema = new Schema(
  {
    fullname: { type: String },
    email: { type: String },
    password: { type: String },
    avatarSmall: { type: String, default: url },
    avatar: { type: String, default: url },
    admin: { type: Boolean, default: false },
    task: [{ type: mongoose.Types.ObjectId, ref: "task" }],
  },
  { timestamps: true }
);

const User = model("user", userSchema);

module.exports = User;
