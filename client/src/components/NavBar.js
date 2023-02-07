import React, {useContext} from 'react';
import { Context } from '../index';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, SHOP_ROUTE, LOGIN_ROUTE } from '../utils/consts';
//отслеживать изменения в режиме реально времени
import {observer} from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

const NavBar = observer(() => {
    const {user} = useContext(Context);
    const navigate = useNavigate();

    return (
      <Navbar bg='dark' variant='dark'>
        <Container>
          <NavLink style={{color: 'white', textDecoration: 'none'}} to={SHOP_ROUTE}>КУПИ ТЕЛЕФОН</NavLink>
          {user.isAuth 
          ? 
            <Nav className="ml-auto">
                <Button variant='outline-info' onClick={() => navigate(ADMIN_ROUTE)}>Админ панель</Button>
                <Button variant='outline-success' onClick={() => navigate(LOGIN_ROUTE)} className="ms-4">Выйти</Button>
            </Nav>
          :
            <Nav className="ml-auto">
                <Button variant='outline-info' onClick={() => user.setIsAuth(true)}>Авторизация</Button>
            </Nav>
            }
        </Container>
      </Navbar>
    );
})

export default NavBar;
