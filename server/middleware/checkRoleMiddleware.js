// нужна чтобы убедиться, что пользователь админ и может добавлять товары
const jwt = require('jsonwebtoken')

//замыкание, то есть мы вызываем функцию внутри функции
module.exports = function(role) {
    return function(req, res,next) {
        if(req.method === 'OPTIONS') {
            next()
        }
        try {
            //токены обычно помещают в headers.authorization
            const token = req.headers.authorization.split(' ')[1] //Bearer asdsdsa
            if(!token) {
                return res.status(401).json({message: 'не авторизован'})
            }
            //ф-ция verify будет проверять токен на валидность
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            //как только декодировали токен выцепляем роль пользователя и сравниваем
            //с ролью которую передали в мидлвейр
            if(decoded.role !== role) {
                return res.status(403).json({message: 'Нет доступа'})
            }
            //добавил в реквест в поле юзер раскодированый токен
            req.user = decoded
            next()
        } catch(e) {
            res.status(401).json({message: 'не авторизован'})
        }
    }
}