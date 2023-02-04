import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import BrandBar from '../components/BrandBar';
import TypeBar from '../components/TypeBar';

const Shop = () => {
    return (
        <Container>
            <Row className='mt-2'>
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <BrandBar />
                </Col>
            </Row>
        </Container>
    );
}

export default Shop;
