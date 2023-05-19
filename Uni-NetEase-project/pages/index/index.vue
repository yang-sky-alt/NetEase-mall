<template>
	<view class="home_page">
		<!-- 头部 -->
		<view class="header">
			<!-- logo -->
			<image class="logo" src="../../static/images/logo.png" mode=""></image>
			<!-- 搜索框 -->
			<view class="search">
				<text class="iconfont icon-sousuotianchong"></text>
				<input type="text" placeholder="搜索..." />
			</view>
			<button type="default">李四</button>
		</view>
		<!-- 导航区域 -->
		<scroll-view scroll-x="true" v-if="indexData.kingKongModule" enable-flex="true" class="nav-scroll">
			<view class="nav-item" @click="changeIndex(-1, -1)" :class="{ active: navIndex === -1 }">推荐</view>
			<view class="nav-item" @click="changeIndex(index, item.L1Id)" :class="{ active: index === navIndex }"
				v-for="(item, index) in indexData.kingKongModule.kingKongList" :key="index">{{ item.text }}</view>
		</scroll-view>
		<!-- 内容区域 -->
		<scroll-view scroll-y="true">
			<!-- 推荐模块 -->
			<Recommend v-if="navIndex === -1"></Recommend>
			<!-- 分类列表 -->
			<CateList v-else :L1Id="L1Id"></CateList>
		</scroll-view>
	</view>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Recommend from '@/components/Recommend/Recommend.vue'
import CateList from '@/components/CateList/CateList.vue'
export default {
	components: {
		Recommend,
		CateList,
	},
	data() {
		return {
			navIndex: -1, //显示高亮
			// indexData: {} //首页数据
			L1Id: -1 //传递点击的那一个导航
		};
	},
	created() {
		this.$store.dispatch('home/getIndexDataAction') //方法一
		// this.getIndexDataAction() 方法二
	},
	computed: {
		// 从仓库里取，渲染界面
		...mapState('home', ['indexData']) // 方法一

	},
	onLoad() { },
	methods: {
		...mapActions('home', ['getIndexDataAction']), //方法二
		// 获取首页数据
		// async getIndexData() {
		// 	try {
		// 		const res = await req('/getIndexData'); // 小程序
		// 		// const res =await req('/api/getIndexData')  // H5
		// 		this.indexData = res.indexData;
		// 	} catch (e) {
		// 		console.log(e);
		// 	}
		// },
		// 点击高亮
		changeIndex(index, L1Id) {
			this.navIndex = index
			this.L1Id = L1Id
		}
	}
};
</script>

<style lang="stylus">
.home_page
	.header
		display flex
		padding 10upx 5upx
		.logo
			// 换算单位 1rpx = 1px upx=rpx
			width 140upx
			height 40upx
			margin 10upx
		.search
			position: relative
			height 60upx
			line-height 60upx
			background-color #ccc
			text 
				position: absolute
				left 10upx
			input
				margin-left 60upx
				height 60upx
		button
			width 144upx
			height 60upx
			line-height 60upx
			padding 0 4upx
	.nav-scroll
		display flex
		white-space nowrap
		flex-flow nowrap
		height 65upx
		.nav-item
			height 40upx
			padding 10upx
			font-size 24upx
			&.active
				border-bottom 3upx solid red
				color:red
</style>
