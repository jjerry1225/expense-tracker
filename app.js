const express = require("express")

const app = express()
const PORT = process.env.PORT

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

// 引用連線mongoose的檔案，對 app.js 而言，Mongoose 連線設定只需要「被執行」，不需要接到任何回傳參數繼續利用，所以這裡不需要再設定變數。
require("./config/mongoose")

app.listen(PORT, () => {
  console.log(`Express is listening on http://localhost:${PORT}`)
})