const router = require("express").Router()
const {
    EnrollStudent,
    GetStudents,
    GetStudent,
    UpdateStudent,
    DeleteStudent
} = require('../controllers/students')
const AdminCheck = require("../middlewares/AdminCheck")



router.post("/",EnrollStudent)
router.get("/",GetStudents)
router.get("/:id",GetStudent)
router.put("/:id",UpdateStudent)

router.delete("/:id",AdminCheck,DeleteStudent)



module.exports = router