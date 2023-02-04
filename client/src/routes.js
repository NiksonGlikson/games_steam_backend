import Admin from './pages/Admin';
import Basket from './pages/Basket';
import Shop from './pages/Shop';
import Auth from './pages/Auth';
import DevicePage from './pages/DevicePage';
import { ADMIN_ROUTE, BASKET_ROUTE, SHOP_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, DEVICE_ROUTE } from './utils/consts';

//первый массив маршрутов будет для тех, кто авторизован
export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
]

//второй массив для паблика
export const publicRoutes = [
    {
       path: SHOP_ROUTE,
       Component: Shop 
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
     },
     {
        path: REGISTRATION_ROUTE,
        Component: Auth 
     },
     {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
     },
]