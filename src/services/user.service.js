const User = require("../models/user.model");
const ApiError = require("../utils/ApiError");

const createUser = async (userBody) => {
  return await User.create(userBody);
};

const getUserById = async (userId) => {
  return User.findById(userId);
};

const updateUserById = async (userId, updateBody) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(404, "User not found");
  }
  Object.assign(user, updateBody);
  await user.save();
  return user;
};

const deleteUserById = async (userId) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(404, "User not found");
  }
  await User.deleteOne({ _id: userId });
  return user;
};

module.exports = {
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
};
