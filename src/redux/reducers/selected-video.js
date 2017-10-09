const selectedVideo = (state = { video: null, status: null }, action) => {
  switch (action.type) {
    case 'SELECTED_VIDEO':
      return { ...state, video: action.payload, status: 'FULFILLED' };
    default:
      return state;
  }
};

export default selectedVideo;
