const router = require("express").Router()
const {SignUp,SignIn} = require('../controllers/users')
const catchAsyn = require("../utils/catchAsyc")

router.post("/signup",catchAsyn(SignUp))
router.post("/signin",catchAsyn(SignIn))





module.exports = router