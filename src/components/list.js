import React, { Component } from "react";

export default class List extends Component {
  render() {
    let list = this.props.markers.map(eachMarker => (
      <li>
        <text>{eachMarker.name}:</text> <br />
        <text>lat: {eachMarker.position.lat}</text> <br />
        <text>lng: {eachMarker.position.lng}</text> <br />
      </li>
    ));

    return <ul>{list}</ul>;
  }
}
