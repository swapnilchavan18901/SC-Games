const express = require("express");
const router = express.Router();
require("../DB/config");
const Products = require("../DB/products");
router.post("/", async (req, resp) => {
  let result = req.body;

  // let data = req.photo;
  console.log(result);

  try {
    // let added = await cloudinary.uploader.upload(data.tempFilePath, {
    //   folder: "Products",
    //   width: 150,
    //   height: 150,
    //   crop: "scale",
    // });
    // result.imageUrl = added.secure_url;
    // console.log(result);
    let product = new Products(result);
    let res = await product.save();
  } catch (e) {
    console.log(e);
  }
});
module.exports = router;
