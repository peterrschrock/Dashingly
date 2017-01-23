export const getShares = (userId, chartId) => {
  return $.ajax({
    method: "GET",
    url: `api/shares`,
    data: {userId: userId, chartId: chartId}
  });
};


export const deleteShare = (userId, chartId) => {
  return $.ajax({
    method: "DELETE",
    url: `api/shares/1`,
    data: {userId: userId, chartId: chartId}
  });
};


export const createShare = (shareObj) => {
  return $.ajax({
    method: 'POST',
    url: 'api/shares',
    data: {share: shareObj}
  });
};

export const getOtherUsers = userId => {
  return $.ajax({
    method: 'GET',
    url: 'api/users',
    data: {userId: userId}
  });
};
