let AWS = require('aws-sdk');
exports.handler = function (event, context, callback) {
	let arr=[];
	for(i=0;i<100;i++){
		if(i%2==0){
			arr.push(i);
		}
	}

	callback(null,arr);
}

