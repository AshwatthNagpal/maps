import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lat: 0,
      long: 0
    };
    this.nameChange = this.nameChange.bind(this);
    this.latChange = this.latChange.bind(this);
    this.longChange = this.longChange.bind(this);
    this.submit = this.submit.bind(this);
  }
  nameChange = event => {
    this.setState({ name: event.target.value });
  };

  latChange = event => {
    this.setState({ lat: parseFloat(event.target.value) });
  };

  longChange = event => {
    this.setState({ long: parseFloat(event.target.value) });
  };

  validateInput() {
    if (
      this.state.name.length < 3 ||
      this.state.lat % 1 == 0 ||
      this.state.long % 1 == 0
    )
      return null;

    return {
      position: { lat: this.state.lat, lng: this.state.long },
      name: this.state.name
    };
  }

  submit() {
    let obj = this.validateInput();

    if (obj) this.props.onSubmitClick(obj);
    else alert("error");
  }
  render() {
    return (
      <div style={style.frame}>
        <TextField
          required
          label="Name"
          onChange={this.nameChange}
          defaultValue={this.state.name}
          style={style.textField}
          margin="normal"
        />
        <TextField
          required
          label="lat"
          onChange={this.latChange}
          defaultValue={this.state.lat}
          style={style.textField}
          margin="normal"
        />
        <TextField
          required
          label="long"
          onChange={this.longChange}
          defaultValue={this.state.long}
          style={style.textField}
          margin="normal"
        />
        <Button onClick={this.submit}>Submit</Button>
      </div>
    );
  }
}

const style = {
  textField: {
    marginLeft: "10px",
    marginRight: "10px",
    width: 200,
    height: 100,
    flexDirection: "column"
  },
  frame: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "flex-end",
    marginRight: "100px"
  }
};
