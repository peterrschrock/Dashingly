import {RECEIVE_CHART_TYPE} from '../actions/chart_actions';
import {merge} from 'lodash';

const _noCharts = {
  charts: {},
  errors: [],
  chartViewed: "0"
};

const ChartReducer = (state = _noCharts, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHART_TYPE:
      let updatedChart = {};
      updatedChart[state.chartViewed] = merge({}, state.charts[state.chartViewed], {type: action.chartType});
      const updatedCharts = merge({}, state.charts, updatedChart);
      return merge({}, state, {charts: updatedCharts});

    default:
      return state;
  }
};



export default ChartReducer;
