import React, { Component } from 'react';
import { FoodList } from '../../components/FoodComponent';
import './Food.css';
import axios from 'axios';
import GlobalHeader from '../../components/GlobalHeaderComponent';
import MyMap from '../Map/Map.jsx';


//Redux----------
import { loadAllData } from '../../actions';
import { connect } from 'react-redux';

class Food extends Component {
    constructor(props) {
        super(props)
        this.state = {
            foodItem: []
        }
    }
    componentDidMount() {
        this.props.loadAllData();
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
        console.log('is this rendering<===========', this.props.food);
        // const baseUrl = 'detail/'
        return (
            <div className='food-page-container'>
                <GlobalHeader />
                <div className='food-page-body'>
                    <FoodList foodItem={this.props.food} />
                </div>

            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        food: state
    }
}

const ConnectedFood = connect(
    mapStatetoProps,
    { loadAllData }
)(Food)

export default ConnectedFood;