import React, { Component } from 'react';
import { FoodList } from '../../components/FoodComponent';
import './Food.css';
import axios from 'axios';
import Header from '../../components/Header';

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
                this.setState({ foodItem: food.data })
            })
            .catch(err => {
                console.log('err', err)
            })
    }
    render() {
        return (
            <div className='foodPage-container'>
                <Header />
                <FoodList foodItem={this.state.foodItem} />
            </div>
        )
    }
}

export default Food;