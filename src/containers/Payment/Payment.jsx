import React, { Component } from 'react';
// import GlobalHeader from '../../components/GlobalHeaderComponent';
import { CardElement, injectStripe } from 'react-stripe-elements';
import '../../stylesheets/_stripeElements.css';
import { Elements, StripeProvider } from 'react-stripe-elements';

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
      <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
        <div className="example">
          <Elements>
            <div className="checkoutWrapper">
              <h1>Payment Form</h1>
              <p>Would you like to complete the purchase?</p>
              <CardElement />
              <div id="strBtnWrapper">
                <button class="button" onClick={this.submit}>Send</button>
              </div>
            </div>
          </Elements>
        </div>
      </StripeProvider>
    )
  }
}

export default PaymentForm;


