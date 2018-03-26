let AWS = require('aws-sdk');
exports.handler = function (event, context, callback) {
	promiseTest().then((res,res2) => {
		console.log(res,res2);
		callback(null, res);
	}).catch(e=>{
		console.log("Error",e);
	});
}


function promiseTest() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Hi","Okay")
		}, 2);
	});
}