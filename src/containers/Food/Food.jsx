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
        // console.log(window.location.pathname)
        let pathname = window.location.pathname
        console.log(pathname)
        axios
            .get('/food')
            .then(food => {
                if (pathname === '/food/italian') {
                    let italianFood = food.data.filter((item) => {
                        return item.category === 'italian';
                    });
                    this.setState({ foodItem: italianFood })
                } else if (pathname === '/food/chinese') {
                    let chineseFood = food.data.filter((item) => {
                        return item.category === 'chinese';
                    })
                    this.setState({ foodItem: chineseFood })
                } else if (pathname === '/food/japanese') {
                    let japaneseFood = food.data.filter((item) => {
                        return item.category === 'japanese';
                    })
                    this.setState({ foodItem: japaneseFood })
                } else if (pathname === '/food/american') {
                    let americanFood = food.data.filter((item) => {
                        return item.category === 'american';
                    })
                    this.setState({ foodItem: americanFood })
                } else {
                    console.log('REDIRECT TO 404')
                }
            })
            .catch(err => {
                console.log('err', err)
            })
    }
    render() {
        // const baseUrl = 'detail/'
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