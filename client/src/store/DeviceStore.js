//makeAutoObservable будет следить за изменениями переменных
//и если они меняются компоненты будут перерендериваться
import {makeAutoObservable} from 'mobx';

export default class DeviceStore {
    //переменная с _ означает что она не может меняться
    //конструктор вызывается при создании объекта класса
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильник'},
            {id: 2, name: 'Телефон'},
            {id: 3, name: 'Ноутбуки'},
            {id: 4, name: 'Телевизоры'},
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 2, name: 'Apple'},
            {id: 2, name: 'Apple'},
            {id: 2, name: 'Apple'},
            {id: 2, name: 'Apple'},
            {id: 2, name: 'Apple'},
            {id: 2, name: 'Apple'},
            {id: 2, name: 'Apple'},
            {id: 2, name: 'Apple'},
            {id: 2, name: 'Apple'},
            {id: 2, name: 'Apple'},
            {id: 2, name: 'Apple'},
            {id: 2, name: 'Apple'},
            {id: 2, name: 'Apple'},
            {id: 2, name: 'Apple'},
            {id: 2, name: 'Apple'},
            {id: 2, name: 'Apple'},
            {id: 2, name: 'Apple'},
            {id: 2, name: 'Apple'},
            {id: 2, name: 'Apple'},
            {id: 2, name: 'Apple'},
            {id: 2, name: 'Apple'},
            {id: 2, name: 'Apple'},
            {id: 2, name: 'Apple'},
            {id: 2, name: 'Apple'},
            {id: 2, name: 'Apple'},
            

        ]
        this._devices = [
            {id: 1, name: 'Iphone 12 pro', price: 10000, rating: 5, img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fkz.e-katalog.com%2Flist%2F122%2F&psig=AOvVaw1JGhzOl7Wi0xa5JBOa-6hI&ust=1675511622078000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNCix6ql-fwCFQAAAAAdAAAAABAE'},
            {id: 2, name: 'Iphone 12 pro', price: 10000, rating: 5, img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fkz.e-katalog.com%2Flist%2F122%2F&psig=AOvVaw1JGhzOl7Wi0xa5JBOa-6hI&ust=1675511622078000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNCix6ql-fwCFQAAAAAdAAAAABAE'},
            {id: 3, name: 'Iphone 12 pro', price: 10000, rating: 5, img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fkz.e-katalog.com%2Flist%2F122%2F&psig=AOvVaw1JGhzOl7Wi0xa5JBOa-6hI&ust=1675511622078000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNCix6ql-fwCFQAAAAAdAAAAABAE'},
            {id: 4, name: 'Iphone 12 pro', price: 10000, rating: 5, img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fkz.e-katalog.com%2Flist%2F122%2F&psig=AOvVaw1JGhzOl7Wi0xa5JBOa-6hI&ust=1675511622078000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNCix6ql-fwCFQAAAAAdAAAAABAE'},
        ]
        this._selectedType = {}
        this._selectedBrand = {}

        makeAutoObservable(this)
    }

//создаем экшены который как-то это состояние меняют
    setTypes(types) {
        this._types = types;
    }
    setBrands(brands) {
        this._brands = brands;
    }
    setDevices(devices) {
        this._devices = devices;
    }
    //при нажатии на конкретный тип надо его выделять
    setSelectedType(type) {
        this._selectedType = type;
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand;
    }
//создаем геттеры чтобы получать переменные из нашего состояния
    get types() {
        return this._types;
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}
