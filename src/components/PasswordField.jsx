import React from 'react';
import '../stylesheets/_passwordField.css';

export const PasswordFielComponent = () => {
    
    return (
        <div className="password-field-container">
            <input type="password" placeholder="Enter Password" name="password"/>
        </div>
    )
}