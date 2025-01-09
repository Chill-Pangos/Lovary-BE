const ApiError = require("../utils/ApiError");
const diaryService = require("./diary.service");

const getHolidays = (year) => {
  return [
    { title: "Valentine's Day", date: `${year}-02-14` },
    { title: "Christmas", date: `${year}-12-25` },
    { title: "International Women's Day", date: `${year}-03-08` },
    { title: "Vietnamese Women's Day", date: `${year}-10-20` },
  ];
};

const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result.toISOString().split("T")[0];
};

const getAnniversaries = async (startDate) => {
  const startDateObj = new Date(startDate);
  const startYear = startDateObj.getFullYear();

  const holidays = getHolidays(startYear);

  const anniversaries = [];
  const maxYears = 10;

  for (let index = 1; index <= maxYears; index++) {
    anniversaries.push({
      title: `${index * 100} ngày yêu nhau`,
      date: addDays(startDate, index * 100),
    });
  }

  for (let year = 1; year <= maxYears; year++) {
    anniversaries.push({
      title: `${year} năm yêu nhau`,
      date: addDays(startDate, 365 * year),
    });
  }

  return {
    holidays,
    anniversaries,
  };
};

module.exports = {
  getAnniversaries,
};
