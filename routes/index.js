// 引用 Express 與 Express 路由器
const express = require("express")
const router = express.Router()

// 引入模組程式碼
const home = require("./modules/home")
const records = require("./modules/records")
const users = require("./modules/users")

// 將網址結構符合要求字串的 request 導向對應模組
router.use("/records", records)
router.use("/users", users)
router.use("/", home)

module.exports = router