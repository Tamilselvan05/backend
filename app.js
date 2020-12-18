
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");



// const mModels = require("./Model/mModels");


const rShop = require("./Route/rShop");
const rproduct = require("./Route/rProduct");
const rcustomer = require("./Route/rCustomer");



app.use(cors());
app.use(bodyParser.json());

app.use("/shop", rShop);
app.use("/product", rproduct);
app.use("/customer", rcustomer);





// database port save agurathu
const database =
  "mongodb+srv://codingspace:codingspacedev@cluster0.4yk93.mongodb.net/tamil";

// connecting mode
mongoose.connect(
  database,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  (err, succ) => {
    if (err) {
      console.log("Db not cconnected");
    } else {
      console.log("DB connected");
    }
  }
);

// server on mode
app.listen(3000, () => {
  console.log("connecting");
  
});
