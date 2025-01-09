const passport = require("passport");
const ApiError = require("../utils/ApiError");

const verifyCallBack = (req, resolve, reject) => async (err, user, info) => {
  if (err || info || !user) {
    console.log(err, info, user);

    return reject(new ApiError(401, "Please authenticate"));
  }
  req.user = user;

  resolve();
};

const auth = () => async (req, res, next) => {
  return new Promise((resolve, reject) => {
    passport.authenticate(
      "jwt",
      { session: false },
      verifyCallBack(req, resolve, reject)
    )(req, res, next);
  })
    .then(() => next())
    .catch((err) => next(err));
};

module.exports = auth;
