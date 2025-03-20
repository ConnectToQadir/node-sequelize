const {} = require('./models')
const express = require("express")
const app = express()



app.use(express.json())
app.use("/students",require('./routes/students'))





app.listen(3000,function (){
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