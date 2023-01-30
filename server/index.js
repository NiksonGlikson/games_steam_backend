//переменная окружения, импортируем конфиг, который установили
require('dotenv').config()
// c помощью require импортируем модули в файл
const express = require('express')
// импорт объекта из файла бд
const sequelize = require('./database')
const models = require('./models/models')
//для того чтобы отправлять запросы с браузера настраиваем CORS
const cors = require('cors')
const fileUpload = require('express-fileupload')
//импортируем основной роутер который связывает все остальные
const router = require('./routers/index')
//регистрируем мидлвейр
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')
// указываем ПОРТ на котором будет работать приложение
const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
//для того чтобы наше приложение могло парсить JSON формат подключаем
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)
//обязательно мидлвейр который работает с ошибками идет в конце
app.use(errorHandler)


//функция для подключения БД, все ф-ции для работы с БД явл асинхронными
const start = async () => {
    try {
        //с помощью authenticate будет устанавливаться соединение с БД
        await sequelize.authenticate()
        // sync функция сверяет состояние БД со схемой данных которую мы описываем
        await sequelize.sync()
        // вызываем функцию Listen в которой указываем порт и колбэк
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch(e) {
        console.log(e)
    }
}

start()