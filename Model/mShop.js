const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  shopName  : { type: String },
  ownerName : { type: String },
  phone     : { type: String },

});

userSchema.set("timestamps", true);
module.exports = mongoose.model("user", userSchema, "mShop");
