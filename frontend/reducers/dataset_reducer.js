import {RECEIVE_DATASETS, RECEIVE_DATASET, DELETE_DATASET, RECEIVE_ERRORS, CHANGE_VIEW} from '../actions/datasets_actions';
import {merge} from 'lodash';

const _noData = {
  datasets: {},
  errors: [],
  datasetView: "0"
  // TODO ordering of datasets?
};

const DatasetReducer = (state = _noData, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DATASETS:
      return merge({}, _noData, action.datasets);
    case RECEIVE_DATASET:
      let uploadedObj = {};
      uploadedObj[action.dataset.id] = action.dataset;
      return merge({}, state, {datasets: uploadedObj, errors: [], datasetView: action.dataset.id});
    case CHANGE_VIEW:
      return merge({}, state, {datasetView: action.datasetId});
    case RECEIVE_ERRORS:
      return merge({}, state, {errors: action.errors});
    case DELETE_DATASET:
      return {datasets: state.filter(dataset => dataset.id !== action.datasetId), errors: [] };
    default:
      return state;
  }
};



export default DatasetReducer;
