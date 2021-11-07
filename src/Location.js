import React, { Component } from "react";
import { render } from "react-dom";

class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {position: ''};
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
      });
    }
  }

  render() {
    return (
      <div>
        <h4>Using geolocation JavaScript API in React</h4>
      </div>
    );
  }
}

export default Location;

