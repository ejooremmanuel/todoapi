const Task = require("../../models/Task");
const User = require("../../models/User");

//Controller for retrieving all tasks
const getTasks = async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: "please login!" });
  }
  const getAllTasks = User.findById(req.user._id, (err, docs) => {
    if (!err) {
      const { task } = docs;
      res.status(201).json({ message: "todo tasks found", task });
    }
  })
    .populate("task")
    .sort({ _id: -1 })
    .lean();
};

module.exports = getTasks;
