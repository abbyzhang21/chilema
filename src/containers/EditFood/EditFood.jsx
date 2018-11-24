import React, { Component } from 'react';
// import axios from 'axios';
// import { SearchContainer } from '../../components/DropDownComponents';
import './EditFood.css';
// import chilema_logo_rev from '../../assets/chilema_logo_rev.png';
// import Header from '../../components/Header.jsx';

// import addItem from '../../actions/actions.js';
import { editFood } from '../../actions/actions.js';
import GlobalHeader from '../../components/GlobalHeaderComponent';

import axios from 'axios';

class EditFood extends Component {

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
      user_id: "", //TODO: need to link to the local storage with the current user's id if they are logged in
      foodItem: []
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
    // addItem(this.state)
    editFood(this.state)

    // window.location = `/users/detail/${id}`
  }

  componentDidMount() {
    const url = this.props.location
    console.log('location:', url)
    axios
      .get(url.pathname)
      .then(foodItem => {
        console.log('FOOD ITEM.DATA ', foodItem.data)
        this.setState({ foodItem: foodItem.data })
      })
      .catch(err => {
        console.log('err', err)
      })
    
  //   axios
  //     .put(url, item)
  //     .then((response) => {
  //       console.log('EDITING ITEM', item)
  //       console.log('edit response.data', response.data)
  //     })
  //     .catch(err => {
  //       console.log('err', err)
  //     });
    
  }


  render() {
    const url = this.props.location;
    console.log('editing location', url)
    console.log(this.state.foodItem)
    const foodItem = this.state.foodItem
    console.log(foodItem.item)
    return (
      <div>
        <GlobalHeader />
        <h1>EDIT DISH: {foodItem.item}</h1>
        <div className="new-food-container" >
          <form action={url} method="PUT" onSubmit={this.handleSubmit}>
            <div className="field-component">
              <input type="text" placeholder={foodItem.category} name="category" value={this.state.category} onChange={this.handleChange} />
            </div>
            <div className="field-component">
              <input type="text" placeholder={foodItem.item} name="item" value={this.state.item} onChange={this.handleChange} />
            </div>
            <div className="field-component">
              <input type="text" placeholder={foodItem.description} name="description" value={this.state.description} onChange={this.handleChange} />
            </div>
            <div className="field-component">
              <input type="text" placeholder={foodItem.price} name="price" value={this.state.price} onChange={this.handleChange} />
            </div>
            <div className="field-component">
              <input type="text" placeholder={foodItem.image} name="image" value={this.state.image} onChange={this.handleChange} />
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

export default EditFood;