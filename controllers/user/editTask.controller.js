const Task = require("../../models/Task");

//Controller for editing single task
const editTask = async (req, res) => {
  try {
    if (!req.user)
      return res.status(401).json({ status: "401", message: "Please login" });
    const { taskid } = req.params;
    const { title, description, completed } = req.body;
    Task.findByIdAndUpdate(taskid, (err, task) => {
      if (!err) {
        return res
          .status(201)
          .json({ status: "success", message: "task found!", task });
      }
    });
  } catch {
    ({ message }) => {
      return res.status(500).json({ status: "error", message });
    };
  }
};

module.exports = editTask;
