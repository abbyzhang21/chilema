import React from 'react';
import '../containers/App/App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const Header = () => {
    return (
        <div >
            <Router>
                <div>
                    <div className='header-bar'>
                        <Link className='App-title' to='/login'>
                            hello
                            <img src="../assets/chilema_logo_rev.png" alt="" />
                        </Link>
                        <Link className='App-title' to='/login'>
                            <button>Log In</button>
                        </Link>
                        <Link className='App-title' to='/newuser'>

                            <button>Sign Up</button>
                        </Link>
                    </div>
                    <div className='body-container'>
                        <Route path='/' component={App} />
                        <Route path='/login' component={LogIn} />
                        <Route path='/newuser' component={NewUser} />
                    </div>
                </div>
            </Router>
        </div>

    );
};


//temp components to test on router
function App(props) {
    return <div>this is home page</div>
}
function LogIn(props) {
    return <div>login page....</div>
}
function NewUser(props) {
    return <div>Sign up plz</div>
}

export default Header;