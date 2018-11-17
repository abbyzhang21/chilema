import React, { Component } from 'react';
import axios from 'axios';
// import { SearchContainer } from '../../components/DropDownComponents';
import './AddFood.css';
import chilema_logo_rev from '../../assets/chilema_logo_rev.png';
import Header from '../../components/Header.jsx';

import addItem from '../../actions/actions.js';
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
      fd_lat: "",
      fd_long: "",
      // user_id: null
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      category: event.target.category,
      item: event.target.item,
      description: event.target.description,
      price: event.target.price,
      image: event.target.image,
      fd_lat: event.target.fd_lat,
      fd_long: event.target.fd_long,
      // user_id: event.target.user_id
    });
    console.log(this.state)
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('INPUT VALUES ', this.state);

    addItem(this.state)

    // axios
    //   .post('/food/new', event)
    //   .then((response) => {
    //     console.log('response.data: ', response.data)
    //   })
    //   .catch((err) => {
    //     console.log('err', err)
    //   })
  }

  componentDidMount() {
    // axios
    //     .post('food/new')
    //     .then( => {
    //         console.log('foodItem', foods.data)
    //         this.setState({ foodItem: foods.data })
    //     })
    //     .catch(err => {
    //         console.log('err', err)
    //     })
    console.log('this.state: ', this.state)
  }


  render() {
    return (
      <div>
        <GlobalHeader/>
        <h1>FOOD/NEW SANITY CHECK</h1>
        <div className="new-food-container">
        <form action="/food/new" method="POST" onSubmit={this.handleSubmit}> 
          <div className="field-component">
            <input type="text" placeholder="Select Category" name="item" value={this.state.category} onChange={this.handleChange} />
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
          <div className="field-component">
            <input type="text" placeholder="Latitude" name="latitude" value={this.state.fd_lat} onChange={this.handleChange} />
          </div>
          <div className="field-component">
            <input type="text" placeholder="Longitude" name="longitude" value={this.state.fd_long} onChange={this.handleChange} />
          </div>
          {/* <div>
            <input type="text" placeholder="user_id" name="user_id" value={this.state.user_id} onChange={this.handleChange} />
          </div> */}
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