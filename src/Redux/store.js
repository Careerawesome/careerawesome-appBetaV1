import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import {
    createStore,
    combineReducers,
    applyMiddleware,
} from 'redux';

import thunk from "redux-thunk";
import userStates from "../Authentication/State/userReducer";
// import { createWrapper } from "next-redux-wrapper";

const initialState = {};
const middleware = [thunk];

const reducers = combineReducers({
    userStates
});

const initStore = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default initStore
