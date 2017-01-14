import React from 'react';
import UploadFormContainer from './upload/upload_form_container';
import MyDatasetsContainer from './upload/my_datasets_container';
import NavBarContainer from './nav_bar/nav_bar_container';


const UploadPage = ({ children }) => {

  return <div className="upload-page">
    <NavBarContainer/>
    <UploadFormContainer />
    <MyDatasetsContainer />
    {children}
  </div>;
};

export default UploadPage;
