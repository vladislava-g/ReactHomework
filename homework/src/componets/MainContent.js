import React from "react";
import Item from './Item';
import { Route, Switch } from 'react-router-dom';

function MainContent() {

    return (
        <Switch>
            <Route path='/' exact component={() => <Item url="https://swapi.dev/api/people/"/>} />
            <Route path='/films' component={() => <Item url="https://swapi.dev/api/films/"/>} />
            <Route path='/planets' component={() => <Item url="https://swapi.dev/api/planets/"/>} />
            <Route path='/starships' component={() => <Item url="https://swapi.dev/api/starships/"/>} />
            <Route path='/transports' component={() => <Item url="https://swapi.dev/api/vehicles/"/>} />
        </Switch>
    );
}

export default MainContent;