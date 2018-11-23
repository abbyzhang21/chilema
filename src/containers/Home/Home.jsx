import React, { Component } from 'react';
import axios from 'axios';
// import { SearchContainer } from '../../components/DropDownComponents';
import './Home.css';
// import chilema_logo_rev from '../../assets/chilema_logo_rev.png';
// import chilema_white_logo from '../../assets/chilema_logo_rev_white.png';
import chilema_logo from '../../assets/chilema_logo.png'
import Header from '../../components/Header.jsx';

import Map_Global from '../Map_Global/Map_Global.jsx';

import Promo from '../../components/PromoComponent.jsx';
// import CheckoutForm from '../../components/CheckoutForm.jsx'



class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            foodItem: [],
            renderMap: false
        }
    }

    componentDidMount() {
        axios
            .get('/food')
            .then(foods => {
                // console.log('foodItem', foods.data)
                this.setState({ foodItem: foods.data })
            })
            .catch(err => {
                console.log('err', err)
            })

    }

    componentWillMount() {

        ////////////////////////////////////////////////////
        /// GET CURRENT LOCATION ///
        ////////////////////////////////////////////////////

        if (navigator.geolocation) {
            console.log("GEOLOCATION WORKS")
            navigator.geolocation.getCurrentPosition(displayLocationInfo);
            function displayLocationInfo(position) {
                localStorage.setItem('LS_lat', position.coords.latitude)
                localStorage.setItem('LS_lng', position.coords.longitude)
            }
        } else {
            console.log("GEOLOCATION NOT SUPPORTED")
        }

    }

    showMap = () => {
        console.log('showMap')
        if (this.state.renderMap === false) {
            // this.state.renderMap = true;
            this.setState({ renderMap: true })
        } else {
            this.setState({ renderMap: false })
            // this.state.renderMap = false;
        }
        console.log(this.state.renderMap)
    }

    render() {
        // console.log(this.state)
        console.log(this.state.renderMap)
        return (

            <div className='home-wrapper'>
                <div className='home-top'>
                    <div>
                        <Header />
                    </div>
                    <div className="home-Container">
                        <div>
                            <img src={chilema_logo} alt="" className="home-image" />
                        </div>
                        {/* <div className="searchBar">
                            <SearchContainer foodItem={this.state.foodItem} />
                        </div> */}
                    </div>

                </div>
                <div className='home-bottom'>
                    <button onClick={this.showMap}>FIND NEAR ME</button>
                    <h2>have you eaten ?</h2>
                    <Promo foodItem={this.state.foodItem} />

                    {this.state.renderMap === false ? (<Map_Global />) : (<div />)}
                </div>
            </div>

        )
    }
}

export default Home;
