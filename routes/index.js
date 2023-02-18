// 引用 Express 與 Express 路由器
const express = require("express")
const router = express.Router()
const { authenticator } = require("../middleware/auth")

// 引入模組程式碼
const home = require("./modules/home")
const records = require("./modules/records")
const users = require("./modules/users")
const auth = require("./modules/auth")

// 將網址結構符合要求字串的 request 導向對應模組
router.use("/records", authenticator, records)
router.use("/users", users)
router.use("/auth", auth)
router.use("/", authenticator, home)

module.exports = router