import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import expect from "expect";

import actionCreators, { actions } from "./actions";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Action --- Test async actions with mocked store", () => {
  it("Test if GET_FOODS_SUCCESS has been dispatched when fetching foods has been done successfully", () => {
    const expectedActions = [actions.GET_FOODS, actions.GET_FOODS_SUCCESS];

    const store = mockStore({ foods: [] });

    return store.dispatch(actionCreators.getFoods()).then(() => {
      // compare action types only (Forget about Payload)
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    });
  });
});
