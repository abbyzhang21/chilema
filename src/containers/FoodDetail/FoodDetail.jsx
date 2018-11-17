import React, { Component } from 'react';
import { FoodList } from '../../components/FoodComponent';
import './FoodDetail.css';
import axios from 'axios';
import GlobalHeader from '../../components/GlobalHeaderComponent';
import MyMap from '../Map/Map.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';


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
  render() {
    const food = this.state.foodItem;
    return (
      <div className='foodPage-container'>
        <GlobalHeader />
        {/* <DetailFood foodItem={this.state.foodItem} /> */}

        <div key={food.id} className='food-detail-wrapper'>
          <div className='food-detail-title'>
            <div>
              <h2>{food.item}</h2>
              <p>{food.price}</p>
              <p>{food.category}</p>
            </div>
            <MyMap />
          </div>
          <div className='food-detail-img'>
            <img src={food.image} alt=''></img>
            <img src={food.image} alt=''></img>
            <img src={food.image} alt=''></img>
          </div>
          <div className='food-detail-description'>
            {food.description}
          </div>
          <button className='detail-button'>I Want It </button>


        </div>
      </div>

    )
  }
}

export default FoodDetail;