import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import MainContent from "./MainContent";
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';


import "./App.css";

function App() {
    return (
        <Router>
            <Navbar />
            <MainContent />
            <Footer />
        </Router>
    );
}

export default App;