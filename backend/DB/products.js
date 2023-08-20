const mongoose = require("mongoose");
require("./config");
const productsSchema = new mongoose.Schema({
  name: String,
  price: String,
  category: String,
  userId: String,
  company: String,
  imageUrl: String,
});
module.exports = mongoose.model("products", productsSchema);
