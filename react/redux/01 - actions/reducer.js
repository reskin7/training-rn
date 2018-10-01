import actions from './actions';

const initialState = {
  favoriteBook: null,
  readBooks: ['otro libro']
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_FAVORITE_BOOK:
      return {
        ...state,
        favoriteBook: action.payload.favoriteBook
      };
      break;
    default:
      return state;
  }
}

export default reducer;
