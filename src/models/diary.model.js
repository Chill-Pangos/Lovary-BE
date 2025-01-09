const mongoose = require("mongoose");
const toJSON = require("./plugins/toJSON.plugin");
const paginate = require("./plugins/paginate.plugin");

const diarySchema = new mongoose.Schema({
  user: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: false,
    },
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
  createdDate: {
    type: Date,
    required: true,
  },
});

diarySchema.plugin(toJSON);
diarySchema.plugin(paginate);

const Diary = mongoose.model("Diaries", diarySchema);

module.exports = Diary;
