import React from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();

    return (
        <div id='header'>
            <h1>Fitness Tracker</h1>
            <nav>
                
                <NavLink to="/">Home</NavLink>
                <NavLink to="/routines">Routines</NavLink>
                <NavLink to="/my-routines">My Routines</NavLink>
                <NavLink to="/activities">Activities</NavLink>
                <NavLink to="/routine-activities">Routine Activities</NavLink>
                
            </nav>
        </div>
    )
}

export default Header;