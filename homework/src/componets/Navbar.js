import React from 'react';
import "./Navbar.css";
import Authorization from './Authorization';

function Navbar() {
    return (
        <div id="navbar">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="index.html">News</a></li>
                <li><a href="index.html">Contact</a></li>
                <li><a href="index.html">About</a></li>
                <li><Authorization /></li>
            </ul>
        </div>
    );
}

export default Navbar;