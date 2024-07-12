import multer from "multer";
import AWS from "aws-sdk";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

AWS.config.update({
  region: process.env.REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const s3 = new AWS.S3();

const uploadImage = (req, res) => {
  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: `${Date.now()}-${req.file.originalname}`,
    Body: req.file.buffer,
  };

  s3.upload(params, (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send({
      message: "File uploaded successfully",
      data: data,
    });
  });
};

export { uploadImage, upload };
