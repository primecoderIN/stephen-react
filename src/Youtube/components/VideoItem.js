import React from "react";
import "./VideoItem.css";

export default function VideoItem({ video, onVideoSelect }) {
  return (
    <div className="item video-item" onClick={() => onVideoSelect(video)}>
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt=""
      />
      <div className="content">
        <h3 className="header">{video.snippet.title}</h3>
      </div>
    </div>
  );
}
