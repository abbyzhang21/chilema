import React from 'react';
import '../stylesheets/_globalHeader.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import chilema_horizontal_logo from '../assets/chilema_horizontal_logo.png';
// import { Redirect } from 'react-router-dom';

const GlobalHeader = () => {
    return (
        <div >
            <Router>
                <div>
                    <div className='header'>
                        <Link className='header-logo' to='/'>
                            <img src={chilema_horizontal_logo} alt="" />
                        </Link>
                        <div className='global-header-button'>
                            <Link to='./login'>
                                <button>Log In</button>
                            </Link>
                            <Link to='/newuser'>

                                <button>Sign Up</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Router>
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

export default GlobalHeader;