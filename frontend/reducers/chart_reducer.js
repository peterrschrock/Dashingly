import {REMOVE_CHART, RECEIVE_CHART, RECEIVE_CHARTS} from '../actions/chart_actions';
import {merge} from 'lodash';

const _noCharts = {
  errors: [],
  charts: []
  // TODO make charts an object
};

const ChartReducer = (state = _noCharts, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHARTS:
      return merge({}, state, {charts: action.charts});
    case RECEIVE_CHART:
      let newChartsArr = JSON.parse(JSON.stringify(state.charts));
      newChartsArr.push(action.chart);
      return merge([], state, {charts: newChartsArr});
    case REMOVE_CHART:
      let newChartsArray = JSON.parse(JSON.stringify(state.charts));
      let newChartsAfterDel = newChartsArray.filter(chart => chart.id !== action.chartId);
      return merge({}, state, {charts: newChartsAfterDel});
    default:
      return state;
  }
};



export default ChartReducer;
