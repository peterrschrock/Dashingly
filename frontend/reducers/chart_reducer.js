import {CHANGE_VIEW_CHART, RECEIVE_CHART, RECEIVE_CHARTS} from '../actions/chart_actions';
import {merge} from 'lodash';

const _noCharts = {
  errors: [],
  charts: []
};

const ChartReducer = (state = _noCharts, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHARTS:
      return merge({}, state, action.charts);
    case RECEIVE_CHART:
      let newChart = {};
      newChart[action.chart.id] = action.chart;
      let newChartsArr = merge({}, state.charts, newChart);
      return merge({}, state, {charts: newChartsArr});
    default:
      return state;
  }
};



export default ChartReducer;
