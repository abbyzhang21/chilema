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
    this.state = {
      locationArr: []
    }
  }

  componentDidMount() { }

  render() {

    // get the current location of user from localStorage as center of map
    const LS_lat = localStorage.getItem('LS_lat')
    const LS_lng = localStorage.getItem('LS_lng')
    const position = [LS_lat, LS_lng]

    // get the locations of food items as props passed down from Home Component to render on map
    const geoArr = this.props.geoArr

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