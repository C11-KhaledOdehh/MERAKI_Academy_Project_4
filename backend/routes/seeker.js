const express = require("express");
const { registerSeeker, loginSeeker,updateSeekerInfoById,getSeekerById } = require("../controllers/seeker");
const authentication=require("../middleware/authentication");
const authorization=require("../middleware/authorization");
const seekerRouter = express.Router();

seekerRouter.post("/register", registerSeeker);

seekerRouter.post("/login", loginSeeker);
seekerRouter.put("/update/:id",authentication,authorization("UPDATE_INFO"), updateSeekerInfoById);
seekerRouter.get("/" , authentication,getSeekerById);

module.exports = seekerRouter;
