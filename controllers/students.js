const {students} = require('../models')


async function EnrollStudent(req, res) {
    var data = await students.create(req.body)
    res.json({
        success: true,
        message: "Student Created Successfully!",
        data: data
    })
}

async function GetStudents(req,res){
    var data = await students.findAll()
    res.json({
        success:true,
        message:"Students Received Successfully!",
        data:data
    })
}

async function GetStudent(req,res){
    var data = await students.findByPk(req.params.id)
    res.json({
        success:true,
        message:"Student Received Successfully!",
        data:data
    })
}

async function UpdateStudent(req,res){
    var s = await students.findByPk(req.params.id)
    s.update(req.body)
    await s.save()
    
    res.json({
        success:true,
        message:"Student Updated Successfully!",
        data:s
    })
}

async function DeleteStudent(req,res){

    var s = await students.findByPk(req.params.id)
    await s.destroy()
    
    res.json({
        success:true,
        message:"Student Deleted Successfully!",
        data:s
    })
}

module.exports = {
    EnrollStudent,
    GetStudents,
    GetStudent,
    UpdateStudent,
    DeleteStudent
}