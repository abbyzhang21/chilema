import React, { Component } from 'react';

import GlobalHeader from '../../components/GlobalHeaderComponent';
import axios from 'axios';



class EditFood extends Component{
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <GlobalHeader />
            <div> 
                <h1>
                    Edit         
                </h1>
            </div>
            </div>
        )
    }
}

export default EditFood;
