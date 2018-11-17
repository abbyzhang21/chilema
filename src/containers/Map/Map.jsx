import React, { Component } from 'react'
import { Map, TileLayer, Marker } from 'react-leaflet'
// add popup if needed  ^^
import './Map.css'


// axios call to database
import axios from 'axios';

class myMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      markerArr: [],
      currentLocal: {
        lat: 21.3919243,
        lng: -157.7705164,
      }
    }
  }

  // get all geolocations from database, and store them in state
  componentDidMount() {
    axios
      .get('/local')
      .then(local => {
        local.data.map((item) => {
          let location = [
            item.local_lat,
            item.local_long,
          ]
          this.state.markerArr.push(location)
        })
      })
      .catch(err => {
        console.log('err', err)
      })
  }

  // get current location of user, and set it to state
  geoLocate = () => {

    if (navigator.geolocation) {
      console.log("GEOLOCATION WORKS")
      navigator.geolocation.getCurrentPosition(displayLocationInfo);
    } else {
      console.log("GEOLOCATION NOT SUPPORTED")
    }

    let obj = {}

    function displayLocationInfo(position) {
      obj.lng = position.coords.longitude;
      obj.lat = position.coords.latitude;
      return obj
    }

    // this.setState({
    //   currentLocal: {
    //     lat: obj.lat,
    //     lng: obj.lng
    //   }
    // })

    this.state.currentLocal = obj;

    // this.setState({
    //   ['currentLocal']: this.state.tempLocal
    // })

    console.log("THIS.STATE: ", this.state)

  }


  render() {
    // console.log("RENDER THIS.STATE: ", this.state)
    // console.log(this.state.currentLocal)

    let position = [this.state.currentLocal.lat, this.state.currentLocal.lng]
    const geoArr = this.state.markerArr;
    // console.log(geoArr)
    const currentLocation = this.state.currentLocal

    // console.log("CURRENT LOCATION: ", this.state.currentLocal)
    return (
      <div className='leaflet-container'>
        <div>
          <button onClick={this.geoLocate} >
            Show my location
          </button>
        </div>
        <Map center={position} zoom={13}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* <Marker position={[this.state.currentLocal.lat, this.state.currentLocal.lng]} /> */}
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

export default myMap;