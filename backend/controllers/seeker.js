const seekerModel = require("../models/seeker");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const registerSeeker = (req, res) => {
  const { fullName, phoneNumber, email, password, role } = req.body;
  const user = new seekerModel({
    fullName,
    phoneNumber,
    email,
    password,
    role :"666752d024653c04a0a63269",
  });

  user
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `Account Created Successfully`,
        seeker: result,
      });
    })
    .catch((err) => {
      if (err) {
        return res.status(409).json({
          success: false,
          message: `The email already exists`,
        });
      }
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};

const loginSeeker = (req, res) => {
  const password = req.body.password;
  const email = req.body.email.toLowerCase();
  seekerModel
    .findOne({ email })
    .populate("role")
    .then(async (result) => {
      if (!result) {
        return res.status(403).json({
          success: false,
          message: `The email doesn't exist or The password you’ve entered is incorrect`,
        });
      }
      try {
        const valid = await bcrypt.compare(password, result.password);
        if (!valid) {
          return res.status(403).json({
            success: false,
            message: `The email doesn't exist or The password you’ve entered is incorrect`,
          });
        }
        const payload = {
          userId: result._id,
          seeker: result.fullName,
          role: result.role,
        };

        const options = {
          expiresIn: "60m",
        };
        const token = jwt.sign(payload, process.env.SECRET, options);
        res.status(200).json({
          success: true,
          message: `Valid login credentials`,
          token: token,
          userId: result._id,
        });
      } catch (error) {
        throw new Error(error.message);
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};

const updateSeekerInfoById = (req, res) => {
  const seekerId = req.params.id;
  const {
    fullName,
    phoneNumber,
    password,
    yearsOfExperience,
    cv,
    profilePicture,
    education,
  } = req.body;

  bcrypt
    .hash(password, 10)
    .then((passwordHash) => {
      seekerModel
        .findByIdAndUpdate(seekerId, {
          fullName,
          phoneNumber,
          password:passwordHash,
          yearsOfExperience,
          cv,
          profilePicture,
          education,
        })
        .then((updateInfo) => {
          if (updateInfo) {
            res.status(200).json({
              success: true,
              message: "seeker information updated",
              info: updateInfo,
            });
          } else {
            res.status(404).json({
              success: false,
              message: `The seeker ${{ seekerId }} has not exist`,
            });
          }
        })
        .catch((error) => {
          res.status(500).json({
            success: false,
            message: "Server Error",
            err: error,
          });
        });
    })
    .catch((error) => {
      console.log(error);
    });
};

const getSeekerById = (req, res) => {
  const seekerId = req.token.userId;

  seekerModel
    .find({ _id: seekerId })
    .populate('role')
    .then((result) => {
      console.log("after login" , result);
      res.status(200).json({
        success: true,
        message: `Seeker found successfully`,
        seeker: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};
module.exports = {
  registerSeeker,
  loginSeeker,
  updateSeekerInfoById,
  getSeekerById
};
