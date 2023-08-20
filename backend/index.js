require("./DB/config");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const UserSignUp = require("./DB/userSignUp");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/LogIn", require("./routes/Login"));
app.use("/SignUp", require("./routes/SignUp"));
app.use("/addproduct", require("./routes/addProduct"));
app.use("/product", require("./routes/products"));
app.use("/product/", require("./routes/deleteProduct"));

app.use(
  fileUpload({
    useTempFiles: true,
  })
);

app.listen(5000);
