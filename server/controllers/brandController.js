const {Brand} = require('../models/models')
const ApiError = require('../error/ApiError')

class BrandController {
    //функция для создания бренда
    async create(req, res) {
        //поскольку это POST запрос у него есть тело и из него извлекаем
        const {name} = req.body
        const brand = await Brand.create({name})
        return res.json(brand)
    }
    //функция для получения бренда
    async getAll(req, res) {
        const brands = await Brand.findAll()
        return res.json(brands)
    }
}

module.exports = new BrandController()