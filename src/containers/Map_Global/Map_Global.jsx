import React, { Component } from 'react'
import {
  Circle,
  FeatureGroup,
  LayerGroup,
  LayersControl,
  Map,
  Marker,
  Popup,
  Rectangle,
  TileLayer
} from 'react-leaflet'

import './Map_Global.css'

// axios call to database
import axios from 'axios';
import { arch } from 'os';

const { BaseLayer, Overlay } = LayersControl


class Map_Global extends Component {
  constructor(props) {
    super(props)
    this.state = []
  }

  componentDidMount() {

    ////////////////////////////////////////////////////
    /// GET ALL LOCATIONS ///
    ////////////////////////////////////////////////////
    axios
      .get('/food')
      .then(food => {
        // console.log(food.data)
        food.data.map((item) => {
          let location = [
            item.fd_lat,
            item.fd_long
          ]
          this.state.push(location)
          // console.log('THIS.STATE: ', this.state)
          this.state.forEach((element) => {
            // console.log("MAP ELEMENT: ", element)
          })
          return 'success'
        })
      })
      .catch(err => {
        console.log('err', err)
      })

    ////////////////////////////////////////////////////
    /// GET CURRENT LOCATION ///
    ////////////////////////////////////////////////////

    if (navigator.geolocation) {
      console.log("GEOLOCATION WORKS")
      navigator.geolocation.getCurrentPosition(displayLocationInfo);
    } else {
      console.log("GEOLOCATION NOT SUPPORTED")
    }

    let obj = {}
    let arr = []

    function displayLocationInfo(position) {
      arr.push(position.coords.latitude)
      arr.push(position.coords.longitude)
      obj.lng = position.coords.longitude;
      obj.lat = position.coords.latitude;
      return arr
    }
    console.log('ARR: ', arr)
    this.state.coords = arr
    console.log(this.state.coords.lng)

  }

  render() {
    const LS_lat = localStorage.getItem('LS_lat')
    const LS_lng = localStorage.getItem('LS_lng')
    const position = [LS_lat, LS_lng];

    const geoArr = this.state;
    return (
      <div class='leaflet-container'>
        <Map center={position} zoom={16}>
          <TileLayer
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png"
          />
          <Marker color='red' position={position}>
            {geoArr.map((geoPoints) => {
              return <Marker position={geoPoints}>
                <Popup>Food Item</Popup>
              </Marker>
            })}
            <Popup>Current Location</Popup>
          </Marker>
        </Map>
      </div>

    )
  }
}

export default Map_Global;