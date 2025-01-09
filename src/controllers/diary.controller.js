const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const diaryService = require("../services/diary.service");

const createDiary = catchAsync(async (req, res) => {
  const diary = await diaryService.createDiary(req.body);
  res.status(201).send(diary);
});

const getDiaries = catchAsync(async (req, res) => {
  const diaries = await diaryService.getDiaries(
    req.query.userId,
    req.query.partnerId
  );

  if (!diaries) {
    throw new ApiError(404, "Diaries not found");
  }

  res.status(200).send(diaries);
});

const updateDiary = catchAsync(async (req, res) => {
  const diary = await diaryService.updateDiary(req.params.diaryId, req.body);

  res.status(200).send(diary);
});

const deleteDiary = catchAsync(async (req, res) => {
  const diary = await diaryService.deleteDiary(req.params.diaryId);
  res.status(204).send();
});

module.exports = {
  createDiary,
  getDiaries,
  updateDiary,
  deleteDiary,
};
