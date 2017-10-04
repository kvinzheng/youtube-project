import axios from 'axios';

export const loadAllData = term => {
  return (dispatch, getState, { Api }) => {
    dispatch({ type: 'LOAD_ALL_DATA_PENDING' });
    return Api.axiosData(token)
    .then((data) => {
      dispatch({ type: 'LOAD_ALL_DATA_FULFILLED', payload: data });
      return data;
    })
    .catch(() => {
      dispatch({ type: 'LOAD_ALL_DATA_REJECTED' });
    });
  }
}
