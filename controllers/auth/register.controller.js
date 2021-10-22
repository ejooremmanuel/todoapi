const { User } = require("../../models/User");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Controller for creating a new user
const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "please fill all fields" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "password must be at least 6 characters" });
    }

    const checkEmail = await User.findOne({ email });

    if (checkEmail) {
      return res.status(400).json({ message: "user already registered!" });
    }
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({
      email,
      password: hashedPassword,
    });
    if (!newUser) {
      return res.status(500).json({ message: "an error occurred." });
    }
    await newUser.save();
    return res.status(201).json({ message: "user created successfully." });
  } catch {
    ({ message }) => {
      return res.status(500).json({ message });
    };
  }
};

module.exports = createUser;
