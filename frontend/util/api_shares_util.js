export const getShares = (userId, chartId) => {
  return $.ajax({
    method: "GET",
    url: `api/shares`,
    data: {userId: userId, chartId: chartId}
  });
};


export const deleteShare = shareId => {
  return $.ajax({
    method: "DELETE",
    url: `api/shares/${shareId}`
  });
};


export const createShare = (shareObj) => {
  return $.ajax({
    method: 'POST',
    url: 'api/shares',
    data: {share: shareObj}
  });
};
