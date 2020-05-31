import React from "react";
import { Route, Switch } from 'react-router-dom';
import TodoListApp from '../containers/todoListApp';

function MainContent() {

    return (
        <TodoListApp />
    );
}

export default MainContent;