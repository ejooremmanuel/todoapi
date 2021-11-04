const { User } = require("../../models/User");
const bcryptjs = require("bcryptjs");
const { compare } = bcryptjs;
const jwt = require("jsonwebtoken");

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required." });
    }

    let findUser = await User.findOne({ email });
    if (!findUser) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid login credential" });
    }

    let passwordMatch = await compare(password, findUser.password);
    if (!passwordMatch) {
      return res
        .status(403)
        .json({ success: false, message: "Wrong Password." });
    }
    const token = jwt.sign({ findUser }, process.env.JWT_SECRET, {
      expiresIn: "365d",
    });

    res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      user: {
        ...findUser._doc,
        password: "",
      },
    });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

module.exports = loginUser;
