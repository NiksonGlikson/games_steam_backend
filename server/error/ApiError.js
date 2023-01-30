class ApiError extends Error {
    constructor(status, message) {
        super();
        //присваеваем то что получаем параметрами
        this.status = status
        this.message = message
    }

    //статические ф-ции это значит без создания объекта
    static badRequest(message) {
        return new ApiError(404, message)
    }

    static internal(message) {
        return new ApiError(500, message)
    }

    static forbidden(message) {
        return new ApiError(403, message)
    }
}

module.exports = ApiError