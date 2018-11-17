import React, { Component } from 'react';
import { FoodList } from '../../components/FoodComponent';
import './FoodDetail.css';
import axios from 'axios';
import GlobalHeader from '../../components/GlobalHeaderComponent';
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
    return (
      <div className='foodPage-container'>
        <GlobalHeader />
        <div className='foodList-container' >
          <div key={this.state.foodItem.id} className="foodList" >
            <div>
              <img src={this.state.foodItem.image} alt="" />
            </div>

            <ul className='list'>
              <li>
                <a href="google.com"><h3>{this.state.foodItem.item}</h3></a>
              </li>
              <li>
                {this.state.foodItem.price}
                <a href="google.com">
                  <p>{this.state.foodItem.category}</p>
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faUserCircle} color='#666633' className='user-icon' />
                {this.state.foodItem.description}
              </li>
            </ul>
          </div>
        </div >
      </div>
    )
  }
}

export default FoodDetail;