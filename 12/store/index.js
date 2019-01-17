import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';

import RankReducer from "./reducers/rank";

const reducers=combineReducers({
    RankReducer
})

export const store =createStore(reducers,applyMiddleware(thunk))