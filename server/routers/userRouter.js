//получаем роутер из express и создаем объект этого роутера
const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
//здесь будем проверять авторизован пользователь или нет
router.get('/auth', authMiddleware, userController.check)

module.exports = router