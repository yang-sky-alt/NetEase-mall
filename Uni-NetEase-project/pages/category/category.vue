<template>
	<view class="category_page">
		<!-- 头部区域 -->
		<view class="header">
			<view class="search">
				商品搜索
			</view>
		</view>
		<!-- 内容区域 -->
		<view class="container">
			<!-- 左侧 -->
			<view class="left">
				<scroll-view scroll-y="true" class="left_navscroll">
					<view class="nav_item" :class="{active:index===navIndex}"  @click="changeNavIndex(index)" v-for='(item,index) in categoryList' :key="item.id">{{item.name}}</view>
				</scroll-view>
			</view>
			<!-- 右侧 -->
			<view class="right">
				<scroll-view scroll-y="true" class="right_navscroll">
					<view>
						<image :src="categoryObj.imgUrl" class="cate_img" mode=""></image>
						<view class="goods_list">
							<view class="goods_item" v-for="item in categoryObj.subCateList" :key="item.id">
								<image class="goods_img" :src="item.wapBannerUrl" mode=""></image>
								<view class="goods_name">
									{{item.name}}
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
import req from '@/api/request.js'
export default {
	data() {
		return {
			categoryList:[] ,//  分类页数据
			navIndex:0, //默认让第一个高亮
		};
	},
	created() {
		this.getCategoryDatas()
	},
	methods: {
		// 获取首页数据
		async getCategoryDatas() {
			try {
				const res = await req('/categoryDatas'); // 小程序
				// const res =await req('/api/getIndexData')  // H5
				if(res.status === 200) {
					this.categoryList = res.categoryDatas
				}
			} catch (e) {
				console.log(e);
			}
		},
		// 点击高亮
		changeNavIndex(index) {
			this.navIndex = index
		}
	},
	computed: {
		categoryObj() {
			return this.categoryList[this.navIndex] 
		}
	},
};
</script>

<style lang="stylus">
.category_page
	.header
		padding: 20upx 0
		.search
			width: 90%
			margin: 0 auto
			background-color: #ccc
			height: 60upx
			line-height: 60upx
			border-radius: 4upx
			text-align: center
	.container
		display: flex
		border-top: 2upx solid #333
		.left 
			width: 20%
			border-right: 2upx solid #333
			.left_navscroll 
				height: calc(100vh - 102upx)
				.nav_item 
					position: relative
					font-size:26upx
					height: 60upx
					line-height: 60upx
					text-align: center
					&.active::before
						content: ""
						width: 4upx
						height: 32upx
						position: absolute
						top:17upx
						left: 10upx
						background-color: #bb2c08
		.right 
			flex: 1
			.right_navscroll
				height: calc(100vh - 102upx)
				.cate_img
					display: block
					width: 520upx
					height: 200upx
					margin: 10upx auto
						
				.goods_list
					display: flex
					flex-wrap: wrap
					.goods_item
						width: 33.33333%
						text-align: center
						.goods_img
							width: 90%
							height: 140upx
</style>
