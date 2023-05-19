<template>
	<view class="detail">
		<view class="header">
			{{goodsDetail.name}}
		</view>
		<image :src="goodsDetail.listPicUrl" mode=""></image>

		<!-- 底部 -->
		<view class="footer">
			<view class="img">
				<image
					src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/detail-kefu-d10f0489d2.png?imageView&type=webp"
					mode=""></image>
			</view>
			<view class="btn">立即购买</view>
			<view class="btn cart" @click="addCart">加入购物车</view>
		</view>
	</view>
</template>

<script>
	import {mapMutations} from 'vuex'
	export default {
		data() {
			return {
				goodsDetail: {}
			};
		},
		onLoad(options) {
			this.goodsDetail = JSON.parse(options.goodsItem)
			console.log(this.goodsDetail);
		},
		methods:{
			...mapMutations('cart',['addGoodsItemMutation']),
			addCart(){
				// 1、commit mutation  this.$store.commit('xxxx',{})
				// 2、辅助函数写法
				this.addGoodsItemMutation(this.goodsDetail)
			}
		}
	}
</script>

<style lang="stylus">
.detail
	.header
		height 90rpx
		line-height 90rpx
		width 570rpx
		margin 0 auto
		text-align center
	.detaiScroll
		height calc(100vh - 190rpx)
		image
			width 100%
			height 750rpx
		.tag
			width 90%
			height 100rpx
			line-height 100rpx
			background-color #bb2c08
			margin 20rpx auto
			text-align center
			color #fff
			font-size 32rpx
			border-radius 10rpx
		.price
			font-size 50rpx
			color #dd1a21
			line-height 70rpx
			margin-left 5%
	.footer
		display flex
		position fixed
		bottom 0
		left 0
		right 0
		height 100rpx
		line-height 100rpx
		border-top 1px solid #eee
		background-color #fff
		.img
			flex 1
			line-height 100rpx
			image
				display block
				margin 20rpx auto
				width 60rpx
				height 60rpx
		.btn
			flex 2
			border-left 1px solid #eee
			text-align center
			&.cart
				background-color #dd1a21
				color #fff
</style>