const Task = require("../../models/Task");
const { User } = require("../../models/User");

//Cloudinary cloudinarySetup
const cloudinary = require("cloudinary").v2;
const cloudinarySetUp = require("../../config/cloudinarysetup");

//Controller for creating tasks
const createTask = async (req, res) => {
  if (!req.user)
    return res.status(401).json({ message: "please login to continue" });
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(401).json({ message: "fill all fields" });
  }

  if (req.file) {
    const newTask = await new Task({
      title,
      description,
      files: req.file.filename,
      user: req.user._id,
    });
    await newTask.save();
    userTask = await User.findById(req.user._id);
    userTask.task.unshift(newTask._id);
    await userTask.save();
    return res.status(201).json({ message: "todo task created." });
  }
  const newTask = await new Task({
    title,
    description,
    user: req.user._id,
  });
  await newTask.save();
  userTask = await User.findById(req.user._id);
  userTask.task.unshift(newTask._id);
  await userTask.save();
  return res.status(201).json({ message: "todo task created." });
};

module.exports = createTask;
