import * as APIUtil from '../util/api_chart_util.js';
export const RECEIVE_CHART_TYPE = "RECEIVE_CHART_TYPE";
export const RECEIVE_CHART_TITLE = "RECEIVE_CHART_TITLE";
export const RECEIVE_X_AXIS_TITLE = "RECEIVE_X_AXIS_TITLE";
export const RECEIVE_Y_AXIS_TITLE = "RECEIVE_Y_AXIS_TITLE";
export const RECEIVE_DATA_ID = "RECEIVE_DATA_ID";
export const RECEIVE_X_DATA = "RECEIVE_X_DATA";
export const RECEIVE_Y_DATA = "RECEIVE_Y_DATA";

export const receiveChartType = chartType => ({
  type: RECEIVE_CHART_TYPE,
  chartType
});

export const receiveChartTitle = title => ({
  type: RECEIVE_CHART_TITLE,
  title
});

export const receiveXAxis = x_axis => ({
  type: RECEIVE_X_AXIS_TITLE,
  x_axis
});

export const receiveYAxis = y_axis => ({
  type: RECEIVE_Y_AXIS_TITLE,
  y_axis
});

export const receiveDataId = data_id => ({
  type: RECEIVE_DATA_ID,
  data_id
});

export const receiveXData = x_data => ({
  type: RECEIVE_X_DATA,
  x_data
});

export const receiveYData = y_data => ({
  type: RECEIVE_Y_DATA,
  y_data
});
