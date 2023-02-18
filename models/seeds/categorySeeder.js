const mongoose = require("mongoose")

const Category = require("../category")
const db = require("../../config/mongoose")

const CATEGORY = {
  家居物業: "fa-house",
  交通出行: "fa-van-shuttle",
  休閒娛樂: "fa-face-grin-beam",
  餐飲食品: "fa-utensils",
  其他: "fa-pen"
}

db.once("open", async () => {
  try {
    for (let key in CATEGORY) {
      await Category.create({
        name: key,
        icon: CATEGORY[key]
      })
    }
    console.log('category seeds done!')
    process.exit()
  } catch {
    console.log(error)
  }
})