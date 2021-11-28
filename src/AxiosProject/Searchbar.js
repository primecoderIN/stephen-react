import React, { Component } from "react";

export default class Searchbar extends Component {
  state = {
    term: "",
  };

  //We use this.props to access props passed into the class component
  onFormSubmit = (event) => {
    //this is an arrow function
    //it has no context of its own aand will always refer to SearchBar class
    event.preventDefault();
    this.props.onFormSubmit(this.state.term); //thisOnform submit is not same as in form element
  };

  render() {
    //with e.target.value.toUppercase() we can force users to type in capital
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="ui field">
            <label htmlFor="Image-Search">Image Search</label>
            <input
              type="text"
              onChange={(e) =>
                this.setState({ term: e.target.value.toUpperCase() })
              }
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

//It is not search bar's job to detch data display images to us
//We will write code to fetch and display data in App component

//Setting default input value to show initial data and using methods like toUpperCase etc is possible only in
//controlled inputs.
