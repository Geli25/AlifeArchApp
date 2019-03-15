import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import appManag from './reducers/appManagement';

const rootReducer = combineReducers({
    appManagement:appManag
});

let composeEnhancers = compose;

if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;