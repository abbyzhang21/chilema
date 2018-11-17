import React from 'react';
import '../stylesheets/_globalHeader.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// add router later if needed ^^
import chilema_horizontal_logo from '../assets/chilema_horizontal_logo.png';
import { Redirect } from 'react-router-dom';

const GlobalHeader = () => {
    return (
        <div className='header'>
            <Link className='header-logo' to='/'>
                <img src={chilema_horizontal_logo} alt="" />
            </Link>
            <div className='global-header-button'>
                <Link to='/login'>
                    <button>Log In</button>
                </Link>
                <Link to='/'>
                    <button>Log Out</button>
                </Link>
                <Link to='/newuser'>
                    <button>Sign Up</button>
                </Link>
            </div>
        </div>


    );
};

export default GlobalHeader;