import React from 'react';
import { Col, Container, Form, Image, Row, Card, Button } from 'react-bootstrap';
import Star from '../assets/Star.svg';

const DevicePage = () => {
    const device = {id: 1, name: 'Iphone 12 pro', price: 10000, rating: 5, img: 'https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437097.jpg?w=1060&t=st=1675609765~exp=1675610365~hmac=55c479a39199d912be69050081b6a1fae27ebabe790f251dd1afa25d4e017836'};
    //под характеристики создаем отдельный массив
    const description = [
        {id: 1, title: 'Оперативная память', description: '5 гб'},
        {id: 2, title: 'Камера', description: '5 гб'},
        {id: 3, title: 'Процессор', description: '5 гб'},
        {id: 4, title: 'Кол-во ядер', description: '5 гб'},
        {id: 5, title: 'Оперативная память', description: '5 гб'}
    ]
    return (
        <Container className='mt-3'>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Form className='d-flex flex-column align-items-center'>
                        <h2>{device.name}</h2>
                        <div 
                            className='d-flex align-items-center justify-content-center'
                            style={{background: `url(${Star}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64}}
                            >
                            {device.rating}
                        </div>
                    </Form>
                </Col>
                <Col md={4}>
                    <Card
                        className='d-flex flex-column align-items-center justify-content-around'
                        style={{width: 400, height: 300, fontSize: 32, border: '5px solid light'}}
                    >
                        <h3>От: {device.price} руб.</h3>
                        <Button>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className='d-flex flex-column m-0 mt-2'>
                <h1 className='p-0'>Характеристики</h1>
            {description.map((info, index) => 
                <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                    {info.title}: {info.description}
                </Row>
                )}

            </Row>
        </Container>
    );
}

export default DevicePage;
