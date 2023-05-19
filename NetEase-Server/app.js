const express = require('express')
const app = express()
const router = require('./router')
app.use('/', router)
app.listen(3000, () => {
    console.log('http://localhost:3000 服务器启动成功勒...');
})
