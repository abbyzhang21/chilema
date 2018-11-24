import React, { Component } from 'react';
import { FoodList } from '../../components/FoodComponent';
import './FoodDetail.css';
import axios from 'axios';
import GlobalHeader from '../../components/GlobalHeaderComponent';
import MyMap from '../Map/Map.jsx';
import { LetsEatButtonComponent } from '../../components/ButtonComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import { BrowserRouter as Router, Route, Switch, Redirect, withRouter, Link } from 'react-router-dom'
import Home from '../Home/Home.jsx'




class FoodDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foodItem: []
    }
  }
  componentDidMount() {
    const url = this.props.location
    console.log('location:', url)
    axios
      .get(url.pathname)
      .then(foodItem => {
        console.log(foodItem.data)
        this.setState({ foodItem: foodItem.data })
      })
      .catch(err => {
        console.log('err', err)
      })
  }

  handleDelete = () => {
    const food_id = this.state.foodItem.id
    const urlString = `/food/delete/${food_id}`

    // DELETE VALIDATION FLOW
    // get the id of logged in user from localStorage for validation
    const tempUser = localStorage.getItem('LS_id')
    // get the user_id associated to the food id to validate against logged in user
    const user_id = this.state.foodItem.user_id

    if (tempUser === user_id.toString()) {
      axios
        .delete(urlString)
        .then((response) => {
          window.location = `${response.data}${tempUser}`
          console.log(response)
        })
        .catch((err) => {
          console.log('error', err)
        })
    } else {
      alert('Sorry, you can only delete your own food items!')
    }

  }

  handleEdit = () => {
    const food_id = this.state.foodItem.id
    const urlString = `/food/update/${food_id}`

    console.log('EDIT')

    // EDIT VALIDATION FLOW
    // get the id of logged in user from localStorage for validation
    const tempUser = localStorage.getItem('LS_id')
    // get the user_id associated to the food id to validate against logged in user
    const user_id = this.state.foodItem.user_id

    if (tempUser === user_id.toString()) {
      console.log('URL String', urlString)
      // axios
      //   .put(urlString)
      //   .then((response) => {
      //     window.location = `${response.data}${tempUser}`
      //     console.log(response)
      //   })
      //   .catch((err) => {
      //     console.log('error', err)
      //   })
      window.location = urlString
    } else {
      alert('Sorry, you can only edit your own food items!')
    }

  }

  render() {
    const food = this.state.foodItem;
    const url = `food/update/${food.id}`
    console.log(url)
    return (
      <div className='foodPage-container'>
        <GlobalHeader />
        {/* <DetailFood foodItem={this.state.foodItem} /> */}

        <div key={food.id} className='food-detail-wrapper'>
          <div className='food-detail-title'>
            <div>
              <h2>{food.item}</h2>
              <div className='food-detail-info'>
                <span>{food.price}</span>
                <span>{food.category}</span>
              </div>
              <div>
                <br />
                <button class="button" onClick={this.handleDelete}>DELETE</button>
                <button class="button" onClick={this.handleEdit}>EDIT</button>
              </div>
            </div>

            <MyMap lat={food.fd_lat} lng={food.fd_long} />

          </div>
          <div className='food-detail-img'>
            <img src={food.image} alt='' className='promo-elem'></img>
            <img src={food.image} alt='' className='promo-elem'></img>
            <img src={food.image} alt='' className='promo-elem'></img>
          </div>
          <div className='food-detail-description'>
            <FontAwesomeIcon icon={faUserCircle} color='#666633' className='user-icon' />
            {food.description}
          </div>
          <div className='food-detail-button'>
            <LetsEatButtonComponent />
          </div>
        </div>
      </div>

    )
  }
}

export default FoodDetail;