<template>
	<view class="personal_page">
		<view class="header">
			<!-- 已登录 -->
			<template v-if="userinfo.nickName">
				<image class="user_img" :src="userinfo.avatarUrl" mode=""></image>
				<view class="userinfo">{{ userinfo.nickName }}</view>
				<button @click="exit">退出登录</button>
			</template>

			<!-- 未登录 -->
			<template v-else>
				<image class="user_img" src="/static/images/personal/personal.png" mode=""></image>
				<button @click="toLogin">去登录吧</button>
				<!-- 声明式 -->
				<!-- <navigator url=""></navigator> -->
			</template>


		</view>

		<view class="">
			<button @click="login">微信登录流程</button>
		</view>
	</view>
</template>


<script>
import req from '@/api/request.js';
export default {

	data() {
		return {
			userinfo: {}
		};
	},
	created() {
		// 获取存储的数据
		wx.getStorage({
			key: 'userinfo',
			success: res => {
				console.log(res);
				if (res.data) {
					// JSON.parse 字符串转化为对象
					this.userinfo = JSON.parse(res.data);
				}
			}
		});
	},
	methods: {
		toLogin() {
			uni.navigateTo({
				url: '/pages/Login/Login'
			});
		},
		exit() {
			// 清除缓存
			uni.getStorage({
				key: "userinfo",
				data: ''
			})
			// 去登录页
			uni.reLaunch({
				url: '/pages/Login/Login'
			})
		},
		login() {
			wx.login({
				success: async (res) => {
					// 1、从微信服务器获取用户登录凭证code（wx.login()）
					let code = res.code
					if (code) {
						// 2 将code发送给开发服务商
						try {
							let token = await req('/getOpenId', { code })
							console.log(token);
						} catch (e) {
							console.log(e);
						}
					}
				}
			})
		}

	}
};
</script>

<style lang="stylus">
.personal_page
	.header
		height 200upx
		line-height 200upx
		background-color #EED7B5
		display flex
		align-items center
		.user_img
			margin 40upx
			width 100upx
			height 100upx
			border-radius 50%
</style>
