import React, { Component } from "react";
import MapContainer from "./components/MapContainer";
import Form from "./components/formcomponent";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMarkers: []
    };
    this.onAddMarker = this.onAddMarker.bind(this);
  }

  onAddMarker(newMarker) {
    this.setState(prevState => ({
      activeMarkers: [...prevState.activeMarkers, newMarker]
    }));
  }
  render() {
    return (
      <div style={style.frame}>
        <MapContainer markers={this.state.activeMarkers} />
        <Form onSubmitClick={this.onAddMarker} />
      </div>
    );
  }
}

const style = {
  frame: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
};
export default App;
