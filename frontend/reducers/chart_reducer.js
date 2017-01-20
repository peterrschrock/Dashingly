import {REMOVE_CHART, RECEIVE_CHART, RECEIVE_CHARTS, UPDATE_CHART} from '../actions/chart_actions';
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
      return {errors: [], charts: action.charts};
    case RECEIVE_CHART:
      let newChartsArr = JSON.parse(JSON.stringify(state.charts));
      newChartsArr.push(action.chart);
      return {charts: newChartsArr, errors: []};
    case REMOVE_CHART:
      let newChartsArray = JSON.parse(JSON.stringify(state.charts));
      let newChartsAfterDel = newChartsArray.filter(chart => chart.id !== action.chartId);
      return {errors: [], charts: newChartsAfterDel};
    case UPDATE_CHART:
      let newChartsArrayUP = JSON.parse(JSON.stringify(state.charts));
      let newChartsAfterDelUP = newChartsArrayUP.filter(chart => chart.id !== action.chart.id);
      newChartsAfterDelUP.push(action.chart);
      return {errors: [], charts: newChartsAfterDelUP};
    default:
      return state;
  }
};



export default ChartReducer;
