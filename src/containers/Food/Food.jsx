import React, { Component } from 'react';
import { FoodList } from '../../components/FoodComponent';
import './Food.css';
import axios from 'axios';
import GlobalHeader from '../../components/GlobalHeaderComponent';

import { getFoodItems } from '../../actions/actions.js';
import { connect } from 'react-redux';



class Food extends Component {
    constructor(props) {
        super(props)

    }
    componentDidMount() {
        console.log('food this.props', this.props)

        this.props.dispatch(getFoodItems())
        // axios
        //     .get('/food')
        //     .then(food => {
        //         // console.log(food.data)
        //         this.setState({ foodItem: food.data })
        //     })
        //     .catch(err => {
        //         console.log('err', err)
        //     })
    }
    render() {
        const { foodItem } = this.props;
        return (
            <div className='foodPage-container'>
                <GlobalHeader />
                <FoodList foodItem={foodItem} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        foodItem: state.foodItem
    }
}
export default connect(mapStateToProps)(Food);