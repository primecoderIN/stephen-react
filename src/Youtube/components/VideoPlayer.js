import React from "react";

export default function VideoPlayer({ video }) {
  if (!video) {
    return <h1>Loading ...</h1>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} title="Video Player"></iframe>
      </div>
      <div className="ui segment">
        <h4> {video.snippet.title} </h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
}
