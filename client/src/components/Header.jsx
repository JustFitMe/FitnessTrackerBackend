import React, { useState } from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import './Header.css';

const Header = ({isLoggedIn, setToken, setUser, setIsLoggedIn, user, token}) => {
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        navigate('/login');
        // const userToAuth={user:{username,password}};
        // const data = await loginUser(userToAuth);
        // if (data.token) {
        //     setToken(data.token);
        //     setUser(data);
        //     setIsLoggedIn(true);
        // }
    }

    const handleRegister = async(event) => {
        event.preventDefault();
        navigate('/register');
        // const userToAuth={user:{username,password}};
        // const data = createUser(userToAuth);
        // if (data.token) {
        //     setToken(data.token);
        //     setUser(data);
        //     setIsLoggedIn(true);
        }

   

    const handleLogout = async(event) => {
        event.preventDefault();
        localStorage.removeItem('token');
        setToken('');
        setIsLoggedIn(false);
        setUser([]);
        console.log(token);
        console.log(user);
    }
   

    return (
        <div id='header'>
            <h1>Fitness Tracker</h1>
            <nav>
                
                <NavLink to="/">Home</NavLink>
                <NavLink to="/routines">Routines</NavLink>
                <NavLink to="/activities">Activities</NavLink>
                {/* <NavLink to="/register">Sign Up</NavLink>
                <NavLink to="/login">Sign In</NavLink> */}
                <>
            {isLoggedIn ? 
            <>
            <button type="submit" onClick={handleLogout}>Logout</button>
            </>
            :
            <>
            <button type="submit" onClick={handleLogin}>Login</button>
            <button type="submit" onClick={handleRegister}>Register</button>
            </>
        }
        </>

            </nav>
        </div>
    )
}

export default Header;