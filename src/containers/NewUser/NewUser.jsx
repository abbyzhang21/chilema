import React, { Component } from 'react';
import axios from 'axios';

import {
    FirstNameFieldComponent, LastNameFieldComponent, EmailFieldComponent, UsernameFieldComponent, PasswordFieldComponent, AddressFieldComponent
} from '../../components/InputComponents';
import { GetStartedButtonComponent } from '../../components/ButtonComponents';

class NewUser extends Component {
    constructor(props) {
        super(props) 
        this.state = {

        }
    }

    render() {
        return (
            < div className="New-User-Container" >
                <FirstNameFieldComponent />
                <LastNameFieldComponent />
                <EmailFieldComponent />
                <UsernameFieldComponent />
                <PasswordFieldComponent />
                <AddressFieldComponent />
                <GetStartedButtonComponent/>
            </div >
        )
    }
}

export default NewUser;