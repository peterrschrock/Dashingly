export const createChart = (chartObj) => {
  return $.ajax({
    method: 'POST',
    url: 'api/charts',
    data: {chart: chartObj}
  });
};

export const updateChart = (chartObj, chartId) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/charts/${chartId}`,
    data: {chart: chartObj}
  });
};

export const getCharts = userId => {
  return $.ajax({
    method: "GET",
    url: `api/users/${userId}/charts`,
  });
};
