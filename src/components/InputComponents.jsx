import React from 'react';
import '../stylesheets/_inputs.css';

export const FirstNameFieldComponent = () => {

    return (
        <div className="field-container">
            <input type="text" placeholder="Enter First Name" name="firstname"/>    
        </div>
    )
}


export const LastNameFieldComponent = () => {

    return (
        <div className="field-component">
            <input type="text" placeholder="Enter Last Name" name="lastname"/>
        </div>
    )
}


export const EmailFieldComponent = () => {

    return (
        <div className="field-component">
            <input type="text" placeholder="Enter Email Address" name="email"/>
        </div>
    )
}  


export const UsernameFieldComponent = () => {
    
    return (
        <div className="field-container">
            <input type="text" placeholder="Enter Username" name="username"/>
        </div>
    )
}


export const PasswordFieldComponent = () => {
    
    return (
        <div className="field-container">
            <input type="password" placeholder="Enter Password" name="password"/>
        </div>
    )
}  


export const AddressFieldComponent = () => {

    return (
        <div className="address-component-container">    <div className="address-field-container"> 
                 <input type="text" placeholder="Street Address" name="address" />
                 <input type="text" placeholder="City" name="city" />
                <input type="text" placeholder="State" name="state" />
                 <input type="text" placeholder="Zip Code" name="zip" />
            </div>
        </div>
    )
}

