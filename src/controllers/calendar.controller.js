const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const calendarService = require("../services/calendar.service");

const getAnniversaries = catchAsync(async (req, res) => {
  const anniversaries = await calendarService.getAnniversaries(
    req.query.startDate
  );

  res.status(200).send(anniversaries);
});

module.exports = {
  getAnniversaries,
};
