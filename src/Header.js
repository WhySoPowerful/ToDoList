import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header>
            <nav>
                <NavLink exact to="/" activeClassName="active">
                    Home Page
                </NavLink>
                <NavLink to="/todo-list" activeClassName="active">
                    To-Do List
                </NavLink>
                <NavLink to="/about-us" activeClassName="active">
                    About Me
                </NavLink>
                <NavLink to="/site-description" activeClassName="active">
                    Site Description
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
