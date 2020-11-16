import React, { Component } from "react";
import { Icon, Intent, Button } from "@blueprintjs/core";
import axios from "axios";
import $ from "jquery";
// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";
// Import FilePond styles
// import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
// import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

class AppFilePond extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Web Tech. Stduy",
      // Set initial files, type 'local' means this is a file
      // that has already been uploaded to the server (see docs)
      files: []
    };
  }

  handleInit() {
    console.log("FilePond instance has initialised", this.pond);
  }

  showUploadFiles = () => {
    console.log(this.pond.getFiles());
  };

  printLoadFile = () => {
    this.state.files.map(file => {
      console.log("id", file.id);
      console.log("filename", file.filename);
      console.log("fileType", file.fileType);
      console.log("fileExtension", file.fileExtension);
      console.log("serverId", file.serverId);
    });
  };

  render() {
    return (
      <div className="root-note">
        <div className="tech-name"> {this.state.name}</div>
        <div className="App">
          <FilePond
            ref={ref => (this.pond = ref)}
            files={this.state.files}
            allowMultiple={true}
            data-max-files="10"
            server={{
              url: "/fp",
              process: "/process/",
              revert: "/revert/",
              fetch: "/fetch/?target=",
              load: "/load/"
            }}
            oninit={() => this.handleInit()}
            //onremovefile = {(error, file) => { console.log('onremovefile', file.serverId) }}
            onprocessfile={(error, file) => {
              let files = this.state.files;
              console.log("fileItem", file.serverId)
              // files.push(file)
              // this.setState({
              //           files: files
              //       });
            }}
            onprocessfiles={() => {
              console.log("onprocessfiles");
              // Set currently active file objects to this.state
              // fileItems.map(fileItem => {
              //   console.log(fileItem);
              //   console.log("filename",fileItem.filename);
              //   console.log("fileType",fileItem.fileType);
              //   console.log("fileExtension",fileItem.fileExtension);
              //   console.log("id",fileItem.id);
              //   console.log("serverId",fileItem.serverId);
              // });

              // fileItems.map(fileItem => console.log("fileItem", fileItem.serverId));

              this.state.files.map(file =>
                console.log("fileItem", file.serverId)
              );
            }}
            onupdatefiles={fileItems => {
              // Set current file objects to this.state
              this.setState({
                files: fileItems.map(fileItem => fileItem)
              });
            }}
          ></FilePond>
        </div>

        <Button text="save" onClick={this.printLoadFile} />
      </div>
    );
  }
}

export default AppFilePond;
