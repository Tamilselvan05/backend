const mongoose = require("mongoose");
const userSchemas = new mongoose.Schema({
  customerName: { type: String },
  customerId: { type: String },
  billId: { type: String },
  phone: { type: String },
  products: { type: String },
});

userSchemas.set("timestamps", true);
module.exports = mongoose.model("customer", userSchemas, "customer");
