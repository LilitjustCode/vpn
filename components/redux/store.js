import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import justDriveReducer from './reducers/reducers'


const rootReducer = combineReducers({
    justDriveReducer
});
// const rootReducer = combineReducers({justDriveReducer, justDriveReducerOld});

export const store = createStore(rootReducer, applyMiddleware(thunk));