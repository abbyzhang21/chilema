import React from 'react';
import '../containers/App/App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import chilema_horizontal_logo from '../assets/chilema_horizontal_logo.png'
const Header = () => {
    return (
        <div >
            <Router>
                <div>
                    <div className='header-bar'>
                        <Link className='header-logo' to='/'>
                            <img src={chilema_horizontal_logo} />
                        </Link>
                        <div>
                            <Link className='header-button' to='/login'>
                                <button>Log In</button>
                            </Link>
                            <Link className='header-button' to='/newuser'>

                                <button>Sign Up</button>
                            </Link>
                        </div>
                    </div>
                    <div className='body-container'>
                        {/* <Route path='/' component={App} /> */}
                        <Route path='/login' component={LogIn} />
                        <Route path='/newuser' component={NewUser} />
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
function LogIn(props) {
    return <div>login page....</div>
}
function NewUser(props) {
    return <div>Sign up plz</div>
}

export default Header;