import React, { Component } from 'react';
import { FoodList } from '../../components/FoodComponent';
import './Food.css';
import axios from 'axios';
import GlobalHeader from '../../components/GlobalHeaderComponent';

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
            <div className='foodPage-container'>
                <div>
                    <h1>SANITY CHECK</h1>
                </div>
                <GlobalHeader />
                <FoodList foodItem={this.state.foodItem} />
            </div>
        )
    }
}

export default Food;