import React, { Component } from 'react';
// import GlobalHeader from '../../components/GlobalHeaderComponent';
import { CardElement, injectStripe } from 'react-stripe-elements';
import '../../stylesheets/_stripeElements.css';
import { Elements, StripeProvider } from 'react-stripe-elements';
import GlobalHeader from '../../components/GlobalHeaderComponent';
import { DoneButtonComponent } from '../../components/ButtonComponents';

class PaymentForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    // User clicked submit
  }

  componentDidMount() { }

  render() {
    return (
      <div className="payment-container">
        <GlobalHeader />
        <div className="stripe-container">
          <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
          <div className="example">
            <Elements>
              <div className="checkoutWrapper">
                  <h1>PAYMENT INFORMATION</h1>
                <br/>  
                <p>Would you like to complete the purchase?</p>
                <CardElement />
                {/* <div id="strBtnWrapper">
                  <button class="button" onClick={this.submit}>Send</button>
                </div> */}
                <DoneButtonComponent/>  
              </div>
            </Elements>
          </div>
        </StripeProvider>
        </div>  
      </div>
    )
  }
}

// when injecting dependancy, react errors out
// export default injectStripe(PaymentForm)
export default PaymentForm


