import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
// you can add 'Popup' into reac-leaflet library later
import './Map.css'


// axios call to database
import axios from 'axios';


class MyMap extends Component {
  constructor(props) {
    super(props)
    this.state = []
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
          return 'success'
        })
      })
      .catch(err => {
        console.log('err', err)
      })
  }


  render() {
    // const position = ["21.3068", "-157.8607"]
    // const geoArr = this.state;
    // console.log('THIS.PROPS', this.props)
    // console.log([this.props.lat, this.props.lng])
    let coords = []

    if (!this.props.lat) {
      coords = ["21.3068", "-157.8607"]
    } else {
      coords = [this.props.lat, this.props.lng]
    }

    console.log(coords)

    return (
      <div class='leaflet-container'>
        <Map center={coords} zoom={17}>
          <TileLayer
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png"
          />
          <Marker position={coords}>
            {/* {geoArr.map((geoPoints) => {
              return <Marker position={geoPoints} >
                <Popup>WORLD</Popup>
              </Marker>
            })} */}
            {/* <Popup>
              Food Detail
          </Popup> */}
          </Marker>
        </Map>
      </div>

    )
  }
}

export default MyMap;