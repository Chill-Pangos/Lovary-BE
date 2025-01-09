const catchAsync = require("../utils/catchAsync");
const userService = require("../services/user.service");
const tokenService = require("../services/token.service");

const register = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  const tokens = await tokenService.generateAuthTokens(user);
  res.status(201).send({ user, tokens });
});

const login = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.body.userId);
  const tokens = await tokenService.generateAuthTokens(user);
  res.status(200).send({ user, tokens });
});

const logout = catchAsync(async (req, res) => {
  await userService.deleteUserById(req.body.id);
  res.status(204).send();
});

module.exports = {
  register,
  login,
  logout,
};
