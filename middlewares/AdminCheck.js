function AdminCheck(req,res,next){
    
    if(req.query.username != "admin"){
        res.send("Get Out")
        return
    }
    
    next()
}


module.exports = AdminCheck