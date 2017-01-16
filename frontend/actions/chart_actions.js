import * as APIUtil from '../util/api_chart_util.js';
export const RECEIVE_CHART_TYPE = "RECEIVE_CHART_TYPE";

export const changeChartType = (chartType) => ({
  type: RECEIVE_CHART_TYPE,
  chartType
});
