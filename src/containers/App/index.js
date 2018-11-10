import React, { Component } from 'react';
import Header from '../../components/Header.jsx';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import FoodList from '../../components/FoodList.jsx';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      food: []
    }
  }
  componentDidMount() {
    axios
      .get('/food')
      .then(foods => {
        console.log('foods', foods.data)
        this.setState({ food: foods.data })
      })
      .catch(err => {
        console.log('err', err)
      })
  }

  render() {
    const { foods } = this.state;
    return (
      <div className="App">
        <Header />
        <FoodList />
      </div>
    );
  }
}



export default App;
