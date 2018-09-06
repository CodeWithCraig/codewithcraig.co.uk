var s3 = require('s3');
var fs = require('fs');

exports.onPostBuild = function(pages) {
  // return new Promise((resolve, reject) => {
  //   console.log("================ Pushing to S3 ================");

  //   if (process && process.env && process.env.CWC_ID && process.env.CWC_ID.length) {

  //     // Init S3 client
  //     var client = s3.createClient({
  //       s3RetryCount: 6,
  //       s3RetryDelay: 30,
  //       s3Options: {
  //         accessKeyId: process.env.CWC_ID,
  //         secretAccessKey: process.env.CWC_SECRET,
  //         signatureVersion: 'v4',
  //         region: process.env.CWC_REGION
  //       },
  //     });

  //     // Sync dir
  //     var params = {
  //       localDir: "public",
  //       deleteRemoved: true,
  //       s3Params: {
  //         Bucket: process.env.CWC_BUCKET,
  //         Prefix: ''
  //       },
  //     };

  //     var uploader = client.uploadDir(params);

  //     uploader.on('error', function(err) {
  //       console.error("unable to sync:", err.stack);
  //       reject(err);
  //     });
  //     uploader.on('progress', function() {
  //       console.log("progress", uploader.progressAmount, uploader.progressTotal);
  //     });
  //     uploader.on('end', function() {
  //       console.log("done uploading");
  //       resolve(true);
  //     });
  //   }
  // });
}