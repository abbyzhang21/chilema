import React, { Component } from 'react';
import './User.css';
import axios from 'axios';
import GlobalHeader from '../../components/GlobalHeaderComponent';

class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        const url = this.props.location;
        console.log('userlink.....:', url)
        axios
            .get(url.pathname)
            .then(user => {
                console.log('user data:', user.data)
                this.setState({ users: user.data })
            })
            .catch(err => {
                console.log('err', err)
            })
    }
    render() {
        const user = this.state.users;
        console.log('user....:', user);
        return (
            <div className='user-wrapper'>
                <GlobalHeader />
                <div className='user-container'>
                    <div key={user.id} className='user-profile-top'>
                        <img src='https://steamusercontent-a.akamaihd.net/ugc/861733993518665232/612136AA40A2C10742C0796F5F5618CC60457DD3/'></img>
                    </div>
                    <div className='user-info'>
                        <p>Aloha, {user.name} {user.last}</p>
                        <p>Email: {user.email}</p>
                        <p>Phone: {user.phone}</p>
                        <p>Dietary Restriction {user.diet}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default User;