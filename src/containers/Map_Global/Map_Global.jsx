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

const { BaseLayer, Overlay } = LayersControl


class Map_Global extends Component {
  constructor(props) {
    super(props)
    this.state =
      []
    // {
    //   lat: "21.3068",
    //   lng: "-157.8607",
    //   zoom: 13,
    // }
  }

  componentDidMount() {
    axios
      .get('/local')
      .then(local => {
        // console.log(food.data)
        local.data.map((item) => {
          let location = [
            item.local_lat,
            item.local_long
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
  }


  render() {
    const position = ["21.3068", "-157.8607"]
    const geoArr = this.state;
    return (
      <div class='leaflet-container'>
        <Map center={position} zoom={13}>
          <TileLayer
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            {geoArr.map((geoPoints) => {
              return <Marker position={geoPoints} />
            })}
          </Marker>
          {/* <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup> */}
        </Map>
      </div>

    )
  }
}

Map_Global.defaultProps = {
  position: ["21.3068", "-157.8607"]
}

export default Map_Global;