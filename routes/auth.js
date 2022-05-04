const express = require("express");
const router = express.Router();
const crypto = require("crypto");
require("dotenv").config();
const path = require("path");
const uuid = require("uuid");
const jwt = require("jsonwebtoken");
const AWS = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const fs = require("fs");
const bucket = process.env.BUCKET;

const s3 = new AWS.S3({
  accessKeyId: process.env.KEY_ID,
  secretAccessKey: process.env.SECRET,
  // region: 'us-east-2'
});

const { validate } = require("../middleware/validator");
const User = require("../models/User");
const SellerAcct = require("../models/SellerAcct");
const AddProduct = require("../models/AddProduct");
const SellerOrder = require("../models/SellerOrder");
const VerificationToken = require("../models/VerificationToken");
const ResetToken = require("../models/ResetToken");
const { sendError, createrandomBytes } = require("../utils/helper");
const { generateOTP, mailSender } = require("../utils/mail");
const { isValidObjectId } = require("mongoose");
const { isResetTokenValid } = require("../middleware/user");

//Register new user=================================================
router.post("/register", validate, async (req, res) => {
  try {
    //create new user
    const { fullName, email, phone, password } = req.body;
    //validating email
    const currentEmail = await User.findOne({ email });
    if (currentEmail) return sendError(res, "email already exist");

    const newUser = await new User({
      fullName,
      email,
      phone,
      password,
    });

    const OTP = generateOTP();
    const verificationToken = new VerificationToken({
      owner: newUser._id,
      token: OTP,
    });

    const user = await newUser.save();
    const userToken = await verificationToken.save();

    let to = {
      Email: newUser.email,
      Name: newUser.fullName,
    };

    let subject = "Welcome to BestWishes";
    let text = "Please Verify your account";
    let html =
      "Hello " +
      newUser.fullName +
      ",\n\n" +
      "Please use bellow OTP code to verify your account.\n" +
      OTP;

    mailSender(to, subject, text, html);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error + "error saving data");
  }
});

//verifyEmail ============================================================
router.post("/verify", async (req, res) => {
  try {
    const { otp } = req.body;
    const { userId } = req.query;

    if (!userId || !otp.trim()) return sendError(res, " missing parameters");

    if (!isValidObjectId(userId)) return sendError(res, " invalid user ID");

    const user = await User.findById(userId);
    if (!user) return sendError(res, "user not found");

    if (user.verified) return sendError(res, "Account already Verified");

    const token = await VerificationToken.findOne({ owner: user._id });
    if (!token) return sendError(res, "invalid token");

    const isMatched = await token.compareToken(otp);
    if (!isMatched) return sendError(res, "please provide a valid token");

    user.verified = true;

    await VerificationToken.findByIdAndDelete(token._id);

    await user.save();

    let to = {
      Email: user.email,
      Name: user.fullName,
    };

    let subject = "BestWishes Account Verified";
    let text = "Admin";
    let html = "You Account is now verified. Please login to BestWises";

    mailSender(to, subject, text, html);

    res.json({
      success: true,
      message: "Account Verified Successfully.",
      user: {
        username: user.username,
        email: user.email,
        id: user._id,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

//Login ============================================================================
router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!password || !email)
      return sendError(res, "Please provide the required details");

    const currentUser = await User.findOne({ email });

    if (!currentUser) {
      return sendError(res, "user not found");
    }

    if (!currentUser.verified) {
      return sendError(res, "account not verify");
    }

    const isMatched = await currentUser.comparePassword(password);
    if (!isMatched) {
      return sendError(res, "invalid Email/Password");
    }

    sendToken(currentUser, 200, res);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

//forgot password link ================================================================
router.post("/forgot", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return sendError(res, "invalid email address");

    const user = await User.findOne({ email });
    if (!user) return sendError(res, "user not found");

    const newToken = await createrandomBytes();
    const resetToken = new ResetToken({ owner: user._id, token: newToken });

    await resetToken.save();

    //send new reset token password to the user
    let to = {
      Email: user.email,
      Name: user.fullName,
    };

    let subject = "BestWishes Reset Password";
    let text = "Admin";
    let html = `Password Reset Request \n \n
        http://localhost:3000/reset-password?token=${newToken}&id=${user._id}
        `;
    mailSender(to, subject, text, html);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

//Reset password =================================================================
router.post("/reset-password", async (req, res) => {
  const { password } = req.body;
  const { userId } = req.query;
  if (!userId) return sendError(res, " missing parameters");

  const user = await User.findById(userId);
  if (!user) return sendError(res, "user not found");

  const isSamePassword = await user.comparePassword(password);
  if (isSamePassword) return sendError(res, "new password must be different");

  if (password.trim().length < 6)
    return sendError(res, "password must be minimum of 6 characters");

  user.password = password.trim();
  await user.save();

  await ResetToken.findOneAndDelete({ owner: user._id });

  //password reset success
  let to = {
    Email: user.email,
    Name: user.fullName,
  };

  let subject = "BestWishes New password Success";
  let text = "Admin";
  let html = `Password Reset Successfully, now you can login with your new password
    `;
  mailSender(to, subject, text, html);

  res.json({ success: true, message: "Password Reset Successfully" });
});

//verify token ==============================================================
router.get("/verify-token", isResetTokenValid, async (req, res) => {
  res.json({ success: true });
});

//update-user datails
router.put("/update-user", async (req, res) => {
  const { token } = req.query;
  try {
    if (!token) {
      return sendError(res, "Not authorized ");
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByIdAndUpdate(decoded.id, {
      $set: req.body,
    });

    // res.status(200).json(user);
    sendToken(user, 200, res);
  } catch (error) {
    res.status(500).json(error + "error saving data");
  }
});

//setting filter to the files just pictures with that format
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype == "image/jpeg" ||
    file.mimetype == "image/png" ||
    file.mimetype == "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Wrong Format"), false);
  }
};

const uploadS3 = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.BUCKET,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
      cb(null, file.originalname + "-" + Date.now());
    },
    metadata: function (req, file, cd) {
      cd(null, { filename: file.fieldname });
    },
    acl: "public-read",
    limits: {
      fileSize: 1024 * 1024 * 20, //20mb max
    },
    fileFilter,
  }),
});

// become a seller ======================================
router.post(
  "/seller",
  uploadS3.fields([
    { name: "productIMAGE", maxCount: 1 },
    { name: "productVIDEO", maxCount: 1 },
    { name: "businessIMAGE", maxCount: 1 },
    { name: "businessVIDEO", maxCount: 1 },
    { name: "certificateIMAGE", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const { userID } = req.query;

      if (!isValidObjectId(userID)) return sendError(res, " invalid user ID");

      const user = await User.findById(userID);

      if (!user) return sendError(res, "user not found");

      if (user.isSeller) return sendError(res, "Already a selller");

      let assets = [];
      for (const property in req.files) {
        for (let i = 0; i < req.files[property].length; i++) {
          let asset = {
            URL: req.files[property][i].location,
          };

          assets.push(asset);
        }
      }
      const sellerName = req.body.sellerName;
      const storeName = req.body.storeName;
      const storeAddress = req.body.storeAddress;
      const storePhone = req.body.storePhone;
      const country = req.body.country;
      const dob = req.body.dob;
      const city = req.body.city;

      user.isSeller = true;

      const newSeller = await new SellerAcct({
        owner: userID,
        sellerName,
        storeName: storeName[0].toUpperCase() + storeName.slice(1),
        storeAddress,
        storePhone,
        country,
        dob,
        city,
        productIMAGE: assets[0],
        productVIDEO: assets[1],
        businessIMAGE: assets[2],
        businessVIDEO: assets[3],
        certificateIMAGE: assets[4],
      });

      await user.save();

      const seller = await newSeller.save();

      res.json({
        success: true,
        message: "Seller Account Created Successful.",
        isSeller: user.isSeller,
        sellerData: seller,
      });
    } catch (error) {
      res.status(500).json(error + "error saving data");
    }
  }
);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./client/public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.BUCKET,
    acl: "public-read",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString());
    },
  }),
});

// uploadS3.single("profileIMAGE"),
const singleUpload = upload.single("profileIMAGE");

router.put("/update-data", async (req, res) => {
  singleUpload(req, res, async function (err, some) {
    if (err) {
      return res.status(422).send({
        errors: [{ title: "Image Upload Error", detail: err.message }],
      });
    }
    let imgUrl = req?.file?.location;
    // console.log({ imageUrl: req.file.location });
    // return res.json({ imageUrl: req.file.location });
    try {
      const { token } = req.query;
      if (!token) {
        return sendError(res, "Not authorized ");
      }
      // console.log({ imageUrl1: req.file.location });
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const currentUser = await User.findByIdAndUpdate(decoded.id)
        // const currentUser = await User.findById(id)
        .then((user) => {
          user.fullName = req.body.fullName;
          user.email = req.body.email;
          user.phone = req.body.phone;
          user.country = req.body.country;
          user.countryState = req.body.countryState;
          user.streetAddress = req.body.streetAddress;
          user.dob = req.body.dob;
          user.city = req.body.city;
          user.postalCode = req.body.postalCode;
          user.selectGender = req.body.selectGender;
          // user.profileIMAGE = file?.Location;
          user.profileIMAGE = imgUrl;

          user.save();
          sendToken(currentUser, 200, res);
          // .then(() => res.json("Success!!!"))
          // .catch((err) =>
          //   res.status(500).send(err + " " + "error saving data")
          // );
          // console.log({ Location: assets[0] });
        });
      // console.log({ imageUrl: req.file.location });
      // .catch((err) =>
      //   res.status(500).send(err + "  " + "error updating user")
      // );
    } catch (err) {
      res.status(500).json(err + +"  " + " error saving data");
    }
  });
});

//get selller ============================================================
router.get("/get-seller", async (req, res) => {
  const { userID } = req.query;

  try {
    if (!isValidObjectId(userID)) return sendError(res, " invalid user ID");

    const user = await User.findById(userID);
    const seller = await SellerAcct.findOne({ owner: user._id });
    if (!user) return sendError(res, "user not found");
    res.status(200).json(seller);

    // req.user = user;
    // next();
  } catch (error) {
    return sendError(res, "User not authorized");
  }
});

//get user ============================================================
router.get("/get-user", async (req, res) => {
  const { userID } = req.query;

  try {
    if (!isValidObjectId(userID)) return sendError(res, " invalid user ID");

    const user = await User.findById(userID);

    if (!user) return sendError(res, "user not found");
    sendToken(user, 200, res);

    // req.user = user;
    // next();
  } catch (error) {
    return sendError(res, "User not authorized");
  }
});

// Add new product ======================================
router.post(
  "/add-product",
  uploadS3.fields([
    { name: "proFrontIMAGE", maxCount: 1 },
    { name: "proBackIMAGE", maxCount: 1 },
    { name: "proUpwardIMAGE", maxCount: 1 },
    { name: "businessVIDEO", maxCount: 1 },
    { name: "proDownWardIMAGE", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const { userID } = req.query;

      if (!isValidObjectId(userID)) return sendError(res, " invalid user ID");

      const user = await User.findById(userID);

      if (!user) return sendError(res, "user not found");
      const seller = await SellerAcct.findOne({ owner: user._id });

      // if (user.isSeller) return sendError(res, "Already a selller");

      let assets = [];
      for (const property in req.files) {
        for (let i = 0; i < req.files[property].length; i++) {
          let asset = {
            URL: req.files[property][i].location,
          };

          assets.push(asset);
        }
      }
      const productName = req.body.productName;
      const productPrice = req.body.productPrice;
      const productQuantity = req.body.productQuantity;
      const productDetail = req.body.productDetail;
      const productOrigin = req.body.productOrigin;
      const productCategory = req.body.productCategory;
      const productDeliveryTime = req.body.productDeliveryTime;
      const productSpecification = req.body.productSpecification;

      const newProduct = await new AddProduct({
        owner: userID,
        storeName:
          seller.storeName[0].toUpperCase() + seller.storeName.slice(1),
        productName: productName[0].toUpperCase() + productName.slice(1),
        productPrice,
        productQuantity,
        productDetail,
        productOrigin,
        productCategory,
        productDeliveryTime,
        productSpecification,
        proFrontIMAGE: assets[0],
        proBackIMAGE: assets[1],
        proUpwardIMAGE: assets[2],
        proDownWardIMAGE: assets[3],
      });

      // await user.save();

      const product = await newProduct.save();

      res.json({
        success: true,
        message: "Product Created Successful.",
      });
    } catch (error) {
      res.status(500).json(error + "error saving data");
    }
  }
);

//get all products
router.get("/products", async (req, res) => {
  try {
    const allProduct = await AddProduct.find({
      AddProduct: AddProduct.addproducts,
    });
    res.status(200).json(allProduct);
  } catch (error) {
    res.status(500).json(error + "error fething data");
  }
});

//get product by id
router.get("/product", async (req, res) => {
  const { productId } = req.query;
  try {
    const product = await AddProduct.findById(productId);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error + "error fething data");
  }
});
//post seller order
router.put("/seller-order", async (req, res) => {
  try {
    const response = await SellerOrder.updateMany({
      $push: { orderItem: req.body },
    });
    res.status(200).json("success!!!");
  } catch (error) {
    res.status(500).json(error + "error saving data");
  }
});
// db.collection.find({ "products.metaData.value": "abc" })
router.get("/orders", async (req, res) => {
  const { sellerID } = req.query;
  try {
    const order = await SellerOrder.find(
      {
        orderItem: {
          $elemMatch: {
            $elemMatch: {
              sellerId: sellerID,
            },
          },
        },
      },
      {
        orderItem: {
          $reduce: {
            input: "$orderItem",
            initialValue: [],
            in: {
              $concatArrays: [
                {
                  $filter: {
                    input: "$$this",
                    cond: {
                      $eq: ["$$this.sellerId", sellerID],
                    },
                  },
                },
                "$$value",
              ],
            },
          },
        },
      }
    );
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json(error + "error fetching data");
  }
});

//reuseable function to generate token ===================================
const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({ success: true, token, user });
};

module.exports = router;

/*
db.collection.aggregate([
  {
    $match: {
      "_id": "627261a17acf7875b30d6e34"
    }
  },
  {
    $project: {
      "description": 1,
      "orderItem": {
        $reduce: {
          input: "$orderItem",
          initialValue: [],
          in: {
            "$concatArrays": [
              "$$value",
              "$$this"
            ]
          }
        }
      }
    }
  },
  {
    $project: {
      orderItem: {
        $filter: {
          input: "$orderItem",
          as: "item",
          cond: {
            $eq: [
              "$$item.sellerId",
              "62470b37f2052b6a6463f9b3"
            ]
          }
        }
      }
    }
  }
])

*/
