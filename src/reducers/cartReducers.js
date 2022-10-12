import { ADD_ITEM, REMOVE_ITEM } from '../actionTypes/actionTypes';

const initialState = {
  numOfItems: 0,
  itemList: '',
};

export const cartReducers = (state = initialState, action) => {
  const { type, product } = action;
  switch (type) {
    case ADD_ITEM:
      return {
        numOfItems: state.numOfItems + 1,
        itemList:
          state.itemList.length === 0
            ? product.key
            : state.itemList + ' ' + product.key,
      };
    case REMOVE_ITEM:
      let items = state.itemList.split(' ');
      items = items.filter((item) => item !== product.key);
      const itemList = items.join(' ');
      return {
        numOfItems: state.numOfItems - 1,
        itemList: itemList,
      };

    default:
      return state;
  }
};
