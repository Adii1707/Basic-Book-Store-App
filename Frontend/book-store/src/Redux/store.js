import { applyMiddleware, compose, legacy_createStore, combineReducers } from "redux";
import { reducer } from "./reducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({reducer});

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);