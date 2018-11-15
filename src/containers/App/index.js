import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from '../../components/Header.jsx';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Food from '../Food/Food';
import { SearchContainer } from '../../components/DropDownComponents';
import Home from '../Home/Home';
import LogIn from '../LogIn/LogIn';



console.log("axios....:", React);
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foodItem: [],
      itemLocation: []
    }
  }
  componentDidMount() {
    axios
      .get('/food')
      .then(foods => {
        console.log('foodItem', foods.data)
        this.setState({ foodItem: foods.data })
      })
      .catch(err => {
        console.log('err', err)
      })

    axios
      .get('/local')
      .then(location => {
        console.log('location', location.data)
        this.setState({ itemLocation: location.data })
      })
      .catch(err => {
        console.log('err', err)
      })
  }

  render() {
    //  const {item} = this.state
    console.log("this is the state: ", this.state)
    return (
      <div>
        <Router>
          <div className="App">
            <Route exact path='/' component={Home} />
            {/* <SearchContainer foodItem={this.state.foodItem} itemLocation={this.state.itemLocation} /> */}
            {/* <FoodList foodItem={this.state.foodItem} /> */}
            <Route exact path='/login' component={LogIn} />
            <Route exact path='/food' component={Food} />
          </div>
        </Router>
      </div>

    );
  }
}



export default App;
