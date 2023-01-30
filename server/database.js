//подключение к базе данных, через реструктуризацию, так как класс большой берем
//только нужное
const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
    process.env.DB_NAME, // название БД
    process.env.DB_USER, // Пользователь
    process.env.DB_PASSWORD, // ПАРОЛЬ
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)