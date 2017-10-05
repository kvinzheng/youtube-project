const search = (state = { picture: null }, action) => {
  switch (action.type) {
    case 'SEARCH':
      return { ...state, picture: action.payload };
    default:
      return state;
  }
};

export default search;
