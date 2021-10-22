const Task = require("../../models/Task");

//Controller for deleting a task
const deleteTask = async (req, res) => {
  try {
    const { taskid } = req.params;
    await Task.findByIdAndDelete(taskid).then(() => {
      return res
        .status(201)
        .json({ status: "success", message: "task deleted!" });
    });
  } catch {
    ({ message }) => {
      return res.status(500).json({ status: "error", message });
    };
  }
};

module.exports = deleteTask;
