const mongoose = require("mongoose");
const userSchem = new mongoose.Schema({
  productName: { type: String },
  productId  : { type: String },
  quantity   : { type: String },

});

userSchem.set("timestamps", true);
module.exports = mongoose.model("product", userSchem, "product");
