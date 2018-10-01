import { min, copy, reverseMerge, filterAttribs } from '.';
import store from './store';
import actionsCreators from './actions';

describe('Actions', () => {
  xit('creates action to set your favorite book', () => {
    const favoriteBook = 'The Metamorphosis';
    store.dispatch(actionsCreators.setFavoriteBook(favoriteBook));

    expect(store.getState().favoriteBook).toEqual(favoriteBook);
  });

  xit('updates the store after you read a book', () => {
    store.dispatch(actionsCreators.addReadBook('The Lord of the Rings'));

    expect(store.getState().readBooks).toEqual(['otro libro', 'The Lord of the Rings']);
  });

  xit('handle unknown action', () => {
    const state = store.getState();
    store.dispatch({
      type: 'UNRELATED_ACTION'
    });

    expect(store.getState()).toEqual(state);
  });
});
