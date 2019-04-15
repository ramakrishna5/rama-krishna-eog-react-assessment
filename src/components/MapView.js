import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


class MapView extends Component {
  render() {
    return (
      <Map google={this.props.google}
      initialCenter={{
            lat: 28.785534582812414,
            lng: -100.26921183004491
          }}
      style={{width: '90%', height: '90%', position: 'relative'}}
      zoom={5}>
      <Marker
        position={{lat: this.props.location.latitude, lng: this.props.location.longitude}} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyC-dgYz8os1qiLF4MXh7sMQlSaXGmGYMEc')
})(MapView);
