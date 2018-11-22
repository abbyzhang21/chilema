import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom'
// import Header from '../../components/Header.jsx';

// import { CardElement, injectStripe } from 'react-stripe-elements';
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
import Map_Global from '../Map_Global/Map_Global.jsx'
import Landing from '../Landing/Landing.jsx';
import EditAccount from '../EditAccount/EditAccount.jsx';
import _404 from '../404/_404.jsx'

//Redux------------------
import { connect } from 'react-redux';
import { loadAllData } from '../../actions';
//Redux------------------

// const isAuthenticated = localStorage.getItem('isAuth')
// console.log('isAuthenticated', isAuthenticated)

// const AuthContext = React.createContext(true)
// console.log('AuthContext', AuthContext.Provider)

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
    //Redux ------------------->call our action
    this.props.loadAllData()
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
    console.log('###########', this.props, '<<<<<<<<<<');
    // console.log('ISAUTH : ', localStorage.getItem('isAuth'))
    const isAuth = localStorage.isAuth
    // console.log('isAuth', isAuth)
    // console.log('typeof isAuth', typeof isAuth)
    // const PrivateRoute = ({ component: Component, ...rest }) => (
    //   <Route {...rest} render={(props) => (
    //     isAuth === true
    //       ? <Component {...props} />
    //       : <Redirect to='/landing' />
    //   )} />
    // )

    // console.log(PrivateRoute)


    // console.log("this is the state: ", this.state)

    if (isAuth === "true") {
      return (
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/edit" component={EditAccount} />
              <Route exact path='/food' component={Food} />
              <Route exact path='/food/american' component={Food} />
              <Route exact path='/food/chinese' component={Food} />
              <Route exact path='/food/italian' component={Food} />
              <Route exact path='/food/japanese' component={Food} />
              <Route exact path='/receipt' component={Receipt} />
              <Route exact path='/food/detail/:id' component={FoodDetail} />
              <Route exact path='/users/detail/:id' component={User} />
              <Route exact path='/food/new' component={AddFood} />
              <Route exact path='/payment' component={PaymentForm} />
              <Route exact path='/map' component={myMap} />
              <Route exact path='/global' component={Map_Global} />
              <Route exact path='/404' component={_404} />
            </Switch>
          </div>
        </Router>
      )
    } else {
      return (
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={LogIn} />
              <Route path="/newuser" component={NewUser} />
              <Route path="/landing" component={Landing} />
              <Route exact path='/food' component={Food} />
              <Route exact path='/food/american' component={Food} />
              <Route exact path='/food/chinese' component={Food} />
              <Route exact path='/food/italian' component={Food} />
              <Route exact path='/food/japanese' component={Food} />

              {/* PROTECTED */}
              <Redirect from='/payment' to='/' />
              <Redirect from='/map' to='/' />
              <Redirect from='/food/new' to='/' />
              <Redirect from='/food/detail/:id' to='/' />
              <Redirect from='/receipt' to='/' />
              <Redirect from='/edit' to='/' />
              {/* <Redirect from='/users/detail/:id' to='/' /> change to protected */}

              <Route exact path='/users/detail/:id' component={User} />




            </Switch>
          </div>
        </Router>
      )
    }
  }
}

//Redux----------------
const mapStateToProps = (state) => {   // listening to reducers
  return {
    food: state
  }
}

const ConnectedApp = connect( //connect app to access the 'store'
  mapStateToProps,
  { loadAllData }
)(App);


export default ConnectedApp;