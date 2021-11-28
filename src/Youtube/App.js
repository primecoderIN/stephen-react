import React, { Component } from "react";
import "./App.css";
import youtube from "./apis/youtube";
import SearchBox from "./components/SearchBox";
import VideoList from "./components/VideoList";
import VideoPlayer from "./components/VideoPlayer";

export default class App extends Component {
  state = {
    videos: [],
    totalVideos: 0,
    selectedVideo: null,
  };
  onSearchEvent = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
      totalVideos: response.data.pageInfo.totalResults,
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          <SearchBox onSearchEvent={this.onSearchEvent} />
          {this.state.videos.length !== 0 &&
            `Found ${this.state.totalVideos} videos`}
        </div>

        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoPlayer video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
