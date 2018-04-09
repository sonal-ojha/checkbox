import { createStore,combineReducers} from 'redux';
import {ClearCheckBoxReducer} from './Reducers';

const store=createStore(combineReducers({ClearCheckBoxReducer,}));

export default store;