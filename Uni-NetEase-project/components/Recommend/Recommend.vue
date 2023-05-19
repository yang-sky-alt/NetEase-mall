<template>
	<view class="Recommend_page">
		<!-- 轮播图 -->
		<swiper class="banner" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item class="swiper-item">
							<image src="https://yanxuan.nosdn.127.net/fc4f0c81e321a394c899b34766eca2dd.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
						</swiper-item>
						<swiper-item class="swiper-item">
							<image src="https://yanxuan.nosdn.127.net/1ac36c67727fdcab9408393656f84b79.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
						</swiper-item>
						<swiper-item class="swiper-item">
							<image src="https://yanxuan.nosdn.127.net/461eae224ad516d0231353d3f22606a9.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
						</swiper-item>
		</swiper>
		<!-- 图标 -->
		<view class="policy_descList" >
			<view class="policy_item" v-for="(item,index) in indexData.policyDescList" :key="index">
				<image :src="item.icon" mode=""></image>
				<text>{{item.desc}}</text>
			</view>
		</view>
		<!-- 十宫格 -->
		<view class="nav" v-if="indexData.kingKongModule">
			<view class="nav_item" v-for="item in indexData.kingKongModule.kingKongList" :key="item.L1Id">
				<image :src="item.picUrl" mode=""></image>
				<text>{{item.text}}</text>
			</view>
		</view>
		<!-- 分类区 -->
		<view class="category_list" >
			<view class="category_item" v-for="(item,index) in indexData.categoryModule" :key="index">
				<image :src="item.titlePicUrl" class="category_img" mode=""></image>
				<scroll-view class="category_scroll" scroll-x="true" enable-flex>
					<view class="goods_item" v-for="ele in item.itemList" :key="item.id">
						<image :src="ele.showPicUrl" class="goods_img" mode=""></image>
						<text class="goods_name">{{ele.name}}</text>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
import {mapState} from 'vuex'
	export default {
		
		data() {
			return {
				
			};
		},
		computed: {
			...mapState('home',['indexData'])
		},
	}
</script>

<style lang="stylus">
.Recommend_page 
	margin-top: 10upx
	.banner 
		height: 350upx
		.swiper-item
			image 
				height: 350upx
				width: 100%
	.policy_descList
			display: flex
			margin: 6upx 0
			.policy_item
				flex: 1
				text-align: center
				image
					width: 40upx
					height: 40upx
					vertical-align:middle
					margin-left: 4upx
				text
					font-size: 26upx
					
	.nav 
		display: flex
		flex-wrap: wrap
		.nav_item
			width: 20%
			text-align: center
			font-size: 24upx
			margin-bottom: 4upx
			image
				width: 100upx
				height: 100upx
			text 
				display: block
	.category_list
			.category_item
				margin:  16upx 0
			.category_img
				height: 370upx
				width: 100%
			.category_scroll
				height: 300upx
				display: flex
				flex-wrap: nowrap
				.goods_item
					margin-left: 10upx
					.goods_img
						background-color: #f5f5f5
						width: 200upx
						height: 200upx
					.goods_name
						white-space: pre-wrap
						display: -webkit-box
						-webkit-box-orient: vertical
						-webkit-line-clamp: 2
						text-overflow: ellipsis
						overflow: hidden
	
</style>
