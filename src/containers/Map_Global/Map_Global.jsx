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
    }
  }

  componentDidMount() { }

  render() {

    // get the current location of user from localStorage as center of map
    const LS_lat = localStorage.getItem('LS_lat')
    const LS_lng = localStorage.getItem('LS_lng')
    const position = [LS_lat, LS_lng]

    let tempRedirect = ""
    let tempName = ""

    // get the locations of food items as props passed down from Home Component to render on map
    const geoArr = this.props.geoArr
    // helper function to parse redirect url
    // this could probably be done in a cleaner way, but was having difficulty passing a fourth index as props from the parent 'Home' component
    geoArr.forEach((element) => {
      let temp = element[2]
      tempRedirect = `/food/detail/${temp[0]}`
      tempName = temp[1]
    })

    return (
      <div class='leaflet-container'>
        <Map center={position} zoom={16}>
          <TileLayer
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            {geoArr.map((geoPoints) => {
              return <Marker position={geoPoints}>
                <Popup>
                  <a href={tempRedirect}>{tempName}</a>
                </Popup>
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