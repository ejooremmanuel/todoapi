const User = require("../../models/User");

//Cloudinary cloudinarySetup
const cloudinary = require("cloudinary").v2;
const cloudinarySetUp = require("../../config/cloudinarysetup");

const ProfilePhotoUpload = async (req, res) => {
  try {
    const { userid } = req.params;
    console.log(req.file, userid);

    let loggedInUser = await User.findOne({ userid });
    if (!loggedInUser)
      return res.status(400).json({ msg: "Please login to continue" });

    await cloudinarySetUp();

    const uploadedImage = await cloudinary.uploader.upload(req.file.path, {
      eager: [
        { height: 100, width: 100, crop: "fill" },
        { height: 250, width: 250, crop: "fill" },
      ],
    });

    if (!uploadedImage)
      return res.status(500).json({ msg: "An error occurred while uploading" });

    loggedInUser.avatarSmall = uploadedImage.eager[0].secure_url;
    loggedInUser.avatar = uploadedImage.eager[1].secure_url;

    await loggedInUser.save();

    return res.status(201).json({
      msg: "Profile image updated successfully",
      userdata: loggedInUser,
      img: uploadedImage.eager[0].secure_url,
    });
  } catch (err) {
    console.log("error", err.message);
  }
};

module.exports = ProfilePhotoUpload;
