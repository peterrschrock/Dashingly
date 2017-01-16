import {RECEIVE_DATASETS, RECEIVE_DATASET, DELETE_DATASET, RECEIVE_DATA_ERRORS, CHANGE_VIEW} from '../actions/datasets_actions';
import {omit, merge} from 'lodash';

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
    case RECEIVE_DATA_ERRORS:
      return merge({}, state, {errors: action.errors});
    case DELETE_DATASET:
      const newDatasets = omit(state.datasets, action.datasetId);
      return merge({}, _noData, {datasets: newDatasets, errors: []});
    default:
      return state;
  }
};



export default DatasetReducer;
