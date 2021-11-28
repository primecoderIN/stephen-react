import React from "react";
import "./App.css";
import SeasonDisplay from "./SeasonDisplay";

//We need to get user location and current month
//based on them we can decide if it is winter or summer

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, long: null, errorMsg: "" };
  }

  //  state = { lat: null, long: null, errorMsg: "" };
  //If we are using this for state initialization then we will remove constructor method
  //Because babel creates constructor function for us in behind
  //So this single line is equivalent to what we have wrote in constructor function

  componentDidMount() {
    //Used for initial data loading
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({
          lat: position.coords.latitude,
        }),
      (error) => this.setState({ errorMsg: error.message })
    );
  }

  render() {
    if (!this.state.lat && this.state.errorMsg) {
      return <h1>{this.state.errorMsg}</h1>;
    }

    if (this.state.lat && !this.state.errorMsg) {
      return <SeasonDisplay lat={this.state.lat} />; //passing state as prop
    }
    return <h1>Loading...</h1>;
  }
}

export default App;
