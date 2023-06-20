import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import { StateInterface } from "./actions/actionsInterface";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import thunk from "redux-thunk";
import logger from "redux-logger";
export interface RootState {
  productState: StateInterface;
}

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
  persistedReducer,
  applyMiddleware(thunk,logger));

export const persistor = persistStore(store);
