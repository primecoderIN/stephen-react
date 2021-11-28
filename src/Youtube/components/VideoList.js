import React from "react";
import VideoItem from "./VideoItem";

export default function VideoList({ videos, onVideoSelect }) {
  return (
    <div className="ui relaxed divided list">
      {videos.map((video, index) => {
        return (
          <VideoItem onVideoSelect={onVideoSelect} key={index} video={video} />
        );
      })}
    </div>
  );
}
