import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "70%",
  height: "70%"
};

class MapContainer extends Component {
  render() {
    const allMarkers = this.props.markers.map(eachMarker => (
      <Map position={eachMarker.position} name={eachMarker.name} />
    ));

    return (
      <div>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: -1.2884,
            lng: 36.8233
          }}
        >
          {allMarkers}
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyB2lhSCoBMvAbrdDp4viBy9iJLnU5mJ1tk"
})(MapContainer);
