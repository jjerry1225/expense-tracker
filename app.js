const express = require("express")

const app = express()
const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Express is listening on http://localhost:${PORT}`)
})