import React, { Component } from 'react';
// import axios from 'axios';

import GlobalHeader from '../../components/GlobalHeaderComponent';

import { SignUpButtonComponent } from '../../components/ButtonComponents';

class _404 extends Component {


  render() {
    return (
      <div className="landing-container">
        <GlobalHeader />
        <h1>The Page you are looking for does not exist</h1>
        <h3>Please sign up for an account for full access</h3>
        <div className="signUp">
          <SignUpButtonComponent />
        </div>
      </div>
    )
  }
}

export default _404;