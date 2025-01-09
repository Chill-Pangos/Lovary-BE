const mongoose = require("mongoose");
const toJSON = require("./plugins/toJSON.plugin");
const paginate = require("./plugins/paginate.plugin");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    partner: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
      },
      name: {
        type: String,
        required: false,
        trim: true,
      },
      dateOfBirth: {
        type: Date,
        required: false,
      },
    },
    startLoveDate: {
      type: Date,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.plugin(toJSON);
userSchema.plugin(paginate);

const User = mongoose.model("Users", userSchema);

module.exports = User;
