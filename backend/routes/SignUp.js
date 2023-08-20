const express = require("express");
const router = express.Router();
require("../DB/config");
const bcrypt = require("bcrypt");
const UserSignUp = require("../DB/userSignUp");
const JWT = require("jsonwebtoken");
const JWT_SECRET = "Swapnilisagoodboy";

router.post("/", async (req, resp) => {
  console.log(req.body);
  const salt = bcrypt.genSaltSync(10);
  const securePassword = bcrypt.hashSync(req.body.password, salt);

  const userexist = await UserSignUp.findOne({ email: req.body.email });
  if (!userexist) {
    const data = new UserSignUp({
      name: req.body.name,
      email: req.body.email,
      password: securePassword,
    });
    let result = await data.save();
    result = result.toObject();
    delete result.password;
    console.log(result);
    const id = JSON.stringify(result._id);
    const auth_token = JWT.sign(id, JWT_SECRET);
    resp.send({ auth: auth_token, user: result.name });
  } else {
    resp.send({ status: 400, result: "Sorry email already in use" });
  }
});
module.exports = router;
