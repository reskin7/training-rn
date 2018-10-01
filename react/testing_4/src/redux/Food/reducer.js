import { actions } from './actions';

const initialState = { foods: [], foodsLoading: false };

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_FOODS:
      return { ...state, foods: action.payload, foodsLoading: true };
    case actions.GET_FOODS_SUCCESS:
      return { ...state, foods: action.payload, foodsLoading: false };
    case actions.GET_FOODS_FAILURE:
      return { ...state, foods: action.payload, foodsLoading: false };
    default:
      return state;
  }
}

export default reducer;