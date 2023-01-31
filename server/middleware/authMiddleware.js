//здесь будем декодировать токен и проверять его на валидность
const jwt = require('jsonwebtoken')

module.exports = function(req, res,next) {
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
        //добавил в реквест в поле юзер раскодированый токен
        req.user = decoded
        next()
    } catch(e) {
        res.status(401).json({message: 'не авторизован'})
    }
}