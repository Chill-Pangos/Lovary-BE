const mongoose = require("mongoose");
const { toJSON } = require("./plugins");
const { tokenTypes } = require("../config/tokens");

const tokenSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: true,
      index: true,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "Users",
      required: true,
    },
    type: {
      type: String,
      enum: [tokenTypes.ACCESS, tokenTypes.REFRESH],
      required: true,
    },
    expires: {
      type: Date,
      required: true,
    },
    blacklisted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

tokenSchema.plugin(toJSON);

const Token = mongoose.model("Tokens", tokenSchema);

module.exports = Token;
