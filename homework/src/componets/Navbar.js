import React from 'react';
import "./Navbar.css";
import Authorization from './Authorization';
import { NavLink } from 'react-router-dom';


function Navbar() {
    return (
        <div id="navbar">
            <ul className='menu'>
                <li><NavLink activeClassName="active" activeStyle={{color: "royalblue"}} exact to='/'>Characters</NavLink></li>
                <li><NavLink activeClassName="active" activeStyle={{color: "royalblue"}} to='/films'>Films</NavLink></li>
                <li><NavLink activeClassName="active" activeStyle={{color: "royalblue"}} to='/planets'>Planets</NavLink></li>
                <li><NavLink activeClassName="active" activeStyle={{color: "royalblue"}} to='/starships'>Starships</NavLink></li>
                <li><NavLink activeClassName="active" activeStyle={{color: "royalblue"}} to='/transports'>Transports</NavLink></li>
                <li><Authorization /></li>
            </ul>
        </div>
    );
}

export default Navbar;