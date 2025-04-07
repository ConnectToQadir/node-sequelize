const { users } = require("../models")
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")

const SignUp = async (req, res) => {

    if((req.body.password.length < 8) || (req.body.password.length > 16)){
        res.status(400).json({
            success:false,
            message:"Password should be between 8 to 16 charactors!"
        })
        return
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password , salt);


    const user = await users.create({
        ...req.body,
        password:hashedPassword
    })

    res.status(201).json({
        success:true,
        message:"Account Created Successfully!",
        data:user
    })

}

const SignIn = async (req,res) =>{
   
    if(!req.body.email || !req.body.password){
        res.status(400).json({
            success:false,
            message:"Email & Password both required!"
        })
        return
    }

    const foundUser = await users.findOne({
        where:{
            email:req.body.email
        }
    })

    if(!foundUser){
        res.status(400).json({
            success:false,
            message:"Invalid Email or Password!"
        })
        return
    }


    var isValidated = bcrypt.compareSync(req.body.password,foundUser.password)

    if(!isValidated){
        res.status(400).json({
            success:false,
            message:"Invalid Email or Password!"
        })
        return
    }


    // generate token
    const token = jwt.sign(
        {id:foundUser.id},
        "asdfjlaj39393",
        {expiresIn:"15s"}
    )

    res.cookie("token",token)

    res.json({
        success:true,
        message:"Signin Successfully!"
    })

}

const GetUsers = async (req,res) => {
    const data = await users.findAll()
    res.json({
        success:true,
        data:data
    })
}


module.exports = {SignUp,SignIn,GetUsers}