import { createStore, applyMiddleware, compose } from "redux";
import { createPromise } from "redux-promise-middleware";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

import { composeWithDevTools } from 'redux-devtools-extension';



const initialState = {};
const middleware = [createPromise(), thunk];
const composeWEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
const rootStore = createStore(rootReducer, composeWEnhancers(applyMiddleware(...middleware)));

export default rootStore;
