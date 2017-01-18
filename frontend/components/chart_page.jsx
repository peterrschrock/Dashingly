import React from 'react';
import ChartElementContainer from './chart/chart_element_container';
// import ChartTypesContainer from './chart/chart_types_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import ChartFormContainer from './chart/chart_form_container';


// <ChartTypesContainer />
const UploadPage = ({ children, location }) => {

  return <div className="chart-page">
    <NavBarContainer/>
    <ChartFormContainer location={location}/>
    <ChartElementContainer/>
    {children}
  </div>;
};

export default UploadPage;
