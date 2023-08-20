const express = require("express");
const router = express.Router();
require("../DB/config");
const Products = require("../DB/products");
router.delete("/:id", async (req, resp) => {
  try {
    console.log(req.params.id);
    const res = await Products.deleteOne({ _id: req.params.id });
    resp.send(res);
  } catch (e) {
    // resp.send(e);
    console.log(e);
  }
});
module.exports = router;
