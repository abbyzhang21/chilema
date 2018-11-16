import React, { Component } from 'react';

import GlobalHeader from '../../components/GlobalHeaderComponent';

import { LoginButtonComponent, SignUpButtonComponent } from '../../components/ButtonComponents';

class Landing extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="landing-container">
            <GlobalHeader/>    
                <div className="login">
                    <LoginButtonComponent/>
                </div>
                <div className="signup">
                    <SignUpButtonComponent/>
                </div>
            </div>
        )
    }
}

export default Landing;