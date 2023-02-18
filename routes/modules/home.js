// 引用 Express 與 Express 路由器
const express = require("express");
const router = express.Router();

const Record = require("../../models/record");
const Category = require("../../models/category");

const dayjs = require("dayjs");

router.get("/", async (req, res) => {
  try {
    const userId = req.user._id
    const filter = req.query.filter;
    const categories = await Category.find().lean().sort({ _id: "asc" }); // 正序為asc；反序為desc
    let totalAmount = 0
    
    //使用三元運算子區分「是否有使用分類」功能
    const records = filter
      ? await Record.find({ categoryId: filter, userId}).lean().sort({ _id: "asc" })
      : await Record.find({ userId }).lean().sort({ _id: "asc" }); // 正序為asc；反序為desc

    //使用 dayjs 調整日期格式
    records.forEach((element) => {
      element.date = dayjs(element.date).format("YYYY/MM/DD");
    });

    //利用categoryId找到對應icon & 計算總金額
    for (let i = 0; i < records.length; i++) {
      const category = await Category.find({
        _id: records[i].categoryId,
      }).lean();
      records[i].icon = category[0].icon;
      totalAmount += Number(records[i].amount)
    }

    res.render("index", { records, categories, totalAmount, filter });
  } catch {
    console.log(error);
  }
});

module.exports = router;
