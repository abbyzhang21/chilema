import React, { Component } from 'react';
import axios from 'axios';

import GlobalHeader from '../../components/GlobalHeaderComponent';
import { FirstNameFieldComponent, LastNameFieldComponent, EmailFieldComponent, UsernameFieldComponent, PasswordFieldComponent, AddressFieldComponent } from '../../components/InputComponents';
import { DietaryRestrictionComponent } from '../../components/DropDownComponents'; 
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
            <div>
            <GlobalHeader />
                <h1>HUNGRY? 
                    <br />
                    CREATE AN ACCOUNT
                </h1>
                <div className="NewUser">
                <div className="NewUser-Container">
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
                <GetStartedButtonComponent/>
            </div>
            </div>

        )
    }
}

export default NewUser;


