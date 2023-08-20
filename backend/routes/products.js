const express = require("express");
const router = express.Router();
require("../DB/config");
const Products = require("../DB/products");
router.get("/", async (req, resp) => {
  let result = await Products.find();
  if (result.length < 0) {
    resp.send({ result: "no results found" });
  } else {
    resp.send(result);
  }
});
module.exports = router;
