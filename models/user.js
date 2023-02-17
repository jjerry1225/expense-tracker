const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date, // 資料型別是日期
    default: Date.now, // 預設為現在的日期
  }
})

module.exports = mongoose.model("User", userSchema)