import React, { Component } from 'react';
import '../stylesheets/_header.css';
import { BrowserRouter as  Link } from 'react-router-dom';
// add Router, Route to 'react-router-dom' library if needed
import chilema_horizontal_logo from '../assets/chilema_horizontal_logo.png';
import profile_image from '../assets/Default_Avatar.png';
// import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Header extends Component {
    constructor(props) {
        super(props)
    }

    handleLogout() {
        console.log('handleLogout')
        localStorage.clear()
        axios.get('/auth/logout')
            .then((response) => {
                // localStorage.clear()
                // localStorage.setItem('isAuth', false)
                window.location = '/'
                console.log(response)
            })
            .catch((err) => {
                console.log('err', err)
            })
    }

    render() {
        const isAuth = localStorage.isAuth;
        const tempId = localStorage.getItem('LS_id')
        const profilePath = `/users/detail/${tempId}`

        return (
            <div className='header-bar'>
                <Link className='header-logo' to='/'>
                    <img src={chilema_horizontal_logo} alt="" />
                </Link>
                <div> {!isAuth ? (
                    <div>
                        <Link className='header-button' to='/login'>
                            <button>Log In</button>
                        </Link>
                        <Link className='header-button signup-button' to='/newuser'>
                            <button>Sign Up</button>
                        </Link>
                    </div>
                ) : (
                        <div>
                            <Link className='header-button' to={profilePath}>
                                <button>Profile</button>
                            </Link>
                            <Link className='header-button logout-button' to='/auth/logout'>
                                <button onClick={this.handleLogout}>Log Out</button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}


export default Header;