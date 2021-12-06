import React, { Component } from "react";
import UserCreate from "./components/UserCreate";
export default class App extends Component {
  state = {
    language: "English",
  };

  onLanguageChange = (language) => {
    this.setState({ language });
  };
  render() {
    return (
      <div className="ui container">
        <div>
          Select a language
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("English")}
          />
          <i
            className="flag in"
            onClick={() => this.onLanguageChange("Hindi")}
          />
        </div>
        <UserCreate />
      </div>
    );
  }
}
