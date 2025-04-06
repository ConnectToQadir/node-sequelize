const AppError = require('../utils/appError');

const sendErrorDev = (error, res) => {
    const statusCode = error.statusCode || 500;
    const status = error.status || 'error';
    const message = error.message;
    const stack = error.stack;

    res.status(statusCode).json({
        status,
        message,
        stack,
    });
};

const sendErrorProd = (error, res) => {
    const statusCode = error.statusCode || 500;
    const status = error.status || 'error';
    const message = error.message;
    const stack = error.stack;

    if (error.isOperational) {
        return res.status(statusCode).json({
            status,
            message,
        });
    }

    console.log(error.name, error.message, stack);
    
    return res.status(500).json({
        status: 'error',
        message: 'Something went very wrong',
    });
};

const globalErrorHandler = (err, req, res, next) => {
    if (err.name === 'JsonWebTokenError') {
        err = new AppError('Invalid token', 401);
    }

    if ((err.name === 'SequelizeValidationError') || (err.name === 'SequelizeUniqueConstraintError')) {
        return res.status(400).json({
            status: 'fail',
            message: err.errors[0].message,
            error: {
                path: err.errors[0].path,
                message: err.errors[0].message,
            },
        });
    }

    if (err.name === 'SequelizeForeignKeyConstraintError') {
        err = new AppError('The record you are trying to delete is being referenced by another record.', 400);
    }

    if (err.name === 'SequelizeDatabaseError' && err.message.includes('invalid input syntax for type integer')) {
        err = new AppError('Invalid input syntax for integer type', 400);
    }

    if (err.name === 'SequelizeDatabaseError' && err.message.includes('invalid input syntax for type uuid')) {
        err = new AppError('Invalid UUID', 400);
    }


    if (process.env.NODE_ENV === 'development') {
        return sendErrorDev(err, res);
    }

    sendErrorProd(err, res);
};

module.exports = globalErrorHandler;