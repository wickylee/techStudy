import React, { Component } from "react";
import { Icon, Intent, Button } from "@blueprintjs/core";
import axios from "axios";
import VideoPlayer from './videoplayer'
// import $ from "jquery";
// import Worker from 'worker-loader!./Worker.js';
import WebWorker from "react-webworker";
// import webmWorker from "webm-wasm/dist/webm-worker";
import tworker from './Worker.js';

// const myWorker = new Worker(webmWorker);

// const TechComponent = () => (
//   <WebWorker worker={myWorker}>
//     {({ data, error, postMessage }) => {
//       if (error) return `Something went wrong: ${error.message}`;
//       if (data)
//         return (
//           <div>
//             <strong>Received some data:</strong>
//             <pre>{JSON.stringify(data, null, 2)}</pre>
//           </div>
//         );
//       return <button onClick={() => postMessage("hello")}>Hello</button>;
//     }}
//   </WebWorker>
// );

// const width = 512;
// const height = 512;
// const framerate = 30;
// const bitrate = 200;
// const canvas = document.createElement("canvas");
//   [canvas.width, canvas.height] = [ width,  height];
//   const ctx = canvas.getContext("2d");

class AppWebm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "python ffmpeg convert to webm",
      log: "log..."
    };
}
    // componentDidMount() {
    //   // instantiate Video.js
    //   this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
    //     console.log('onPlayerReady', this)
    //   });
    // }
  
    // // destroy player on unmount
    // componentWillUnmount() {
    //   if (this.player) {
    //     this.player.dispose()
    //   }
    // }

    // this.width = 512;
    // this.height = 512;
    // this.framerate = 30;
    // this.bitrate = 200;
    // this.canvas = document.createElement("canvas");
    // [canvas.width, canvas.height] = [this.width, this.height];
    // this.ctx = canvas.getContext("2d");
  

  // nextEvent = (target, name) =>{
  //   return new Promise(resolve => {
  //     target.addEventListener(name, resolve, { once: true });
  //   });
  // }

  // componentDidMount = () => {
    // const myWorker  = new Worker("/static/webm/webm-worker.js");
    // myWorker.postMessage(".webm-wasm.wasm");
    // this.nextEvent(myWorker, "message");
    // myWorker.postMessage({ timebaseDen: framerate, width, height, bitrate });
    // const gradient = ctx.createLinearGradient(
    //   (1 / 4) * width,
    //   0,
    //   (3 / 4) * width,
    //   0
    // );
    // gradient.addColorStop(0, "#000");
    // gradient.addColorStop(1, "#fff");
    // const maxFrames = 2 * framerate;
    // for (let i = 0; i < maxFrames; i++) {
    //   ctx.fillStyle = `hsl(${(i * 360) / maxFrames}, 100%, 50%)`;
    //   ctx.fillRect(0, 0, width, height);
    //   ctx.fillStyle = gradient;
    //   ctx.fillRect((1 / 4) * width, (1 / 4) * height, width / 2, height / 2);
    //   const imageData = ctx.getImageData(0, 0, width, height);
    //   myWorker.postMessage(imageData.data.buffer, [imageData.data.buffer]);
    // }
    // myWorker.postMessage(null);
    // const webm = (this.nextEvent(myWorker, "/media/john-wick.webm")).data;
    // const blob = new Blob([webm], { type: "video/webm" });
    // console.log(webm);
    // const url = URL.createObjectURL(blob);
    // const video = document.createElement("video");
    // video.muted = true;
    // video.autoplay = true;
    // video.loop = true;
    // video.controls = true;
    // video.src = url;
    // document.body.append(video);
    // video.play();
  // };

  serverWebmConverting = () => {
    axios.get("/api/tech/1/convert/").then(res => {
      this.setState({ log: res.data });
    });
  };



  render() {
    const videoJsOptions = {
      // autoplay: true,
      // controls: false,
      // preload: 'auto',
      sources: [{
        src: '/media/john-wick.webm',
        type: 'video/webm'
      }]
    }
    return (
      <div className="root-note">
        <div className="tech-name"> {this.state.name}</div>
        <div className="console">{this.state.log}</div>
        {/* <TechComponent /> */}
        <VideoPlayer { ...videoJsOptions } />

        {/* <Button text="Converting" onClick={this.serverWebmConverting} /> */}
      </div>
    );
  }
}

export default AppWebm;
