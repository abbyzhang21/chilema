import React, { Component } from 'react';
import axios from 'axios';

import GlobalHeader from '../../components/GlobalHeaderComponent';
import { FirstNameFieldComponent, LastNameFieldComponent, EmailFieldComponent, UsernameFieldComponent, PasswordFieldComponent, AddressFieldComponent } from '../../components/InputComponents';
import { GetStartedButtonComponent } from '../../components/ButtonComponents';

import './NewUser.css';

class NewUser extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            
        }
    }

    render() {
        return (
            <div className="wrapper">
                <GlobalHeader />     
                <div className="NewUser-Container">
                    <FirstNameFieldComponent />
                    <LastNameFieldComponent />
                    <EmailFieldComponent />
                    <UsernameFieldComponent />
                    <PasswordFieldComponent />
                    <AddressFieldComponent />
                </div>
                <GetStartedButtonComponent/>
            </div>
        )
    }
}

export default NewUser;


