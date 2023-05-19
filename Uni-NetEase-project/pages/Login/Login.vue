<template>
	<view>
		<button open-type="getUserInfo" @tap="getUserInfo">登录</button>
	</view>
</template>

<script>
export default {
	data() {
		return {

		};
	},
	methods: {
		getUserInfo(data) {
			// 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认开发					者妥善保管用户快速填写的头像昵称，避免重复弹窗
			wx.getUserProfile({
				desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
				success: (res) => {
					console.log(res);
					// 保存用户资料
					wx.setStorage({
						key: 'userinfo',
						data: JSON.stringify(res.userInfo)
					})
					// 页面跳转
					uni.reLaunch({
						url: '/pages/personal/personal'
					})
				}
			})
		}
	}
}
</script>

<style lang="stylus">

</style>
