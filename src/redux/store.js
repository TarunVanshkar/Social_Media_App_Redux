import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import selectedPostReducer from './reducers/selectedPostReducer';
import postReducer from './reducers/postReducer';

const rootReducer = combineReducers({
    posts : postReducer,
    selectedPost : selectedPostReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;