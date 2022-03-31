const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");
const connectDB = require("./connection/db");

require("dotenv").config();

connectDB();

const AWS = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const fs = require("fs");
const bucket = process.env.BUCKET;

const s3 = new AWS.S3({
  accessKeyId: process.env.KEY_ID,
  secretAccessKey: process.env.SECRET,
  //   region: "us-east-2",
});

// const params = {
//   Bucket: bucket,
// };
// s3.createBucket(params.Bucket, (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Bucket Created successfully", data.Location);
//   }
// });

// const uploadFile = (filename) => {
//   const fileContent = fs.readFileSync(filename);
//   const params = {
//     Bucket: bucket,
//     key: "photo.jpg",
//     Body: fileContent,
//     ContentType: "image/JPG",
//   };

//   s3.upload(params, (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("file uploaded successfully", data.Location);
//     }
//   });
// };

const PORT = process.env.PORT || 8880;

app.use(express.static(__dirname + "/public/index.html"));
app.use(express.json());
app.use(helmet());
app.use(cors());

app.use("/api/auth", require("./routes/auth"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.use(express.static(__dirname + "/public/index.html"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});

// uploadFile("blogImg1.jpg");
