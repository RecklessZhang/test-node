const express = require('express')
const router = express.Router()

// 接口集合
const user = require('./api/user')

router.get('/api/user/test', user.test)

module.exports = router