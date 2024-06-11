const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

const authentication = async (req, res, next) => {
  const tokenBarer = req.headers.authorization;
  if (!tokenBarer) {
    return res.status(403).json({
      success: false,
      message: "Forbidden",
    });
  }

  try {
    const token = req.headers.authorization.split(" ")[1];
    const verifiedToken = await jwt.verify(token, secret);
    req.token = verifiedToken;
    next();
  } catch (err) {
    return res.status(403).json({
      success: false,
      message: "The token is invalid or expired",
    });
  }
};

module.exports = authentication;
