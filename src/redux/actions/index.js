import dataConvertor from '../../helpers/video-result-helper';

// load current time
export const timeNow = () => {
  const time = new Date().toLocaleString('en-GB').split(',')[1].substring(1);
  return { type: 'CURRENT_TIME', payload: time };
};

// Get request API_URL to retrieve the data back
export const loadAllData = term => {
  return (dispatch, getState, { Api }) => {
    dispatch({ type: 'LOAD_ALL_DATA_PENDING' });
    return Api.youtubeSearch(term)
    .then((data) => {
      dispatch({ type: 'LOAD_ALL_DATA_FULFILLED', payload: data.items });
      return data.items;
    })
    .catch(() => {
      dispatch({ type: 'LOAD_ALL_DATA_REJECTED' });
    });
  }
}
