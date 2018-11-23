import React, { Component } from 'react';
import '../stylesheets/_globalHeader.css';
import { BrowserRouter as  Link } from 'react-router-dom';
// add router later if needed ^^
import chilema_horizontal_logo from '../assets/chilema_horizontal_logo.png';
// import { Redirect } from 'react-router-dom';
import axios from 'axios';

class GlobalHeader extends Component {
    constructor(props) {
        super(props)

    }

    handleLogout() {
        console.log('handleLogout')
        localStorage.clear()
        axios.get('/auth/logout')
            .then((response) => {
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
        // console.log(tempId)

        return (
            <div className='header'>
                <Link className='header-logo' to='/'>
                    <img src={chilema_horizontal_logo} alt="" />
                </Link>
                <div className='global-header-button'>
                    {!isAuth ? (
                        <div>
                            <Link to='/login'>
                                <button>Log In</button>
                            </Link>
                            <Link to='/newuser'>
                                <button>Sign Up</button>
                            </Link>
                        </div>
                    ) : (
                            <div>
                                <Link to='/auth/logout'>
                                    <button onClick={this.handleLogout}>Log Out</button>
                                </Link>
                                <Link to={profilePath}>
                                    <button>Profile</button>
                                </Link>
                            </div>
                        )}
                </div>
            </div>
        )
    }
}





export default GlobalHeader;