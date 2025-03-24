const catchAsync = (fn) =>{

    const ErrorHandler = (req,res,next) =>{
        fn(req,res,next).catch(next)
    }

    return ErrorHandler

}

module.exports = catchAsync