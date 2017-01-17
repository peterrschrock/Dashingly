export const createChart = (chartObj) => {
  return $.ajax({
    method: 'POST',
    url: 'api/charts',
    data: {chart: chartObj}
  });
};

export const updateChart = (chartObj) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/charts/${chartObj.id}`,
    data: {chart: chartObj}
  });
};
