const sekeerModel = require("../models/sekeerSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const register = (req, res) => {
  const { fullName, phoneNumber,email, password ,role  } =req.body;
  const user = new sekeerModel({
    fullName,
    phoneNumber,
    email,
    password,
   role
    
  });

  user
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `Account Created Successfully`,
        sekeer: result,
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

const login = (req, res) => {
  const password = req.body.password;
  const email = req.body.email.toLowerCase();
  sekeerModel
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
          sekeer: result.fullName,
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
          userId:result._id
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


module.exports = {
  register,
  login,
};
