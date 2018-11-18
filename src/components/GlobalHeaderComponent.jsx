import React, { Component } from 'react';
import '../stylesheets/_globalHeader.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// add router later if needed ^^
import chilema_horizontal_logo from '../assets/chilema_horizontal_logo.png';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class GlobalHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    handleLogout() {
        console.log('handleLogout')
        axios.get('/auth/logout')
            .then((response) => {
                localStorage.clear()
                // localStorage.setItem('isAuth', false)
                console.log(response)
            })
            .catch((err) => {
                console.log('err', err)
            })
    }

    render() {
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
                        <button onClick={this.handleLogout}>Log Out</button>
                    </Link>
                    <Link to='/newuser'>
                        <button>Sign Up</button>
                    </Link>
                </div>
            </div>
        )
    }
}





export default GlobalHeader;