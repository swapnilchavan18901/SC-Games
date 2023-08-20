const express = require("express");
const router = express.Router();
require("../DB/config");
const bcrypt = require("bcrypt");

const UserSignUp = require("../DB/userSignUp");
router.post("/", async (req, resp) => {
  try {
    const result = await UserSignUp.findOne(req.body.email);
    console.log("res", result);
    const passwordCompare = bcrypt.compare(req.body.password, result.password);
    const id = JSON.stringify(result._id);
    if (!passwordCompare) {
      resp.send({ result: "Email or Password does not match user Found" });
    } else if (passwordCompare) {
      const auth_token = JWT.sign(id, JWT_SECRET);
      console.log("res");
      resp.send({ auth: auth_token, user: result.name });
    } else {
      resp.send({ result: "No user Found" });
    }
  } catch (e) {
    resp.json(e);
  }
});
module.exports = router;
