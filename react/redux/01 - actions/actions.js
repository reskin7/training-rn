export const actions = {
  SET_FAVORITE_BOOK: 'SET_FAVORITE_BOOK',
  ADD_READ_BOOK: 'ADD_READ_BOOK'
};

export default (actionsCreators = {
  addReadBook: title => ({
    type: actions.ADD_READ_BOOK,
    payload: title
  })
});
