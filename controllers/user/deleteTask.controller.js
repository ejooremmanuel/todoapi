//Controller for deleting a task
const deleteTask = async (req, res) => {
  if (!req.user) return res.redirect("back");
  const { taskid } = req.params;
  await Task.findByIdAndDelete(taskid).then(() => {
    res.redirect("back");
  });
};
