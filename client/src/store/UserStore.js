//makeAutoObservable будет следить за изменениями переменных
//и если они меняются компоненты будут перерендериваться
import {makeAutoObservable} from 'mobx';

export default class UserStore {
    //переменная с _ означает что она не может меняться
    //конструктор вызывается при создании объекта класса
    constructor() {
        this._isAuth = true
        this._user = {}
        makeAutoObservable(this)
    }

//создаем экшены который как-то это состояние меняют
    setIsAuth(bool) {
        this._isAuth = bool;
    }
    setUser(user) {
        this._user = user;
    }
//создаем геттеры чтобы получать переменные из нашего состояния
    get isAuth() {
        return this._isAuth;
    }
    get user() {
        return this._user
    }
}
