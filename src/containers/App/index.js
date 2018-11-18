import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../../stylesheets/_stripeElements.css';
// import { Elements, StripeProvider } from 'react-stripe-elements';

// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Food from '../Food/Food.jsx';
import User from '../User/User.jsx';
import FoodDetail from '../FoodDetail/FoodDetail.jsx'
import AddFood from '../AddFood/AddFood.jsx'
// import { SearchContainer } from '../../components/DropDownComponents';
// import { Promo } from '../../components/PromoComponent.jsx';
import Home from '../../containers/Home/Home.jsx';
import LogIn from '../../containers/LogIn/LogIn.jsx';
import NewUser from '../../containers/NewUser/NewUser.jsx';
import { Receipt } from '../../containers/Receipt/Receipt.jsx';
import PaymentForm from '../Payment/Payment.jsx';
import myMap from '../Map/Map.jsx';
import Landing from '../Landing/Landing.jsx';
import EditAccount from '../EditAccount/EditAccount.jsx';

// console.log("axios....:", React);
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foodItem: [],
      itemLocation: [],
      users: []
    }
  }
  componentDidMount() {
    axios
      .get('/food')
      .then(foods => {
        // console.log('foodItem', foods.data)
        this.setState({ foodItem: foods.data })
      })
      .catch(err => {
        console.log('err', err)
      })

    axios
      .get('/local')
      .then(location => {
        // console.log('location', location.data)
        this.setState({ itemLocation: location.data })
      })
      .catch(err => {
        console.log('err', err)
      })

    axios
      .get('/users')
      .then(user => {
        console.log('user', user.data)
        this.setState({ users: user.data })
      })
      .catch(err => {
        console.log('err', err)
      })
  }

  render() {
    // console.log("this is the state: ", this.state)
    return (

      //       {/* <SearchContainer foodItem={this.state.foodItem} itemLocation={this.state.itemLocation} /> */}
      //       {/* <FoodList foodItem={this.state.foodItem} /> */}
      //       <Route exact path='/login' component={LogIn} />
      //       <Route exact path='/food' component={Food} />

      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={LogIn} />
            <Route path="/newuser" component={NewUser} />
            <Route path="/landing" component={Landing} />
            <Route path="/edit" component={EditAccount} />
            <Route exact path='/users/detail/:id' component={User} />
            <Route exact path='/food' component={Food} />
            <Route exact path='/receipt' component={Receipt} />
            <Route exact path='/food/detail/:id' component={FoodDetail} />
            <Route exact path='/food/new' component={AddFood} />
            <Route exact path='/payment' component={PaymentForm} />
            <Route exact path='/map' component={myMap} />
          </Switch>
        </div>
      </Router>




    );
  }
}



export default App;
