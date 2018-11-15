import React from 'react';
import '../stylesheets/_header.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import chilema_horizontal_logo from '../assets/chilema_horizontal_logo.png';
import { Redirect } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-bar'>
            <Link className='header-logo' to='/'>
                <img src={chilema_horizontal_logo} />
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


//temp components to test on router
// function App(props) {
//     return <div>this is home page</div>
// }
// function LogIn(props) {
//     return <div>login page....</div>
// }
// function NewUser(props) {
//     return <div>Sign up plz</div>
// }

export default Header;