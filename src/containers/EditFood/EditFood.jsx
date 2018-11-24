import React, { Component } from 'react';
// import axios from 'axios';
// import { SearchContainer } from '../../components/DropDownComponents';
import './EditFood.css';
// import chilema_logo_rev from '../../assets/chilema_logo_rev.png';
// import Header from '../../components/Header.jsx';

// import editItem from '../../actions/actions.js';
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
      user_id: localStorage.getItem('LS_user_id'),
      foodItem: {}
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
    console.log(this.state)
  }

  handleSubmit(event) {
    event.preventDefault();
    // console.log(id)
    this.editItem(this.state)

  }

  editItem = (item) => {
    const userId = localStorage.getItem('LS_id')
    console.log('userId', userId)
    console.log('THIS.STATE: ', this.state)
    const id = this.props.location.pathname.split('/').pop()
    console.log('locationID:', id)

    axios
      .put(`http://52.36.183.53:5000/food/update/${id}`, item)
      .then((response) => {
        console.log("POSTED ITEM: ", item)
        console.log('response.data: ', response.data)
        window.location = `/users/detail/${userId}`
      })
      .catch((err) => {
        console.log('err', err)
      })

  }

  componentDidMount() {

    // this.setState({
    //   fd_lat: localStorage.getItem('LS_lat'),
    //   fd_long: localStorage.getItem('LS_lng')
    // })
    const url = this.props.location
    console.log('location:', url)
    axios
      .get(`http://52.36.183.53:5000${url.pathname}`)
      .then(foodItem => {
        console.log('FOOD ITEM.DATA ', foodItem.data)
        this.setState({ foodItem: foodItem.data })
      })
      .catch(err => {
        console.log('err', err)
      })
  }


  render() {
    console.log(this.state)
    return (
      <div>
        <GlobalHeader />
        <h1>EDIT DISH</h1>
        <div className="new-food-container">
          <form action="/food/new" method="POST" onSubmit={this.handleSubmit}>
            <div className="field-component">
              <input type="text" placeholder="Select Category" name="category" value={this.state.category} onChange={this.handleChange} required />
            </div>
            <div className="field-component">
              <input type="text" placeholder="Enter name of dish" name="item" value={this.state.item} onChange={this.handleChange} required />
            </div>
            <div className="field-component">
              <input type="text" placeholder="Enter your dish description" name="description" value={this.state.description} onChange={this.handleChange} required />
            </div>
            <div className="field-component">
              <input type="text" placeholder="Enter your dish price" name="price" value={this.state.price} onChange={this.handleChange} required />
            </div>
            <div className="field-component">
              <input type="text" placeholder="Image Upload" name="image" value={this.state.image} onChange={this.handleChange} required />
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