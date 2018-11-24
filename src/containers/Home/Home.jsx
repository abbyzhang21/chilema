import React, { Component } from 'react';
import axios from 'axios';
// import { SearchContainer } from '../../components/DropDownComponents';
import './Home.css';
import '../../stylesheets/_buttons.css';
// import chilema_logo_rev from '../../assets/chilema_logo_rev.png';
// import chilema_white_logo from '../../assets/chilema_logo_rev_white.png';
import chilema_logo from '../../assets/chilema_logo.png'
import Header from '../../components/Header.jsx';

import Map_Global from '../Map_Global/Map_Global.jsx';

import Promo from '../../components/PromoComponent.jsx';
// import CheckoutForm from '../../components/CheckoutForm.jsx'
import _404 from '../404/_404'



class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            foodItem: [],
            locationArr: [],
            renderMap: false
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

        axios
            .get('/food')
            .then(food => {
                food.data.map((item) => {
                    let location = [
                        item.fd_lat,
                        item.fd_long
                    ]
                    this.setState({
                        locationArr: [...this.state.locationArr, location]
                    })
                })
            })
            .catch(err => {
                console.log('err', err)
                return (<_404/>)
            })

    }

    // geolocation web api, get current location and store in localSotrage
    componentWillMount() {
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
    // toggle map helper function
    showMap = () => {
        if (this.state.renderMap === false) {
            this.setState({ renderMap: true })
        } else {
            this.setState({ renderMap: false })
        }
    }

    render() {

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
                    <button class="button" onClick={this.showMap}>FIND NEAR ME</button>
                    <h2>have you eaten ?</h2>
                    <Promo foodItem={this.state.foodItem} />
                    {this.state.renderMap === false ? (<div />) : (<Map_Global geoArr={this.state.locationArr} />)}
                </div>
            </div>

        )
    }
}

export default Home;
