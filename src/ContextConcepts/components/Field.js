import React from "react";
import LanguageContext from "../contexts/LanguageContext";
export default class Field extends React.Component {
  static contextType = LanguageContext;
  render() {
    const text = this.context === "English" ? "Name" : "नाम ";
    return (
      <div className="ui field">
        <label>{text} : </label>
        <input type="text" className="ui input" />
      </div>
    );
  }
}
