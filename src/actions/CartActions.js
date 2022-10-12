import { ADD_ITEM, REMOVE_ITEM } from '../actionTypes/actionTypes';

const addItem = (product) => ({
  type: ADD_ITEM,
  product: product,
});

const removeItem = (product) => ({
  type: REMOVE_ITEM,
  product: product,
});

export { addItem, removeItem };
