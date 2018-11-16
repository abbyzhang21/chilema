import React, { Component } from 'react';
// import axios from 'axios';

import { UsernameFieldComponent, PasswordFieldComponent } from '../../components/InputComponents';
import { GetStartedButtonComponent } from '../../components/ButtonComponents';
import './LogIn.css';
import GlobalHeader from '../../components/GlobalHeaderComponent';

class LogIn extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
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
                    <UsernameFieldComponent />
                    <PasswordFieldComponent />
                    <GetStartedButtonComponent />
                </div>
            </div>
        )
    }
}

export default LogIn;