import React, {Component} from 'react';
import '../stylesheets/_header.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// add Router, Route to 'react-router-dom' library if needed
import chilema_horizontal_logo from '../assets/chilema_horizontal_logo.png';
// import { Redirect } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-bar'>
            <Link className='header-logo' to='/'>
                <img src={chilema_horizontal_logo} alt="" />
            </Link>
            <div>
                <Link className='header-button' to='/login'>
                    <button>Log In</button>
                </Link>
                <Link className='header-button signup-button' to='/newuser'>
                    <button>Sign Up</button>
                </Link>
            </div>
        </div>

    );
};


export default Header;