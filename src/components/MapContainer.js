import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "70%",
  height: "60%"
};

class MapContainer extends Component {
  render() {
    const allMarkers = this.props.markers.map(eachMarker => (
      <Marker position={eachMarker.position} name={eachMarker.name} />
    ));

    return (
      <div>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: 28.7041,
            lng: 77.1025
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
