export const setSearchTerm = search => {
  return {type: 'SEARCH', payload: search};
};

export const selectedVideo = video => {
  return {type: 'SELECTED_VIDEO', payload: video};
};

// Get request API_URL to retrieve the data back
export const loadAllData = term => {
  return (dispatch, getState, {Api}) => {
    dispatch({type: 'LOAD_ALL_DATA_PENDING'});
    return Api.youtubeSearch(term)
    .then((data) => {
      return dispatch({type: 'LOAD_ALL_DATA_FULFILLED', payload: data});
    })
    .catch(() => {
      dispatch({type: 'LOAD_ALL_DATA_REJECTED'});
    });
  };
a};
