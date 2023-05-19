import config from './config.js'

export default (url,data={},method='GET')=>{
	return new Promise((resolve,reject)=>{
		uni.request({
		    url:config.host+url, // 小程序。
			 // url:url, // H5。
		    data,
		    success: (res) => {
		        console.log(res.data);
		       resolve(res.data)
		    },
			 fail(err) {
			 	reject(err)
			 }
		});
	})
}