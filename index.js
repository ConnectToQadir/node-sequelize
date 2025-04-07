const {users} = require('./models')
const express = require("express")
const app = express()
const catchAsync = require("./utils/catchAsyc")
const globalErrorHandler = require('./controllers/errorController')
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())



app.use("/api/v1/students", require('./routes/students'))
app.use("/api/v1/auth", require('./routes/users'))



app.get("/login",(req,res)=>{
    res.sendFile(__dirname + "/pages/login.html")
})



// Global 404 Response
app.use("*", catchAsync(async (req, res, next) => {
    res.status(404).send(`The request route ${req.baseUrl} does exists!`)
}))

// Express App Global Error Handler
app.use(globalErrorHandler)


app.listen(3000, function () {
    console.log("Application Started on Port 3000")
})






// For Database Syncing ----------------
// async function DBSync(){
//     try {
//         await users.sync({force:true})
//         console.log("Sync Successfully!")
//     } catch (error) {
//         console.log(error)
//     }
// }

// DBSync()
