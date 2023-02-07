import React from 'react';
import { Form } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import TypeBar from '../components/TypeBar';

const Shop = () => {
    return (
        <Container>
            <Form className='mt-2 d-flex'>
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9} lg={9} xs={9} sm={9} xl={9}>
                    <BrandBar />
                    <DeviceList />
                </Col>
            </Form>
        </Container>
    );
}

export default Shop;
