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

                <div className="Login-Container">
                    <GlobalHeader />
                    <UsernameFieldComponent />
                    <PasswordFieldComponent />
                    <GetStartedButtonComponent />
                </div>
            </div>
        )
    }
}

export default LogIn;