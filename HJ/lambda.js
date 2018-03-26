let AWS = require('aws-sdk');
const s3 = new AWS.S3();
exports.handler = function (event, context, callback) {
	let arr = [];
	for (i = 0; i < 100; i++) {
		if (i % 2 == 0) {
			arr.push(i);
		}
	}
	s3.putObject({
		"Body": JSON.stringify(arr),
		"Bucket": "com.sigma.upload.test",
		"Key": "arr"
	})
		.promise()
		.then(data => {
			callback(null, arr);
		})
		.catch(err => {
			callback(arr, null);
		});
}

