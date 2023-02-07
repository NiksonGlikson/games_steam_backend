import React, { useContext, useState } from 'react';
import { Context } from '../index';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import FormControl from 'react-bootstrap/FormControl';
import { Col, Row } from 'react-bootstrap';

//dropDown - выпадающее меню

const CreateDevice = ({show, onHide}) => {
    const {device} = useContext(Context);
    //добавляем массив характеристик
    const [info, setInfo] = useState([]);
    //ф-ция с помощью которой добавляем характеристики. передаем массив, так же разворачиваем старый массив и добавляем новый элемент
    //date.now = чтобы не париться с ID будет получать айди из этой ф-ции в поле number
    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}]);
    }
    //ф-ция которая удаляет хар-ку
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number));
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Добавить новый тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className='mt-2 mb-2'>
                        <DropdownToggle>Выберите тип</DropdownToggle>
                        <DropdownMenu>
                            {device.types.map(type =>
                                <DropdownItem key={type.id}>{type.name}</DropdownItem>
                                )}
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown className='mt-2 mb-2'>
                        <DropdownToggle>Выберите бренд</DropdownToggle>
                        <DropdownMenu>
                            {device.brands.map(brand =>
                                <DropdownItem key={brand.id}>{brand.name}</DropdownItem>
                                )}
                        </DropdownMenu>
                    </Dropdown>
                    <FormControl
                        className='mt-3'
                        placeholder={'Введите название устройства'}
                    />
                    <FormControl
                        className='mt-3'
                        placeholder={'Введите стоимость устройства'}
                        type='number'
                    />
                    <FormControl
                        className='mt-3'
                        type='file'
                    />
                    <hr />
                    <Button
                        variant='outline-dark'
                        onClick={addInfo}
                    >
                        Добавить новое свойство
                    </Button>
                    {info.map(i =>
                            <Row className='mt-4' key={i.number}>
                                <Col md={4}>
                                    <FormControl 
                                        placeholder='Введите название свойств'
                                    />
                                </Col>
                                <Col md={4}>
                                    <FormControl 
                                        placeholder='Введите описание свойств'
                                    />
                                </Col>
                                <Col md={4}>
                                    <Button
                                        onClick={() => removeInfo(i.number)}
                                        variant='outline-danger'
                                    >
                                        Удалить</Button>
                                </Col>
                            </Row>
                        )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='danger' onClick={onHide}>Закрыть</Button>
                <Button variant='success' onClick={onHide}>Добавить</Button>
            </Modal.Footer>
    </Modal>
    );
}

export default CreateDevice;
