import React, { Component } from 'react';
// import axios from 'axios';
// import { SearchContainer } from '../../components/DropDownComponents';
import './AddFood.css';
// import chilema_logo_rev from '../../assets/chilema_logo_rev.png';
// import Header from '../../components/Header.jsx';

import {addItem} from '../../actions/actions.js';
import GlobalHeader from '../../components/GlobalHeaderComponent';

class AddFood extends Component {

  constructor(props) {
    super(props)
    this.state = {
      category: "",
      item: "",
      description: "",
      price: "",
      image: "",
      fd_lat: localStorage.getItem('LS_lat'),
      fd_long: localStorage.getItem('LS_lng'),
      user_id: "" //TODO: need to link to the local storage with the current user's id if they are logged in
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;

    event.preventDefault();
    this.setState({
      [target.name]: event.target.value,
      user_id: localStorage.getItem('LS_id')
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const id = localStorage.getItem('LS_id')
    // console.log(id)
    addItem(this.state)

    window.location = `/users/detail/${id}`
  }

  componentDidMount() { }


  render() {
    return (
      <div>
        <GlobalHeader />
        <h1>WHAT WILL YOU BE MAKING?</h1>
        <div className="new-food-container">
          <form action="/food/new" method="POST" onSubmit={this.handleSubmit}>
            <div className="field-component">
              <input type="text" placeholder="Select Category" name="category" value={this.state.category} onChange={this.handleChange} />
            </div>
            <div className="field-component">
              <input type="text" placeholder="Enter name of dish" name="item" value={this.state.item} onChange={this.handleChange} />
            </div>
            <div className="field-component">
              <input type="text" placeholder="Enter your dish description" name="description" value={this.state.description} onChange={this.handleChange} />
            </div>
            <div className="field-component">
              <input type="text" placeholder="Enter your dish price" name="price" value={this.state.price} onChange={this.handleChange} />
            </div>
            <div className="field-component">
              <input type="text" placeholder="Image Upload" name="image" value={this.state.image} onChange={this.handleChange} />
            </div>
            <div>
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default AddFood;