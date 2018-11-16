import React, { Component } from 'react';
import axios from 'axios';

import GlobalHeader from '../../components/GlobalHeaderComponent';
import { FirstNameFieldComponent, LastNameFieldComponent, EmailFieldComponent, UsernameFieldComponent, PasswordFieldComponent, AddressFieldComponent } from '../../components/InputComponents';
import { DietaryRestrictionComponent } from '../../components/DropDownComponents'; 
import { DoneButtonComponent } from '../../components/ButtonComponents';

import './EditAccount.css';

class EditAccount extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            
        }
    }

    render() {
        return (
            <div>
            <GlobalHeader />
                <h1>
                    EDIT MY ACCOUNT
                </h1>
                <div className="EditAccount">
                <div className="EditAccount-Container">
                    <div className="User-Fields">
                        <FirstNameFieldComponent />
                        <LastNameFieldComponent />    
                        <EmailFieldComponent />
                        <UsernameFieldComponent />
                        <PasswordFieldComponent />
                    </div>  
                    <div className="Address-Fields">
                            <AddressFieldComponent />
                            <DietaryRestrictionComponent/>

                    </div>
                    
                </div>
                <DoneButtonComponent/>
            </div>
            </div>

        )
    }
}

export default EditAccount;


