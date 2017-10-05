const selectedVideo = (state = { video:null }, action) => {
  switch (action.type) {
    case 'SELECTED_VIDEO':
      return { ...state, video: action.payload };
    default:
      return state;
  }
};

export default selectedVideo;
