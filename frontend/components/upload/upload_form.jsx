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
    bindAll(this, 'uploadButtonClass','handleDrop', 'handleManualUpload', 'uploadFile');
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
    this.props.upload(this.state).then(this.setState({
      title: "",
      user_id: this.props.user_id,
      data: {}
      }
    ));
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

  uploadButtonClass(){
    if(this.state.title.length > 0 && Object.keys(this.state.data).length > 0) {
      return <input className="green-upload" id="upload-submit-button" type="submit" value="Upload"></input>;
    } else {
      return <input className="greyed-upload" id="upload-submit-button" type="submit" value="Upload"></input>;
    }
  }

  render() {
    return <div className="upload-container">
      <Dropzone className="dropzone" activeClassName="active-dz" ref="dropzone" accept="application/json, text/csv, text/plain, text/tab-separated-values" onDrop={this.handleDrop} multiple={false} maxSize={10000000}>
        <h5 className="dropzone-instructions">Drop csv, txt, or json data files here to upload!</h5>
        <h5 className="dropzone-instructions">Or click to open a file.</h5>
        <h5 className="dropzone-instructions"><CloudUpload id="cloud-nav-icon"></CloudUpload></h5>
      </Dropzone>

      <section id="upload-metadata">
        <form id="upload-metadata-form" onSubmit={this.uploadFile}>
          <input id="title-input-field" type="text" value={this.state.title} placeholder="Title Data... (*Required)" onChange={this.refresh("title")}></input>
          {this.uploadButtonClass()}
        </form>
      </section>
    </div>;
  }
}

export default UploadForm;
