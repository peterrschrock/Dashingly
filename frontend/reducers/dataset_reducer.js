import {RECEIVE_DATASETS, RECEIVE_DATASET, DELETE_DATASET, RECEIVE_ERRORS} from '../actions/datasets_actions';
import {merge} from 'lodash/merge';

const _noData = {
  datasets: {},
  errors: []
  // TODO ordering of datasets?
};

const DatasetReducer = (state = _noData, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DATASETS:
      return merge({}, _noData, action.datasets);
    case RECEIVE_DATASET:
      return merge({}, state, {datasets: {[action.dataset.id]: action.dataset}, errors: []});
    case RECEIVE_ERRORS:
      return merge({}, state, {errors: action.errors});
    case DELETE_DATASET:
      return {datasets: state.filter(dataset => dataset.id !== action.datasetId), errors: [] };
    default:
      return state;
  }
};



export default DatasetReducer;
