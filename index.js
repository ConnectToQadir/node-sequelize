const { } = require('./models')
const express = require("express")
const app = express()
const catchAsync = require("./utils/catchAsyc")


app.use(express.json())
app.use("/api/v1/students", require('./routes/students'))




// Global 404 Response
app.use("*", catchAsync(async (req, res, next) => {
    res.status(404).send(`The request route ${req.baseUrl} does exists!`)
}))

// Express App Global Error Handler
app.use((err, req, res, next) => {
    res.send(`Handled here in index.js  =>  ${err.message}`)
})


app.listen(3000, function () {
    console.log("Application Started on Port 3000")
})



// For Database Syncing ----------------
// async function DBSync(){
//     try {
//         await students.sync({force:true})
//         console.log("Sync Successfully!")
//     } catch (error) {
//         console.log(error)
//     }
// }

// DBSync()