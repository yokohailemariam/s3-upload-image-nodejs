const AWS = require("aws-sdk");
const fs = require("fs");

// Set the region and access keys
AWS.config.update({
  region: process.env.REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

// Create a new instance of the S3 class
const s3 = new AWS.S3();

// Set the parameters for the file you want to upload
const params = {
  Bucket: process.env.BUCKET_NAME,
  Key: "up.png",
  Body: fs.createReadStream("up.jpeg"),
};

// Upload the file to S3
s3.upload(params, (err, data) => {
  if (err) {
    console.log("Error uploading file:", err);
  } else {
    console.log("File uploaded successfully. File location:", data.Location);
  }
});
