import React from 'react';
import {hashHistory} from 'react-router';
import {bindAll} from 'lodash';
import Dropzone from 'react-dropzone';
import Papa from 'papaparse';

import CloudUpload from 'react-icons/lib/fa/cloud-upload';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      user_id: this.props.user_id,
      data: {}
    };
    bindAll(this, 'handleDrop', 'handleManualUpload', 'uploadFile');
  }

  handleDrop(files, header = true){
    const exten = this.getFileExtension(files[0].name);
    let jsonResult;
    let reader = new FileReader();
    reader.readAsText(files[0]);
    reader.onload = () => {
      if(exten === "csv" || exten === "txt") {
        jsonResult = Papa.parse(reader.result, {dynamicTyping: true, header: header, skipEmptyLines: true}).data;
      } else {
        jsonResult = JSON.parse(reader.result);
      }
      this.setState({data: jsonResult});
    };
  }


  uploadFile(e) {
    e.preventDefault();
    this.props.upload(this.state);
  }


  getFileExtension(filename) {
    return filename.split(".").pop();
  }


  handleManualUpload() {
    this.refs.dropzone.open();
  }

  refresh(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return <div className="upload-container">
      <Dropzone className="dropzone" activeClassName="active-dz" ref="dropzone" accept="application/json, text/csv, text/plain" onDrop={this.handleDrop} multiple={false} maxSize={100000}>
        <h5 className="dropzone-instructions">Drop csv, txt, or json data files here to upload!</h5>
        <h5 className="dropzone-instructions">Or click to open a file.</h5>
        <h5 className="dropzone-instructions"><CloudUpload id="cloud-nav-icon"></CloudUpload></h5>
      </Dropzone>

      <section id="upload-metadata">
        <form onSubmit={this.uploadFile}>
          <input id="title-input-field" type="text" value={this.state.title} placeholder="Title Data..." onChange={this.refresh("title")}></input>
          <input id="upload-submit-button" type="submit" value="Upload"></input>
        </form>
      </section>
    </div>;
  }
}

export default UploadForm;
