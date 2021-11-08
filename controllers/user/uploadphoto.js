const { User } = require("../../models/User");

//Cloudinary cloudinarySetup
const cloudinary = require("cloudinary").v2;
const cloudinarySetUp = require("../../config/cloudinarysetup");

const ProfilePhotoUpload = (req, res) => {
  try {
    const { userid } = req.params;

    const checkId = User.findById(userid);
    if (!checkId) {
      return res.status(404).json({ message: "user not found!" });
    }

    await cloudinarySetUp();
    const uploadedFile = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "auto",
    });
    if (!uploadedFile) {
      return res.status(500).json({ message: "Image upload failed!" });
    }
    User.findByIdAndUpdate(
      userid,
      [{ $set: { avatar: uploadedFile.secure_url } }],
      (err, result) => {
        if (!err) {
          return res.status(201).json({ message: "profile updated!", result });
        } else {
          return res
            .status(500)
            .json({ message: "image upload failed", error: err.message });
        }
      }
    );
  } catch (err) {
    console.log("error", err.message);
  }
};

module.exports = ProfilePhotoUpload;
