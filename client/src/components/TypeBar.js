import { observer } from 'mobx-react-lite';
import {Context} from '../index';
import React, {useContext} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';


const TypeBar = observer(() => {
    const {device} = useContext(Context);

    return (
        //с помощью map пройдемся по всем типам и будет для каждого отрисовывать компонент листа и внутрь помещаем название
        <ListGroup>
            {device.types.map(type => 
                <ListGroup.Item
                //чтобы выделенный тип выделялся надо прокинуть пропс active
                    style={{cursor: 'pointer'}}
                    active={type.id === device.selectedType.id}
                    onClick={() => device.setSelectedType(type)}
                    key={type.id}
                    >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;
