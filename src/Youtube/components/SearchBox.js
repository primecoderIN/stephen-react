import React, { Component } from "react";

export default class SearchBox extends Component {
  state = {
    term: "",
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSearchEvent(this.state.term);
  };
  render() {
    console.log(this.state.term);
    return (
      <div className="ui segment search-bar">
        <form action="" className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search </label>
            <input
              type="text"
              placeholder="Search Youtube"
              className="ui input"
              onChange={(e) => this.setState({ term: e.target.value })}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}
