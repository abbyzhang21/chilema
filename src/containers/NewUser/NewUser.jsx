import React, { Component } from 'react';
// import axios from 'axios';

import GlobalHeader from '../../components/GlobalHeaderComponent';
// import { FirstNameFieldComponent, LastNameFieldComponent, EmailFieldComponent, UsernameFieldComponent, PasswordFieldComponent, AddressFieldComponent } from '../../components/InputComponents';
// import { DietaryRestrictionComponent } from '../../components/DropDownComponents';
// import { GetStartedButtonComponent } from '../../components/ButtonComponents';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './NewUser.css';
import axios from 'axios';

class NewUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            last: "",
            email: "",
            password: "",
            phone: "",
            diet: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        console.log('NEWUSER handleChange')
        const target = event.target

        event.preventDefault();
        this.setState({
            [target.name]: event.target.value
        })
        console.log('this.state', this.state)

    }

    handleSubmit(event) {
        console.log('NEWUSER handleSubmit', this.state)
        event.preventDefault();
        axios.post('/auth/register', this.state)
            .then((response) => {
                console.log(response)
                window.location = '/login'
            })
            .catch((err) => {
                console.log(err)
            })

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
                            {/* <FirstNameFieldComponent /> */}
                            <div className="field-container">
                                <input type="text" placeholder="Enter First Name" name="name" value={this.state.name} onChange={this.handleChange} />
                            </div>
                            {/* <LastNameFieldComponent /> */}
                            <div className="field-component">
                                <input type="text" placeholder="Enter Last Name" name="last" value={this.state.last} onChange={this.handleChange} />
                            </div>
                            {/* <EmailFieldComponent /> */}
                            <div className="field-component">
                                <input type="text" placeholder="Enter Email Address" name="email" value={this.state.email} onChange={this.handleChange} />
                            </div>
                            {/* <UsernameFieldComponent /> */}
                            <div className="field-container">
                                <input type="text" placeholder="Enter Phone Number" name="phone" value={this.state.phone} onChange={this.handleChange} />
                            </div>
                            {/* <PasswordFieldComponent /> */}
                            <div className="field-container">
                                <input type="password" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="Address-Fields">
                            {/* <AddressFieldComponent /> */}
                            <div className="address-field-container">
                                <input type="text" placeholder="Street Address" name="address" />
                                <input type="text" placeholder="City" name="city" />
                                <input type="text" placeholder="State" name="state" />
                                <input type="text" placeholder="Zip Code" name="zip" />
                            </div>
                            {/* <DietaryRestrictionComponent /> */}
                            <div className="dropdown-container">
                                <select name="diet" onChange={this.handleChange} defaultValue={this.state.diet} className="select-container">
                                    <option name="diet" defaultValue="default">
                                        Any Dietary Restrictions?
                                    </option>
                                    <option name="diet" defaultValue="true">
                                        YES
                                    </option>
                                    <option name="diet" defaultValue="false">
                                        NO
                                    </option>
                                </select>
                            </div>

                        </div>

                    </div>
                    {/* <GetStartedButtonComponent /> */}
                    <div className="button-containter">
                        <Link to='/login'>
                            <button className="button" onClick={this.handleSubmit}>
                                CREATE ACCOUNT
                            </button>
                        </Link>
                    </div>
                </div>
            </div >

        )
    }
}

export default NewUser;


