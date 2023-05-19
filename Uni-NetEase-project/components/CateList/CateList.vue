<template>
	<view class="catelist_page">
		<swiper class="banner" v-if="cateObj" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item,index) in cateObj.category.bannerUrlList" :key="index">
				<image :src="item" mode=""></image>
			</swiper-item>
		</swiper>
		<view class="title">
			{{cateObj.category.frontName}}
		</view>
		<view class="desc">
			{{cateObj.category.frontDesc}}
		</view>
		<!-- 商品列表 -->
		<view class="goods_list">
			<view  v-for="item in cateObj.itemList" :key="item.id" @click="toDetail(item)" class="goods_item">
				<image :src="item.listPicUrl" mode=""></image>
				<view class="goods_name">
					{{item.name}}
				</view>
				<view class="goods_price">
					{{item.retailPrice}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import req from '@/api/request.js';
export default {
	props: ['L1Id'],
	data() {
		return {
			cateList: []
		};
	},
	created() {
		this.getIndexCateList();
	},
	computed: {
		cateObj() {
			return this.cateList.find(item => item.category.parentId === this.L1Id);
			
		}
	},
	methods: {
		async getIndexCateList() {
			try {
				const data = await req('/getIndexCateList');
				console.log(data);
				if (data.status === 200) {
					this.cateList = data.cateList;
				}
			} catch (e) {
				//TODO handle the exception
				console.log(e);
			}
		},
		toDetail(item) {
			uni.navigateTo({
				// 对象转字符串
				url:'/pages/detail/detail?goodsItem='+JSON.stringify(item)
			})
		}
	}
};
</script>

<style lang="stylus">
.catelist_page
	.banner
		height: 360upx
		image
			height: 360upx
			width: 100%
			
	.title
		font-size: 40upx
		color: #333
		height: 80upx
		line-height: 80upx
		text-align: center
	.desc
		font-size: 30upx
		color: #666
		height: 60upx
		line-height: 60upx
		text-align: center
	
	.goods_list
		display: flex
		flex-wrap: wrap
		justify-content:space-around
		// 解决落单问题
		&::after
			content: ''
			width: 340upx
		.goods_item
			width: 340upx
			margin-bottom: 10upx
			image
				width: 100%
				height: 340upx
			.goods_price
				color: #bb2c08
				font-size: 36upx
				font-weight: bold
				margin-top: 4upx
</style>
