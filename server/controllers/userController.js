const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')

//создаем ф-цию генерации токена так как в логине тоже нужен
const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email,role}, 
        process.env.SECRET_KEY,
        {expiresIn: '24h'})
}

class UserController {
    async registration(req, res, next) {
        const {email, password, role} = req.body
        if(!email || !password) {
            return next(ApiError.badRequest('Некорректный запрос'))
        }
        //существует ли пользователь вообще
        const candidate = await User.findOne({where: {email}})
        if(candidate) {
            return next(ApiError.badRequest('Пользователь уже существует'))
        }
        //хэшируем пароль и цифра 5 сколько цифр шифр
        const hashPassword = await bcrypt.hash(password, 5)
        //создаем пользователя и передаем захеш пароль
        const user = await User.create({email, role, password: hashPassword})
        const basket = await Basket.create({userId: user.id})
        //создаем jwt токен, передаем пэйлоад, секретный ключ и сколько живет токен
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }   

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if(!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        //убеждаемся что пароль написанный совпадает с тем что есть в БД
        //с помощью compareSync сравниваем
        let comparePassword = bcrypt.compareSync(password, user.password)
        if(!comparePassword) {
            return next(ApiError.internal('Неверный пароль'))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }
    //нужна чтобы сгенерироват новый токен и отправить его на клиент
    //то еесть если юзер постоянно пользуется , то токен будет перезаписываться
    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}

module.exports = new UserController()