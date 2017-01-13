import React from 'react';
import {hashHistory} from 'react-router';
import {bindAll} from 'lodash';
import Dropzone from 'react-dropzone';


class UploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      user_id: this.props.user_id,
      data: {}
    };
    bindAll(this, 'handleDrop', 'handleManualUpload');
  }

  handleDrop(files){
    // TODO is file array or file?
    const exten = this.getFileExtension(files[0].name);
    if(exten === "csv") {
      // TODO Papa parse
    }
    let reader = new FileReader();
    reader.readAsText(files[0]);
    reader.onload = () => {
      this.setState({data: reader.result});
      console.log(this.state);
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
      <Dropzone ref="dropzone" accept="application/json, text/csv" onDrop={this.handleDrop} multiple={false} maxSize={100000}>
        Drop csv, tsv, or json files here to upload!
      </Dropzone>
      <button type="button" onClick={this.handleManualUpload}>Select File</button>
      <input type="text" value={this.state.title} placeholder="Title Data..." onChange={this.refresh("title")}></input>
      <form onSubmit={this.uploadFile} >
      </form>
    </div>;
  }
}

export default UploadForm;
