const { User } = require("../../models/User");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Controller for creating a new user
const createUser = async (req, res) => {
  try {
    const { email, password, fullname } = req.body;
    if (!email || !password || !fullname) {
      return res
        .status(400)
        .json({ success: false, message: "please fill all fields" });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "password must be at least 6 characters",
      });
    }

    const checkEmail = await User.findOne({ email });

    if (checkEmail) {
      return res
        .status(400)
        .json({ success: false, message: "user already registered!" });
    }
    const hashedPassword = bcryptjs.hashSync(password, 10);
    if (!hashedPassword) {
      return res
        .status(500)
        .json({ success: false, message: "an error occurred." });
    }
    const newUser = new User({
      email,
      fullname,
      password: hashedPassword,
    });
    if (!newUser) {
      return res
        .status(500)
        .json({ success: false, message: "an error occurred." });
    }
    await newUser.save();
    return res
      .status(201)
      .json({ success: true, message: "Registration successfull." });
  } catch {
    ({ message }) => {
      return res.status(500).json({ message });
    };
  }
};

module.exports = createUser;
