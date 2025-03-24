const router = require("express").Router()
const {
    EnrollStudent,
    GetStudents,
    GetStudent,
    UpdateStudent,
    DeleteStudent
} = require('../controllers/students')
const AdminCheck = require("../middlewares/AdminCheck")
const catchAsync = require('../utils/catchAsyc')



router.post("/",catchAsync(EnrollStudent))
router.get("/",catchAsync(GetStudents))
router.get("/:id",catchAsync(GetStudent))
router.put("/:id",catchAsync(UpdateStudent))
router.delete("/:id",AdminCheck,catchAsync(DeleteStudent))



module.exports = router