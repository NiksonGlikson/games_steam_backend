//пакет для генерации рандомных айдишников
const uuid = require('uuid')
const path = require('path')
//чтобы создать девайс импортируем модель
const {Device} = require('../models/models')
const ApiError = require('../error/ApiError')

class DeviceController {
    async create(req, res, next) {
        try {
            //получим данные из тела запроса
        const {name, price, brandId, typeId, info} = req.body
        const {img} = req.files
        //ф-ция v4 генерирует айди
        let fileName = uuid.v4() + '.jpg'
        //ф-ция resolve адаптирует путь к папке в операционной системе
        img.mv(path.resolve(__dirname, '..', 'static', fileName))

        const device = await Device.create({name, price, brandId, typeId, img: fileName})
        return res.json(device)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
        
    }

    async getAll(req, res) {
        let {brandId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let devices;

        if(!brandId && !typeId) {
            devices = await Device.findAndCountAll({limit, offset})
        }
        if(brandId && !typeId) {
            devices = await Device.findAndCountAll({where: {brandId}, limit, offset})

        }
        if(!brandId && typeId) {
            devices = await Device.findAndCountAll({where: {typeId}, limit, offset})

        }
        if(brandId && typeId) {
            devices = await Device.findAndCountAll({where: {typeId, brandId}, limit, offset})

        }
        return res.json(devices)
    }

    async getOne(req, res) {
        
    }
}

module.exports = new DeviceController()