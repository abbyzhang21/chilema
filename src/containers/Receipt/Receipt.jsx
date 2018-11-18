import React, { Component } from 'react';
import GlobalHeader from '../../components/GlobalHeaderComponent';
import MyMap from '../Map/Map.jsx';
import './Receipt.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faDirections, faPhone } from '@fortawesome/free-solid-svg-icons';

export const Receipt = () => {
    return (
        <div>
            <GlobalHeader />
            <div className='receipt-wrapper'>
                <div className='receipt-top'>
                    <FontAwesomeIcon icon={faCheckCircle} className='check-icon' />
                    <h1>
                        Thank You !
                    </h1>
                    <h3>
                        your order was successful
                </h3>
                </div>
                <MyMap />
                <div className='receipt-direction'>
                    <FontAwesomeIcon icon={faDirections} className='direction-icon' />
                    <a hrc='#'>Get Direction</a>
                    <FontAwesomeIcon icon={faPhone} className='direction-icon' />
                    (800)-000-0000
                </div>
            </div>
        </div>
    )
}
