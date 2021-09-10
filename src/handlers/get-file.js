const AWS = require('aws-sdk');

const s3 = new AWS.S3();

exports.handler = function (event, context) {
    let fileContent = "";
    s3.getObject({ 
        Bucket: 'samkachun-bucket',
        Key: 'AnOnlineShop.json'  
    }, function(err, data) {
        if (err) {
            console.log(err, err.stack);
            context.succeed(err);
        } else {
            fileContent = data.Body.toString('ascii');
            context.succeed(fileContent);
        }
    });

	
};