import * as APIUtil from '../util/api_chart_util.js';
export const RECEIVE_CHARTS = "RECEIVE_CHARTS";
export const RECEIVE_CHART = "RECEIVE_CHART";
export const CHANGE_VIEW_CHART = "CHANGE_VIEW_CHART";


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
