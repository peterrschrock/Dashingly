import * as APIUtil from '../util/api_chart_util.js';
export const RECEIVE_CHART_TYPE = "RECEIVE_CHART_TYPE";
export const RECEIVE_CHART_TITLE = "RECEIVE_CHART_TITLE";
export const RECEIVE_X_AXIS_TITLE = "RECEIVE_X_AXIS_TITLE";
export const RECEIVE_Y_AXIS_TITLE = "RECEIVE_Y_AXIS_TITLE";
export const RECEIVE_DATA_ID = "RECEIVE_DATA_ID";
export const RECEIVE_X_DATA = "RECEIVE_X_DATA";
export const RECEIVE_Y_DATA = "RECEIVE_Y_DATA";
export const RECEIVE_USER_ID = "RECEIVE_USER_ID";
export const RECEIVE_CHARTS = "RECEIVE_CHARTS";
export const RECEIVE_CHART = "RECEIVE_CHART";
export const CHANGE_VIEW_CHART = "CHANGE_VIEW_CHART";

export const receiveUserId = userId => ({
  type: RECEIVE_USER_ID,
  userId
});

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

export const receiveChart = chart => ({
  type: RECEIVE_CHART,
  chart
});

export const createChart = chartObj => dispatch => (
  APIUtil.createChart(chartObj)
    .then(chart => dispatch(receiveChart(chart)))
);

export const updateChart = (chartObj, chartId) => dispatch => (
  APIUtil.updateChart(chartObj, chartId)
    .then(chart => dispatch(receiveChart(chart)))
);

export const receiveCharts = charts => {
  return {
    type: RECEIVE_CHARTS,
    charts
  };
};

export const getCharts = userId => dispatch => (
  APIUtil.getCharts(userId)
    .then(charts => dispatch(receiveCharts(charts)))
);

export const changeViewChart = chartId => {
  return {
    type: CHANGE_VIEW_CHART,
    chartId
  };
};
