const router = require("express").Router()
const {SignUp,SignIn, GetUsers} = require('../controllers/users')
const catchAsyn = require("../utils/catchAsyc")

router.post("/signup",catchAsyn(SignUp))
router.post("/signin",catchAsyn(SignIn))
router.get("/users",catchAsyn(GetUsers))





module.exports = router