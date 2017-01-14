import React from 'react';
import {hashHistory} from 'react-router';
import {bindAll} from 'lodash';
import Dropzone from 'react-dropzone';
import Papa from 'papaparse';


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
      <section id="uploaded-data">
        <Dropzone id="dropzone" ref="dropzone" accept="application/json, text/csv, text/plain" onDrop={this.handleDrop} multiple={false} maxSize={100000}>
          Drop csv, txt, or json data files here to upload!
        </Dropzone>
        <button type="button" onClick={this.handleManualUpload}>Or Select File</button>
      </section>

      <section id="upload-metadata">
        <input type="text" value={this.state.title} placeholder="Title Data..." onChange={this.refresh("title")}></input>
        <form onSubmit={this.uploadFile}>
          <input type="submit" value="Upload"></input>
        </form>
      </section>
    </div>;
  }
}

export default UploadForm;
