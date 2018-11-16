import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import './Map.css'

class myMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: 21.3068,
      lng: -157.8607,
      zoom: 13,
    }
  }

  componentDidMount() { }


  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <div class='leaflet-container'>
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
          </Marker>
        </Map>
      </div>

    )
  }
}

export default myMap;