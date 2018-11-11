import React, { Component } from 'react';
import axios from 'axios';
import { SearchContainer } from '../../components/Search';
import './Home.css';


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            foodItem: []
        }
    }

    componentDidMount() {
        axios 
            .get('/food')
            .then(foods => {
                console.log('foodItem', foods.data)
            this.setState({foodItem:foods.data})    
            })
            .catch(err => {
                console.log('err', err)
        })
    }

    render() {
        return (
            <div className="Home-Container">
                <SearchContainer foodItem={this.state.foodItem} />
            </div>
        )
    }
}

export default Home;
