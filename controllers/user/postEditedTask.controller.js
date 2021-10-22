//Controller for Posting single edited task
postEditTask = async (req, res) => {
  if (!req.user) return res.redirect("back");
  const { title, description } = req.body;
  const { edittaskid } = req.params;

  if (req.file) {
    await cloudinarySetUp();
    const uploadedFile = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "auto",
    });
    if (!uploadedFile) {
      console.error("file not uploaded!");
      res.redirect("back");
    }
    Task.findByIdAndUpdate(
      edittaskid,
      [{ $set: { description, files: req.file.path, title } }],
      (err, result) => {
        if (!err) {
          return res.redirect("/task/createtask");
        } else {
          console.log("failed", err.message);
          return res.redirect("back");
        }
      }
    );
  } else {
    Task.findByIdAndUpdate(
      edittaskid,
      [{ $set: { description, title } }],
      (err, result) => {
        if (!err) {
          res.redirect("/task/createtask");
        } else {
          console.log("failed", err.message);
          res.redirect("back");
        }
      }
    );
  }
};
