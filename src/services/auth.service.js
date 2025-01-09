const ApiError = require("../utils/ApiError");
const userService = require("./user.service");
const tokenService = require("./token.service");
const Token = require("../models/token.model");
const { tokenTypes } = require("../config/tokens");

const logout = async (refreshToken) => {
  const refreshTokenDoc = await Token.findOne({
    token: refreshToken,
    type: tokenTypes.REFRESH,
    blacklisted: false,
  });
  if (!refreshTokenDoc) {
    throw new ApiError(404, "Not found");
  }
  await Token.deleteOne({ _id: refreshTokenDoc._id });
};

const refreshAuth = async (refreshToken) => {
  try {
    const refreshTokenDoc = await tokenService.verifyToken(
      refreshToken,
      tokenTypes.REFRESH
    );
    const user = await userService.getUserById(refreshTokenDoc.user);
    if (!user) {
      throw new Error();
    }
    await refreshTokenDoc.remove();
    return await tokenService.generateAuthTokens(user);
  } catch (error) {
    throw new ApiError(401, "Please authenticate");
  }
};

module.exports = {
  logout,
  refreshAuth,
};
