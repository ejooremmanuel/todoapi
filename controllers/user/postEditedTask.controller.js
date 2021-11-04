const Task = require("../../models/Task");
const { User } = require("../../models/User");

//Cloudinary cloudinarySetup
const cloudinary = require("cloudinary").v2;
const cloudinarySetUp = require("../../config/cloudinarysetup");

//Controller for Posting single edited task

postEditTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(401).json({ message: "please fill all fields" });
    }
    const { taskid } = req.params;

    const checkId = Task.findById(taskid);
    if (!checkId) {
      return res.status(404).json({ message: "todo not found" });
    }

    if (req.file) {
      await cloudinarySetUp();
      const uploadedFile = await cloudinary.uploader.upload(req.file.path, {
        resource_type: "auto",
      });
      if (!uploadedFile) {
        return res.status(500).json({ message: "File upload failed" });
      }
      Task.findByIdAndUpdate(
        taskid,
        [{ $set: { description, files: req.file.path, title } }],
        (err, result) => {
          if (!err) {
            return res.status(201).json({ message: "task updated", result });
          } else {
            console.log("failed", err.message);
            return res
              .status(201)
              .json({ message: "task update failed", error: err.message });
          }
        }
      );
    } else {
      Task.findByIdAndUpdate(
        taskid,
        [{ $set: { description, title } }],
        (err, result) => {
          if (!err) {
            return res.status(201).json({ message: "task updated", result });
          } else {
            return res
              .status(201)
              .json({ message: "task update failed", error: err.message });
          }
        }
      );
    }
  } catch ({ message }) {
    return res.status(500).json({ message });
  }
};

module.exports = postEditTask;
