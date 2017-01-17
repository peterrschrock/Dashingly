import React from 'react';
// import ChartElementContainer from './chart/chart_element_container';
// import ChartFormContainer from './chart/chart_form_container';
import ChartTypesContainer from './chart/chart_types_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import ChartFormContainer from './chart/chart_form_container';


const UploadPage = ({ children }) => {

  return <div className="upload-page">
    <NavBarContainer/>
    <ChartFormContainer/>
    <ChartTypesContainer />
    {children}
  </div>;
};

export default UploadPage;
