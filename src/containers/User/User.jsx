import React, { Component } from 'react';
import './User.css';
import axios from 'axios';
import GlobalHeader from '../../components/GlobalHeaderComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faDrumstickBite } from '@fortawesome/free-solid-svg-icons';

import { FoodList } from '../../components/FoodComponent'

class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            foodItem: []
        }
    }
    componentDidMount() {
        const url = this.props.location;
        const id = JSON.stringify(url.pathname).split('/').pop().slice(0, -1)

        axios
            .all([
                axios.get(url.pathname),
                axios.get('/food')
            ])
            .then(axios.spread((user, food) => {
                this.setState({ users: user.data })
                let userFood = food.data.filter((items) => {
                    return items.user_id === parseInt(id)
                })
                this.setState({ foodItem: userFood })
                // console.log(this.state)
            }))

            .catch(err => {
                console.log('err', err)
            })

    }

    addFoodRedirect = () => {
        window.location = '/food/new'
    }

    render() {
        const user = this.state.users;
        // console.log('THIS USERS FOOD: ', this.state.foodItem)
        // console.log('USER WINDOW.LOCATION: ', window.location.pathname)
        return (
            <div className='user-wrapper'>
                <GlobalHeader />
                <div className='user-container'>
                    <div key={user.id} className='user-profile-top'>
                        <img src='https://steamusercontent-a.akamaihd.net/ugc/861733993518665232/612136AA40A2C10742C0796F5F5618CC60457DD3/'></img>
                    </div>
                    <div className='user-info'>
                        <h3>{user.name} {user.last}</h3>
                        <p><FontAwesomeIcon icon={faEnvelope
                        } color='#666633' className='user-icon' /> {user.email}</p>
                        <p><FontAwesomeIcon icon={faPhone
                        } color='#666633' className='user-icon' /> {user.phone}</p>
                        <p className='user-diet'>Dietary Restriction {user.diet}</p>
                    </div>

                    <div>
                        <button className="user-button" onClick={this.addFoodRedirect}>CREATE FOOD ITEM</button>
                    </div>

                    <div className='user-food-list'>
                        <p className='user-food'>
                            Food Shared from <span className='user-name'>{user.name}</span>
                        </p>
                        <div>
                            <FoodList foodItem={this.state.foodItem} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default User;