// 引用 Express 與 Express 路由器
const express = require("express");
const router = express.Router();
const Record = require("../../models/record")
const Category = require("../../models/category")

// 導至新增頁面
router.get("/new", async (req, res) => {
  const categories = await Category.find().lean().sort({ _id: "asc" })
  res.render("new", { categories })
})

// 新增資料
router.post("/", async (req, res) => {
  try {
    await Record.create({ ...req.body })
    res.redirect('/')
  } catch {
    console.log(error)
  }
})

module.exports = router;