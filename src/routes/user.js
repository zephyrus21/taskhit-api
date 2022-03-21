const express = require("express");
const { userSignUp, userSignIn } = require("../controllers/userController");

const router = express.Router();

router.route("/signup").post(userSignUp);
router.route("/signin").post(userSignIn);

module.exports.user = router;
