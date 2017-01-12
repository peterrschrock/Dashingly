export const createDataset = (dataset) => (
  $.ajax({
    method: "POST",
    url: "api/datasets",
    data: {dataset: {user_id: dataset.user_id, title: dataset.title, data: dataset.data}}
  })
);

export const deleteDataset = datasetId => (
  $.ajax({
    method: "DELETE",
    url: "api/datasets/datasetId",
  })
);

export const getDatasets = userId => (
  $.ajax({
    method: "GET",
    url: "api/users/userId/datasets",
  })
);

export const getDataset = (userId, datasetId) => (
  $.ajax({
    method: "GET",
    url: "api/users/userId/datasets/datasetId",
  })
);
