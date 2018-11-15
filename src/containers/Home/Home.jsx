import React, { Component } from 'react';
import axios from 'axios';
import { SearchContainer } from '../../components/DropDownComponents';
import './Home.css';
import chilema_logo_rev from '../../assets/chilema_logo_rev.png';
import Header from '../../components/Header.jsx';

import CheckoutForm from '../../components/CheckoutForm.jsx'



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
                this.setState({ foodItem: foods.data })
            })
            .catch(err => {
                console.log('err', err)
            })
    }

    render() {
        return (
            <div className='home-wrapper'>
                <div>
                    <Header />
                </div>
                <div className="Home-Container">
                    <div>
                        <img src={chilema_logo_rev} alt="" className="home-image" />
                    </div>
                    <div className="searchBar">
                        <SearchContainer foodItem={this.state.foodItem} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
