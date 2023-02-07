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
            {id: 3, name: 'Lenovo'},
            {id: 4, name: 'Asus'}
        ]
        this._devices = [
            {id: 1, name: 'Iphone 12 pro', price: 10000, rating: 5, img: 'https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437097.jpg?w=1060&t=st=1675609765~exp=1675610365~hmac=55c479a39199d912be69050081b6a1fae27ebabe790f251dd1afa25d4e017836'},
            {id: 2, name: 'Iphone 12 pro', price: 10000, rating: 5, img: 'https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437097.jpg?w=1060&t=st=1675609765~exp=1675610365~hmac=55c479a39199d912be69050081b6a1fae27ebabe790f251dd1afa25d4e017836'},
            {id: 3, name: 'Iphone 12 pro', price: 10000, rating: 5, img: 'https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437097.jpg?w=1060&t=st=1675609765~exp=1675610365~hmac=55c479a39199d912be69050081b6a1fae27ebabe790f251dd1afa25d4e017836'},
            {id: 4, name: 'Iphone 12 pro', price: 10000, rating: 5, img: 'https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437097.jpg?w=1060&t=st=1675609765~exp=1675610365~hmac=55c479a39199d912be69050081b6a1fae27ebabe790f251dd1afa25d4e017836'},
            {id: 5, name: 'Iphone 12 pro', price: 10000, rating: 5, img: 'https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437097.jpg?w=1060&t=st=1675609765~exp=1675610365~hmac=55c479a39199d912be69050081b6a1fae27ebabe790f251dd1afa25d4e017836'},
            {id: 6, name: 'Iphone 12 pro', price: 10000, rating: 5, img: 'https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437097.jpg?w=1060&t=st=1675609765~exp=1675610365~hmac=55c479a39199d912be69050081b6a1fae27ebabe790f251dd1afa25d4e017836'},
            {id: 7, name: 'Iphone 12 pro', price: 10000, rating: 5, img: 'https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437097.jpg?w=1060&t=st=1675609765~exp=1675610365~hmac=55c479a39199d912be69050081b6a1fae27ebabe790f251dd1afa25d4e017836'},
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
