import React from "react";
import LanguageContext from "../contexts/LanguageContext";
export default class Button extends React.Component {
  static contextType = LanguageContext; //we can not use any other keyword than contextType
  //tHis is how we hook context object to a class component
  render() {
    console.log(this.context); //English is the output
    const text = this.context === "English" ? "Submit" : "जमा करो ";
    return <button className="ui button primary">{text}</button>;
  }
}

// Button.contextType = LanguageContext; //Alternate syntaxt is you do not want to use static keyword
