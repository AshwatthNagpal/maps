import React, { Component } from "react";
import MapContainer from "./components/MapContainer";
import Form from "./components/formcomponent";
import List from "./components/list";
import { Button } from "@material-ui/core";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMarkers: [],
      counter: 1,
      shouldSubmit: false
    };
    this.onAddMarker = this.onAddMarker.bind(this);
    this.add = this.add.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.toggleShouldSubmit = this.toggleShouldSubmit.bind(this);
  }
  toggleShouldSubmit() {
    this.setState({ shouldSubmit: false });
  }
  add() {
    this.setState(prevstate => ({ counter: prevstate.counter + 1 }));
  }
  onAddMarker(newMarker) {
    this.setState(prevState => ({
      activeMarkers: [...prevState.activeMarkers, newMarker]
    }));
  }
  onSubmit() {
    this.setState({ shouldSubmit: true });
  }
  render() {
    let forms = [];
    for (let i = 1; i <= this.state.counter; i++) {
      forms.push(
        <Form
          onSubmitClick={this.onAddMarker}
          shouldSubmit={this.state.shouldSubmit}
          toggleShouldSubmit={this.toggleShouldSubmit}
        />
      );
    }

    return (
      <div>
        <div style={style.frame}>
          <MapContainer markers={this.state.activeMarkers} />
          <div>
            <Button onClick={this.add}>ADD</Button>
            {forms}
            <Button onClick={this.onSubmit}>Submit</Button>
          </div>
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
