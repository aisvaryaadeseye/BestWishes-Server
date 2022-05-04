const mongoose = require("mongoose");

const SellerOrderSchema = new mongoose.Schema({
  responseOne: {
    type: String,
  },

  orderItem: [],
});

module.exports = mongoose.model("SellerOrder", SellerOrderSchema);
