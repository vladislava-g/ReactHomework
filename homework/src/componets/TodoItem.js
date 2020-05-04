import React from 'react';
import './TodoItem.css'

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.data.id,
            text: props.data.text,
            completed: props.data.completed
        };
    }

    changeState() {
        this.setState({
            completed: !this.state.completed
        });
    }

    render() {
        return (
            <div className={"card completed-" + this.state.completed}>
                <label><input type="checkbox" checked={this.state.completed} onChange={() => this.changeState()}/>{this.state.text}</label>
            </div>
        )
    }

}

export default TodoItem;