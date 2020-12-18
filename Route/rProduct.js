const express = require("express");

const router = express.Router();
const mProduct = require("../Model/mProduct");
// const tamil = require("../models/mModels");

router.post("/insert", function (req, res) {
  console.log(req.body);
  let userproduct = new mProduct();

  userproduct.productName = req.body.productName;
  userproduct.productId = req.body.productId;
  userproduct.quantity = req.body.quantity;
  userproduct.save((err, docs) => {
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
