const MerithubToken = require("../Model/systemModel/tokenModel");

const getStoredToken = async () => {
  const storedToken = await MerithubToken.find();
  const tokenResult = storedToken[0]?.token;
  // console.log("token in method", tokenResult);
  return tokenResult;
};

module.exports = getStoredToken;
