import req from '@/api/request.js';
// 状态
const state = {
	indexData: {} //首页数据
}
// 修改状态
const mutations = {
	// 设置首页数据
	setIndexDataMutation(state,indexData) {
		state.indexData = indexData
	}
}
// 发网络请求
const actions = {
	async getIndexDataAction({commit}) {
			try {
				const res = await req('/getIndexData'); // 小程序
				// const res =await req('/api/getIndexData')  // H5
				commit("setIndexDataMutation",res.indexData)
			} catch (e) {
				console.log(e);
			}
	}
	
}
const getters = {}
// 导出
export default {
	namespaced:true,
	state,
	mutations,
	actions,
	getters
}