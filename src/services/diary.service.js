const ApiError = require("../utils/ApiError");
const Diary = require("../models/diary.model");

const createDiary = async (diaryBody) => {
  return await Diary.create(diaryBody);
};

const getDiaries = async (userId, partnerId) => {
  const diaries = await Diary.aggregate([
    {
      $match: {
        "user.id": { $in: [userId, partnerId] },
      },
    },
    {
      $group: {
        _id: "$createdDate",
        userDiary: {
          $push: {
            $cond: [
              { $eq: ["$user.id", userId] },
              { title: "$title", content: "$content", id: "$_id" },
              null,
            ],
          },
        },
        partnerDiary: {
          $push: {
            $cond: [
              { $eq: ["$user.id", partnerId] },
              { title: "$title", content: "$content", id: "$_id" },
              null,
            ],
          },
        },
      },
    },
    {
      $project: {
        _id: 1,
        userDiary: {
          $filter: {
            input: "$userDiary", // Lọc mảng userDiary
            as: "diary", // Đặt tên cho phần tử trong mảng
            cond: { $ne: ["$$diary", null] }, // Lọc bỏ các giá trị null
          },
        },
        partnerDiary: {
          $filter: {
            input: "$partnerDiary", // Lọc mảng partnerDiary
            as: "diary", // Đặt tên cho phần tử trong mảng
            cond: { $ne: ["$$diary", null] }, // Lọc bỏ các giá trị null
          },
        },
      },
    },
    {
      $sort: { _id: -1 },
    },
  ]);

  return diaries;
};

const updateDiary = async (diaryId, updateBody) => {
  const diary = await Diary.findByIdAndUpdate(diaryId, updateBody, {
    new: true,
  });

  if (!diary) {
    throw new ApiError(404, "Diary not found");
  }

  return diary;
};

const deleteDiary = async (diaryId) => {
  const diary = await Diary.findByIdAndDelete(diaryId);

  if (!diary) {
    throw new ApiError(404, "Diary not found");
  }

  return diary;
};

module.exports = {
  createDiary,
  getDiaries,
  deleteDiary,
  updateDiary,
};
