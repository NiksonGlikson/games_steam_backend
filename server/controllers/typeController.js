const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')

class TypeController {
    //функция для создания типа
    async create(req, res) {
        //поскольку это POST запрос у него есть тело и из него извлекаем
        const {name} = req.body
        const type = await Type.create({name})
        return res.json(type)
    }
    //функция для получения типа
    async getAll(req, res) {
        //функция findAll вернет все сущ записи в базе данных
        const types = await Type.findAll()
        //на клиент возвращаем весь массив объектов
        return res.json(types)
    }
}

module.exports = new TypeController()