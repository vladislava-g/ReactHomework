import React, { useState, useEffect } from 'react'
import '../style/todoList.css'
import Flip from 'react-reveal/Flip';

function TodoList(props) {

    let [newItem, setNewItem] = useState('')
    let [show, setShow] = useState(false);

    useEffect(() => setShow(show = true), [])

    function handleEvent(event) {
        const { value, type, name, id } = event.target;

        if (type === 'text') {
            setNewItem(newItem = value)
        } else if (type === 'submit' && name === 'add') {
            props.addItem(newItem)
            setNewItem(newItem = '')
        } else if (type === 'submit' && name === 'remove') {
            props.removeItem(parseInt(id));
        } else if (type === 'submit' && name === 'edit') {
            let elem = prompt('Edit:', value);
            if (elem !== null) {
                props.editItem(elem, id)
            }
        }
    }

    return (
        <div>
            <div className='noteText'>

                <input type='text'
                    onChange={(event) => handleEvent(event)}
                    value={newItem}>
                </input>
                <button className='btnAdd btn btn-primary'
                    onClick={(event) => handleEvent(event)}
                    name='add'
                    variant="primary">
                    ADD
                    </button>
            </div>
            <Flip opposite cascade when={show}>
                <ul className='list'>
                    {
                        props.items.map(item =>
                            !item.name ? '' :
                                <li>
                                    <p>{item.name}</p>
                                    <p>{item.date}</p>
                                    <button className='btnRemove btn btn-danger'
                                        onClick={(event) => handleEvent(event)}
                                        name='remove'
                                        id={item.id}>
                                        REMOVE
                                    </button>
                                    <button className='btnEdit btn btn-info'
                                        onClick={(event) => handleEvent(event)}
                                        name='edit'
                                        value={item.name}
                                        id={item.id}>
                                        EDIT
                                    </button>
                                </li>)
                    }
                </ul>
            </Flip>
        </div>
    )
}

export default TodoList;