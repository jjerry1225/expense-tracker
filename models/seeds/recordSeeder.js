const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Record = require("../record");
const Category = require("../category")
const User = require("../user");
const db = require("../../config/mongoose");

const USER_SEED = { name: "廣志", email: "user1@example.com", password: "123" };
const RECORD_SEED = [
  { name: "租金", date: "2019.4.23", amount: 10000 },
  { name: "捷運", date: "2019.4.23", amount: 50 },
  { name: "電影", date: "2019.5.10", amount: 320 },
  { name: "晚餐", date: "2019.5.10", amount: 250 },
  { name: "報名AC課程", date: "2019.5.10", amount: 1000 },
];

db.once("open", async () => {
  try{
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(USER_SEED.password, salt)

    const { name, email, password } = USER_SEED
    const userExample = await User.create({
      name,
      email,
      password: hash
    })

    const categories = await Category.find().lean()

    for (let i = 0; i < RECORD_SEED.length; i++) {
      await Record.create({
        name: RECORD_SEED[i].name,
        date: RECORD_SEED[i].date,
        amount: RECORD_SEED[i].amount,
        userId: userExample._id,
        categoryId: categories[i]._id
      })
    }

    console.log('record seeds done!')
    process.exit()
  } catch {
    console.log(error)
  } 
})
