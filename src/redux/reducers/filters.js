const initialState = {
  category: 0,
  sortBy: 'popular',
}

const filters = (state = initialState, action) => {
  if (action.type === 'SET_SORT_BY') {
    console.log('done1')
    return {
      ...state,
      sortBy: action.payload,
    };
  }
  return state;
}

export default filters;