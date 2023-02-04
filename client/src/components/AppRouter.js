import React, {useContext} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {authRoutes, publicRoutes} from '../routes'
import {SHOP_ROUTE} from '../utils/consts';
import { Context } from '../index';

const AppRouter = () => {
    const {user} = useContext(Context);

    return (
        //импортуруем массив с роутами которые только для авторизов пользователя
        //пробегаемся по нему и вытаскиваем из объекта путь и компонент
        //и для каждого элемента массива отрисовываем роут где указываем путь
        //и компонент который отрисовывает. Ключ exact указывает что путь точно
        //должен совпадать
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
             <Route path='*' element={<Navigate to={SHOP_ROUTE}/>} />
        </Routes>
    );
}

export default AppRouter;
