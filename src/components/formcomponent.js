import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lat: 0,
      long: 0,
      latError: false,
      nameError: false,
      longError: false
    };
    this.nameChange = this.nameChange.bind(this);
    this.latChange = this.latChange.bind(this);
    this.longChange = this.longChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {}
  nameChange = event => {
    this.setState({ name: event.target.value });
  };

  latChange = event => {
    this.setState({ lat: event.target.value });
  };

  longChange = event => {
    this.setState({ long: event.target.value });
  };
  validateInput() {
    if (this.state.name.length < 3) this.setState({ nameError: true });
    if (isNaN(this.state.lat)) this.setState({ latError: true });
    if (isNaN(this.state.long)) this.setState({ longError: true });

    if (
      this.state.name.length < 3 ||
      isNaN(this.state.lat) ||
      isNaN(this.state.long)
    )
      return null;
    let obj = {
      position: { lat: this.state.lat, lng: this.state.long },
      name: this.state.name
    };
    this.setState({
      name: "",
      lat: 0,
      long: 0,
      nameError: false,
      latError: false,
      longError: false
    });

    return obj;
  }

  submit() {
    let obj = this.validateInput();

    if (obj) this.props.onSubmitClick(obj);
  }
  render() {
    if (this.props.shouldSubmit) {
      this.props.toggleShouldSubmit();
      this.submit();
    }
    return (
      <div style={style.frame}>
        <TextField
          error={this.state.nameError}
          required
          label="Name"
          onChange={this.nameChange}
          value={this.state.name}
          style={style.textField}
          margin="normal"
        />
        <TextField
          error={this.state.latError}
          required
          label="lat"
          onChange={this.latChange}
          value={this.state.lat}
          style={style.textField}
          margin="normal"
        />
        <TextField
          error={this.state.longError}
          required
          label="long"
          onChange={this.longChange}
          value={this.state.long}
          style={style.textField}
          margin="normal"
        />
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
