import React from 'react';
import UploadFormContainer from './upload/upload_form_container';
import MyDatasetsContainer from './upload/my_datasets_container';

const UploadPage = ({ children }) => {

  return <div className="god-div">
    <UploadFormContainer />
    <MyDatasetsContainer />
    {children}
  </div>;
};

export default UploadPage;
