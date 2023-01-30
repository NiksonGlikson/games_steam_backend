//получаем роутер из express и создаем объект этого роутера
const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
//здесь будем проверять авторизован пользователь или нет
router.get('/auth', userController.check)

module.exports = router