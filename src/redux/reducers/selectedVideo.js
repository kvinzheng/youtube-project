const selectedVideo = (state = { video:null }, action) => {
  switch (action.type) {
    case 'SELECTED_VIDEO':
      return { ...state, myData: action.payload };
    default:
      return state;
  }
};

export default selectedVideo;
