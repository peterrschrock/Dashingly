import React from 'react';
import {hashHistory} from 'react-router';
import bindAll from 'lodash';
import Dropzone from 'react-dropzone';


class UploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      user_id: this.props.user_id,

    }
  }

  handleUpload(e){
    e.preventDefault();
    this.props
  }

  render() {
    return <div className="upload-container">
      <form onSubmit={this.handleUpload}>
        <input type="file"></input>
        <input type="submit" value="Upload File"></input>
      </form>
    </div>
  }
}
