// 引用 Express 與 Express 路由器
const express = require("express");
const router = express.Router();
const Record = require("../../models/record")
const Category = require("../../models/category")
const dayjs = require("dayjs");

// 導至新增頁面
router.get("/new", async (req, res) => {
  const categories = await Category.find().lean()
  res.render("new", { categories })
})

// 新增資料
router.post("/", async (req, res) => {
  try {
    const userId = req.user._id
    await Record.create({ ...req.body, userId })
    res.redirect('/')
  } catch {
    console.log(error)
  }
})

// 進入修改資料頁面
router.get("/:id/edit", async (req, res) => {
  try {
    const categories = await Category.find().lean()
    const userId = req.user._id
    const _id = req.params.id
    const record = await Record.findOne({ _id, userId, }).lean()

    //使用 dayjs 調整日期格式
    record.date = dayjs(record.date).format("YYYY/MM/DD")

    res.render("edit", { record, categories})
  } catch {
    console.log(error)
  }
})

// 修改資料
router.put("/:id", (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  Record.findOne({ _id, userId })
    .then((record) => {
      record.name = req.body.name
      record.date = req.body.date
      record.amount = req.body.amount
      record.categoryId = req.body.categoryId
      return record.save()
    })
    .then(() => res.redirect("/"))
    .catch(error => console.log(error))
})

module.exports = router;