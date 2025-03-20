const router = require("express").Router()
const {students} = require("../models")



router.post("/",async function (req,res){
    var data = await students.create(req.body)
    res.json({
        success:true,
        message:"Student Created Successfully!",
        data:data
    })
})


router.get("/",async function (req,res){
    var data = await students.findAll()
    res.json({
        success:true,
        message:"Students Received Successfully!",
        data:data
    })
})


router.put("/:id",async function (req,res){
    var s = await students.findByPk(req.params.id)
    s.update(req.body)
    await s.save()
    
    res.json({
        success:true,
        message:"Student Updated Successfully!",
        data:s
    })
})


router.delete("/:id",async function (req,res){

    var s = await students.findByPk(req.params.id)
    await s.destroy()
    
    res.json({
        success:true,
        message:"Student Deleted Successfully!",
        data:s
    })
})



module.exports = router