import React, { Component } from 'react';
import { FoodList } from '../../components/FoodComponent';
import './FoodDetail.css';
import axios from 'axios';
import GlobalHeader from '../../components/GlobalHeaderComponent';
import MyMap from '../Map/Map.jsx';
import { LetsEatButtonComponent } from '../../components/ButtonComponents';
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
              <div className='food-detail-info'>
                <span>{food.price}</span>
                <span>{food.category}</span>
              </div>

            </div>

            <MyMap />

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
          <div>
            <LetsEatButtonComponent />
          </div>
        </div>
      </div>

    )
  }
}

export default FoodDetail;