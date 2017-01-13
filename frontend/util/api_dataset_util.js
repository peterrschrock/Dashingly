export const createDataset = (datasetEl) => {
  console.log(datasetEl);
  return $.ajax({
    method: "POST",
    url: `api/users/${datasetEl.user_id}/datasets`,
    data: JSON.stringify({datasets: datasetEl}),
    contentType: "application/json; charset=utf-8",
    dataType: "json"
  });
};

export const deleteDataset = (userId,datasetId) => (
  $.ajax({
    method: "DELETE",
    url: `api/users/${userId}/datasets/datasetId`,
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
