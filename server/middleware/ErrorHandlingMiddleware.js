const ApiError = require('../error/ApiError')

//функция некст нужна для того, чтобы после ее отработки она передалась
//следующей в цепочке мидлвейру
module.exports = function(err, req, res, next) {
    if(err instanceof ApiError) {
        res.status(err.status).json({message: err.message})
    }
    return res.status(500).json({message: 'непредвиденная ошибка'})
}