import React, { Component } from "react";
import axios from "axios";
import Searchbar from "./Searchbar";
import ImageList from "./ImageList";

import axiosFun from "./unsplash";

export default class App extends Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
      headers: {
        Authorization: "Client-ID G9R-1ehNsAN9sXyOKU620dssUo_VxSAxTT8KRUAr2As",
      },
    });

    //  const response = await axiosFunc.get(
    //    "/search/photos",
    //    {
    //      params: {
    //        query: term,        Do this is you use axios . create
    //      }
    //    }
    //  );
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div>
        <div className="ui container">
          <Searchbar onFormSubmit={this.onSearchSubmit} />
          {`Found : ${this.state.images.length} Images`}
          <ImageList className="image__list" images={this.state.images} />
        </div>
      </div>
    );
  }
}
