import React from "react";
import videojs from "video.js";

export default class VideoPlayer extends React.Component {
  componentDidMount() {
    // instantiate Video.js
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log("onPlayerReady", this);
    });

    // setTimeout(() => {
    //   this.player.muted(false).play();
    // }, 2000);
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    return (
      <div data-vjs-player>
        <video
          ref={node => (this.videoNode = node)}
          autoPlay={true}
          preload="auto"
          muted={true}
          loop={true}
          className="video-js"
          style={{ width: "1024px", height: "auto" }}
        />
      </div>
    );
  }
}
