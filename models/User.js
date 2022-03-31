const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  sellerName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    max: 50,
    unique: true,
  },
  phone: {
    type: String,
    require: true,
    max: 50,
  },

  password: {
    type: String,
    require: true,
  },
  avatar: {
    type: String,
    default: "",
  },
  verified: {
    type: Boolean,
    default: false,
    require: true,
  },
  isseller: {
    type: Boolean,
    default: false,
    require: true,
  },
});

UserSchema.pre("save", async function (next) {
  // pre..>> perform this ftn before saving
  if (this.isModified("password")) {
    const hash = await bcrypt.hash(this.password, 8);
    this.password = hash;
  }
  next();
});

UserSchema.methods.comparePassword = async function (password) {
  const result = await bcrypt.compareSync(password, this.password);
  return result;
};

UserSchema.methods.getSignedToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

module.exports = mongoose.model("User", UserSchema);
