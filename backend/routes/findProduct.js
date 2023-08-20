const express = require("express");
const router = express.Router();
require("../DB/config");
const Products = require("../DB/products");
router.get("/", async (req, resp) => {
  let result = await Products.find({ _id: req.params.id });
  if (result) {
    resp.send(result);
  } else {
    resp.send({ result: "no results found" });
  }

  resp.send(result);
});
module.exports = router;
