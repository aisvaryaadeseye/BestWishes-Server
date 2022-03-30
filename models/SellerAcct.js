const mongoose = require("mongoose");

const SellerAcctSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    // required: true,
  },
  sellerName: {
    type: String,
  },
  storeName: {
    type: String,
  },
  storeAddress: {
    type: String,
  },
  storePhone: {
    type: String,
  },
  country: {
    type: String,
  },
  dob: {
    type: String,
  },
  city: {
    type: String,
  },
  storeImg: {
    type: String,
  },
  storeVideo: {
    type: String,
  },
  storeProductImg: {
    type: String,
  },
  storeProductVideo: {
    type: String,
  },
  bisCertificate: {
    type: String,
  },
  createdAt: {
    type: Date,

    default: Date.now(),
  },
});

module.exports = mongoose.model("SellerAcct", SellerAcctSchema);
