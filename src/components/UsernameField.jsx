import React from 'react';
import '../stylesheets/_usernameField.css';

export const UsernameFieldContainer = () => {
    
    return (
        <div className="username-field-container">
            <input type="text" placeholder="Enter Username" name="username"/>
        </div>
    )
}