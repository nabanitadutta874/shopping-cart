import { createStore, combineReducers } from 'redux';
import { cartReducers } from './reducers/cartReducers';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducers);
const store = createStore(persistedReducer);
export { store };
