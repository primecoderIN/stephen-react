import React, { Component } from "react";
import "./ImageCard.css";

export default class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.ImageRef = React.createRef();
  }

  setSpans = () => {
    console.log(this.ImageRef.current.clientHeight);
  };
  componentDidMount() {
    // console.log(this.ImageRef.current.clientHeight);
    //we are trying to see the height before the image has loaded so zero is coming
    //So adding a callback on image loading
    this.ImageRef.current.addEventListener("load", this.setSpans);
  }

  render() {
    const { description, urls } = this.props.image;
    return (
      <div className="card-container">
        <img src={urls.regular} alt={description} ref={this.ImageRef} />
      </div>
    );
  }
}
