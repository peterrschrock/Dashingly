export const createDataset = (datasetEl) => {
  // console.log(datasetEl);
  return $.ajax({
    method: "POST",
    url: `api/datasets`,
    data: JSON.stringify({datasets: datasetEl}),
    contentType: "application/json; charset=utf-8",
    dataType: "json"
  });
};

export const deleteDataset = (datasetId) => {
  return $.ajax({
    method: "DELETE",
    url: `api/datasets/${datasetId}`,
  });
};

export const getDatasets = userId => (
  $.ajax({
    method: "GET",
    url: `api/users/${userId}/datasets`,
  })
);

export const getDataset = (datasetId) => (
  $.ajax({
    method: "GET",
    url: `api/datasets/${datasetId}`,
  })
);
