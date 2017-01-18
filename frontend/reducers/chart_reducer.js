import {CHANGE_VIEW_CHART, RECEIVE_CHART, RECEIVE_CHARTS, RECEIVE_USER_ID, RECEIVE_CHART_TYPE, RECEIVE_CHART_TITLE, RECEIVE_X_AXIS_TITLE, RECEIVE_Y_AXIS_TITLE, RECEIVE_DATA_ID, RECEIVE_X_DATA, RECEIVE_Y_DATA} from '../actions/chart_actions';
import {merge} from 'lodash';

const _noCharts = {
  errors: [],
  chartViewed: "0",
  charts: [],
  chartNewState: {user_id: "", title: "Title", x_name: "X Axis Name", y_name: "Y Axis Name", chartType: "", dataset_id:"", x_data: "", y_data: ""}
};

const ChartReducer = (state = _noCharts, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHART_TYPE:
      let newTypeChart = merge({}, state.chartNewState, {chartType: action.chartType});
      return merge({}, state, {chartNewState: newTypeChart});
    case RECEIVE_CHART_TITLE:
      let newTitleChart = merge({}, state.chartNewState, {title: action.title});
      return merge({}, state, {chartNewState: newTitleChart});
    case RECEIVE_X_AXIS_TITLE:
      let newXAxisChart = merge({}, state.chartNewState, {x_name: action.x_axis});
      return merge({}, state, {chartNewState: newXAxisChart});
    case RECEIVE_Y_AXIS_TITLE:
      let newYAxisChart = merge({}, state.chartNewState, {y_name: action.y_axis});
      return merge({}, state, {chartNewState: newYAxisChart});
    case RECEIVE_DATA_ID:
      let newDataId = merge({}, state.chartNewState, {dataset_id: action.data_id});
      return merge({}, state, {chartNewState: newDataId});
    case RECEIVE_X_DATA:
      let newXData = merge({}, state.chartNewState, {x_data: action.x_data});
      return merge({}, state, {chartNewState: newXData});
    case RECEIVE_Y_DATA:
      let newYData = merge({}, state.chartNewState, {y_data: action.y_data});
      return merge({}, state, {chartNewState: newYData});
    case RECEIVE_USER_ID:
      let newUserIdData = merge({}, state.chartNewState, {user_id: action.userId});
      return merge({}, state, {chartNewState: newUserIdData});
    case RECEIVE_CHARTS:
      return merge({}, state, action.charts);
    case RECEIVE_CHART:
      let newChart = {};
      newChart[action.chart.id] = action.chart;
      let newChartsArr = merge({}, state.charts, newChart);
      return merge({}, state, {charts: newChartsArr});
    case CHANGE_VIEW_CHART:
      return merge({}, state, {chartViewed: action.chartId});

    default:
      return state;
  }
};



export default ChartReducer;
