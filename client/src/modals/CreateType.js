import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
//передаем два пропса show - видел компонент или нет, onHide - скрывает модальное окно
const CreateType = ({show, onHide}) => {
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
                    <FormControl
                        placeholder={'Введите название типа'}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='danger' onClick={onHide}>Закрыть</Button>
                <Button variant='success' onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateType;
