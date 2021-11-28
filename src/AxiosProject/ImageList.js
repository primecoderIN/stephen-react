import React, { Component } from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

export default class ImageList extends Component {
  render() {
    const { images } = this.props;
    return (
      <div className="image-list">
        {images.map((image) => {
          return <ImageCard key={image.id} image={image} />;
        })}
      </div>
    );
  }
}
