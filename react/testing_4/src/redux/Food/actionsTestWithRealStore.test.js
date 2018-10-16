import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import FoodList from "../../app/screens/Home/components/FoodList";

import actionCreators from "./actions";
import reducer from "./reducer";

configure({ adapter: new Adapter() });

describe("Test - Store + reducer integration testing with real store", async () => {
  let store, wrapper;

  beforeEach(() => {
    store = createStore(reducer, compose(applyMiddleware(thunk)));
    wrapper = mount(
      <Provider store={store}>
        <FoodList />
      </Provider>
    );
  });

  afterEach(() => {
    //This is necessary to wait until your request has finished.
    //Otherwise your test will try to finish without waiting for the request to finish.
    wrapper.unmount();
  });

  it("Check if loading is true when retrieving info from the api", () => {
    expect(store.getState().foodsLoading).toBe(true);
  });

  it("Check if loading is false after retrieving info from the api", () => {
    return store.dispatch(actionCreators.getFoods()).then(() => {
      expect(store.getState().foodsLoading).toBe(false);
    });
  });

  it("Check that our api is working fine validating that returns some object", () => {
    return store.dispatch(actionCreators.getFoods()).then(() => {
      const response = store.getState().foods;
      expect(response).toBeTruthy();
      expect(typeof response).toBe("object");
    });
  });
});
