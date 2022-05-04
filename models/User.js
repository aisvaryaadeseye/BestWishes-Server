const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },

  password: {
    type: String,
    require: true,
  },
  profileIMAGE: {
    type: String,
  },
  country: {
    type: String,
    default: "",
  },
  countryState: {
    type: String,
    default: "",
  },
  streetAddress: {
    type: String,
    default: "",
  },
  dob: {
    type: String,
    default: "",
  },
  city: {
    type: String,
    default: "",
  },
  postalCode: {
    type: String,
    default: "",
  },
  selectGender: {
    type: String,
    default: "",
  },
  verified: {
    type: Boolean,
    default: false,
    require: true,
  },
  isSeller: {
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
