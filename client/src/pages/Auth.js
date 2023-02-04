import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
//в зависимости на какой странице, надо отрисовывавать конкретную с его помощью получаем маршрут в строке запроса
import { NavLink, useLocation } from "react-router-dom";

const Auth = () => {
    const location = useLocation();
    //переменная будет тру в том случае если маршруты совпадают
    const isLogin = location.pathname === LOGIN_ROUTE;

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control className="mt-3" placeholder="Введите ваш e-mail" />
                    <Form.Control className="mt-3" placeholder="Введите ваш пароль" />
                    <Form className="d-flex justify-content-between mt-3 pt-3 pb-3">
                        {isLogin ? 
                            <div>
                                Нет аккаунта? <NavLink style={{ textDecoration: 'none' }} to={REGISTRATION_ROUTE}>Пройдите регистрацию</NavLink>
                            </div>
                        : 
                            <div>
                                Есть аккаунт? <NavLink style={{ textDecoration: 'none' }} to={LOGIN_ROUTE}>Войдите</NavLink>
                            </div>
                        }
                        <Button 
                            variant="success"
                        >
                            {isLogin ? "Войти" : "Зарегистрироваться"}
                        </Button>
                    </Form>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;
