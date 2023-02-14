import {composeWithDevTools} from 'redux-devtools-extension';
import {combineReducers, applyMiddleware} from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import alertReducer from './reducers/alertReducer';
import friendsReducer from './reducers/friendsReducer';

const rootReducer = combineReducers({
    auth:authReducer,
    alert:alertReducer,
    friends:friendsReducer
});

const store = configureStore({reducer:rootReducer},
    composeWithDevTools(applyMiddleware(thunk)));

export default store;