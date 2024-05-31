const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./router')

app.use(cors()) // 配置跨域，必须在路由之前
app.use(router) // 配置路由

// 解决跨域
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Access-Control-Allow-Methods', '*')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

app.listen(81, () => {
  console.log('后端服务启动成功!')
})