// import React from "react";
// import "./App.css";

//We need to get user location and current month
//based on them we can decide if it is winter or summer

class App extends React.Component {
  constructor(props) {
    super(props); //This is to get access to properties and methods of class we are extending
    //Super is calling constructor method of React component Super will be on top
    this.state = { lat: null, long: null, errorMsg: "" };
    //Null here means we do not know what currrently lattitude and longitude is.
    //we will set it as we get updates
    //This is the only time when we directly assigned properties to state
    //Baki sab jagah setState use kr k hi update hoga

    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({
          //setState is coming from React.Component
          lat: position.coords.latitude,
          long: position.coords.longitude,
        }), //This is first callback which is success callback
      (error) => this.setState({ errorMsg: error.message }) //Error callback will run if we deny permisson or if
      //there is any error in gettin position
      //We do not update everything in state while updating a property. we do not need to use
      //spread operator here. Updating one property does not change or remove other properties

      //Each time we update state react is going to re-render the content
    );
  }

  //There must be a render method that produces JSX
  render() {
    // window.navigator.geolocation.getCurrentPosition(
    //   (position) => console.log(position),
    //   (error) => console.log(error)
    // );

    return (
      <>
        <h1>Lattitude : {this.state.lat} </h1>
        <h1>Longitude : {this.state.long} </h1>
        <h1>
          {!this.state.lat && !this.state.long && !this.state.errorMsg
            ? "Fetching Location..."
            : !this.state.lat || !this.state.long
            ? this.state.errorMsg
            : "Location Fetched"}
        </h1>
      </>
    );
  }
}

// export default App;
