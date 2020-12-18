const express = require("express");

const router = express.Router();
const mCustomer = require("../Model/mCustomer");


router.post("/insert", function (req, res) {
  console.log(req.body);
  let usercustomer = new mCustomer();

  usercustomer.shopName = req.body.customerName;
  usercustomer.ownerName = req.body.customerId;
  usercustomer.phone = req.body.billId;
  usercustomer.phone = req.body.phone;
  usercustomer.products = req.body.products;


  usercustomer.save((err, docs) => {
    if (err) {
      console.log("errre save db");
      res.send(err);
    } else {
      console.log("success save db");
      res.send(docs);
    }
  });
});
module.exports = router;

// {
//       customerName: {
//   customerId: 
//   billId: 
//   phone: { type: String },
//   products: { type: String },
// }