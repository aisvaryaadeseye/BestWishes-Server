const mongoose = require("mongoose");

const AddProductSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  productName: {
    type: String,
  },
  productPrice: {
    type: String,
  },
  productQuantity: {
    type: String,
  },
  productDetail: {
    type: String,
  },
  productOrigin: {
    type: String,
  },
  productCategory: {
    type: String,
  },
  productDeliveryTime: {
    type: String,
  },
  productSpecification: {
    type: String,
  },
  proFrontIMAGE: {
    type: [],
  },
  proBackIMAGE: {
    type: [],
  },
  proUpwardIMAGE: {
    type: [],
  },
  proDownWardIMAGE: {
    type: [],
  },

  createdAt: {
    type: Date,

    default: Date.now(),
  },
});

module.exports = mongoose.model("AddProduct", AddProductSchema);
