const jwt = require("jsonwebtoken");
require("dotenv").config();

const secret_key = "codebreedKHklasshour";

async function auth(req, res, next) {
  const authHeader = req.headers["authorization"];

  const token = authHeader && authHeader.split(" ")[1];
  if (token == null)
    return res
      .status(401)
      .send({ status: false, message: "Unauthorized, You need to login" });
  try {
    jwt.verify(token, secret_key, (err, user) => {
      if (err)
        return res
          .status(403)
          .send({ authStatus: 403, status: false, message: "Token expired" });
      req.user = user;
      next();
    });
  } catch (error) {}
}

module.exports = auth;
