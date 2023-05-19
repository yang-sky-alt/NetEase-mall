import Vue from 'vue'
// 状态
const state = {
	cartList: [{
			// 是否选中
			"isSelected": true,
			// 选中数量
			"num": 2,
			"promId": 0,
			"showPoints": false,
			"itemTagList": [{
				"itemId": 1536001,
				"tagId": 128111157,
				"freshmanExclusive": false,
				"name": "暖冬特惠",
				"subType": 204,
				"forbidJump": false,
				"type": 2
			}],
			"rank": 1,
			"id": 1536001,
			"sellVolume": 3634,
			"primaryPicUrl": "https://yanxuan-item.nosdn.127.net/32b8b2d07b1c4327593a4a70993eeac2.png",
			"soldOut": false,
			"sortFlag": 0,
			"commentCount": 0,
			"onSaleTime": 1538101896296,
			"picMode": 1,
			"commentWithPicCount": 0,
			"underShelf": false,
			"status": 2,
			"couponConflict": true,
			"forbiddenBuy": false,
			"promotionDesc": "暖冬特惠",
			"limitedFlag": 204,
			"pieceNum": 0,
			"itemSizeTableDetailFlag": false,
			"forbidExclusiveCal": false,
			"rewardShareFlag": false,
			"updateTime": 1575894115275,
			"showCommentEntrance": true,
			"pieceUnitDesc": "件",
			"specialPromTag": "",
			"counterPrice": 299,
			"categoryL2Id": 0,
			"retailPrice": 209,
			"primarySkuPreSellPrice": 0,
			"preLimitFlag": 0,
			"itemPromValid": true,
			"promTag": "暖冬特惠",
			"source": 0,
			"points": 0,
			"primarySkuPreSellStatus": 0,
			"extraServiceFlag": 0,
			"flashPageLink": "",
			"autoOnsaleTimeLeft": 0,
			"innerData": {},
			"saleCenterSkuId": 0,
			"pointsStatus": 0,
			"extraPrice": "",
			"colorNum": 0,
			"showTime": 0,
			"autoOnsaleTime": 0,
			"preemptionStatus": 1,
			"isPreemption": 0,
			"zcSearchFlag": false,
			"name": "女式色拉姆内衣套装2.0",
			"appExclusiveFlag": false,
			"itemType": 1,
			"listPicUrl": "https://yanxuan-item.nosdn.127.net/02b61fb5700aed6761b7524d98ed0837.png",
			"pointsPrice": 0,
			"simpleDesc": "色拉姆发热面料，加厚升级",
			"seoTitle": "",
			"newItemFlag": false,
			"buttonType": 0,
			"primarySkuId": 1634105,
			"displaySkuId": 1634104,
			"productPlace": "",
			"itemSizeTableFlag": false
		},
		{
			"isSelected": false,
			"num": 1,
			"promId": 0,
			"showPoints": false,
			"itemTagList": [{
				"itemId": 1562007,
				"tagId": 128111157,
				"freshmanExclusive": false,
				"name": "暖冬特惠",
				"subType": 204,
				"forbidJump": false,
				"type": 2
			}],
			"rank": 1,
			"id": 1562007,
			"sellVolume": 2477,
			"primaryPicUrl": "https://yanxuan-item.nosdn.127.net/eade4561af1081945c35ba934c7348b1.png",
			"soldOut": false,
			"sortFlag": 0,
			"commentCount": 0,
			"onSaleTime": 1536637196215,
			"picMode": 1,
			"commentWithPicCount": 0,
			"underShelf": false,
			"status": 2,
			"couponConflict": true,
			"forbiddenBuy": false,
			"promotionDesc": "暖冬特惠",
			"limitedFlag": 204,
			"pieceNum": 0,
			"itemSizeTableDetailFlag": false,
			"forbidExclusiveCal": false,
			"rewardShareFlag": false,
			"updateTime": 1576742994144,
			"showCommentEntrance": true,
			"pieceUnitDesc": "件",
			"specialPromTag": "",
			"counterPrice": 299,
			"categoryL2Id": 0,
			"retailPrice": 199,
			"primarySkuPreSellPrice": 0,
			"preLimitFlag": 0,
			"itemPromValid": true,
			"promTag": "暖冬特惠",
			"source": 0,
			"points": 0,
			"primarySkuPreSellStatus": 0,
			"extraServiceFlag": 0,
			"flashPageLink": "",
			"autoOnsaleTimeLeft": 0,
			"innerData": {},
			"saleCenterSkuId": 0,
			"pointsStatus": 0,
			"extraPrice": "",
			"colorNum": 4,
			"showTime": 0,
			"autoOnsaleTime": 0,
			"preemptionStatus": 1,
			"isPreemption": 0,
			"zcSearchFlag": false,
			"name": "不扎脖子的柔软，男式可机洗高领羊毛衫",
			"appExclusiveFlag": false,
			"itemType": 1,
			"listPicUrl": "https://yanxuan-item.nosdn.127.net/bb4c991ad08c0b061c083cd7b2f2dd08.png",
			"pointsPrice": 0,
			"simpleDesc": "轻薄打底告别臃肿",
			"seoTitle": "",
			"newItemFlag": false,
			"buttonType": 0,
			"primarySkuId": 1623203,
			"displaySkuId": 1623197,
			"productPlace": "",
			"itemSizeTableFlag": false
		}

	]
}
// 修改状态
const mutations = {
	// 添加到购物车
	addGoodsItemMutation(state, goodsItem) {
		// 已有该商品 让原有商品 num+1
		const item = state.cartList.find(item => item.id === goodsItem.id)
		if (item) {
			item.num += 1
		} else {
			// 添加响应式对象
			Vue.set(goodsItem, 'num', 1)
			Vue.set(goodsItem, 'isSelected', true)
			state.cartList.push(goodsItem)
		}

	},
	// 添加减少商品数量
	changeNum(state, {
		isAdd,
		index
	}) {
		if (isAdd) {
			state.cartList[index].num += 1
		} else {
			if (state.cartList[index].num > 1) {
				state.cartList[index].num -= 1
			} else {
				uni.showModal({
					title: '提示',
					content: '是否删除商品',
					success: function(res) {
						if (res.confirm) {
							state.cartList.splice(index, 1)
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}

		}
	},
	// 修改选中状态
	changeSelectedMutation(state, {
		isSelected,
		index
	}) {
		state.cartList[index].isSelected = isSelected
	},
	// 全选反选
	changeAllSelectedMutation(state,isAllSelected) {
		// 遍历所有商品 让每个商品的选中状态跟已选按钮保持一致
		state.cartList.forEach(item => item.isSelected = isAllSelected)
	}
}
// 发网络请求
const actions = {}
const getters = {
	// 全选 依赖于所有商品的选中状态
	isAllSelected(state) {
		return state.cartList.every(item => item.isSelected)
	},
	// 总数量
	totalNum(state) {
		return state.cartList.reduce((prev,item) => {
			return item.isSelected? prev+item.num : prev
		},0)
	},
	// 总价格
	totalPrice(state) {
		return state.cartList.reduce((prev,item) => {
			return item.isSelected? prev+item.num*item.retailPrice : prev
		},0)
	}
}
// 导出
export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}