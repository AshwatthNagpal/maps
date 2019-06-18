import React, { Component } from "react";
import MapContainer from "./components/MapContainer";
import Form from "./components/formcomponent";
import List from "./components/list";
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
      <div>
        <div style={style.frame}>
          <MapContainer markers={this.state.activeMarkers} />
          <Form onSubmitClick={this.onAddMarker} />
        </div>
        <List markers={this.state.activeMarkers} />
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
