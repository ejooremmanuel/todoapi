//Controller for editing single task
const editTask = async (req, res) => {
  if (!req.user) return res.redirect("back");
  const { editid } = req.params;
  Task.findById(editid, (err, task) => {
    if (!err) {
      res.render("default/task", { task });
    }
  });
};
