import React from 'react'
import '../style/todoList.css'

class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newItem: ''
        }
    }

    handleEvent(event) {
        const { value, type, name, id } = event.target;

        if (type === 'text') {
            this.setState({
                newItem: value
            })
        } else if (type === 'submit' && name === 'add') {
            this.props.addItem(this.state.newItem)
            this.setState({
                newItem: ''
            })
        } else if (type === 'submit' && name === 'remove') {
            this.props.removeItem(parseInt(id));
        } else if (type === 'submit' && name === 'edit') {
            let newItem = prompt('Edit:', value);
            if (newItem !== null) {
                this.props.editItem(newItem, id)
            }
        }

    }

    render() {
        return (
            <div>
                <div className='noteText'>

                    <input type='text'
                        onChange={(event) => this.handleEvent(event)}
                        value={this.state.newItem}>
                    </input>
                    <button className='btnAdd btn btn-primary'
                        onClick={(event) => this.handleEvent(event)}
                        name='add'
                        variant="primary">
                        ADD
                    </button>
                </div>
                <ul className='list'>
                    {
                        this.props.items.map(item =>
                            !item.name ? '' :
                                <li>
                                    <p>{item.name}</p>
                                    <p>{item.date}</p>
                                    <button className='btnRemove btn btn-danger'
                                        onClick={(event) => this.handleEvent(event)}
                                        name='remove'
                                        id={item.id}>
                                        REMOVE
                                    </button>
                                    <button className='btnEdit btn btn-info'
                                        onClick={(event) => this.handleEvent(event)}
                                        name='edit'
                                        value={item.name}
                                        id={item.id}>
                                        EDIT
                                    </button>
                                </li>)
                    }
                </ul>
            </div>

        )
    }

}

export default TodoList;