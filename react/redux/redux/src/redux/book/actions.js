import { DATA } from '~constants/data';

export const actions = {
  GET_BOOKS: 'GET_BOOKS',
  ADD_TO_CART: 'ADD_TO_CART',
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  SEARCH_ITEM: 'SEARCH_ITEM'
};

const actionsCreators = {
  getBooks: () => ({
    type: actions.GET_BOOKS,
    payload: DATA
  }),
  addToCart: item => ({
    type: actions.ADD_TO_CART,
    payload: item
  }),
  addItem: itemId => ({
    type: actions.ADD_ITEM,
    payload: itemId
  }),
  removeItem: itemId => ({
    type: actions.REMOVE_ITEM,
    payload: itemId
  }),
  searchBook: value => ({
    type: actions.SEARCH_ITEM,
    payload: value
  })
};

export default actionsCreators;
