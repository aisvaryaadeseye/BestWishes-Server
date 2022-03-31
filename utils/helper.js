const crypto = require("crypto");
// const AWS = require("aws-sdk");
// const multer = require("multer");
// const multerS3 = require("multer-s3");

// const bucket = process.env.BUCKET;

// const s3 = new AWS.S3({
//   accessKeyId: process.env.KEY_ID,
//   secretAccessKey: process.env.SECRET,
//   //   region: "us-east-2",
// });

// const params = {
//     Bucket: bucket
// }
// s3.createBucket(params.Bucket, (err, data) =>{
//     if(err){
//         console.log(err)
//     } else {
//         console.log("Bucket Created successfully", data.Location)
//     }
// })
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname + "-" + Date.now());
//   },
// });

// //setting filter to the files just pictures with that format
// const fileFilter = (req, file, cb) => {
//   if (
//     file.mimetype == "image/jpeg" ||
//     file.mimetype == "image/png" ||
//     file.mimetype == "image/jpg"
//   ) {
//     cb(null, true);
//   } else {
//     cb(new Error("Wrong Format"), false);
//   }
// };

// const uploadFiles = multer({
//   storage,
//   limits: {
//     fileSize: 1024 * 1024 * 20, //20mb max
//   },
//   fileFilter,
// });

// exports.uploadS3 = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: process.env.BUCKET,
//     contentType: multerS3.AUTO_CONTENT_TYPE,
//     key: function (req, file, cb) {
//       cb(null, file.originalname + "-" + Date.now());
//     },
//     metadata: function (req, file, cd) {
//       cd(null, { filename: file.fieldname });
//     },
//     acl: "public-read",
//     limits: {
//       fileSize: 1024 * 1024 * 20, //20mb max
//     },
//     fileFilter,
//   }),
// });

//error message
exports.sendError = (res, error, status = 401) => {
  res.status(status).json({ success: false, error });
};

//generating random token
exports.createrandomBytes = () =>
  new Promise((resolve, reject) => {
    crypto.randomBytes(30, (err, buff) => {
      if (err) reject(err);

      const token = buff.toString("hex");
      resolve(token);
    });
  });
