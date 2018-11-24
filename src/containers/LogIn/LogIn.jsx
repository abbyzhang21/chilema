import React, { Component } from 'react';
// import axios from 'axios';

// import { UsernameFieldComponent, PasswordFieldComponent } from '../../components/InputComponents';
// import { GetStartedButtonComponent } from '../../components/ButtonComponents';
import './LogIn.css';
import '../../stylesheets/_buttons.css';
import GlobalHeader from '../../components/GlobalHeaderComponent';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

// import loginUser from '../../actions/actions.js';


class LogIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            id: ""
        }
        this.handleLogin = this.handleLogin.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    componentWillMount() {

        ////////////////////////////////////////////////////
        /// GET CURRENT LOCATION ///
        ////////////////////////////////////////////////////

        if (navigator.geolocation) {
            console.log("GEOLOCATION WORKS")
            // navigator.geolocation.getCurrentPosition(displayLocationInfo);
        } else {
            console.log("GEOLOCATION NOT SUPPORTED")
        }

        // let obj = {}
        // let arr = []

        // function displayLocationInfo(position) {
        //     arr.push(position.coords.latitude)
        //     arr.push(position.coords.longitude)
        //     obj.lng = position.coords.longitude;
        //     obj.lat = position.coords.latitude;
        //     return arr
        // }
        // console.log('ARR: ', arr)
        // this.state.coords = arr
        // console.log(this.state.coords.lng)

    }

    handleLogin(event) {
        event.preventDefault()

        axios
            .get('/users')
            .then((response) => {
                console.log('RESPONSE: ', response)
                // const id = response.data.filter((user) => {
                //     if (user.email === this.state.email) {
                //         console.log(user.id)
                //     }
                // })
            })
            .catch((err) => {
                console.log('error', err)
            })

        // set the user's email in localStorage
        // execute helper function
        this.loginUser(this.state)
    }

    loginUser(item) {
        // call server route to validate credentials against db
        axios
            .post('auth/login', item)
            .then((response) => {
                localStorage.setItem('LS_id', response.data.id)
                localStorage.setItem('LS_email', this.state.email)
                localStorage.setItem('isAuth', true)
                window.location = '/'
            })
            .catch((err) => {
                console.log('err', err)
            })
    }

    handleChange(event) {
        const target = event.target

        event.preventDefault();
        this.setState({
            [target.name]: event.target.value
        })
        console.log('this.state', this.state)
    }




    render() {
        return (
            <div className='wrapper'>
                <GlobalHeader />
                <h1>ARE YOU HUNGRY?
                    <br />
                    LOG IN
                </h1>
                <div className="Login-Container">
                    {/* <UsernameFieldComponent /> */}
                    <div className="field-container">
                        <input type="text" placeholder="Enter Email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>
                    {/* <PasswordFieldComponent /> */}
                    <div className="field-container">
                        <input type="password" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    {/* <GetStartedButtonComponent /> */}
                    <div className="button-containter">
                        {/* <Link to='/'> */}
                        <button className="button" onClick={this.handleLogin}>
                            GET STARTED
                        </button>
                        {/* </Link> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default LogIn;