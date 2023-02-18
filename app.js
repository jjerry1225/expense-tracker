const express = require("express")
const session = require("express-session")
const exphbs = require("express-handlebars")
const methodOverride = require("method-override")
const flash = require('connect-flash')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const usePassport = require('./config/passport')
const app = express()
const PORT = process.env.PORT

// 引用路由器，路徑設定為 /routes 就會自動去尋找目錄下叫做 index 的檔案。
const routes = require("./routes")

// 套用express-handlebars的模板引擎
app.engine("handlebars", exphbs( {defaultLayout: "main"} ))
app.set("view engine", "handlebars")

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}))

// 套用method-override
app.use(methodOverride("_method"))

// setting body-parser
app.use(express.urlencoded({ extended: true }))

// 引用連線mongoose的檔案，對 app.js 而言，Mongoose 連線設定只需要「被執行」，不需要接到任何回傳參數繼續利用，所以這裡不需要再設定變數。
require("./config/mongoose")

usePassport(app)

app.use(flash())

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated()
  res.locals.user = req.user
  res.locals.success_msg = req.flash('success_msg') // 設定 success_msg 訊息
  res.locals.warning_msg = req.flash('warning_msg') // 設定 warning_msg 訊息
  next()
})

// 設定路由
app.use(routes)

app.listen(PORT, () => {
  console.log(`Express is listening on http://localhost:${PORT}`)
})