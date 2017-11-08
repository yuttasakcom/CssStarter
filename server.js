'use strict'
const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 8080
const publicPath = path.join(__dirname, 'public')
app.use(express.static(publicPath))

app.listen(port, () => {
  console.log(`Server run on port ${port}`)
})