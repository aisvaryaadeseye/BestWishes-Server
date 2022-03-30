const express = require("express");
const router = express.Router();
const crypto = require("crypto");
require("dotenv").config();
const path = require("path");

const { validate } = require("../middleware/validator");

const User = require("../models/User");
const SellerAcct = require("../models/SellerAcct");
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

// become a seller ======================================
router.post("/seller", async (req, res) => {
  try {
    const { userID } = req.query;
    const user = await User.findById(userID);
    if (!user) return sendError(res, "user not found");
    //create new user
    const { sellerName, storeName, storeAddress, storePhone } = req.body;

    const newSeller = await new SellerAcct({
      sellerName,
      storeName,
      storeAddress,
      storePhone,

      // storeImg,
      // storeVideo,
      // storeProductImg,
      // storeProductVideo,
      // bisCertificate,
    });

    const seller = await newSeller.save();
    user.seller = true;

    res.json({
      success: true,
      message: "Seller Account Created Successful.",
      seller: {
        sellerName: seller.sellerName,
      },
    });
  } catch (error) {
    res.status(500).json(error + "error saving data");
  }
});

//reuseable function to generate token ===================================
const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({ success: true, token, user });
};

module.exports = router;
