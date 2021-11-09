const User = require("../../models/User");

//Cloudinary cloudinarySetup
const cloudinary = require("cloudinary").v2;
const cloudinarySetUp = require("../../config/cloudinarysetup");

const ProfilePhotoUpload = async (req, res) => {
  try {
    const { userid } = req.params;

    await cloudinarySetUp();

    const uploadedImage = await cloudinary.uploader.upload(req.file.path, {
      eager: [
        { height: 100, width: 100, crop: "fill" },
        { height: 250, width: 250, crop: "fill" },
      ],
    });
    let founduser = await User.findOne({ userid });
    if (!founduser) {
      return res.status(400).json({
        message: "User not found",
      });
    }
    await founduser.updateOne({
      $set: { avatarSmall: uploadedImage.eager[0].secure_url },
    });
    return res.status(200).json({
      message: "Profile photo uploaded successfully",
      founduser,
    });
  } catch (err) {
    console.log("error", err.message);
  }
};

module.exports = ProfilePhotoUpload;
