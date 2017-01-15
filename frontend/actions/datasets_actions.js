import * as APIUtil from '../util/api_dataset_util.js';
export const RECEIVE_DATASETS = "RECEIVE_DATASETS";
export const RECEIVE_DATASET = "RECEIVE_DATASET";
export const DELETE_DATASET = "DELETE_DATASET";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CHANGE_VIEW = "CHANGE_VIEW";

export const changeView = datasetId => ({
  type: CHANGE_VIEW,
  datasetId
});


export const receiveDatasets = (datasets) => {
  // console.log(datasets);
  return {
    type: RECEIVE_DATASETS,
    datasets
  };
};

export const receiveDataset = dataset => ({
  type: RECEIVE_DATASET,
  dataset
});

export const removeDataset = datasetId => ({
  type: DELETE_DATASET,
  datasetId
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const createDataset = dataset => dispatch => (
  APIUtil.createDataset(dataset)
    .then(returnDataset => dispatch(receiveDataset(returnDataset)),
    errors => dispatch(receiveErrors(errors))
  )
);

export const deleteDataset = (userId, datasetId) => dispatch => (
  APIUtil.deleteDataset(userId, datasetId)
    .then(dataset => dispatch(removeDataset(dataset)),
    errors => dispatch(receiveErrors(errors))
  )
);

export const getDataset = (userId, datasetId) => dispatch => (
  APIUtil.getDataset(userId, datasetId)
    .then(dataset => dispatch(receiveDataset(dataset)),
    errors => dispatch(receiveErrors(errors))
  )
);

export const getDatasets = userId => dispatch => (
  APIUtil.getDatasets(userId)
    .then(datasets => dispatch(receiveDatasets(datasets)),
    errors => dispatch(receiveErrors(errors))
  )
);
