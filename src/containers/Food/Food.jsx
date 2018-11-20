import React, { Component } from 'react';
import { FoodList } from '../../components/FoodComponent';
import './Food.css';
import axios from 'axios';
import GlobalHeader from '../../components/GlobalHeaderComponent';
import MyMap from '../Map/Map.jsx';


class Food extends Component {
    constructor(props) {
        super(props)
        this.state = {
            foodItem: []
        }
    }
    componentDidMount() {
        axios
            .get('/food')
            .then(food => {
                // console.log(food.data)
                this.setState({ foodItem: food.data })
            })
            .catch(err => {
                console.log('err', err)
            })
    }
    render() {
        return (
            <div className='food-page-container'>
                <GlobalHeader />
                <div className='food-page-body'>
                    <div className='food-page-map'>
                        <MyMap />
                    </div>
                    <div>
                        <FoodList foodItem={this.state.foodItem} />
                    </div>


                </div>
            </div>
        )
    }
}

export default Food;