import React, { Component } from 'react';
import axios from 'axios';

import { UsernameFieldComponent, PasswordFieldComponent } from '../../components/InputComponents';
import { GetStartedButtonComponent } from '../../components/ButtonComponents';
import './LogIn.css';

class LogIn extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="Login-Container">
                <UsernameFieldComponent />
                <PasswordFieldComponent />
                <GetStartedButtonComponent/>
            </div>
        )
    }
}

export default LogIn;