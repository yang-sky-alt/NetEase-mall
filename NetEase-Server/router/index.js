const express = require('express')
const router = express.Router()
var jwt = require('jsonwebtoken');
var Fly=require("flyio/src/node")
var fly=new Fly;
// 引入首页数据
const indexData = require('../datas/index.json')
// 首页类别
const  cateList=require('../datas/indexCateList.json')
// 分类
const  categoryDatas=require('../datas/categoryDatas.json')
router.get('/getIndexData', (req, res) => {
    res.send({
        status: 200,
        message: '首页数据请求成功',
        indexData
    })
})
// 首页 滑块导航 分类类别
router.get('/getIndexCateList',(req,res)=>{
	res.send({
		status:200,
		msg:'success',
		cateList
	})
})
// 分类数据
router.get('/categoryDatas',(req,res)=>{
	res.send({
		status:200,
		msg:'success',
		categoryDatas
	})
})
router.get('/getOpenId',async (req,res)=>{
	// 1、接受请求参数
		const code=req.query.code
		// 2、整合数据对接微信服务器
		
		const appId='wx724ab3b2d402e5b8';
		const appSecret='d34508cf69ba42746df4a9bd2b79d955';
		const url=`https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`; 
		// 通过fly发送请求
		const res2 = await fly.get(url);
	
		const openId=JSON	.parse(res2.data).openid;
		console.log('openid',openId)
		// 3、接收到微信服务器返回的openId，结合当前用户数据，加密生成token
		const info={
			openId,
			name:'梦回还',
			age:18
		}
		var token = jwt.sign({ foo: info }, 'shhhhxxxh');
		console.log(token);
		
		// 4、返回给浏览器当前用户加密后的标识
		res.send({
			token
		})
})
module.exports = router