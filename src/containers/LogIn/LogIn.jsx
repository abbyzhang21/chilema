import React, { Component } from 'react';
// import axios from 'axios';

import { UsernameFieldComponent, PasswordFieldComponent } from '../../components/InputComponents';
import { GetStartedButtonComponent } from '../../components/ButtonComponents';
import './LogIn.css';
import GlobalHeader from '../../components/GlobalHeaderComponent';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

// import loginUser from '../../actions/actions.js';


class LogIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: null,
            password: null
        }
        this.handleLogin = this.handleLogin.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleLogin(e) {
        console.log('click handled')
        // localStorage.setItem('localStorage', 'test')

        axios.post('/auth/login', this.state)
            .then((response) => {
                console.log("POSTED ITEM: ", this.state.email)
                console.log('response.data: ', this.state.password)
            })
            .catch((err) => {
                console.log('err', err)
            })



    }

    handleChange(event) {
        event.preventDefault();

        this.setState({
            email: event.target.email,
            password: event.target.password,
        });
        console.log(this.state)
    }




    render() {
        return (
            <div className='wrapper'>
                <GlobalHeader />
                <h1>ARE YOU HUNGRY?
                    <br />
                    LOG IN
                </h1>
                <div className="Login-Container">
                    {/* <UsernameFieldComponent /> */}
                    <div className="field-container">
                        <input type="text" placeholder="Enter Email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>
                    {/* <PasswordFieldComponent /> */}
                    <div className="field-container">
                        <input type="password" placeholder="Enter Password" name="password" />
                    </div>
                    {/* <GetStartedButtonComponent /> */}
                    <div className="button-containter">
                        {/* <Link to='/'> */}
                        <button className="button" onClick={this.handleLogin}>
                            GET STARTED
                        </button>
                        {/* </Link> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default LogIn;