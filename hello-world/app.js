
var aws = require('aws-sdk');
var s3 = new aws.S3();
var AWSXray = require('aws-xray-sdk');

let response;
 
exports.lambdaHandler = (event, context, callback) => {
  
        var s3BucketList;
        s3.listBuckets(function(err, data) {
            console.log(AWSXray.getSegment())
            if (err) console.log(err, err.stack); // an error occurred
            else{
               console.log('s3 bucketlist : ' + JSON.stringify(data));           // successful response
               s3BucketList = data;
               callback(err, {"statusCode" : 200, "body" : JSON.stringify(data)});
            }   
        });
 
 
};
