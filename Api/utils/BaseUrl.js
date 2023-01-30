require("dotenv").config();

const BaseUrl = {
  client: process.env.CLIENT_VERSION_ONE,
  admin: process.env.ADMIN_VERSION_ONE,
};

module.exports = BaseUrl;
