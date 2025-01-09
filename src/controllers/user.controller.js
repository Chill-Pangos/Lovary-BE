const ApiError = require("../utils/ApiError");
const userService = require("../services/user.service");
const catchAsync = require("../utils/catchAsync");

const createUser = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(201).send(user);
});

const getUser = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.params.userId);
  if (!user) {
    throw new ApiError(404, "User not found");
  }
  res.status(200).send(user.toJSON());
});

const updateUser = catchAsync(async (req, res) => {
  const user = await userService.updateUserById(req.params.userId, req.body);
  res.send(user);
});

const deleteUser = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.params.userId);
  if (!user) {
    throw new ApiError(404, "User not found");
  }

  await userService.deleteUserById(req.params.userId);
  res.status(204).send();
});

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
